import React, { Component } from 'react';
import Xheader from './Xheader/Xheader'
import Banner from './Banner/Banner'
import Gate from './Gate/Gate'
import List from './List/List'
import Xfooter from './Xfooter/Xfooter'

class Card extends Component {
    render() {
      return (
        <div>
            <Xheader />
            <Banner />
            <Gate />
            <List />
            <Xfooter />
        </div>
      );
    }
  }
  
  export default Card;