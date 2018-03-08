import {
   call,
   fork,
   put
} from 'redux-saga/effects'
import { post } from '../common/fetch'

import * as Types from '../constant/actionType'

import {
  takeEvery,
  takeLatest
} from 'redux-saga'
import { GET_USERINFO } from '../constant/actionType';

function* gainUserinfo(){
    const param = {
            source: '14000',
            iclient: '0',
            appVersion: '3.7.0',
            appId: 'f441d69c4fc6dcda049f25d113c0c0cc',
            accessToken: '+NEflO3uj02eOaWPdCVSbDiORgxuKQuyVLKkfCeHMvvhDNjsPWUhXzIgZ04wo/yJqeCYC51DqKqNyIGmhJ1qMKfjZO6+uoT0x03CH9zXLx4HMReQp5AhkIwTMb4TR6xVvOwt+HtkHVo93roctaW3DQsfFY9T82R0G8XiNWRDQ9jL4wsyfJC2Dw=='
    }
   try{
    const res = yield call(post,'/loanweb/lend/getUserInfo.go')
    yield put({type: Types.GET_USERINFO,res:{res}})    
   }catch(err){
    yield put({type: Types.GET_USERINFO,res:{code: '404'}})
   }
  

    
}


export default function* (){
    yield [
        takeLatest(Types.FETCH_USERINFO,gainUserinfo)
    ]
}