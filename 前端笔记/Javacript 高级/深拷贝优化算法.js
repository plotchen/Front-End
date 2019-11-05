function clone(target) {
    let duplicate = Array.isArray(target) ? [] : {}; // ��������������жϣ����ж����飬����Ҳ�Ƕ���
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            const el = target[key];
            duplicate[key] = el !== null && typeof el === 'object' ? clone(el) : el;
        }
    }
    return duplicate;
}