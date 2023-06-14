import React, { Component } from 'react'

export default class Hearder extends Component {
  render() {
    const styleText={
        color: 'white',
        textAlign:'center',
        backgroundColor:'rgba(63,63,63,0.9)',
        marginBottom:'0px'
    }
    return (
      <div>
        <h1 className='p-5' style={styleText}>TRY GLASSES APP ONLINE</h1>
      </div>
    )
  }
}
