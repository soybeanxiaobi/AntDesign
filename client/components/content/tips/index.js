import React from 'react'

import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout
const { SubMenu } = Menu;

export default class TipsComponent extends React.Component{
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
                <Menu mode="inline" defaultSelectedKeys={['alarm']} defaultOpenKeys={['sub1']} onClick={this.changeMenu}>
                    <SubMenu key="sub1" title={
                        <span>
                            <Icon type="menu-unfold" />
                            框类
                        </span>
                    }>
                        <Menu.Item key="alarm">警告框</Menu.Item>
                        <Menu.Item key="tips">提示框</Menu.Item>
                        <Menu.Item key="talk">对话框</Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub2" title={
                        <span>
                            <Icon type="menu-unfold" />
                            状态类
                        </span>
                    }>
                        <Menu.Item key="rate">进度条</Menu.Item>
                        <Menu.Item key="loading">加载状态</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}