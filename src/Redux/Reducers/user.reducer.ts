//===== Redux =====
import { IUserPayload } from '../Actions/Actions';
import { IUserReducerState } from './Reducers';

//===== Constants =====
import { ADD_THEME, ADD_USER } from '../Constants';

const initialState: IUserReducerState = {
  user_id: '',
  name: '',
  theme: false,
  socket: '',
};

const reducer = (
  state = initialState,
  {
    type,
    payload,
  }: { type: string; payload: IUserPayload & { theme: boolean } }
) => {
  switch (type) {
    case ADD_USER:
      return { ...state, ...payload };

    case ADD_THEME:
      return { ...state, theme: payload.theme };
    default:
      return state;
  }
};
export default reducer;
