import React from 'react'

import './style/style.less'

export default class ComponentDetail extends React.Component{
    constructor(arg){
        super(arg)
        

    }

    componentWillMount(){
    }

    //根据mode和pageType自动查找对应文件夹的文件
    //注:默认第一项为第一个mode:navigation的第一个pageType:navMenu
    renderDetail(mode,pageType){
        console.log(mode)
        console.log(pageType);
        let dynamicDetail = require(`../../../../components/content/${mode}/children/${pageType}/index`)
        return dynamicDetail
    }

    render(){
        const { pageType, mode } = this.props

        let DynamicDetail = this.renderDetail(mode,pageType);
        
        return(
            <div className="detailWried">
                <DynamicDetail />
            </div>
        )
    }
}