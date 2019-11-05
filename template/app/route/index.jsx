import React,{Component} from 'react'
import { HashRouter as Router, Route, NavLink} from 'react-router-dom';

import Home from '../pages/home/index'
import Order from '../pages/order/index'
import Makemoney from '../pages/makemoney/index'
import User from '../pages/user/index'
 
import style from './index.scss'



export default class RouterMap extends Component{
    render(){
        return (<Router className={style['tab-bar']}>
            <div className={style.container}>
                <Route path="/" exact component={Home}></Route>
                <Route path="/order" component={Order}></Route>
                <Route path="/makemoney" component={Makemoney}></Route>
                <Route path="/user" component={User}></Route>
                <ul className={style.footer}>
                    <li>
                        <NavLink exact to="/" activeStyle={{ color: '#fa863e' }} activeClassName={style.active_home} replace>
                        <font>首页</font>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order" activeStyle={{ color: '#fa863e' }} activeClassName={style.active_order}  replace>
                        <font>抢单</font>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/makemoney" activeStyle={{ color: '#fa863e' }} activeClassName={style.active_makemoney}  replace>
                        <font>赚钱</font>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user" activeStyle={{ color: '#fa863e' }} activeClassName={style.active_user} replace>
                        <font>个人中心</font>
                        </NavLink>
                    </li>
                </ul>
            </div>
  </Router>)
    }
}