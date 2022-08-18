module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
   [ "@vue/app", { useBuiltIns: "entry" } ]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
