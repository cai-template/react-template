import React,{ Component } from 'react'
import style from './index.scss';




export default class Home extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
    }
    render(){
        return <div className={style.container}>
        <div className={style.bottom}></div>
        </div>
    }
}