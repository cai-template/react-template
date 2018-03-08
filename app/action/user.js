import { createAction } from 'redux-actions'
import * as Types from '../constant/actionType'

export const gainUserinfo = createAction(Types.FETCH_USERINFO)