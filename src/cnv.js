import Trigger from './trigger'

export default (canvas, filename, format = 'png') => {
  canvas.toBlob(function (blob) {
    var newImg = document.createElement('img')
    var url = URL.createObjectURL(blob)
    newImg.onload = function () {
      URL.revokeObjectURL(url)
    }
    Trigger.download(url, filename)
  }, `image/${format}`, 1)
}
