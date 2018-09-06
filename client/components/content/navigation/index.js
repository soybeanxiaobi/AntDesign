import React from 'react'

import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout;
const { SubMenu } = Menu;

export default class NavigationComponent extends React.Component{
    constructor(arg){
        super(arg);

        this.changeMenu = this.changeMenu.bind(this);
    }

    changeMenu(item){
        // console.log(item);

        this.props.componentType({
            pageType: item.key
        })
    }


    render(){
        return(
            <Sider>
                <Menu mode="inline" defaultSelectedKeys={['navMenu']} defaultOpenKeys={['sub1']} onClick={this.changeMenu}> 
                    <SubMenu key="sub1" title={
                        <span>
                            <Icon type="menu-unfold" />
                            菜单类
                        </span>
                    }>
                        <Menu.Item key="navMenu">导航菜单</Menu.Item>
                        <Menu.Item key="dropMenuComp">下拉菜单</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={
                        <span>
                            <Icon type="menu-unfold" />
                            导航类
                        </span>
                    }>
                        <Menu.Item key="breadCrumbComp">面包屑</Menu.Item>
                        <Menu.Item key="stepBar">步骤条</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={
                        <span>
                            <Icon type="menu-unfold" />
                            布局
                        </span>
                    }>
                        <Menu.Item key="grid">栅格布局</Menu.Item>
                        <Menu.Item key="layout">Layout布局</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}