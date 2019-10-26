import React, { Component } from 'react'
import clsx from 'clsx'
import { AppBar, Typography, Toolbar, makeStyles, createStyles,IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) =>
    createStyles({
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - 240px)`,
            marginLeft: 240,
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
        }
    })
)

export default function TopNav(){

    const open = this.props.open
    console.log(open)
    const classes = useStyles()

    return (
        <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
            [classes.appBarShift]: open
        })}
    >
        <Toolbar>
            <IconButton
                edge="start"
                className={clsx(classes.menuButton, this.props.open && classes.hide)}
                onClick={this.props.openMethod}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6">购物书城</Typography>
        </Toolbar>
    </AppBar>
    )
}
