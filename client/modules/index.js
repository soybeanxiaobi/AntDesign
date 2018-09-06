import React from 'react'

import { Layout, Menu, Icon } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

import HeadComponent from './header/index'
import ConentComponent from './content/index'

import './style/style.less'
export default class ReactIndex extends React.Component{
    constructor(arg){
        super(arg);

        this.state = {
            mode:'navigation',
        }

        this.changeMode = this.changeMode.bind(this);
    }
    //mode改变
    changeMode(e){
        console.log(e);
        this.setState({
            mode:e.mode,
        })
    }


    render(){
        return(
            <div className="reactIndex">
                <Layout>
                    <Header className="header">
                        <HeadComponent changeModeChild={this.changeMode}/>
                    </Header>

                    <Content className="content">
                        <ConentComponent mode={this.state.mode}/>
                    </Content>

                    <Footer className="footer">
                        Ant Design Demo @2018 Created by Xiaobe
                    </Footer>
                </Layout>

            </div>
        )
    }
}