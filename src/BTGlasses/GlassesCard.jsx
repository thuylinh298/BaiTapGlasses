import React, { Component } from 'react'

export default class GlassesCard extends Component {
  render() {
    const {item,change}=this.props;
    return (
        <img className='w-100 IMGglasses' src={item.url} alt="" onClick={()=>{change(item)}} />
      
    )
  }
}
