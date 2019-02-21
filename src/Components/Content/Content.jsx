import React, { Component } from 'react'
import Slider from 'react-slick'
import "./Content.css"
class Content extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        let settings = {

        }
        return (
            <div className="content con">
                <div className="content-l fl">
                    <div className="content-tlt">
                        <span className="content-name">特色信用卡</span>
                        <span className="content-txt" style={{ marginRight: '200px' }}>邀好友 不限量送苹果大礼包！&gt;&gt;</span>
                        <span className="content-txt">查看更多&gt;&gt;</span>
                    </div>
                    <div className="content-con">
                        <Slider {...settings}>
                            <div className="content-tl">
                                <div className="content-">
                                    <img style={{ marginTop: "20px" }} src="https://creditcard.ecitic.com/2017_images/card_ibj.png" alt="" />
                                    <p className="card-name">中信银行i白金信用卡</p>
                                    <p className="card-and">不要年费还能赚钱的白金卡</p>
                                    <p className="card-btn">免费申请</p>
                                </div>
                                <div className="content-">
                                    <img style={{ marginTop: "20px" }} src="https://creditcard.ecitic.com/2017_images/card_ibj.png" alt="" />
                                    <p className="card-name">中信银行i白金信用卡</p>
                                    <p className="card-and">不要年费还能赚钱的白金卡</p>
                                    <p className="card-btn">免费申请</p>
                                </div>
                                <div className="content-">
                                    <img style={{ marginTop: "20px" }} src="https://creditcard.ecitic.com/2017_images/card_ibj.png" alt="" />
                                    <p className="card-name">中信银行i白金信用卡</p>
                                    <p className="card-and">不要年费还能赚钱的白金卡</p>
                                    <p className="card-btn">免费申请</p>
                                </div>
                            </div>
                            <div>
                                <div className="content-">
                                    <img style={{ marginTop: "20px" }} src="https://creditcard.ecitic.com/2017_images/card_ibj.png" alt="" />
                                    <p className="card-name">中信银行i白金信用卡</p>
                                    <p className="card-and">不要年费还能赚钱的白金卡</p>
                                    <p className="card-btn">免费申请</p>
                                </div>
                                <div className="content-">
                                    <img style={{ marginTop: "20px" }} src="https://creditcard.ecitic.com/2017_images/card_ibj.png" alt="" />
                                    <p className="card-name">中信银行i白金信用卡</p>
                                    <p className="card-and">不要年费还能赚钱的白金卡</p>
                                    <p className="card-btn">免费申请</p>
                                </div>
                                <div className="content-">
                                    <img style={{ marginTop: "20px" }} src="https://creditcard.ecitic.com/2017_images/card_ibj.png" alt="" />
                                    <p className="card-name">中信银行i白金信用卡</p>
                                    <p className="card-and">不要年费还能赚钱的白金卡</p>
                                    <p className="card-btn">免费申请</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="content-r fr">
                    <ul>
                        <li className="content-list" style={{borderLeft:"none"}}>
                            <i className="aa aa1"></i>
                            <p className="xuanxiang">个性选卡</p>
                        </li>
                        <li className="content-list">
                            <i className="aa"></i>
                            <p className="xuanxiang">办附属卡</p>
                        </li>
                        <li className="content-list" style={{borderLeft:"none"}}>
                            <i className="cc"></i>
                            <p className="xuanxiang">办卡进度</p>
                        </li>
                        <li className="content-list">
                            <i className="dd"></i>
                            <p className="xuanxiang">激活卡片</p>
                        </li>
                        <li className="content-list" style={{borderLeft:"none"}}>
                            <i className="ee"></i>
                            <p className="xuanxiang">我的积分</p>
                        </li>
                        <li className="content-list">
                            <i className="ff"></i>
                            <p className="xuanxiang">我的权益</p>
                        </li>
                        <li className="content-list" style={{borderLeft:"none"}}>
                            <i className="gg"></i>
                            <p className="xuanxiang">我要借款</p>
                        </li>
                        <li className="content-list">
                            <i className="hh"></i>
                            <p className="xuanxiang">账单查询</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Content