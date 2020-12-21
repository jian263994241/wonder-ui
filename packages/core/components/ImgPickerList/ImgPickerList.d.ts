export interface ImgPickerListProps {
  files?: any[];
  showDashed?: boolean;
  selectable?: boolean;
  onChange?: (f: any[]) => void;
  fileDownLoad?: (i: any) => any;
}

export default function ImgPickerList(props: ImgPickerListProps): JSX.Element;
