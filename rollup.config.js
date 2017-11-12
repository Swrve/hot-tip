import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

const config = {
  input: 'src/index.js',
  external: [
    'react',
    'redux',
    'react-redux'
  ],
  globals: {
    'react': 'React',
    'redux': 'Redux',
    'react-redux': 'ReactRedux',
  },
  output: {
    exports: 'named',
    format: 'umd'
  },
  name: 'HotTip',
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx']
    }),
    babel({
      exclude: '**/node_modules/**'
    }),
    commonjs()
  ]
}

export default config
