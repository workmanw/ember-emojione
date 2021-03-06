import {helper} from 'ember-helper';

export function eeoAnd(params/*, hash*/) {
  return params.reduce((result, item) => result && !!item, true);
}

export default helper(eeoAnd);
