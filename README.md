# electron-compile-webpack-bug

```
$ yarn install
$ npm run start
  
  > electron-compile-webpack-bug@1.0.0 start C:\workspace\js\electron-compile-webpack-bug
  > electron .
  
  
  App threw an error during load
  C:\workspace\js\electron-compile-webpack-bug\node_modules\webpack\lib\WebpackOptionsApply.js:209
                          comment = legacy && modern ? "\n/*\n//@ sourceMappingURL=[url]\n//# sourceMappingURL=node_modules\webpack\lib\[url]\n*\" :
                                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  SyntaxError: Invalid or unexpected token
      at Object.exports.runInThisContext (vm.js:78:16)
      at Module._compile (module.js:543:28)
      at Object.require.extensions.(anonymous function) [as .js] (C:\workspace\js\electron-compile-webpack-bug\node_modules\electron-compile\lib\require-hook.js:75:14)
      at Module.load (module.js:488:32)
      at tryModuleLoad (module.js:447:12)
      at Function.Module._load (module.js:439:3)
      at Module.require (module.js:498:17)
      at require (internal/module.js:20:19)
      at Object.<anonymous> (C:\workspace\js\electron-compile-webpack-bug\node_modules\webpack\lib\webpack.js:10:29)
      at Object.<anonymous> (C:\workspace\js\electron-compile-webpack-bug\node_modules\webpack\lib\webpack.js:122:3)

```