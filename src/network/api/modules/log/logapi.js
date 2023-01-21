import qs from 'querystring'

const prefix = document.location.protocol + '//localhost:8080'
export function getAll (data) {
  return window.request.get(prefix + `/test/log/onetest?${qs.stringify(data)}`)
}
export function getAll2 (data) {
  return window.request.post(prefix + '/test/log/onetest', data)
}
