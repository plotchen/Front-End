import React from 'react'

import axios from 'axios'

import { Carousel, Flex, Grid, WingBlank } from 'antd-mobile';

// 导入 utils 中获取当前定位的城市数据
import { getCurrentCity } from '../../utils/index'

import './index.css'

const BASE_URL = 'http://localhost:8080';

//导航菜单的全局数据
const nav = [
    { id: 0, img: '/images/nav-1.png', title: '整租', path: '/home/list' },
    { id: 1, img: '/images/nav-2.png', title: '合租', path: '/home/list' },
    { id: 2, img: '/images/nav-3.png', title: '地图找房', path: '/home/map' },
    { id: 3, img: '/images/nav-4.png', title: '去出租', path: '/home/list' }
]

// 获取地理位置信息
navigator.geolocation.getCurrentPosition(position => {
    // position参数 是获取到当前位置
    console.log(position);
})

export class Index extends React.Component {

    state = {
        // 轮播图数据
        swipers: [],
        isSwipersLoaded: false,
        // 租房小组数据
        groups: [],
        // 最新资讯
        news: [],
        // 当前城市名称
        curCity: ''
    }

    // 获取轮播图数据的方法
    async getSwipers() {
        const res = await (await fetch(BASE_URL + '/home/swiper')).json()
        this.setState({
            swipers: res.body,
            isSwipersLoaded: true
        })
        // const { data: res } = await axios.get(BASE_URL + '/home/swiper')
        // // console.log(res)
        // this.setState({
        //     swipers: res.body,
        //     isSwipersLoaded: true
        // })
    }
    // 获取租房小组的数据方法
    async getGroups() {
        // const res = await (await fetch(BASE_URL + '/home/groups')).json()

        const { data: res } = await axios.get(BASE_URL + '/home/groups', {
            params: {
                area: 'AREA%7C88cff55c-aaa4-e2e0'
            }
        })

        // console.log(res);
        this.setState({
            groups: res.body
        })

    }
    // 获取最新资讯的数据方法
    async getNews() {
        const { data: res } = await axios.get(BASE_URL + '/home/news', {
            params: {
                area: 'AREA%7C88cff55c-aaa4-e2e0'
            }
        })
        // console.log(res);
        this.setState({
            news: res.body
        })
    }
    // 钩子事件 渲染完成拿到所有的数据 和 IP 定位
    async componentDidMount() {
        this.getSwipers()
        this.getGroups()
        this.getNews()
        const curCity = await getCurrentCity()
        this.setState({
            curCity: curCity.label
        })
        // 页面一加载完成就去获取城市信息，通过IP定位获取到当前城市的地址
        // const myCity = new window.BMap.LocalCity();
        // myCity.get(async res => {
        //     const {data: {body: result}} = await axios.get(BASE_URL + '/area/info?name=' + res.name)
        //     console.log(result);
        //     this.setState({
        //         curCity: result.label
        //     })
        // });
    }
    // 渲染轮播图
    renderSwipers() {
        return (
            this.state.swipers.map(({ id, imgSrc }) => (
                <a
                    key={id}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: 212 }}
                >
                    <img
                        src={`${BASE_URL}${imgSrc}`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                </a>
            ))
        )
    }

    // 搜索框
    rendersearch() {
        return (
            < Flex className="search-box" >
                {/* 左侧白色区域 */}

                < Flex className="search" >
                    {/* 位置 */}
                    < div className="location" onClick={() => this.props.history.push('/citylist')
                    }>
                        <span className="name">{this.state.curCity}</span>
                        <i className="iconfont icon-arrow" />
                    </div >
                    {/* 搜索表单 */}
                    < div className="form" onClick={() => this.props.history.push('/search')}>
                        <i className="iconfont icon-seach" />
                        <span className="text">请输入小区或地址</span>
                    </div >
                </Flex >
                {/* 右侧地图图标 */}
                < i className="iconfont icon-map" onClick={() => this.props.history.push('/map')} />
            </Flex >
        )
    }

    // 渲染轮播图下面的导航菜单
    renderNavs() {
        return (
            nav.map(({ id, img, title, path }) => (
                <Flex.Item key={id} onClick={() => this.props.history.push(path)}>
                    <img src={img} alt="" />
                    <h2>{title}</h2>
                </Flex.Item>
            ))
        )
    }

    // 租房小组和九宫格
    renderGroups() {
        return (
            <div>
                <h3 className="title">
                    租房小组<span className="more">更多</span>
                </h3>
                {/* 宫格组件 */}
                <Grid data={this.state.groups} columnNum={2} square={false} hasLine={false} renderItem={({ id, title, desc, imgSrc }) => (
                    <Flex className="group-item" justify="around" key={id}>
                        <div className="desc">
                            <p className="title">{title}</p>
                            <span className="info">{desc}</span>
                        </div>
                        <img src={BASE_URL + imgSrc} alt="" />
                    </Flex>
                )} />
            </div>
        )
    }

    // 最新资讯
    renderNews() {
        return (
            this.state.news.map(item => (
                <Flex className="news-item" key={item.id}>
                    <div className="imgwrap">
                        <img className="img" src={BASE_URL + item.imgSrc} alt="" />
                    </div>
                    <Flex className="content" direction="column" justify="between">
                        <h3 className="title">{item.title}</h3>
                        <Flex className="info" justify="between">
                            <span>{item.from}</span>
                            <span>{item.date}</span>
                        </Flex>
                    </Flex>
                </Flex>
            ))
        )
    }

    render() {
        const { isSwipersLoaded } = this.state
        return (
            <div className="index">
                {/* 轮播图 */}
                <div className="swipers">
                    {isSwipersLoaded ? <Carousel autoplay infinite>
                        {this.renderSwipers()}
                    </Carousel> : ''}
                </div>
                {/* 搜索框 */}
                {this.rendersearch()}
                {/* 导航菜单 */}
                <Flex className="nav">{this.renderNavs()}</Flex>
                {/* 租房小组 */}
                <div className="group">
                    {this.renderGroups()}
                </div>
                {/* 最新资讯 */}
                <div className="news">
                    <h3 className="group-title">最新资讯</h3>
                    <WingBlank size="md">{this.renderNews()}</WingBlank>
                </div>
            </div>
        )
    }
}