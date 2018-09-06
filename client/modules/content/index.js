
import React from 'react'

import './style/style.less'
import { Layout, Breadcrumb } from 'antd'
const { Sider, Content  } = Layout; 

//导入内容左侧导航栏组件
import NavigationComponent from '../../components/content/navigation/index'
import CommonComponent from '../../components/content/common/index'
import PageComponent from '../../components/content/page/index'
import TipsComponent from '../../components/content/tips/index'

//导入内容右侧组件
import DetailComponent from './children/componentDetail/index'

export default class ContentComponent extends React.Component{
    constructor(arg){
        super(arg);

        this.state = {
            pageType: ''
        }
        this.componentType = this.componentType.bind(this);
    }

    componentType(e){
        console.log(e);
        this.setState({
            pageType:e.pageType
        })
    }

    componentWillMount(){
        
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            pageType:''
        })
    }

    // changeMode(mode){
    //     // console.log(mode);
    //     let showLeftNav;
    //     let pageType;

    //     switch (mode){
    //         case 'navigation':
    //             showLeftNav = <NavigationComponent componentType={this.componentType} />
    //             //初始化左侧菜单为第一项
    //             break;
    //         case 'common':
    //             showLeftNav = <CommonComponent componentType={this.componentType} />
    //             break;
    //         case 'page':
    //             showLeftNav = <PageComponent componentType={this.componentType} />
    //             break;
    //         case 'tips':
    //             showLeftNav = <TipsComponent componentType={this.componentType} />
    //             break;
    //         default:
    //     }

    //     this.setState({
    //         moede,
    //         showLeftNav,
    //         pageType
    //     })
    // }

    render(){   
        const { mode } = this.props;
        let showLeftNav, pageType;

        switch (mode){
            case 'navigation':
                showLeftNav = <NavigationComponent componentType={this.componentType} />
                //初始化左侧菜单为第一项
                pageType = this.state.pageType ? this.state.pageType : 'navMenu'
                break;

            case 'common':
                showLeftNav = <CommonComponent componentType={this.componentType} />
                pageType = this.state.pageType ? this.state.pageType : 'typeInput'                
                break;

            case 'page':
                showLeftNav = <PageComponent componentType={this.componentType} />
                pageType = this.state.pageType ? this.state.pageType : 'calendar'                                
                break;

            case 'tips':
                showLeftNav = <TipsComponent componentType={this.componentType} />
                pageType = this.state.pageType ? this.state.pageType : 'alarm'                                
                break;
            default:
        }

        console.log(pageType);

        return(
            <Layout style={{height:'100%'}}>
                <div className="contentWired">
                    { showLeftNav }
                    <Content>
                        <Breadcrumb className="breadCrumb">
                            <Breadcrumb.Item>
                                {mode}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                {pageType}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <DetailComponent pageType={pageType} mode={mode}/>
                    </Content>
                </div>
            </Layout>
        )
    }
}