module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    //requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    semi:[2, 'never'],
    'no-console':'off',
    'vue/max-attributes-per-line':'off',
    'prettier/prettier':['error', { semi: false }]
  }

}
