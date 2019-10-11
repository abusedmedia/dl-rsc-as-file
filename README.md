### Download a resource as file in the browser

This library let the user downloads `txt`, `svg`, `img` or `canvas` resources with a convenient funcition call.


### Usage

Install the library with `NPM`

`npm install dl-rsc-as-file`

Check in `tests/` an example file

The global object is `downloadAs` with the following methods:
- `svg` to save a svg as .svg file
- `txt` to save a text as .txt file
- `cnv` to save a canvas as .png file
- `svgcnv` to save a svg as .png file


### Quick example

```html
<svg viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="10"></circle>
</svg>
<button>Download Svg as File</button>
```

```js
document.querySelector('button')
    .addEventListener('click', () => {
        downloadAs.svg('svg', 'myFile.svg')
})
```




### API

Download an inline SVG as file:

```js
downloadAs.svg('svg', 'myFile.svg')
```

Download a text as txt file:

```js
downloadAs.txt('Some text here', 'myFile.txt')
```

Download a canvas as file:

```js
downloadAs.cnv('canvas', 'myFile.png')
```

Download an inline svg as png file:

```js
downloadAs.svgcnv('svg', 'myFile.png')
```



### Release notes

- 1.0.0 First release



### TODOs

- Auto detect file extension
- Better method names
- Testing edge cases