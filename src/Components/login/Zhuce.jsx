import React, { Component } from 'react'
import {
  Form, Input, Row, Col, Checkbox, Button,
} from 'antd';
import Xfooter from '../Xfooter/Xfooter'
import axios from 'axios';
//FormData和Payload是浏览器传输数据给接口的其中两种格式，这两种方式浏览器是通过Content-Type来进行区分的，如果是application/x-www-form-urlencoded，则为formdata方式，如果是application/json方式，则为payload方式。需要转换成formdata方式，则要下载qs进行转换
import qs from 'qs'


class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    email: '',
    password: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (values.agreement == true) {
          axios.post('http://127.0.0.1:7001/login', qs.stringify({
            email: this.state.email,
            password: this.state.password
          })).then(res => {
            console.log(res);
            if(res.data == '用户名已存在'){
              alert(res.data)
            }else if(res.data == '注册成功'){
              alert(res.data)
              this.props.history.push('/denglu')
            }
          })
        }else{
          alert('请确认已看过协议')
        }
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  getEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  getPassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
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
        <Form onSubmit={this.handleSubmit} className="con">
          <Form.Item
            {...formItemLayout}
            label="用户名"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '输入的用户名无效!',
              }, {
                required: true, message: '请输入用户名!',
              }],
            })(
              <Input onBlur={this.getEmail.bind(this)} />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="密码"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入你的密码!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" onBlur={this.getPassword.bind(this)} />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="确认密码"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: '请确认你的密码!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="验证码"
            extra="我们必须确保你是一个人"
          >
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: '请输入验证码!' }],
                })(
                  <Input />
                )}
              </Col>
              <Col span={12}>
                <Button>获取验证码</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>我已经看过 <a href="">《中信银行用户体系用户服务条款》</a></Checkbox>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">注册</Button>
          </Form.Item>
        </Form>
        <Xfooter />
      </div>
    );
  }
}

const Zhuce = Form.create({ name: 'register' })(RegistrationForm);


export default Zhuce