import React, { Component } from 'react';

import Slider from 'react-slick';
class BigBanner extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        let settings = {
            autoplay: true,
            speed: 500
        }
        return (
            <Slider {...settings}>
                <div><h3><img src="https://creditcard.ecitic.com/2017_images/banner/185.jpg" alt=""/></h3></div>
                <div><h3><img src="https://creditcard.ecitic.com/2017_images/banner/192.jpg" alt=""/></h3></div>
                <div><h3><img src="https://creditcard.ecitic.com/2017_images/banner/181.jpg" alt=""/></h3></div>
                <div><h3><img src="https://creditcard.ecitic.com/2017_images/banner/162.jpg" alt=""/></h3></div>
                <div><h3><img src="https://creditcard.ecitic.com/2017_images/banner/203.jpg" alt=""/></h3></div>
            </Slider>
        )
    }
}
export default BigBanner