import React, { Component } from 'react'
import './Gate.css'
import { connect } from 'react-redux'
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
            gateType: 'top'
        }
    }
    changeGate(index,item,e) {
        console.log(item)
        this.setState({
            getenum: index,
            gateType: item
        })
        // console.log(this.state.getGate == index)
    }
    vFor(arr) {
        return arr.map((item, index) => {
            return <li key={index} className="list-gate" onClick={this.changeGate.bind(this,index,item[1])}><span onClick={this.props.changeGate.bind(this)} className={index === this.state.getenum ? "gate-data active" : "gate-data"} >{item[0]}</span></li>
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
        console.log(state)
        return state
    },
    (dispatch) => {
        return {
            changeGate() {
                
                dispatch({
                    type: 'changeGate',
                    gateType: this.state.gateType
                })
            }

        }
    }
)(Gate)