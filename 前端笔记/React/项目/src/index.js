import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
// 导入antd-mobile样式
import 'antd-mobile/dist/antd-mobile.css'

import 'react-virtualized/styles.css'

// 导入字体图标库的样式文件
import './assets/fonts/iconfont.css'
//我们自己写的全局样式需要放在组件库样式后面导入，因为后面的样式会覆盖前面的样式
import './index.css';

// axios.defaults.baseURL = 'http://localhost:8080/'
// React.prototype.$http = axios

ReactDOM.render(<App />, document.getElementById('root'));
