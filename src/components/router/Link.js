import React, { Component, PropTypes } from 'react'

export class Link extends Component {
  
  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  handleChick = (event) => {
    event.preventDefault()
    // history.pushState(null, '', this.props.to)
    // console.dir(this.context)
    this.context.linkHandler(this.props.to)
  }
  
  render () {
    const activeClass = this.context.route === this.props.to ? 'active' : ''
    return <a href="#" className={activeClass} onClick={this.handleChick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}