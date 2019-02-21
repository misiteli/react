import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

let Banner = class Banner extends Component {
    constructor(props) {
        super(props);
        this.props = props;

    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: 'true'
            }
        })
    }
    render() {
        return (
            <div className="App" style={{zIndex:'1'}}>
                <div className="swiper-container">
                    <div className="swiper-wrapper" >
                        <div className="swiper-slide"><img src="https://cdn.citiccard.hunshitong.net/shenqing/images_2015/hd.jpg?v=1548923963492" alt=""/></div>
                        <div className="swiper-slide"><img src="https://cdn.citiccard.hunshitong.net/shenqing/images_2015/hd.jpg?v=1548923963492" alt=""/></div>
                        <div className="swiper-slide"><img src="https://cdn.citiccard.hunshitong.net/shenqing/images_2015/hd.jpg?v=1548923963492" alt=""/></div>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        )
    }
}
export default Banner