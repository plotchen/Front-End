import React from 'react'

import { NavBar } from 'antd-mobile'

import './index.css'

export default function NevHeader({children, history}) {
    return (
        <NavBar
            className="navbar"
            mode="light"
            icon={<i className="iconfont icon-back" />}
            onLeftClick={() => history.go(-1)}
        >
            {children}
                </NavBar>
    )
}
