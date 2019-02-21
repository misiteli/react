import React, { Component } from 'react'
import './Xheader.css'
let Xheader = class Xheader extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        return (
            <div id="header">
                <div className="header con">
                    <div className="header-top">
                        <div className='logo fl'>
                            <a><img src="https://creditcard.ecitic.com/shenqing/images_2015/logo_new.png" alt="" /></a>
                        </div>
                        <div className="right-con fr">
                            <a className="denglu">登录</a>
                            <span>丨</span>
                            <a className="zhuce">免费注册</a>
                            <a className="index">银行首页</a>
                            <span>丨</span>
                            <a className="zhaopin">人才招聘</a>
                        </div>
                    </div>
                    <div className="nav">
                        <ul className="nav-con">
                            <li className="list">
                                <a className="route">首页</a>
                            </li>
                            <li className="list">
                                <a className="route">申请信用卡</a>
                            </li>
                            <li className="list">
                                <a className="route">我的账户</a>
                                <ul className="list-fan">
                                    <li className="list-son">
                                        <span>账单查询</span><br />
                                        <a className="wenzi">已出账</a><br />
                                        <a className="wenzi">未出账</a>
                                    </li>
                                    <li className="list-son">
                                        <span>在线还款</span><br />
                                        <a className="wenzi">循环信用</a>
                                    </li>
                                    <li className="list-son">
                                        <span>权益专享</span>
                                    </li>
                                    <li className="list-son">
                                        <span>用卡设置</span><br />
                                        <a className="wenzi">申请进度查询</a><br />
                                        <a className="wenzi">信用卡开卡</a> <br />
                                        <a className="wenzi">账单获取设置方式</a> <br />
                                        <a className="wenzi">交易提醒管理</a> <br />
                                        <a className="wenzi">消费模式管理</a>
                                    </li>
                                    <li className="list-son1"><img src="https://creditcard.ecitic.com/shenqing/images_2015/dkkj.jpg" alt="" /></li>
                                </ul>
                            </li>
                            <li className="list">
                                <a className="route">积分优惠</a>
                                <ul className="list-fan1">
                                    <li className="list-son">
                                        <span>优惠活动</span><br />
                                        <a className="wenzi">全部活动</a><br />
                                        <a className="wenzi">境外活动</a>
                                    </li>
                                    <li className="list-son">
                                        <span>商城</span><br />
                                        <a className="wenzi">有鱼商城</a><br />
                                        <a className="wenzi">购便宜（团购）</a> <br />
                                        <a className="wenzi">旗舰店</a> <br />
                                        <a className="wenzi">抢购</a>
                                    </li>
                                    <li className="list-son">
                                        <span>积分计划</span><br />
                                        <a className="wenzi">我的积分</a><br />
                                        <a className="wenzi">积分商城</a> <br />
                                        <a className="wenzi">品牌馆</a>
                                    </li>
                                    <li className="list-son">
                                        <span>特惠商户</span>
                                    </li>
                                    <li className="list-son">
                                    </li>
                                    <li className="list-son">
                                    </li>
                                </ul>
                            </li>
                            <li className="list">
                                <a className="route">客户服务</a>
                                <ul className="list-fan2">
                                    <li className="list-son">
                                        <span>用卡服务</span><br />
                                        <a className="wenzi">信用卡知识</a><br />
                                        <a className="wenzi">卡友专属权益</a> <br />
                                        <a className="wenzi">安全用卡</a> <br />
                                        <a className="wenzi">用卡常见问题</a> <br />
                                        <a className="wenzi">营业网点</a>
                                    </li>
                                    <li className="list-son">
                                        <span>还款指引</span><br/>
                                        <a className="wenzi">还款方式</a><br/>
                                        <a className="wenzi">还款网点查询</a> <br/>
                                        <a className="wenzi">个性化还款选择</a> <br/>
                                        <a className="wenzi">外币还款</a><br/>
                                        <a className="wenzi">在线演示还款方式</a>
                                    </li>
                                    <li className="list-son">
                                        <span>移动应用</span><br/>
                                        <a className="wenzi">移动官网</a><br/>
                                        <a className="wenzi">动卡空间</a> <br/>
                                        <a className="wenzi">移动支付</a>
                                    </li>
                                    <li className="list-son">
                                        <span>社区质询</span>
                                    </li>
                                    <li className="list-son">
                                        <span>最新公告</span>
                                    </li>
                                    <li className="list-son">
                                        <span>其他服务</span><br/>
                                        <a className="wenzi">新手入门</a><br/>
                                        <a className="wenzi">短信服务</a> <br/>
                                        <a className="wenzi">电邮服务</a> <br/>
                                        <a className="wenzi">自助语音服务</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="list">
                                <a className="route">借款分期</a>
                                <ul className="list-fan3">
                                    <li className="list-son">
                                        <span>我要现金</span><br/>
                                        <a className="wenzi">长期借款</a><br/>
                                        <a className="wenzi">短期周转</a> <br/>
                                        <a className="wenzi">新客户借款</a>
                                    </li>
                                    <li className="list-son">
                                        <span>我要分期</span><br/>
                                        <a className="wenzi">账单分期</a><br/>
                                        <a className="wenzi">高额分期</a>
                                    </li>
                                    <li className="list-son">
                                        <span>我要购物</span><br/>
                                        <a className="wenzi">友鱼商城</a><br/>
                                        <a className="wenzi">网购分期</a> <br/>
                                        <a className="wenzi">高额分期</a>>
                                    </li>
                                    <li className="list-son">
                                        <span>增值服务</span><br/>
                                        <a className="wenzi">优选增值服务手册</a><br/>
                                        <a className="wenzi">年费产品</a> <br/>
                                        <a className="wenzi">保险理财</a> <br/>
                                        <a className="wenzi">短信宝</a>
                                    </li>
                                    <li className="list-son1">
                                        <img src="https://creditcard.ecitic.com/2017_images/14981143703861040846364.png" alt=""/>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
export default Xheader