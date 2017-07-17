let baseUrl = ''
let routerMode = 'history'
let imgBaseUrl = 'http://images.cangdu.org/'
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8080'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://apistore.baidu.com'
}
export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
