export function getMonthEndDay(year: number, month: number): number {
  return 32 - new Date(year, month - 1, 32).getDate();
}

export function getBoundary(type: 'max' | 'min', boundary: Date, value: Date) {
  const year = boundary.getFullYear();
  let month = 1;
  let date = 1;
  let hour = 0;
  let minute = 0;

  if (type === 'max') {
    month = 12;
    date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
    hour = 23;
    minute = 59;
  }

  if (value.getFullYear() === year) {
    month = boundary.getMonth() + 1;
    if (value.getMonth() + 1 === month) {
      date = boundary.getDate();
      if (value.getDate() === date) {
        hour = boundary.getHours();
        if (value.getHours() === hour) {
          minute = boundary.getMinutes();
        }
      }
    }
  }

  return { year, month, date, hour, minute };
}

export function getTrueValue(value: string | undefined): number {
  if (!value) {
    return 0;
  }

  while (Number.isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }

  return parseInt(value, 10);
}
