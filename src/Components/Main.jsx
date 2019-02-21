import React, { Component } from 'react';
import Xheader from './Xheader/Xheader'
import Xfooter from './Xfooter/Xfooter'
import Content from './Content/Content'
import BigBanner from './BigBanner'
class Main extends Component{
    render(){
        return(
            <div>
                <Xheader />
                <BigBanner />
                <Content />
                <Xfooter />
            </div>
        )
    }
}

export default Main