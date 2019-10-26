import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import clsx from 'clsx'

// import Store from './pages/Store'
// import ShopCar from './pages/ShopCar'
// import Order from './pages/Order'

import LeftNav from './Component/LeftNav'
import TopNav from './Component/TopNav'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true
    })
  }

  handleDrawerClose = () => {
    this.setState({
      open: false
    })
  }

  render() {

    return (
      <div>
        <TopNav open={this.state.open} openMethod={this.handleDrawerOpen} />
        <LeftNav open={this.state.open} closeMethod={this.handleDrawerOpen} />
      </div>
    );
  }
}

export default App
