import React, { Component } from 'react'
import Content from './Content'
import Hearder from './Hearder'
export default class Layout extends Component {
  render() {
    const bgImg={
      backgroundImage: `URL('./glassesImage/background.jpg')`,
      backgroundRepeat:'no-repeat',
      backgroundSize: '100%'
      

    }
    return (
      <div className='bgImg' style={bgImg}>
        <Hearder/>
        <Content/>
      </div>
    )
  }
}
