import React from 'react'

// 导入公共组件
import NavHeader from '../../components/NavHeader/index'

import axios from 'axios'
import { NavBar, Toast } from 'antd-mobile'

// 导入 List 组件
import { List, AutoSizer } from 'react-virtualized'

import './index.css'
// 导入 utils 中获取当前定位城市的方法
import { getCurrentCity } from '../../utils'

const BASE_URL = 'http://localhost:8080';

const HOUSE_CITY = ['北京', '上海', '广州', '深圳']

// 数据格式化的方法
// list: [{}, {}]
const formatCityData = list => {
    const cityList = {}
    // const cityIndex = []

    // 1 遍历list数组
    list.forEach(item => {
        // 2 获取每一个城市的首字母
        const first = item.short.substr(0, 1)
        // 3 判断 cityList 中是否有该分类
        if (cityList[first]) {
            // 4 如果有，直接往该分类中push数据
            // cityList[first] => [{}, {}]
            cityList[first].push(item)
        } else {
            // 5 如果没有，就先创建一个数组，然后，把当前城市信息添加到数组中
            cityList[first] = [item]
        }
    })
    // 获取索引数据
    const cityIndex = Object.keys(cityList).sort()
    return {
        cityList,
        cityIndex
    }
}


// 索引（A、B等）的高度
const TITLE_HEIGHT = 36
// 每个城市名称的高度
const NAME_HEIGHT = 50

// 封装出来字母索引的方法
function formatCityIndex(letter) {
    switch (letter) {
        case '#':
            return '当前定位'

        case 'hot':
            return '热门城市'
        default:
            return letter.toUpperCase()
    }
}

export class CityList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityList: {},
            cityIndex: [],
            activeIndex: 0
        }

        // 创建ref对象
        this.cityListComponent = React.createRef()
    }

    async componentDidMount() {
        await this.getCityList()
        // 调用 measureAllRows 提前计算，实现精确跳转
        // 调用这个方法的时候，需要保证 List组件已经有数据了，否则就会报错
        this.cityListComponent.current.measureAllRows()
    }

    // 获取城市列表数据的方法
    async getCityList() {
        const res = await axios.get(BASE_URL + '/area/city?level=1')
        const { cityList, cityIndex } = formatCityData(res.data.body)

        // 获取热门城市数据
        const hotRes = await axios.get(BASE_URL + '/area/hot')
        cityList['hot'] = hotRes.data.body
        cityIndex.unshift('hot')

        // 获取当前定位城市
        const curCity = await getCurrentCity()
        cityList['#'] = [curCity]
        cityIndex.unshift('#')

        // console.log(cityList, cityIndex, curCity)
        this.setState({ cityList, cityIndex })
    }

    changeCity({ label, value }) {
        // console.log(city);
        if (HOUSE_CITY.indexOf(label) > -1) {
            localStorage.setItem('hkzf_city', JSON.stringify({ label, value }))
            this.props.history.go(-1)
        } else {
            Toast.info('该城市暂无数据', 1)
        }
    }

    //List组件渲染没一行的方法 
    rowRenderer({
        key, // Unique key within array of rows
        index, // 索引号
        isScrolling, // 当前项是否正在滚动中
        isVisible, // 当前项在 List 中是可见的
        style // 注意：重点属性，一定要给每一个行数据添加该样式！作用：指定每一行的位置
    }) {

        const { cityIndex, cityList } = this.state
        const letter = cityIndex[index]
        // console.log(letter);

        // 获取指定字母索引下的城市列表数据
        // console.log(cityList[letter]);

        return (
            <div key={key} style={style} className="city">
                <div className="title">{formatCityIndex(letter)}</div>
                {cityList[letter].map(item => (
                    <div onClick={this.changeCity.bind(this, item)} className="name" key={item.value}>{item.label}</div>
                ))}

            </div>
        )
    }
    // 创建动态计算每一行高度的方法
    getRowHeight({ index }) {
        // console.log(index);
        // 索引标题高度 + 城市数量 * 城市名称高度
        const { cityList, cityIndex } = this.state
        return TITLE_HEIGHT + cityList[cityIndex[index]].length * NAME_HEIGHT
    }

    // 封装右侧索引的方法
    renderCityIndex() {
        const { cityIndex, activeIndex } = this.state
        return cityIndex.map((item, index) => (
            <li className="city-index-item" key={item} onClick={() => {
                this.cityListComponent.current.scrollToRow(index)
            }}>
                <span className={activeIndex === index ? 'index-active' : ''}>
                    {item === 'hot' ? '热' : item.toUpperCase()}
                </span>
            </li>
        ))
    }
    // 用于获取List组件中渲染行的信息
    onRowsRendered({ startIndex }) {
        // console.log(startIndex);
        if (this.state.activeIndex !== startIndex) {
            this.setState({
                activeIndex: startIndex
            })
        }
    }

    render() {
        return (
            <div className="citylist">
                {/* 顶部导航栏 */}
                <NavHeader {...this.props}>
                    城市选择
                </NavHeader>
                {/* <NavBar
                    className="navbar"
                    mode="light"
                    icon={<i className="iconfont icon-back" />}
                    onLeftClick={() => this.props.history.go(-1)}
                >
                    城市选择
                </NavBar> */}
                {/* 城市列表 */}
                <AutoSizer>
                    {({ width, height }) => (
                        <List
                            scrollToAlignment='start'
                            ref={this.cityListComponent}
                            width={width}
                            height={height}
                            rowCount={this.state.cityIndex.length}
                            rowHeight={this.getRowHeight.bind(this)}
                            rowRenderer={this.rowRenderer.bind(this)}
                            onRowsRendered={this.onRowsRendered.bind(this)}
                        />
                    )}
                </AutoSizer>

                {/* 右侧索引列表 */}
                <ul className="city-index">
                    {this.renderCityIndex()}
                </ul>
            </div>
        )
    }
}
