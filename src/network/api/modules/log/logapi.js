import qs from 'querystring'

const prefix = document.location.protocol + '//windjump.top'
export function getAll (data) {
  return window.request.get(prefix + `/test/log/onetest?${qs.stringify(data)}`)
}
export function getAll2 (data) {
  return window.request.post(prefix + '/test/log/onetest', data)
}
