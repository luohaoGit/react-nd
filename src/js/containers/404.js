import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="center-center-column" style={{height: '100vh'}}>
        <span className="font-26">404! oops page not found...</span>
        <Link to="/" className="font-36 main-color">go back</Link>
      </div>
    )
  }
}