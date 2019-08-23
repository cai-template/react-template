import * as Types from '../constant/actionType'

const initalState = {
  userinfo: {

  }
}

export default function user(state=initalState, action){

  switch(action.type){
      case Types.FETCH_USERINFO:
      return state;
      case Types.GET_USERINFO:
      return {
          userinfo:{res:action.res}
      }
      default:
      return state
  }

}