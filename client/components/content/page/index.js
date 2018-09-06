import React from 'react'

import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout;
const { SubMenu } = Menu;

export default class PageComponent extends React.Component{
    constructor(arg){
        super(arg);

        this.changeMenu = this.changeMenu.bind(this)
    }

    changeMenu(item){
        this.props.componentType({
            pageType: item.key
        })
    }


    render(){
        return( 
            <Sider>
                <Menu mode="inline" defaultSelectedKeys={['calendar']} defaultOpenKeys={['sub1']} onClick={this.changeMenu} >
                    <SubMenu key="sub1" title={
                        <span>
                            <Icon type="menu-unfold" />
                            卡片类
                        </span>
                    }>
                        <Menu.Item key="calendar">日历</Menu.Item>
                        <Menu.Item key="card">卡片</Menu.Item>
                        <Menu.Item key="carousel">走马灯</Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub2" title={
                        <span>
                            <Icon type="menu-unfold" />
                            树类
                        </span>
                    }>
                        <Menu.Item key="list">列表</Menu.Item>
                        <Menu.Item key="table">表格</Menu.Item>
                        <Menu.Item key="tree">树</Menu.Item>
                    </SubMenu>

                    <Menu.Item key="form">
                        <span>
                            <Icon type="menu-unfold" />
                            表单
                        </span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}