const dependencies = Object.keys(require('./package.json').dependencies)

const dist = 'dist'

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/bundle.esm.js`,
      format: 'esm'
    },
    {
      file: `${dist}/bundle.cjs.js`,
      format: 'cjs'
    }
  ],
  external: dependencies
}
