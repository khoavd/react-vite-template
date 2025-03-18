import { IdValue } from './type';

export function isChecked(checkedIds: IdValue[], idValue: IdValue) {
  return checkedIds.includes(idValue);
}
