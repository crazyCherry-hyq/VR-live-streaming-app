const baseUrl = 'http://localhost:8080'
export default (url = '', data = {}, type = 'GET', header = {}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      method: type,
      url: baseUrl + url,
      data: data,
      header: header,
      dataType: 'json'         
    }).then((response) => {
      setTimeout(function() {
        uni.hideLoading()
      }, 200)
      const [error, res] = response        
      resolve(res.data)
    }).catch(error => {
      const [err, res] = error
      reject(err)
    })
  })
}
