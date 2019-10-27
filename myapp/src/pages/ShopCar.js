import React, { useState } from 'react'
import {
    makeStyles, createStyles, TableHead, TableRow,
    Paper, Table, TableCell, Container,
    TableBody, Button, Checkbox
} from '@material-ui/core'


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
        },
        countSpacing:{
            paddingLeft:theme.spacing(1),
            paddingRight:theme.spacing(1)
        },
        button:{
            border:'none',
            cursor:'pointer'
        },
        totalmoney:{
            marginLeft:theme.spacing(80)
        },
        handleDing:{
            backgroundColor:'#409EFF',
            color:'#fff',
            marginLeft:theme.spacing(80)
        }
    })
)

// ShopCar组件
export default function ShopCar() {
     
    const PLUS = Symbol('PLUS');
    const DECREASE = Symbol('DECREASE');

    // 获取localStorageshopData数据
    const [shopData, setShopData] = useState(JSON.parse(localStorage.shopData || '[]'))
    let [totalMoney,setTotalMoney] = useState(0)
    const classes = useStyles()
    
    // 操作商品的加减
    const oprate = (oprateMethod, oprateItem) => {
        // 从local拿出数据，因为是json.stingify过的，所以要先parse
        const preShopData = JSON.parse(localStorage.shopData)
        // 遍历数组
        preShopData.forEach(item=>{
            // 如果操作的对象跟数组里面的对象的id是同一个，那么操作的就是这种商品
            // 根据操作更改该对象的count属性值
            if(item.id === oprateItem.id){
                if(oprateMethod === PLUS) {
                    item.count++
                }else{  
                    if(item.count === 1){
                     alert('不能再减少了')
                    }else{
                     item.count--
                    }
                }
            }
        })
        // 使用setState使视图更新
        setShopData(preShopData)
        // 重新把数组json.stringify 然后存进local
        localStorage.shopData = JSON.stringify(preShopData)
    }

    const deleteClick = (index)=>{
        const preShopData = JSON.parse(localStorage.shopData)
        preShopData.splice(index,1)
        setShopData(preShopData)
        localStorage.shopData = JSON.stringify(preShopData)
    }

    // 选中时对总金额进行计算
    const changeCheckbox = (addItem, event)=>{
        const isChecked = event.target.checked
        const addItemMoney =  +(addItem.price * addItem.count).toFixed(2);
        if (isChecked) {
           setTotalMoney((+totalMoney + +addItemMoney).toFixed(2))
        } else {
           setTotalMoney((+totalMoney - +addItemMoney).toFixed(2))
        }
    }

    return (
        <div>
            <span className={classes.title}>我的购物车</span>
            <Container>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead className={classes.tabHead}>
                            <TableRow>
                                <TableCell>
                                    <Checkbox 
                                    />
                                </TableCell>
                                <TableCell width={70}>书本</TableCell>
                                <TableCell width={200}>书名信息</TableCell>
                                <TableCell>单价</TableCell>
                                <TableCell width={100}>数量</TableCell>
                                <TableCell>金额</TableCell>
                                <TableCell>操作</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shopData.map((item,index) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <Checkbox scope="row" onChange={(event)=>changeCheckbox(item, event)}/>
                                    </TableCell>
                                    <TableCell><img width="100%" src={item.img} alt={item.name} /></TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>￥{item.price}</TableCell>
                                    <TableCell>
                                        <button className={classes.button} onClick={()=>oprate(DECREASE,item)}>-</button>
                                        <span className={classes.countSpacing}>{item.count}</span>
                                        <button className={classes.button} onClick={()=>oprate(PLUS,item)}>+</button>
                                    </TableCell>
                                    <TableCell className={classes.jine}>￥{(item.price * item.count).toFixed(2)}</TableCell>
                                    <TableCell><Button variant="outlined" size="small" onClick={()=>deleteClick(index)}>删除</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <h3 className={classes.totalmoney}>共计<span>{totalMoney}</span>元</h3>
                <Button className={classes.handleDing} variant="outlined">提交订单</Button>
            </Container>
        </div>
    )
}