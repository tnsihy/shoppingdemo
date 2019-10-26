import React from 'react'
import { Drawer, List, ListItem, ListItemText, Divider, ListItemIcon, IconButton, makeStyles, createStyles } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { useTheme } from '@material-ui/core/styles'

const leftNav = [
    { id: 'one', nav: '书城选购', icon: 'shangchengshouye', to: '/' },
    { id: 'two', nav: '我的购物车', icon: 'gouwuche', to: '/shopcar' },
    { id: 'three', nav: '我的订单', icon: 'quanbudingdan', to: '/order' }
]

const useStyles = makeStyles((theme) =>
    createStyles({
        drawer: {
            width: 240,
            flexShrink: 0,
        },
        drawerPaper: {
            width: 240,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        }
    })
)

export default function LeftNav() {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            open={this.props.open}
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={this.props.closeMethod}>
                    {theme.direction = 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />

            <List>
                {leftNav.map((item, index) => (
                    <ListItem key={item.id} button>
                        <ListItemIcon>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref={`#icon-` + item.icon}></use>
                            </svg>
                        </ListItemIcon>
                        <ListItemText primary={item.nav} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}