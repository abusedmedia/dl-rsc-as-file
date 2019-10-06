### Download Resource As File

Let your user downloads `txt`, `svg`, `img` or `canvas` resources with a convenient funcition call.


### Usage

Install the library with `NPM`

`npm install download-rsc-as-file`

Check in `tests/` an example file

The global object is `downloadAs` with the following methods:
- svg to save a svg as .svg file
- txt to save a text as .txt file
- cnv to save a canvas as .png file
- svgcnv to save a svg as .png file


### API

Download an inline SVG as file:

```js
downloadAs.svg('#mySvg', 'myFile.svg')
```

Download a text into a textarea as txt file:

```js
downloadAs.txt('textarea', 'myFile.txt')
```

Download a canvas as file:

```js
downloadAs.cnv('#myCanvas', 'myFile.png')
```

Download an inline svg as png file:

```js
downloadAs.svgcnv('#mySvg', 'myFile.png')
```
