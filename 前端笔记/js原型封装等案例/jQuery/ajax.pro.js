function aj(url, data) {
    return new Promise(function(resolve, reject) {
        $.ajax(url, {
            data,
            success: resolve,
            error: reject
        });
    });
}

async function x() {
    try {
        const res = await aj('https://www.liulongbin.top:8082/api/get', { b: 2 });
        console.log(res);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('永远都会执行');
    }
}

x()
