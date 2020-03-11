import { FIELD_META_PROP, FIELD_DATA_PROP } from './constants';
import createDOMForm from 'rc-form/lib/createDOMForm';
import formShape from 'rc-form/lib/propTypes';

export default function createForm(options) {
  return createDOMForm({
    fieldNameProp: 'id',
    ...options,
    fieldMetaProp: FIELD_META_PROP,
    fieldDataProp: FIELD_DATA_PROP,
  });
}

export { formShape }
