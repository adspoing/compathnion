import React ,{ Component }  from 'react';
import ReactDOM from 'react-dom'
import Slider from './slider.jsx';
var slides = [{
    background: "./imgs/1.jpg",
  }, {
    background: "./imgs/2.jpg",
  }, {
    background: "./imgs/3.jpg",
  },{
    background: "./imgs/4.jpg",
  },{
    background: "./imgs/Cyber01.jpg",
  },{
    background: "./imgs/Cyber02.jpg",
  },{
    background: "./imgs/HKIA00.jpg",
  },{
    background: "./imgs/HKIA01.jpg",
  },{
    background: "./imgs/HKIA02.jpg",
  },{
    background: "./imgs/HKIA03.jpg",
  },{
    background: "./imgs/HKUST01.jpg",
  },{
    background: "./imgs/HKUST02.jpg",
  },{
    background: "./imgs/IMG-20151215-WA0012.jpg",
  },{
    background: "./imgs/LBS1_eng.png",
  },{
    background: "./imgs/Oly01.jpg",
  }];

export default class SliderShow extends Component {
   render() {
        return (
         	< Slider slides= {slides} time="4000"/ >
         	)
 }
}