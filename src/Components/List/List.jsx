import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './List.css'
let List = class List extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            users: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://localhost:8080/users/findUser')
            .then(function (response) {
                _this.setState({
                    users: response.data,
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
                            <img src="https://cdn.citiccard.hunshitong.net/shenqing/images_2015/card_layer1.png" alt=""/>
                        </div>
                    </div>
                    <div className="card-txt fr">
                        {(item.introduce).map((item1,index1) => {
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
    render() {
        return (
            <ul className="cardsList con">
                {this.VFor(this.state.users)}
            </ul>
        )
    }
}
export default connect(
    (state) => {
        return state
    },
    (dispatch) => {
        return {

        }
    }
)(List)
