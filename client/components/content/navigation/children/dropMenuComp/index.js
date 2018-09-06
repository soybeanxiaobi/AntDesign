import React from 'react'

import { Menu, Dropdown, Icon, Divider, Button } from 'antd' 

const { SubMenu } = Menu;

export default class DropMenuComp extends React.Component{

    render(){
        //下拉菜单需要渲染的菜单
        const MenuRenderFir = (
            <Menu>
                <Menu.Item key="0">选项1</Menu.Item>
                <Menu.Item key="1">选项2</Menu.Item>
                <SubMenu key="sub1" title={
                    <span>Item</span>
                }>
                    <Menu.Item key="2">选项3</Menu.Item>
                    <Menu.Item key="3">选项4</Menu.Item>
                </SubMenu>
                <Menu.Item disabled key="4">选项5</Menu.Item>
            </Menu>
        )



        return(
            <div className="dropMenuWired">
                <div className="demo">
                    <div className="demo1">
                        <Dropdown overlay={ MenuRenderFir }>
                            <span style={{cursor: 'pointer'}}> 
                                普通下拉菜单<Icon type="down" />
                            </span>
                        </Dropdown>
                        <Dropdown overlay={ MenuRenderFir }  trigger={['click']}>
                            <span style={{cursor: 'pointer', marginLeft: 20}}> 
                                点击下拉菜单<Icon type="down" />
                            </span> 
                        </Dropdown>
                        <Divider orientation="right" style={{ color: '#888' }}>demo1</Divider>
                    </div>

                    <div className="demo2">
                        <div>
                            <Dropdown overlay={ MenuRenderFir } placement="bottomCenter">
                                <span style={{cursor: 'pointer'}}>
                                    <Button>按钮下拉菜单<Icon type="down" /></Button>
                                </span>
                            </Dropdown>
                            <Dropdown.Button style={{ marginLeft: 20 }} overlay={ MenuRenderFir }>
                                按钮下拉菜单
                            </Dropdown.Button>
                        </div>
                        <br />
                        <p><b>总结:</b>左侧为Dropdown,右侧为Dropdown.Button.两种都是通过overlay渲染弹框</p>
                        <Divider orientation="right" style={{ color: '#888' }}>demo2</Divider>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = DropMenuComp;