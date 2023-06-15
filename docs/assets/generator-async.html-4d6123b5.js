const e=JSON.parse('{"key":"v-68d4943b","path":"/zh/front-end/js-es/es6/generator-async.html","title":"Generator 异步应用","lang":"zh-CN","frontmatter":{"title":"Generator 异步应用","icon":"asynchronous","time":"2020-6-8","category":"Web前端","tag":"ECMA Script6","footer":"天空海阔, 要做最坚强的泡沫","description":"异步编程对 JavaScript 语言太重要。Javascript 语言的执行环境是“单线程”的，如果没有异步编程，根本没法用，非卡死不可。本章主要介绍 Generator 函数如何完成异步操作。 传统方法 ES6 诞生以前，异步编程的方法，大概有下面四种。 回调函数; 事件监听; 发布/订阅; Promise 对象; Generator 函数将 Ja...","head":[["meta",{"property":"og:url","content":"https://harryxiong24.github.io/zh/front-end/js-es/es6/generator-async.html"}],["meta",{"property":"og:site_name","content":"Harry Xiong"}],["meta",{"property":"og:title","content":"Generator 异步应用"}],["meta",{"property":"og:description","content":"异步编程对 JavaScript 语言太重要。Javascript 语言的执行环境是“单线程”的，如果没有异步编程，根本没法用，非卡死不可。本章主要介绍 Generator 函数如何完成异步操作。 传统方法 ES6 诞生以前，异步编程的方法，大概有下面四种。 回调函数; 事件监听; 发布/订阅; Promise 对象; Generator 函数将 Ja..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-15T10:30:18.000Z"}],["meta",{"property":"article:author","content":"Harry Xiong"}],["meta",{"property":"article:tag","content":"ECMA Script6"}],["meta",{"property":"article:published_time","content":"2020-06-07T16:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-15T10:30:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Generator 异步应用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-07T16:00:00.000Z\\",\\"dateModified\\":\\"2023-06-15T10:30:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Harry Xiong\\",\\"url\\":\\"https://harryxiong24.github.io\\"}]}"]]},"headers":[{"level":2,"title":"传统方法","slug":"传统方法","link":"#传统方法","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"异步","slug":"异步","link":"#异步","children":[]},{"level":3,"title":"回调函数","slug":"回调函数","link":"#回调函数","children":[]},{"level":3,"title":"Promise","slug":"promise","link":"#promise","children":[]}]},{"level":2,"title":"Generator 函数","slug":"generator-函数","link":"#generator-函数","children":[{"level":3,"title":"协程","slug":"协程","link":"#协程","children":[]},{"level":3,"title":"协程的 Generator 函数实现","slug":"协程的-generator-函数实现","link":"#协程的-generator-函数实现","children":[]},{"level":3,"title":"Generator 函数的数据交换和错误处理","slug":"generator-函数的数据交换和错误处理","link":"#generator-函数的数据交换和错误处理","children":[]},{"level":3,"title":"异步任务的封装","slug":"异步任务的封装","link":"#异步任务的封装","children":[]}]},{"level":2,"title":"Thunk 函数","slug":"thunk-函数","link":"#thunk-函数","children":[{"level":3,"title":"参数的求值策略","slug":"参数的求值策略","link":"#参数的求值策略","children":[]},{"level":3,"title":"Thunk 函数的含义","slug":"thunk-函数的含义","link":"#thunk-函数的含义","children":[]},{"level":3,"title":"JavaScript 语言的 Thunk 函数","slug":"javascript-语言的-thunk-函数","link":"#javascript-语言的-thunk-函数","children":[]},{"level":3,"title":"Thunkify 模块","slug":"thunkify-模块","link":"#thunkify-模块","children":[]},{"level":3,"title":"Generator 函数的流程管理","slug":"generator-函数的流程管理","link":"#generator-函数的流程管理","children":[]},{"level":3,"title":"Thunk 函数的自动流程管理","slug":"thunk-函数的自动流程管理","link":"#thunk-函数的自动流程管理","children":[]}]},{"level":2,"title":"co 模块","slug":"co-模块","link":"#co-模块","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"co 模块的原理","slug":"co-模块的原理","link":"#co-模块的原理","children":[]},{"level":3,"title":"基于 Promise 对象的自动执行","slug":"基于-promise-对象的自动执行","link":"#基于-promise-对象的自动执行","children":[]},{"level":3,"title":"co 模块的源码","slug":"co-模块的源码","link":"#co-模块的源码","children":[]},{"level":3,"title":"处理并发的异步操作","slug":"处理并发的异步操作","link":"#处理并发的异步操作","children":[]},{"level":3,"title":"实例: 处理 Stream","slug":"实例-处理-stream","link":"#实例-处理-stream","children":[]}]}],"git":{"createdTime":1686825018000,"updatedTime":1686825018000,"contributors":[{"name":"harryxiong24","email":"harryxiong24@gmail.com","commits":1}]},"readingTime":{"minutes":19.83,"words":5949},"filePathRelative":"zh/front-end/js-es/es6/generator-async.md","localizedDate":"2023年6月15日","excerpt":"","autoDesc":true}');export{e as data};
