import React,{ Component } from 'react'

import { connect } from 'react-redux'

import { gainUserinfo } from '../action/user'


class User extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>user</div>
    }
    componentDidMount(){
        this.props.dispatch(gainUserinfo())
    }
}


export default connect(({user:{userinfo}})=>({
    userinfo
}))(User)