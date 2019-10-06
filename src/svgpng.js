import cnv from './cnv'

export default (selector, filename) => {
  const svg = document.querySelector(selector)
  const xml = new XMLSerializer().serializeToString(svg)
  const svg64 = btoa(xml)
  const svgData = 'data:image/svg+xml;base64,' + svg64

  const canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 200

  const ctx = canvas.getContext('2d')

  const image = new Image()
  image.onload = function () {
    ctx.drawImage(image, 0, 0)
    cnv(canvas, filename)
  }
  image.src = svgData
}
