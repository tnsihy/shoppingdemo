import React from 'react'
import {
    makeStyles, createStyles, TableHead, TableRow,
    Paper, Table, TableCell, Container,
    TableBody, Button, Checkbox
} from '@material-ui/core'

// 先定义一个数据
const carBook = [
    {
        id: '0001',
        img: 'http://img3m1.ddimg.cn/29/32/26912981-1_b_4.jpg',
        name: 'Java从入门到精通',
        price: '61.40',
        count: '10'
    }, {
        id: '0002',
        img: 'http://img3m0.ddimg.cn/13/17/22722790-1_b_6.jpg',
        name: 'JavaScript权威指南',
        price: '133.40',
        count: '10'
    }
]

const useStyles = makeStyles((theme) =>
    createStyles({
        title: {
            paddingBottom: theme.spacing(2)
        },
        root: {
            width: '90%',
            overflowX: 'auto'
        },
        table: {
            minWidth: 650
        },
        tabHead: {
            backgroundColor: '#409EFF'
        },
        white: {
            color: '#fff'
        },
        jine: {
            color: 'red'
        }
    })
)
export default function ShopCar() {

    const classes = useStyles()
    const tableHead = ['书本', '书名信息', '单价', '数量', '金额', '操作']
    return (
        <div>
            <span className={classes.title}>我的购物车</span>
            <Container>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead className={classes.tabHead}>
                            <TableRow>
                                <TableCell></TableCell>
                                {tableHead.map((item) => (
                                    <TableCell className={classes.white}>{item}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {carBook.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell><img width="25%" src="http://img3m1.ddimg.cn/29/32/26912981-1_b_4.jpg" alt="" /></TableCell>
                                    <TableCell scope="row">{item.name}</TableCell>
                                    <TableCell>￥{item.price}</TableCell>
                                    <TableCell>1</TableCell>
                                    <TableCell className={classes.jine}>￥0.00</TableCell>
                                    <TableCell><Button>删除</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Container>
        </div>
    )
}