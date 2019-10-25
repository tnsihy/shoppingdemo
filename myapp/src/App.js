import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import clsx from 'clsx'
import {useTheme} from '@material-ui/core/styles'

import Store from './pages/Store'
import ShopCar from './pages/ShopCar'
import Order from './pages/Order'

import {
  AppBar, Typography, Toolbar, IconButton,
  makeStyles, createStyles, Drawer, List,
  ListItem, ListItemText, Divider,ListItemIcon
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const drawerWidth = 240
const leftNav = [
  { id: 'one', nav: '书城选购', icon: 'shangchengshouye',to:'/'},
  { id: 'two', nav: '我的购物车', icon: 'gouwuche',to:'/shopcar'},
  { id: 'three', nav: '我的订单', icon: 'quanbudingdan',to:'/order' }
]

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: '#fff'
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
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
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      {/* 应用栏 */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">购物书城</Typography>
        </Toolbar>
      </AppBar>

      {/* 临时抽屉 左边导航 */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={open}
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction = 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
          <List>
            {leftNav.map((item, index) => (
              <ListItem key={item.id} button component={Link} to={item.to}>
                <ListItemIcon>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref={`#icon-`+ item.icon}></use>
                  </svg>
                </ListItemIcon>
                <ListItemText primary={item.nav} />
              </ListItem>
            ))}
          </List>
      </Drawer>
    </div>
  );
}

export default App;
