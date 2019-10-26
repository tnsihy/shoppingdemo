import React from 'react'

export default function Navigation() {

    const theme = useTheme()
    
    return (
        <div>
            {/* 顶部应用栏 */}
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
                    {leftNav.map((item) => (
                        <ListItem key={item.id} button component={Link} to={item.to}>
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
        </div>
    )
}