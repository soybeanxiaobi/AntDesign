import React from 'react'
import { Menu,Icon } from 'antd';
import './style/style.less'
 
class Header extends React.Component{
    constructor(arg){
        super(arg);

        this.topNavChange = this.topNavChange.bind(this);        
    }

    
    topNavChange(item){
        // console.log(item);
        this.props.changeModeChild({
            mode:item.key,
        })
    }

    render(){
        return(
            <div className="headWired">
                <div className="headLogo">   
                    <Icon type="smile-o" className="logo"/>
                    <span>Ant-Design</span>
                </div>
                    
                <Menu  mode="horizontal"defaultSelectedKeys={['navigation']} className="headerMenu" onClick={this.topNavChange}>
                    <Menu.Item key="navigation">导航组件</Menu.Item>
                    <Menu.Item key="common">通用组件</Menu.Item>
                    <Menu.Item key="page">页面组件</Menu.Item>
                    <Menu.Item key="tips">提示组件</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Header
