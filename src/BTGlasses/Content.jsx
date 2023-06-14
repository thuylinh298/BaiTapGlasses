import React, { Component } from 'react'
import GlassesCard from './GlassesCard';
const data=[
  {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./glassesImage/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 3,
      "price": 30,
      "name": "DIOR D6700HQ",
      "url": "./glassesImage/v3.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 4,
      "price": 70,
      "name": "DIOR D6005U",
      "url": "./glassesImage/v4.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 5,
      "price": 40,
      "name": "PRADA P8750",
      "url": "./glassesImage/v5.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 6,
      "price": 60,
      "name": "PRADA P9700",
      "url": "./glassesImage/v6.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 7,
      "price": 80,
      "name": "FENDI F8750",
      "url": "./glassesImage/v7.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 8,
      "price": 100,
      "name": "FENDI F8500",
      "url": "./glassesImage/v8.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 9,
      "price": 60,
      "name": "FENDI F4300",
      "url": "./glassesImage/v9.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }
];
export default class Content extends Component {
  state ={
    spChiTiet:{
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
  }
  renderGlass=()=>{
    return data.map((item,index)=>{
      return(
        <div className="col-2" key={index}>
             <GlassesCard item={item} change={this.changeGlasses}/>
        </div>
      )
    })
  }
  changeGlasses=(glassesClick)=>{
    this.setState({
      spChiTiet:glassesClick
    })
  }
  render() {
    const {url,name, desc} = this.state.spChiTiet;
    const contentCss ={
      backgroundColor:'rgba(63,63,63,0.5)'
    }
    const glass={
      top:'25%',
      left: '35%',
      width:'200px',
      filter:'opacity(0.7)'
    }
    const mota={
      left:'25%',
    }
    return (
      <div style={contentCss}>
        <div className='container'>
          <div className="row justify-content-around">
            <div className="col-lg-6 position-relative text-center">
              <img className='w-50 change' src="./glassesImage/model.jpg" alt="" />
              <img className='position-absolute' style={glass} src={url} alt="" />
                
              <div className='position-absolute bottom-0 w-50' style={mota}>
                <h2 className='text-primary'>{name}</h2>
                <p>{desc}</p>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img className='w-50' src="./glassesImage/model.jpg" alt="" />
            </div>
          </div>
          <div className="bg-white imgGlasses">
            <div className="row align-items-center">
                {this.renderGlass()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
