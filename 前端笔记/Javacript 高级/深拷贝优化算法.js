function clone(target) {
    let duplicate = Array.isArray(target) ? [] : {}; // 对象和数组类型判断，先判断数组，数组也是对象。
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            const el = target[key];
            duplicate[key] = el !== null && typeof el === 'object' ? clone(el) : el;
        }
    }
    return duplicate;
}