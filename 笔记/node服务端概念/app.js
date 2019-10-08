var http = require('http')
var url = require('url')
var querystring = require('querystring')
var app = http.createServer()
app.on('request', (req, res)=>{
	var {query, pathname} = url.parse(req.url, true)
	// debugger
	if(pathname == '/' || pathname == '/index'){
		res.end('hello index')
	}else if(pathname == '/login'){
		
		if(req.method == "GET"){
			console.log('query', query)
			res.writeHead(200,{
				'content-type': 'text/html;charset=utf8'
			})
			res.end("<h1>登录成功</h1>")
		}else if(req.method == "POST"){
			var params = ''
			req.on('data', (str)=>{
				params += str;
			})
			req.on('end',()=>{
				// console.log('params',params)
				var o = querystring.parse(params)
				console.log('o',o)
				res.writeHead(200,{
					'content-type': 'text/html;charset=utf8'
				})
				res.end("<h1>登录成功</h1>")
			})
		}

	}else{
		res.end('hello web server')
	}
})
app.listen(3000)
console.log('hello web')