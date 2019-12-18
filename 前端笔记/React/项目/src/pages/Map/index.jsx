import React from 'react'

// 导入公共组件
import NavHeader from '../../components/NavHeader/index'

import './index.css'

export class Map extends React.Component {
    // 初始化地图实例，当页面初始化完成后加载地图
    
    componentDidMount() {
        // 注意：在react 脚手架中全局对象需要使用 window来访问，否则会报错
        const map = new window.BMap.Map('container')
        // 设置中心点坐标
        const point = new window.BMap.Point(116.404, 39.915);
        // 初始化地图，显示地图
        map.centerAndZoom(point, 15);
    }
    render() {
        return (
            <div className="map">
                <NavHeader {...this.props}>
                    地图找房
                </NavHeader>
                {/* 地图容器 */}
                <div id="container"></div>
            </div>
        )
    }
}