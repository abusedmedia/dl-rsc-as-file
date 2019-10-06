import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dest/download-as.js',
    format: 'umd',
    name: 'downloadAs',
    sourcemap: true
  },
  watch: {
    exclude: 'dest/*',
    include: 'src/**'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]

}
