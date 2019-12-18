import axios from 'axios'

const BASE_URL = 'http://localhost:8080'
export const getCurrentCity = () => {
    // 判断 localStorage 中是否有定位城市
    // 本地储存的数据都是字符串，所以我们要用 JSON.parse() 转换成对象
    const localCity = JSON.parse(localStorage.getItem('hkzf_city'))
    if (!localCity) {
        // 如果没有，就使用首页中获取定位城市的代码来获取，并且储存到本地存储中，然后返回该城市数据
        return new Promise((resolve, reject) => {
            const curCity = new window.BMap.LocalCity();
            curCity.get(async res => {
                try {
                    const { data: { body: result } } = await axios.get(URL + '/area/info?name=' + res.name)
                    //要的就是 result.label 
                    // 存储到本地
                    localStorage.setItem('hkzf_city', JSON.stringify(result))
                    // 返回该城市数据
                    resolve(result)
                } catch (error) {
                    reject(error)
                }

            })
        })
    }
    // 如果有，直接返回本地储存中的城市数据
    // 注意：因为上面为了出来异步操作，使用了Promise，因此，为了该函数统一，此处也应该用Promise
    // 因为此处的Promise不会失败，所以，此处返回一个成功的就行了
    return Promise.resolve(localCity)

}