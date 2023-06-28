const e=JSON.parse('{"key":"v-2e9263e8","path":"/zh/front-end/js-es/es6/simd.html","title":"SIMD","lang":"zh-CN","frontmatter":{"icon":"process","time":"2020-6-8","category":"Web前端","tag":"ECMA Script6","footer":"天空海阔, 要做最坚强的泡沫","description":"概述 SIMD(发音/sim-dee/)是“Single Instruction/Multiple Data”的缩写，意为“单指令，多数据”。它是 JavaScript 操作 CPU 对应指令的接口，您可以看做这是一种不同的运算执行模式。与它相对的是 SISD(“Single Instruction/Single Data”)，即“单指令，单数据”。 ...","head":[["meta",{"property":"og:url","content":"https://harryxiong24.github.io/zh/front-end/js-es/es6/simd.html"}],["meta",{"property":"og:site_name","content":"Harry Xiong"}],["meta",{"property":"og:title","content":"SIMD"}],["meta",{"property":"og:description","content":"概述 SIMD(发音/sim-dee/)是“Single Instruction/Multiple Data”的缩写，意为“单指令，多数据”。它是 JavaScript 操作 CPU 对应指令的接口，您可以看做这是一种不同的运算执行模式。与它相对的是 SISD(“Single Instruction/Single Data”)，即“单指令，单数据”。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-15T10:30:18.000Z"}],["meta",{"property":"article:author","content":"Harry Xiong"}],["meta",{"property":"article:tag","content":"ECMA Script6"}],["meta",{"property":"article:published_time","content":"2020-06-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-15T10:30:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SIMD\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-15T10:30:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Harry Xiong\\",\\"url\\":\\"https://harryxiong24.github.io\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":2,"title":"静态方法: 数学运算","slug":"静态方法-数学运算","link":"#静态方法-数学运算","children":[{"level":3,"title":"SIMD.%type%.abs()，SIMD.%type%.neg()","slug":"simd-type-abs-simd-type-neg","link":"#simd-type-abs-simd-type-neg","children":[]},{"level":3,"title":"SIMD.%type%.add()，SIMD.%type%.addSaturate()","slug":"simd-type-add-simd-type-addsaturate","link":"#simd-type-add-simd-type-addsaturate","children":[]},{"level":3,"title":"SIMD.%type%.sub()，SIMD.%type%.subSaturate()","slug":"simd-type-sub-simd-type-subsaturate","link":"#simd-type-sub-simd-type-subsaturate","children":[]},{"level":3,"title":"SIMD.%type%.mul()，SIMD.%type%.div()，SIMD.%type%.sqrt()","slug":"simd-type-mul-simd-type-div-simd-type-sqrt","link":"#simd-type-mul-simd-type-div-simd-type-sqrt","children":[]},{"level":3,"title":"SIMD.%FloatType%.reciprocalApproximation()，SIMD.%type%.reciprocalSqrtApproximation()","slug":"simd-floattype-reciprocalapproximation-simd-type-reciprocalsqrtapproximation","link":"#simd-floattype-reciprocalapproximation-simd-type-reciprocalsqrtapproximation","children":[]},{"level":3,"title":"SIMD.%IntegerType%.shiftLeftByScalar()","slug":"simd-integertype-shiftleftbyscalar","link":"#simd-integertype-shiftleftbyscalar","children":[]},{"level":3,"title":"SIMD.%IntegerType%.shiftRightByScalar()","slug":"simd-integertype-shiftrightbyscalar","link":"#simd-integertype-shiftrightbyscalar","children":[]}]},{"level":2,"title":"静态方法: 通道处理","slug":"静态方法-通道处理","link":"#静态方法-通道处理","children":[{"level":3,"title":"SIMD.%type%.check()","slug":"simd-type-check","link":"#simd-type-check","children":[]},{"level":3,"title":"SIMD.%type%.extractLane()，SIMD.%type%.replaceLane()","slug":"simd-type-extractlane-simd-type-replacelane","link":"#simd-type-extractlane-simd-type-replacelane","children":[]},{"level":3,"title":"SIMD.%type%.load()","slug":"simd-type-load","link":"#simd-type-load","children":[]},{"level":3,"title":"SIMD.%type%.store()","slug":"simd-type-store","link":"#simd-type-store","children":[]},{"level":3,"title":"SIMD.%type%.splat()","slug":"simd-type-splat","link":"#simd-type-splat","children":[]},{"level":3,"title":"SIMD.%type%.swizzle()","slug":"simd-type-swizzle","link":"#simd-type-swizzle","children":[]},{"level":3,"title":"SIMD.%type%.shuffle()","slug":"simd-type-shuffle","link":"#simd-type-shuffle","children":[]}]},{"level":2,"title":"静态方法: 比较运算","slug":"静态方法-比较运算","link":"#静态方法-比较运算","children":[{"level":3,"title":"SIMD.%type%.equal()，SIMD.%type%.notEqual()","slug":"simd-type-equal-simd-type-notequal","link":"#simd-type-equal-simd-type-notequal","children":[]},{"level":3,"title":"SIMD.%type%.greaterThan()，SIMD.%type%.greaterThanOrEqual()","slug":"simd-type-greaterthan-simd-type-greaterthanorequal","link":"#simd-type-greaterthan-simd-type-greaterthanorequal","children":[]},{"level":3,"title":"SIMD.%type%.lessThan()，SIMD.%type%.lessThanOrEqual()","slug":"simd-type-lessthan-simd-type-lessthanorequal","link":"#simd-type-lessthan-simd-type-lessthanorequal","children":[]},{"level":3,"title":"SIMD.%type%.select()","slug":"simd-type-select","link":"#simd-type-select","children":[]},{"level":3,"title":"SIMD.%BooleanType%.allTrue()，SIMD.%BooleanType%.anyTrue()","slug":"simd-booleantype-alltrue-simd-booleantype-anytrue","link":"#simd-booleantype-alltrue-simd-booleantype-anytrue","children":[]},{"level":3,"title":"SIMD.%type%.min()，SIMD.%type%.minNum()","slug":"simd-type-min-simd-type-minnum","link":"#simd-type-min-simd-type-minnum","children":[]},{"level":3,"title":"SIMD.%type%.max()，SIMD.%type%.maxNum()","slug":"simd-type-max-simd-type-maxnum","link":"#simd-type-max-simd-type-maxnum","children":[]}]},{"level":2,"title":"静态方法: 位运算","slug":"静态方法-位运算","link":"#静态方法-位运算","children":[{"level":3,"title":"SIMD.%type%.and()，SIMD.%type%.or()，SIMD.%type%.xor()，SIMD.%type%.not()","slug":"simd-type-and-simd-type-or-simd-type-xor-simd-type-not","link":"#simd-type-and-simd-type-or-simd-type-xor-simd-type-not","children":[]}]},{"level":2,"title":"静态方法: 数据类型转换","slug":"静态方法-数据类型转换","link":"#静态方法-数据类型转换","children":[]},{"level":2,"title":"实例方法","slug":"实例方法","link":"#实例方法","children":[{"level":3,"title":"SIMD.%type%.prototype.toString()","slug":"simd-type-prototype-tostring","link":"#simd-type-prototype-tostring","children":[]}]},{"level":2,"title":"实例: 求平均值","slug":"实例-求平均值","link":"#实例-求平均值","children":[]}],"git":{"createdTime":1686825018000,"updatedTime":1686825018000,"contributors":[{"name":"harryxiong24","email":"harryxiong24@gmail.com","commits":1}]},"readingTime":{"minutes":17.81,"words":5344},"filePathRelative":"zh/front-end/js-es/es6/simd.md","localizedDate":"2023年6月15日","excerpt":"","autoDesc":true}');export{e as data};
