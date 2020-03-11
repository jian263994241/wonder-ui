import { FIELD_META_PROP, FIELD_DATA_PROP } from './constants';
import createDOMForm from 'rc-form/lib/createDOMForm';

export default function createForm(options) {
  return createDOMForm({
    fieldNameProp: 'id',
    fieldMetaProp: FIELD_META_PROP,
    fieldDataProp: FIELD_DATA_PROP,
    ...options
  });
}
