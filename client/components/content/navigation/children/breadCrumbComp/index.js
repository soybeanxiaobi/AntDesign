import React from 'react'

import { Breadcrumb, Divider, Icon, Pagination } from 'antd'

export default class BreadCrumbComp extends React.Component{
    render(){
        return(
            <div className="breadCrumb">
                <div className="demo">
                    <div className="demo1">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href="">首页</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">一级</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                二级
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Divider orientation="right" style={{ color:'#888' }}>demo1</Divider>
                    </div>

                    <div className="demo2">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href="">
                                    <Icon type="home" />
                                    首页
                                </a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">
                                    <Icon type="user" />
                                    一级
                                </a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">
                                    <Icon type="setting" theme="outlined" />
                                    二级
                                </a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Divider orientation="right" style={{ color:'#888' }}>demo2</Divider>
                    </div>

                    <div className="demo3">
                        <Pagination defaultCurrent={1} total={50} />
                        <br/>
                        <p><b>总结:</b>total为数据总量,如不设置pageSize则默认每页数据为10条</p>
                        <Divider orientation="right" style={{ color:'#888' }}></Divider>
                    </div>

                </div>
            </div>
        )
    }
}

module.exports = BreadCrumbComp;