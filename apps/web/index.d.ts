declare module 'ts-loader' {
  /**
   * The options that can be passed to the ts-loader when it is used in Webpack.
   */
  interface LoaderOptions {
    /**
     * The directory to cache transpiled files in.
     * Default: node_modules/.cache/ts-loader
     */
    cacheDirectory?: string

    /**
     * The TypeScript compiler to use.
     * Default: 'typescript'
     */
    compiler?: string

    /**
     * Use this to specify a custom instance of TypeScript to use.
     * Default: undefined (uses the version of TypeScript specified in `compiler`)
     */
    instance?: string

    /**
     * The maximum number of times to retry emitting the compiled output in case of failure.
     * Default: 2
     */
    transpileOnly?: boolean

    /**
     * If true, only compile files in the configured `include` paths.
     * Default: false
     */
    onlyCompileBundledFiles?: boolean

    /**
     * The paths to include when compiling TypeScript files.
     * Default: undefined (all files are included)
     */
    include?: string[]

    /**
     * The paths to exclude when compiling TypeScript files.
     * Default: undefined (no files are excluded)
     */
    exclude?: string[]

    /**
     * The type of source map to generate.
     * Default: 'source-map'
     */
    sourceMap?: boolean

    /**
     * Use this to specify the type of modules in the generated JavaScript.
     * Default: 'commonjs'
     */
    module?: string

    /**
     * Use this to specify the target ECMAScript version for the generated JavaScript.
     * Default: 'es5'
     */
    target?: string
  }

  /**
   * The loader function that can be used in a Webpack configuration to compile TypeScript files.
   */
  function loader(options?: LoaderOptions): any

  export = loader
}
