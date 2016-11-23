import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router' // 引入Link处理导航跳转
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { App, Home, Foo, Bar, Antd } from '../containers' // 引入各容器组件

export default class Header extends Component {
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu 
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="home">
          <Link to="/">HOME</Link>
        </Menu.Item>
        <Menu.Item key="cloud">
        		<Link to="/foo"> WHERAMI CLOUD™</Link>
        </Menu.Item>
        <Menu.Item key="track">
				WHERAMI TRACK™       
		 </Menu.Item>
		 <Menu.Item key="crowd">
				WHERAMI CROWD™
		 </Menu.Item>
		 <Menu.Item key="yourway">
				YOURWAY優惠
		 </Menu.Item>
		 <SubMenu title={<span>WHERAMI™ SITES </span>}>
            <Menu.Item key="SITES:1">WHERAMI IN HKUST</Menu.Item>
            <Menu.Item key="SITES:2">WHERAMI IN CYBERPORT</Menu.Item>
            <Menu.Item key="SITES:3">WHERAMI IN OLYMPIAN CITY</Menu.Item>
            <Menu.Item key="SITES:4">WHERAMI IN HKIA</Menu.Item>
        </SubMenu>
        <SubMenu title={<span>ACTIVITIES</span>}>
            <Menu.Item key="ACTIVITIES:1">MEDIA</Menu.Item>
            <Menu.Item key="ACTIVITIES:2">EVENTS</Menu.Item>
            <Menu.Item key="ACTIVITIES:3">VIDEO CHANNEL</Menu.Item>
        </SubMenu>
        <SubMenu title={<span>ABOUT US</span>}>
            <Menu.Item key="setting:1">OUR TEAM</Menu.Item>
        	<SubMenu title={<span>GALLERY</span>}>
        	            <Menu.Item key="setting:1">OUR TEAM</Menu.Item>
           				<Menu.Item key="setting:2">OUR TEAM</Menu.Item>
        	</SubMenu>
            <Menu.Item key="setting:3">CONTACT</Menu.Item>
        </SubMenu>
        <Menu.Item key="aa">
            INVESTORS AND PARTNERSHIP
        </Menu.Item>
      </Menu>
    );
  }
}


