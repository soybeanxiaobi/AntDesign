import React from 'react'
import { Menu, Icon, Divider, Button, Switch } from 'antd';

const  SubMenu  = Menu.SubMenu;
const  MenuItemGroup = Menu.ItemGroup;

import '../style.less'

export default class NavMenu extends React.Component{
    constructor(arg){
        super(arg);
        
        this.state = {
            current: 'mail',
            collapsed: false,
            theme: 'light',
            menuMode: 'inline',
        }

        this.handleClick = this.handleClick.bind(this);
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.changeMenuMode = this.changeMenuMode.bind(this);
    }

    //获取demo1的key值
    handleClick(item){
        this.setState({
            current: item.key
        })
    }

    //demo2展开切换
    toggleCollapsed(){
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    //demo2样式切换
    changeTheme(checked){
        //checked未布尔值,代表是否点击
        this.setState({
            theme: checked ? 'dark' : 'light'
        })
    }

    changeMenuMode(checked){
        console.log(checked)
        this.setState({
            menuMode: checked ? 'vertical' : 'inline'
        })
    }


    render(){
        return(
            <div className="navMenuWired">
                <div className="demo">    
                    <div className="demo1">
                        <h3>DEMO1:水平的顶部导航菜单</h3>
                        <div className="demoContent">
                            <Menu onClick={ this.handleClick } selectedKeys={[this.state.current]} mode="horizontal">
                                <Menu.Item key="mail">
                                    <Icon type="mail" />
                                    邮箱
                                </Menu.Item>

                                <Menu.Item key="app" disabled>
                                    <Icon type="appstore" />
                                    应用商城
                                </Menu.Item>

                                <SubMenu title={
                                    <span>
                                        <Icon type="setting" />
                                        设置
                                    </span>
                                } key="setting">
                                    <MenuItemGroup title="Item1">
                                        <Menu.Item key="setting1">选项1</Menu.Item>
                                        <Menu.Item key="setting2">选项2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="Item2">
                                        <Menu.Item key="setting3">选项3</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>

                                <Menu.Item key="apliy">
                                    <a href="https://ant.design" target="_blank">跳转</a>
                                </Menu.Item>
                            </Menu>
                        </div>     
                        <br/>
                        <p><b>总结:</b>通过mode设置菜单类型:vertical(垂直) horizontal(水平) inline(内敛)</p>
                        <Divider orientation="right" style={{color:'#888'}}>demo1</Divider>
                    </div>
                    
                    <div className="demo2">
                        <h3>DEMO3:垂直采单</h3>
                        <Menu mode="vertical">
                            <SubMenu key="sub1" title={
                                <span>
                                    <Icon type="mail" />
                                    <span>Item1</span>
                                </span>
                            }>
                                <Menu.Item key="1">
                                    选项1
                                </Menu.Item>
                                <Menu.Item key="2">
                                    选项2
                                </Menu.Item>
                                <Menu.Item key="3">
                                    选项3
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub2" title={
                                <span>
                                    <Icon type="mail" />
                                    <span>Item2</span>
                                </span>
                            }>
                                <Menu.Item key="4">
                                    选项4
                                </Menu.Item>
                                <Menu.Item key="5">
                                    选项5
                                </Menu.Item>
                                <Menu.Item key="6">
                                    选项6
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                        <Divider orientation="right" style={{color: '#888'}}>demo2</Divider>
                    </div>

                    <div className="demo3">
                        <h3>DEMO3:缩起内敛菜单</h3>
                        <div className="demoContent">
                            {/*展开切换按钮*/}
                            <Button type="primary" onClick={ this.toggleCollapsed } style={{ marginBottom: 16 }}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>

                            {/*样式切换按钮*/}
                            <Switch checked={this.state.theme === 'dark'} 
                                    onChange={ this.changeTheme }  
                                    checkedChildren="dark"
                                    unCheckedChildren="light"   
                                    style={{marginLeft: 20 }}     
                            />

                            {/*模式切换按钮*/}
                            <Switch checked={ this.state.menuMode === 'vertical'}
                                    onChange={ this.changeMenuMode }
                                    checkedChildren="vertical"
                                    unCheckedChildren="inline"
                                    style={{marginLeft: 20 }}
                            />

                            <Menu   defaultSelectedKeys={['demo1']} 
                                    mode= { this.state.menuMode }
                                    inlineCollapsed={this.state.collapsed}
                                    theme={ this.state.theme }>
                                <Menu.Item key="demo1">
                                    <Icon type="pie-chart" />
                                    <span>选项1</span>
                                </Menu.Item>
                                <Menu.Item key="demo2">
                                    <Icon type="inbox" />
                                    <span>选项2</span>
                                </Menu.Item>
                                <SubMenu key="sub1" title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>Item1</span>
                                    </span>
                                }>
                                    <Menu.Item key="demo3">
                                        选项3
                                    </Menu.Item>
                                    <Menu.Item key="demo4">
                                        选项4
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                        <Divider orientation="right" style={{color:'#888'}}>demo3</Divider>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = NavMenu;