import Trigger from './trigger'

export default (src, filename) => {
  var uri = 'data:text/plain;charset=utf-8,' + encodeURIComponent(src)
  Trigger.download(uri, filename)
}
