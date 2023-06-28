import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as e,e as o}from"./app-2e38cc08.js";const r={},l=o('<h2 id="节点" tabindex="-1"><a class="header-anchor" href="#节点" aria-hidden="true">#</a> 节点</h2><p><strong>Node(节点)是构成HTML5的基本单元</strong>,DOM节点主要分为四类</p><ul><li><p><strong>文档节点</strong>:整个HTML文档</p></li><li><p><strong>元素节点</strong>:HTML文档中的HTML标签</p></li><li><p><strong>属性节点</strong>:元素的属性</p></li><li><p><strong>文本节点</strong>:HTML标签中的文本内容</p></li></ul><table><thead><tr><th>节点</th><th>nodeName(节点名)</th><th>nodeType(节点类型)</th><th>nodeValue(节点值)</th></tr></thead><tbody><tr><td>文档节点</td><td>#document</td><td>9</td><td>null</td></tr><tr><td>元素节点</td><td>标签名</td><td>1</td><td>null</td></tr><tr><td>属性节点</td><td>属性名</td><td>2</td><td>属性值</td></tr><tr><td>文本节点</td><td>#text</td><td>3</td><td>文本内容</td></tr></tbody></table><p><strong>注:</strong></p><ul><li><p>浏览器已经为我们提供了文档节点对象window,该对象可以在页面中直接使用,代表的是整个网页</p></li><li><p>通过nodeType===1可以判断某节点是否是元素节点</p></li><li><p>文本节点包含了在写代码时的回车换行符间产生的空白，但是IE8及以下的浏览器中不会将空白节点当作子节点，而其他浏览器会</p></li><li><p>通过nodeName返回的标签名是全大写的</p></li><li><p>元素节点的名字也可以通过专门的TagName属性获得</p></li></ul>',6),n=[l];function i(p,a){return d(),e("div",null,n)}const c=t(r,[["render",i],["__file","db1.html.vue"]]);export{c as default};
