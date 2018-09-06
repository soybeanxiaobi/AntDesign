import React from 'react'

import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout;
const { SubMenu } = Menu;


export default class CommonComponent extends React.Component{
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
                <Menu mode="inline" defaultSelectedKeys={['typeInput']} defaultOpenKeys={['sub1']} onClick={this.changeMenu}>
                    <SubMenu key="sub1" title={
                        <span>
                            <Icon type="menu-unfold" />
                            输入框类
                        </span>
                    } >
                        <Menu.Item key="typeInput">形式输入框</Menu.Item>
                        <Menu.Item key="checkBox">多选框</Menu.Item>
                        <Menu.Item key="textArea">文本域</Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub2" title={
                        <span>
                            <Icon type="menu-unfold" />
                            选择框类
                        </span>
                    } >
                        <Menu.Item key="cascadeSelect">级联选择</Menu.Item>
                        <Menu.Item key="dataSelect">日期选择</Menu.Item>
                        <Menu.Item key="otherSelect">其他</Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub3" title={
                        <span>
                            <Icon type="menu-unfold" />
                            实用类
                        </span>
                    } >
                        <Menu.Item key="autoComplete">自动完成</Menu.Item>
                        <Menu.Item key="switch">开关</Menu.Item>
                        <Menu.Item key="upload">上传</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider> 
        )
    }
}

/**
 * API:  
    1.Menu:
    defaultSelectedKeys: 初始选中的菜单项 key 数组
    defaultOpenKeys: 初始展开的 SubMenu 菜单项 key 数组	

    2.Slide: Layout布局,左(右)导航栏
 */