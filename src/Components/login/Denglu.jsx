import React, { Component } from 'react'
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import Xfooter from '../Xfooter/Xfooter'
class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div style={{
                    backgroundColor: '#D7000F',
                    width: '100%',
                    height: '60px',
                    textAlign: "left",
                    marginBottom: "40px"
                }}>
                    <div className="con">
                        <img src="https://creditcard.ecitic.com/citiccard/ucweb/img/logo.gif" alt="" />
                    </div>
                </div>
                <div className="con">
                    
                
                <Form onSubmit={this.handleSubmit} className="login-form" style={{width:'400px',height:'300px',background:'#fff',padding:'50px'}}>
                    <Form.Item>
                        {getFieldDecorator('用户名', {
                            rules: [{ required: true, message: '请输入你的用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('密码', {
                            rules: [{ required: true, message: '请输入你的密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
            </Button>
                         <a href="">马上注册</a>
                    </Form.Item>
                </Form>
                </div>
                <Xfooter style={{position: 'fixed',bottom:'0px'}}></Xfooter>

            </div>
        );
    }
}

const Denglu = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default Denglu
