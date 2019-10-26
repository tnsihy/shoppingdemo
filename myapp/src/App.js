import React, { useState,createContext } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import clsx from 'clsx'

import Store from './pages/Store'
import ShopCar from './pages/ShopCar'
import Order from './pages/Order'

import {
  makeStyles, createStyles
} from '@material-ui/core'

import Navigation from './components/Navigation'

const BookContext = createContext({
  
})

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -240,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }
  })
)

function App() {

  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Router>
      <div className={classes.root}>
        {/* 应用栏 */}
        <BookContext.Provider value={this.state}>
          <Navigation />
        </BookContext.Provider>

        <main className={clsx(classes.content, {
          [classes.contentShift]: open
        })}>
          <div className={classes.drawerHeader} />
          <Route path="/" exact component={(() =>
            <Redirect to="/" />
          ), Store}></Route>
          <Route path="/shopcar" component={ShopCar}></Route>
          <Route path="/order" component={Order}></Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
