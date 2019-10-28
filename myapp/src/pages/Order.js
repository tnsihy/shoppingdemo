import React from 'react'
import { makeStyles,createStyles,Paper,Container 
}from '@material-ui/core'

const useStyles = makeStyles((theme) =>
    createStyles({
        root:{
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        title: {
            paddingBottom: theme.spacing(2)
        },
        paper:{
            minWidth:1000,
            margin:`${theme.spacing(1)}px auto`,
            padding:theme.spacing(2),
            textAlign:'center'
        }
    })
)

export default function Order(){
    const classes = useStyles()
    const preOrderList = JSON.parse(localStorage.orderList) || "[]"
    console.log(preOrderList)

    return (
        <div className={classes.root}>
            <span className={classes.title}>我的订单</span>
            <Container>
                <Paper></Paper>
            </Container>
            order
        </div>
    )
}