import { POST_NOTES } from '../actions/types';
import _ from 'lodash';

export default function(state=[], action) {
  switch (action.type) {
    case POST_NOTES:
      return _.uniq([...state, action.payload.data]);

  }
    return state;
}
