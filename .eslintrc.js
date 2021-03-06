module.exports = {
  root : true,
  env : { node : true },
  extends : ['airbnb'],
  rules : {
    'no-console' : 'error',
    'no-debugger' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle' : ['error', 'always-multiline'],
    semi : ['error', 'never'],
    'key-spacing' : [
      'error',
      {
        beforeColon : true,
        afterColon : true,
      },
    ],
    'space-before-function-paren' : ['error', 'always'],
    'arrow-parens' : ['error', 'always'],
    'eol-last' : ['error', 'always'],
    'object-property-newline' : [
      'error',
      { allowAllPropertiesOnSameLine : false },
    ],
    'object-curly-newline' : [
      'error',
      {
        ObjectExpression : {
          multiline : true,
          minProperties : 2,
        },
        ObjectPattern : {
          multiline : true,
          minProperties : 2,
        },
        ImportDeclaration : {
          multiline : true,
          minProperties : 2,
        },
        ExportDeclaration : 'always',
      },
    ],
    'max-len' : ['error', 160],
    'no-underscore-dangle' : 'off',
    'no-restricted-syntax' : 'off',
    'no-param-reassign' : 'off',
    'no-await-in-loop' : 'off',
    'import/no-dynamic-require' : 'off',
    'global-require' : 'off',
    'no-restricted-globals' : 'off',
    'no-useless-escape' : 'off',
    'prefer-destructuring' : 'off',
    'react/no-this-in-sfc' : 'off',
    'no-prototype-builtins' : 'off',
    'no-plusplus' : 'off',
    'no-case-declarations' : 'off',
    'arrow-body-style' : 'off',
    'no-bitwise' : 'off',
    'import/prefer-default-export' : 'off',
  },
  parserOptions : {
    parser : '@babel/eslint-parser',
    ecmaVersion : '2020',
  },
}
