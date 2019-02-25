import React, { Component } from 'react'
import axios from 'axios'

import './List.css'
import './Gate.css'
let List = class List extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            users: [],
            isLoaded: false,
            data: [
                ['网友推荐TOP10', 'top'],
                ['中信标准卡', 'norm'],
                ['特色主题卡', 'feature'],
                ['航空商旅卡', 'airline'],
                ['高端白银卡', 'high-end'],
                ['出国专享卡', 'abroad'],
                ['附属卡有礼'],
                ['推荐亲友办卡']
            ],
            gateType: 'top',
            gatenum: 0
        }
    }
    VFor(arr) {
        return arr.map((item, index) => {
            return <li key={index} className="card fl">
                <h2 className="card-tit">{item.name}</h2>
                <p className="card-poster">{item.poster}</p>
                <div className="card-border"></div>
                <div className="card-box">
                    <div className="card-pic fl">
                        <div>
                            <img src={item.imgurl} alt="" />
                        </div>
                        <div className="card-img">
                            <img src="https://cdn.citiccard.hunshitong.net/shenqing/images_2015/card_layer1.png" alt="" />
                        </div>
                    </div>
                    <div className="card-txt fr">
                        {(item.introduce).map((item1, index1) => {
                            return <p key={index1} className="card-introduce">{item1}</p>
                        })}
                    </div>
                </div>
                {(item.merit).map((it, indx) => {
                    return <span key={indx} className="card-merit">{it}</span>
                })}
                <a className="card-btn">免费申请</a>
            </li>
        })
    }
    vFor(arr) {
        return arr.map((item, index) => {
            return <li key={index} className="list-gate" onClick={this.changeGate.bind(this, index, item[1])}><span className={index === this.state.gatenum ? "gate-data active" : "gate-data"} >{item[0]}</span></li>
        })
    }
    changeGate(index, item, e) {
        this.setState({
            gatenum: index,
            gateType: item
        })
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://127.0.0.1:7001/find?type=' + item)
            .then(function (response) {
                _this.setState({
                    users: response.data.data,
                    isLoaded: true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
        // console.log(this.state.getGate == index)
    }
    componentWillMount() {
        console.log(this.props.gateType)
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://127.0.0.1:7001/find?type=top')
            .then(function (response) {
                _this.setState({
                    users: response.data.data,
                    isLoaded: true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
    }
    render() {
        return (
            <div>
                <div className="gate con">
                    <ul className="gate-list">
                        {this.vFor(this.state.data)}
                    </ul>
                </div>
                <ul className="cardsList con">
                    {this.VFor(this.state.users)}
                </ul>
            </div>

        )
    }
}
export default List

