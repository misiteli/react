import React, { Component } from 'react'
import './Gate.css'
import axios from 'axios'

let Gate = class Gate extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
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
    changeGate(index,item,e) {
        this.setState({
            gatenum: index,
            gateType: item
        })
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://127.0.0.1:7001/find?type='+item)
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
    vFor(arr) {
        return arr.map((item, index) => {
            return <li key={index} className="list-gate" onClick={this.changeGate.bind(this,index,item[1])}><span onClick={this.props.changeGate.bind(this,item[1])} className={index === this.state.gatenum ? "gate-data active" : "gate-data"} >{item[0]}</span></li>
        })
    }
    render() {
        return (
            <div className="gate con">
                <ul className="gate-list">
                    {this.vFor(this.state.data)}
                </ul>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return state
    },
    (dispatch) => {
        return {
            changeGate(item,e) {
                
                dispatch({
                    type: 'changeGate',
                    users: this.state.users
                })
            }

        }
    }
)(Gate)