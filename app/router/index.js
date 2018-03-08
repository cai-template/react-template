import React,{Component} from 'react'
import { HashRouter as Router, Route, NavLink} from 'react-router-dom';

import Home from '../pages/home'
import Order from '../pages/order'
import Makemoney from '../pages/makemoney'
import User from '../pages/user'
 
import './index.scss'

export default class RouterMap extends Component{
    render(){
        return (<Router className="tab-bar">
            <div className="container">
                <Route path="/" exact component={Home}></Route>
                <Route path="/order" component={Order}></Route>
                <Route path="/makemoney" component={Makemoney}></Route>
                <Route path="/user" component={User}></Route>
                <ul className="footer">
                    <li>
                        <NavLink exact to="/" activeStyle={{ color: '#fa863e' }} activeClassName='active_home' replace>
                        <font>首页</font>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order" activeStyle={{ color: '#fa863e' }} activeClassName='active_order'  replace>
                        <font>抢单</font>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/makemoney" activeStyle={{ color: '#fa863e' }} activeClassName='active_makemoney'  replace>
                        <font>赚钱</font>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user" activeStyle={{ color: '#fa863e' }} activeClassName='active_user' replace>
                        <font>个人中心</font>
                        </NavLink>
                    </li>
                </ul>
            </div>
  </Router>)
    }
}