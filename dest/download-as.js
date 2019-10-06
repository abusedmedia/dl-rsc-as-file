(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.downloadAs = factory());
}(this, function () { 'use strict';

  let _trigger = null;

  const _triggerID = 'TRIGGER__' + Math.random();

  const trigger = {
    download(data, filename) {
      if (!document.getElementById(_triggerID)) {
        _trigger = document.createElement('a');
        _trigger.id = _triggerID;
        _trigger.target = '_blank';
        document.body.appendChild(_trigger);
      } else {
        _trigger = document.getElementById(_triggerID);
      }

      _trigger.download = filename;
      _trigger.href = data;

      _trigger.click();
    }

  };

  var svg = ((selector, filename) => {
    const _svg = document.querySelector(selector).outerHTML;

    const _svgEncoded = _svg.replace(/"/g, '\'').replace(/[\r\n%#()<>?\[\\\]^`{|}]/g, encodeURIComponent);

    const _svgData = 'data:image/svg+xml;utf8,' + _svgEncoded;

    trigger.download(_svgData, filename);
  });

  var txt = ((src, filename) => {
    var uri = 'data:text/plain;charset=utf-8,' + encodeURIComponent(src);
    trigger.download(uri, filename);
  });

  var cnv = ((canvas, filename, format = 'png') => {
    canvas.toBlob(function (blob) {
      var newImg = document.createElement('img');
      var url = URL.createObjectURL(blob);

      newImg.onload = function () {
        URL.revokeObjectURL(url);
      };

      trigger.download(url, filename);
    }, `image/${format}`, 1);
  });

  var svgpng = ((selector, filename) => {
    const svg = document.querySelector(selector);
    const xml = new XMLSerializer().serializeToString(svg);
    const svg64 = btoa(xml);
    const svgData = 'data:image/svg+xml;base64,' + svg64;
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    const image = new Image();

    image.onload = function () {
      ctx.drawImage(image, 0, 0);
      cnv(canvas, filename);
    };

    image.src = svgData;
  });

  var index = {
    svg,
    txt,
    cnv,
    svgpng
  };

  return index;

}));
//# sourceMappingURL=download-as.js.map
