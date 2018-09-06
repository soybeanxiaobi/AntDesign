import React from 'react'

import { Steps, Divider, Icon, message, Button } from 'antd'

import './style/style.less'
const Step = Steps.Step

export default class StepBar extends React.Component{
    constructor(arg){
        super(arg)

        this.state = {
            current: 0,
        }

    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render(){
        let { current } = this.state
        // console.log(current);
        const steps= [{
            title: '步骤一',
            content: '步骤一的描述'
        },{
            title: '步骤二',
            content: '步骤二的描述'
        },{
            title: '步骤三',
            content: '步骤三的描述'
        }]

        return(
            <div className="stepBarWired">
                <div className="demo">
                    <div className="demo1">
                        <div>
                            <Steps current={1}>
                                <Step title="步骤一" description="我是步骤一的描述信息" />
                                <Step title="步骤二" description="我是步骤二的描述信息" />
                                <Step title="步骤三" description="我是步骤三的描述信息" />
                            </Steps>
                        </div>
                        <p><b>总结:</b>通过current属性控制当前进度</p>
                        
                        <Divider orientation="right" style={{color: '#888'}}>
                            demo1
                        </Divider>
                         <br />
                    </div>

                    <div className="demo2">
                        <div>
                            <Steps>
                                <Step status="finish" title="注册" icon={<Icon type="user" />} />
                                <Step status="finish" title="登陆" icon={<Icon type="login" />} />
                                <Step status="process" title="填写" icon={<Icon type="loading" />} />
                                <Step status="wait" title="完成" icon={<Icon type="smile-o" />} />
                            </Steps>
                        </div>
                        <p><b>总结:</b>通过status(finish(完成)、process(进行中)、wait(等待))属性控制当前进度</p>
                        
                        <Divider orientation="right" style={{color: '#888'}}>
                            demo2
                        </Divider>
                    </div>

                    <div className="demo3">
                        <div>
                            <Steps current={current}>
                                {steps.map(item => <Step key={item.title} title={item.title} />)}
                            </Steps>
                            <div className="steps-content">
                                {steps[current].content}
                            </div>
                            <div className="steps-action">
                            {
                                current < steps.length - 1
                                && <Button type="primary" onClick={() => this.next()}>前進</Button>
                            }
                            {
                                current === steps.length - 1
                                && <Button type="primary" onClick={() => message.success('任務完成')}>完成</Button>
                            }
                            {
                                current > 0
                                && (
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                返回
                                </Button>
                                )
                            }
                            </div>
                        </div>
                        <br />
                        <p><b>总结:</b>内容来源于step对象</p>
                        <Divider orientation="right" style={{color: '#888'}}>demo3</Divider>
                    </div>

                    <div className="demo4">
                        <Steps current={1} status="error">
                            <Step title="Finished" description="This is a description" />
                            <Step title="In Process" description="This is a description" />
                            <Step title="Waiting" description="This is a description" />
                        </Steps>
                        <br />
                        <p><b>总结:</b>给父Steps设置status="error",则当前显示的子step会显示错误</p>
                    </div>
                </div>

                

            </div>
        )
    }
}

module.exports = StepBar;