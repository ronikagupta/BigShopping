
import React, { useEffect, useState } from "react";
import Home from "./Home"
import Collection from "./Collection"
import Login from "./Login";
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Badge, Avatar } from 'antd';

import { Button, Radio } from 'antd';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CartItems from "./CartItems";
import Authnet from "../src/Authnet"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};








// const [sidebar, setSidebar] = useState(true);
const user = localStorage.token;
console.log(user, "...$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")



function App(props) {
  const data = useSelector((state) =>
    state.cardItems
  )
  console.warn("App", data)
  return (
    <div>

      <Router>



        <Menu mode="horizontal" theme='dark' >
          <Menu.Item className="fs-2" style={{ color: "white" }}>
            BIG Shopping
          </Menu.Item>
          <Menu.Item key="mail" style={{ marginLeft: "40%" }} className="fs-5">
            <NavLink className="Nav_link"
              activeClassName="activeRoute"
              activeStyle={{ color: 'white' }} to="/Home" >  Home</NavLink>
          </Menu.Item>

          <SubMenu title={<span>Collection</span>} className="fs-5">
            <MenuItemGroup title="">
              <Menu.Item key="setting:1"><a href="/Collection">Clothing</a></Menu.Item>
              <Menu.Item key="setting:2">Grocery</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="">
              <Menu.Item key="setting:3">Mobiles</Menu.Item>
              <Menu.Item key="setting:4">Appliances</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay" className="fs-5">
            <a href="">Contact Us</a>
          </Menu.Item>
          <Menu.Item key="alipay" className="fs-5">
            <NavLink to="/CartItems"><ShoppingCartOutlinedIcon />
              <Badge count={data.length}>

              </Badge></NavLink>
          </Menu.Item>
          <Menu.Item key="mail" style={{ marginLeft: '' }} className="fs-5">
            <Radio.Button value="default" style={{ backgroundColor: "white" }}>Login</Radio.Button>
          </Menu.Item>
        </Menu >


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Collection" exact component={HomeContainer} />
          <Route path="/CartItems" exact component={CartItems} />
          <Route path="/Authnet" exact component={Authnet} />
        </Switch>


        {/* <HomeContainer /> */}

      </Router>
      {/* )} */}
    </div>
  );
}

export default App;

