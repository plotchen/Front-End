import React from 'react'
import { Route } from 'react-router-dom'
// 导入子路由
import { Index } from '../Index'
import { HouseList } from '../HouseList'
import { News } from '../News'
import { Profile } from '../Profile'
// 导入TabBar
import { TabBar } from 'antd-mobile';

import './home.css'


const tabItems = [
    { path: '/home', title: '首页', icon: 'icon-ind' },
    { path: '/home/list', title: '找房', icon: 'icon-findHouse' },
    { path: '/home/news', title: '资讯', icon: 'icon-infom' },
    { path: '/home/profile', title: '我的', icon: 'icon-my' }
]
const tab = [
    { path: '/home', exact: true, component: Index },
    { path: '/home/list', component: HouseList },
    { path: '/home/news', component: News },
    { path: '/home/profile', component: Profile }
]

export class Home extends React.Component {
    state = {
        // 默认选项菜单项 
        selectedTab: this.props.location.pathname
    }

    // componentDidUpdate(prevprops) {
    //     // 拿路由地址之前和当前的路由地址来判断是否切换
    //     if (this.props.location.pathname !== prevprops.location.pathname) {
    //         this.setState({
    //             selectedTab: this.props.location.pathname
    //         })
    //     }
    // }
    // 另一种高亮钩子事件
    shouldComponentUpdate(nextProps) {
        // 手动改变数据
        this.state.selectedTab = nextProps.location.pathname
        // 必须返回true或者false
        return true
    }
    
    // 渲染子路由
    renderRoute() {
        // console.log(tab);
        return (
            tab.map(({ path, component, exact }) => <Route key={path} path={path} component={component} exact={exact} />)
        )
    }

    // 渲染TabBar 
    renderTabBarItem() {
        return tabItems.map(({ path, title, icon }) => <TabBar.Item
            title={title}
            key={title}
            icon={<i className={`iconfont ${icon}`} />}
            selectedIcon={<i className={`iconfont ${icon}`} />}
            selected={this.state.selectedTab === path}
            onPress={() => {
                this.setState({
                    selectedTab: path
                });
                //路由切换
                this.props.history.push(path)
            }}
        >
        </TabBar.Item>)
    }

    render() {
        //打印看地址是哪个
        // console.log(this.props.location.pathname);
        return (
            <div className="home">
                {/* 渲染的子路由 */}
                {/* {tab.map(({ path, component, exact }) => <Route key={path} path={path} component={component} exact={exact} />)} */}
                {this.renderRoute()}
                <TabBar tintColor="#21b97a" noRenderContent={true} barTintColor="white">
                    {this.renderTabBarItem()}
                </TabBar>
            </div>
        )
    }
}