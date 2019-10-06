import Trigger from './trigger'

export default (selector, filename) => {
  const _svg = document.querySelector(selector).outerHTML
  const _svgEncoded = _svg.replace(/"/g, '\'').replace(/[\r\n%#()<>?\[\\\]^`{|}]/g, encodeURIComponent)
  const _svgData = 'data:image/svg+xml;utf8,' + _svgEncoded
  Trigger.download(_svgData, filename)
}
