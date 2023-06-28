const e=JSON.parse('{"key":"v-6bc9714f","path":"/zh/front-end/js-es/es6/proxy.html","title":"Proxy","lang":"zh-CN","frontmatter":{"title":"Proxy","icon":"proxy","time":"2020-6-8","category":"Web前端","tag":"ECMA Script6","footer":"天空海阔, 要做最坚强的泡沫","description":"Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”(meta programming)，即对编程语言进行编程。 Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。","head":[["meta",{"property":"og:url","content":"https://harryxiong24.github.io/zh/front-end/js-es/es6/proxy.html"}],["meta",{"property":"og:site_name","content":"Harry Xiong"}],["meta",{"property":"og:title","content":"Proxy"}],["meta",{"property":"og:description","content":"Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”(meta programming)，即对编程语言进行编程。 Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-15T10:30:18.000Z"}],["meta",{"property":"article:author","content":"Harry Xiong"}],["meta",{"property":"article:tag","content":"ECMA Script6"}],["meta",{"property":"article:published_time","content":"2020-06-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-15T10:30:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Proxy\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-15T10:30:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Harry Xiong\\",\\"url\\":\\"https://harryxiong24.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Proxy 实例的方法","slug":"proxy-实例的方法","link":"#proxy-实例的方法","children":[{"level":3,"title":"get()","slug":"get","link":"#get","children":[]},{"level":3,"title":"set()","slug":"set","link":"#set","children":[]},{"level":3,"title":"apply()","slug":"apply","link":"#apply","children":[]},{"level":3,"title":"has()","slug":"has","link":"#has","children":[]},{"level":3,"title":"construct()","slug":"construct","link":"#construct","children":[]},{"level":3,"title":"deleteProperty()","slug":"deleteproperty","link":"#deleteproperty","children":[]},{"level":3,"title":"defineProperty()","slug":"defineproperty","link":"#defineproperty","children":[]},{"level":3,"title":"getOwnPropertyDescriptor()","slug":"getownpropertydescriptor","link":"#getownpropertydescriptor","children":[]},{"level":3,"title":"getPrototypeOf()","slug":"getprototypeof","link":"#getprototypeof","children":[]},{"level":3,"title":"isExtensible()","slug":"isextensible","link":"#isextensible","children":[]},{"level":3,"title":"ownKeys()","slug":"ownkeys","link":"#ownkeys","children":[]},{"level":3,"title":"preventExtensions()","slug":"preventextensions","link":"#preventextensions","children":[]},{"level":3,"title":"setPrototypeOf()","slug":"setprototypeof","link":"#setprototypeof","children":[]}]},{"level":2,"title":"Proxy.revocable()","slug":"proxy-revocable","link":"#proxy-revocable","children":[]},{"level":2,"title":"this 问题","slug":"this-问题","link":"#this-问题","children":[]},{"level":2,"title":"实例: Web 服务的客户端","slug":"实例-web-服务的客户端","link":"#实例-web-服务的客户端","children":[]}],"git":{"createdTime":1686825018000,"updatedTime":1686825018000,"contributors":[{"name":"harryxiong24","email":"harryxiong24@gmail.com","commits":1}]},"readingTime":{"minutes":20.42,"words":6125},"filePathRelative":"zh/front-end/js-es/es6/proxy.md","localizedDate":"2023年6月15日","excerpt":"<p>Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”(meta programming)，即对编程语言进行编程。</p>\\n<p>Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。</p>\\n","autoDesc":true}');export{e as data};
