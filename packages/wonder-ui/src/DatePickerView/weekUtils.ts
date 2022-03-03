import * as React from 'react';
import dayjs from './dayjs';
import type { WeekPrecision, DatePickerFilter } from './DatePickerViewTypes';
import type { PickerColumn, PickerOption } from '../PickerView/PickerViewTypes';

export function convertStringArrayToDate(
  value: (string | null | undefined)[]
): Date {
  const yearString = value[0] ?? '1900';
  const weekString = value[1] ?? '1';
  const weekdayString = value[2] ?? '1';
  const day = dayjs()
    .year(parseInt(yearString))
    .isoWeek(parseInt(weekString))
    .isoWeekday(parseInt(weekdayString))
    .hour(0)
    .minute(0)
    .second(0);
  return day.toDate();
}

const precisionRankRecord = {
  year: 0,
  week: 1,
  'week-day': 2
};

export function generateDatePickerColumns(
  selected: string[],
  min: Date,
  max: Date,
  precision: WeekPrecision,
  renderLabel: (type: WeekPrecision, data: number) => React.ReactNode,
  filter: DatePickerFilter | undefined
) {
  const ret: PickerColumn[] = [];

  const minYear = min.getFullYear();
  const maxYear = max.getFullYear();

  const rank = precisionRankRecord[precision];

  if (rank >= precisionRankRecord.year) {
    const years: PickerOption[] = [];
    for (let i = minYear; i <= maxYear; i++) {
      const value = i.toString();
      years.push({
        label: renderLabel ? renderLabel('year', i) : value,
        value
      });
    }
    ret.push(years);
  }

  const selectedYear = parseInt(selected[0]);
  const isInMinYear = selectedYear === minYear;
  const isInMaxYear = selectedYear === maxYear;

  const minDay = dayjs(min);
  const maxDay = dayjs(max);
  const minWeek = minDay.isoWeek();
  const maxWeek = maxDay.isoWeek();
  const minWeekday = minDay.isoWeekday();
  const maxWeekday = maxDay.isoWeekday();
  const selectedWeek = parseInt(selected[1]);
  const isInMinWeek = isInMinYear && selectedWeek === minWeek;
  const isInMaxWeek = isInMaxYear && selectedWeek === maxWeek;
  const selectedYearWeeks = dayjs(`${selectedYear}-01-01`).isoWeeksInYear();

  const generateColumn = (
    from: number,
    to: number,
    precision: WeekPrecision
  ) => {
    let column: number[] = [];
    for (let i = from; i <= to; i++) {
      column.push(i);
    }
    const prefix = selected.slice(0, precisionRankRecord[precision]);
    const currentFilter = filter?.[precision];
    if (currentFilter && typeof currentFilter === 'function') {
      column = column.filter((i) =>
        currentFilter(i, {
          get date() {
            const stringArray = [...prefix, i.toString()];
            return convertStringArrayToDate(stringArray);
          }
        })
      );
    }
    return column;
  };

  if (rank >= precisionRankRecord.week) {
    const lower = isInMinYear ? minWeek : 1;
    const upper = isInMaxYear ? maxWeek : selectedYearWeeks;
    const weeks = generateColumn(lower, upper, 'week');
    ret.push(
      weeks.map((v) => {
        return {
          label: renderLabel('week', v),
          value: v.toString()
        };
      })
    );
  }
  if (rank >= precisionRankRecord['week-day']) {
    const lower = isInMinWeek ? minWeekday : 1;
    const upper = isInMaxWeek ? maxWeekday : 7;
    const weeks = generateColumn(lower, upper, 'week-day');
    ret.push(
      weeks.map((v) => {
        return {
          label: renderLabel('week-day', v),
          value: v.toString()
        };
      })
    );
  }

  return ret;
}

export function defaultRenderLabel(type: WeekPrecision, data: number) {
  return data.toString();
}

export function convertDateToStringArray(
  date: Date | undefined | null
): string[] {
  if (!date) return [];
  const day = dayjs(date);
  return [
    day.isoWeekYear().toString(),
    day.isoWeek().toString(),
    day.isoWeekday().toString()
  ];
}
