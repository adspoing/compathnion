// 计数器
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { increase, decrease } from '../actions/count'
import SliderShow from '../components/Slider'
import "../css/main.css"


class Home extends Component {
    render() {
        const { number, increase, decrease } = this.props

        return (
            <div>
                <SliderShow />
                <div className="title1">What is Location Based Service?</div>
                Being in the right place creates a lot of business opportunities. This is because different services can be provided depending on where you are. This is called location-based services (LBS). It requires technologies on localization (knowing one's position), tracking (learning one's position over time), and navigation (guiding one from one place to another). Despite of much success of outdoor LBS based on Global Positioning System (GPS),  LBS is still in its infancy.

Compathnion Technology is a startup company with core teams from the Hong Kong University of Science and Technology which has significant achievements in developing innovative indoor localization technologies. Compathnion delivers the cost-effective product wherami, a software suite which offers business positioning solution making use of various handheld sensors (Wi-Fi, iBeacon BLE, magnetic fields, dead-reckoning/INS, etc.) to enable highly accurate localization, navigation, asset tracking and user behaviour analytics. wherami has gone through successful trials in airport, shopping malls, hospitals, exhibition centres, university campus, etc. 
            </div>
        )
    }
}

const getNumber = state => {
    return {
        number: state.update.number
    }
}

export default connect(
    getNumber,
    { increase, decrease }
)(Home)