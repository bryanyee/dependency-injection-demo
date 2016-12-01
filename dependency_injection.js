export function getTestable(url, httpRequest = new XMLHttpRequest()) {
  return new Promise((resolve, reject) => {
    httpRequest.onload = onHttpResponse(resolve, reject)
    httpRequest.open('GET', url)
    httpRequest.send()
  })
}

export const onHttpResponse = (resolve, reject) => (event) => {
  if (event.status !== 200) {
    return reject(new Error(`Status code was ${event.status}, not 200`))
  }
  
  resolve(event.responseText)
}