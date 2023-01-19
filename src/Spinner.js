import React, { Component } from 'react'
import loa from './loa.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loa} alt="loa"/>
      </div>
    )
  }
}
