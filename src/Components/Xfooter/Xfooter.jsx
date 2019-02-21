import React, { Component } from 'react'
import './Xfooter.css'
let Xfooter = class Xfooter extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        return (
            <div className="footer con">
                <div className="footer-mine">
                    <div className="footer-pic">
                        <p className="footer-us"><img src="https://creditcard.ecitic.com/shenqing/images_2015/wx_icon.png" alt="" /></p>
                        <p className="footer-us1"><img src="https://creditcard.ecitic.com/shenqing/images_2015/1398325966044101521169.jpg" alt="" /></p>
                    </div>
                    <div className="footer-pic">
                        <p className="footer-us"><img src="https://creditcard.ecitic.com/shenqing/images_2015/qq_icon.png" alt="" /></p>
                        <p className="footer-us1"><img src="https://creditcard.ecitic.com/shenqing/images_2015/1398325902522399413560.jpg" alt="" /></p>
                    </div>
                    <div className="footer-pic">
                        <p className="footer-us"><img src="https://creditcard.ecitic.com/shenqing/images_2015/zfb_icon.png" alt="" /></p>
                        <p className="footer-us1"><img src="https://creditcard.ecitic.com/shenqing/images_2015/1398325938370504745268.jpg" alt="" /></p>
                    </div>
                    <div className="footer-pic">
                        <p className="footer-us"><img src="https://creditcard.ecitic.com/shenqing/images_2015/sina_icon.png" alt="" /></p>
                        <p className="footer-us1"><img src="https://creditcard.ecitic.com/shenqing/images_2015/1398326508466826383872.jpg" alt="" /></p>
                    </div>
                    <div className="footer-pic">
                        <p className="footer-us"><img src="https://creditcard.ecitic.com/shenqing/images_2015/dk_icon.png" alt="" /></p>
                        <p className="footer-us1"><img src="https://creditcard.ecitic.com/shenqing/images_2015/14252812473721861024368.jpg" alt="" /></p>
                    </div>
                    <div className="footer-pic">
                        <p className="footer-us"><img src="https://creditcard.ecitic.com/shenqing/images_2015/zy_icon.png" alt="" /></p>
                        <p className="footer-us1"><img src="https://creditcard.ecitic.com/shenqing/images_2015/1398762067510693145802.jpg" alt="" /></p>
                    </div>
                    <div className="footer-pic">
                        <p className="footer-us"><img src="https://creditcard.ecitic.com/shenqing/images_2015/qqkj_icon.png" alt="" /></p>
                        <p className="footer-us1"><img src="https://creditcard.ecitic.com/shenqing/images_2015/13983265338242073194661.jpg" alt="" /></p>
                    </div>
                    <div className="footer-pic">

                        <p className="footer-us"><img src="https://creditcard.ecitic.com/shenqing/images_2015/1432288020270168244842.gif" alt="" /></p>
                        <p className="footer-us1"><img src="https://creditcard.ecitic.com/shenqing/images_2015/14322880202701712635170.gif" alt="" /></p>
                    </div>

                    <div className="footer-pic">
                        <p className="footer-us"><img src="https://creditcard.ecitic.com/shenqing/images_2015/14322880688221982464037.gif" alt="" /></p>
                    </div>
                </div>
                <div className="footer-link">
                    <div className='link-left fl'>
                        <ul className="links">
                            <li className="links-list"> 
                                <span className="links-txt"> 
                                    关于我们
                                </span>
                            </li>
                            <li className="links-list"> 
                                <span className="links-txt"> 
                                    常见问题
                                </span>
                            </li>
                            <li className="links-list"> 
                                <span className="links-txt"> 
                                    网站地图
                                </span>
                            </li>
                            <li className="links-list"> 
                                <span className="links-txt"> 
                                    友情链接
                                </span>
                            </li>
                            <li className="links-list"> 
                                <span className="links-txt"> 
                                    移动官网
                                </span>
                            </li>
                        </ul><br/>
                        <p className="links-xxx">中信控股有限责任公司版权所有 Copyright © CITIC Holdings All rights reserved京公网安备11010502020433号 京ICP证 030779-1号</p>
                    </div>
                    <div className="link-right fr">
                        <div className="link-tel fl">
                            <p style={{marginBottom: '0',fontSize: '12px'}}>24小时客服热线</p>
                            <h3 style={{fontSize:"20px"}}>40088 - 95558</h3>
                        </div>
                        <div className="link-xin fr">
                            <img src="https://creditcard.ecitic.com/shenqing/images_2015/kf_icon.png" alt="" /><br/>
                            <span> 在线客服</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }




}
export default Xfooter