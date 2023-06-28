import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-2e38cc08.js";const t={},p=e(`<h1 id="错误处理机制" tabindex="-1"><a class="header-anchor" href="#错误处理机制" aria-hidden="true">#</a> 错误处理机制</h1><h2 id="error-实例对象" tabindex="-1"><a class="header-anchor" href="#error-实例对象" aria-hidden="true">#</a> Error 实例对象</h2><p>JavaScript 解析或运行时，一旦发生错误，引擎就会抛出一个错误对象。JavaScript 原生提供<code>Error</code>构造函数，所有抛出的错误都是这个构造函数的实例。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;出错了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
err<span class="token punctuation">.</span>message <span class="token comment">// &quot;出错了&quot;</span>
</code></pre></div><p>上面代码中，我们调用<code>Error()</code>构造函数，生成一个实例对象<code>err</code>。<code>Error()</code>构造函数接受一个参数，表示错误提示，可以从实例的<code>message</code>属性读到这个参数。抛出<code>Error</code>实例对象以后，整个程序就中断在发生错误的地方，不再往下执行。</p><p>JavaScript 语言标准只提到，<code>Error</code>实例对象必须有<code>message</code>属性，表示出错时的提示信息，没有提到其他属性。大多数 JavaScript 引擎，对<code>Error</code>实例还提供<code>name</code>和<code>stack</code>属性，分别表示错误的名称和错误的堆栈，但它们是非标准的，不是每种实现都有。</p><ul><li><strong>message</strong>：错误提示信息</li><li><strong>name</strong>：错误名称（非标准属性）</li><li><strong>stack</strong>：错误的堆栈（非标准属性）</li></ul><p>使用<code>name</code>和<code>message</code>这两个属性，可以对发生什么错误有一个大概的了解。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;: &#39;</span> <span class="token operator">+</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>stack</code>属性用来查看错误发生时的堆栈。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throwit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">catchit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">throwit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print stack trace</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">catchit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// Error</span>
<span class="token comment">//    at throwit (~/examples/throwcatch.js:9:11)</span>
<span class="token comment">//    at catchit (~/examples/throwcatch.js:3:9)</span>
<span class="token comment">//    at repl:1:5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，错误堆栈的最内层是<code>throwit</code>函数，然后是<code>catchit</code>函数，最后是函数的运行环境。</p><h2 id="原生错误类型" tabindex="-1"><a class="header-anchor" href="#原生错误类型" aria-hidden="true">#</a> 原生错误类型</h2><p><code>Error</code>实例对象是最一般的错误类型，在它的基础上，JavaScript 还定义了其他6种错误对象。也就是说，存在<code>Error</code>的6个派生对象。</p><h3 id="syntaxerror-对象" tabindex="-1"><a class="header-anchor" href="#syntaxerror-对象" aria-hidden="true">#</a> SyntaxError 对象</h3><p><code>SyntaxError</code>对象是解析代码时发生的语法错误。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 变量名错误</span>
<span class="token keyword">var</span> 1a<span class="token punctuation">;</span>
<span class="token comment">// Uncaught SyntaxError: Invalid or unexpected token</span>

<span class="token comment">// 缺少括号</span>
console<span class="token punctuation">.</span>log <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught SyntaxError: Unexpected string</span>
</code></pre></div><p>上面代码的错误，都是在语法解析阶段就可以发现，所以会抛出<code>SyntaxError</code>。第一个错误提示是“token 非法”，第二个错误提示是“字符串不符合要求”。</p><h3 id="referenceerror-对象" tabindex="-1"><a class="header-anchor" href="#referenceerror-对象" aria-hidden="true">#</a> ReferenceError 对象</h3><p><code>ReferenceError</code>对象是引用一个不存在的变量时发生的错误。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用一个不存在的变量</span>
unknownVariable
<span class="token comment">// Uncaught ReferenceError: unknownVariable is not defined</span>
</code></pre></div><p>另一种触发场景是，将一个值分配给无法分配的对象，比如对函数的运行结果赋值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 等号左侧不是变量</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// Uncaught ReferenceError: Invalid left-hand side in assignment</span>
</code></pre></div><p>上面代码对函数<code>console.log</code>的运行结果赋值，结果引发了<code>ReferenceError</code>错误。</p><h3 id="rangeerror-对象" tabindex="-1"><a class="header-anchor" href="#rangeerror-对象" aria-hidden="true">#</a> RangeError 对象</h3><p><code>RangeError</code>对象是一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是<code>Number</code>对象的方法参数超出范围，以及函数堆栈超过最大值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 数组长度不得为负数</span>
<span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// Uncaught RangeError: Invalid array length</span>
</code></pre></div><h3 id="typeerror-对象" tabindex="-1"><a class="header-anchor" href="#typeerror-对象" aria-hidden="true">#</a> TypeError 对象</h3><p><code>TypeError</code>对象是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用<code>new</code>命令，就会抛出这种错误，因为<code>new</code>命令的参数应该是一个构造函数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">123</span>
<span class="token comment">// Uncaught TypeError: 123 is not a constructor</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">unknownMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// Uncaught TypeError: obj.unknownMethod is not a function</span>
</code></pre></div><p>上面代码的第二种情况，调用对象不存在的方法，也会抛出<code>TypeError</code>错误，因为<code>obj.unknownMethod</code>的值是<code>undefined</code>，而不是一个函数。</p><h3 id="urierror-对象" tabindex="-1"><a class="header-anchor" href="#urierror-对象" aria-hidden="true">#</a> URIError 对象</h3><p><code>URIError</code>对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及<code>encodeURI()</code>、<code>decodeURI()</code>、<code>encodeURIComponent()</code>、<code>decodeURIComponent()</code>、<code>escape()</code>和<code>unescape()</code>这六个函数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">decodeURI</span><span class="token punctuation">(</span><span class="token string">&#39;%2&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// URIError: URI malformed</span>
</code></pre></div><h3 id="evalerror-对象" tabindex="-1"><a class="header-anchor" href="#evalerror-对象" aria-hidden="true">#</a> EvalError 对象</h3><p><code>eval</code>函数没有被正确执行时，会抛出<code>EvalError</code>错误。该错误类型已经不再使用了，只是为了保证与以前代码兼容，才继续保留。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>以上这6种派生错误，连同原始的<code>Error</code>对象，都是构造函数。开发者可以使用它们，手动生成错误对象的实例。这些构造函数都接受一个参数，代表错误提示信息（message）。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> err1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;出错了！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> err2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RangeError</span><span class="token punctuation">(</span><span class="token string">&#39;出错了，变量超出有效范围！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> err3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;出错了，变量类型无效！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

err1<span class="token punctuation">.</span>message <span class="token comment">// &quot;出错了！&quot;</span>
err2<span class="token punctuation">.</span>message <span class="token comment">// &quot;出错了，变量超出有效范围！&quot;</span>
err3<span class="token punctuation">.</span>message <span class="token comment">// &quot;出错了，变量类型无效！&quot;</span>
</code></pre></div><h2 id="自定义错误" tabindex="-1"><a class="header-anchor" href="#自定义错误" aria-hidden="true">#</a> 自定义错误</h2><p>除了 JavaScript 原生提供的七种错误对象，还可以定义自己的错误对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserError</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message <span class="token operator">||</span> <span class="token string">&#39;默认信息&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;UserError&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">UserError</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">UserError</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> UserError<span class="token punctuation">;</span>
</code></pre></div><p>上面代码自定义一个错误对象<code>UserError</code>，让它继承<code>Error</code>对象。然后，就可以生成这种自定义类型的错误了。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">UserError</span><span class="token punctuation">(</span><span class="token string">&#39;这是自定义的错误！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="throw-语句" tabindex="-1"><a class="header-anchor" href="#throw-语句" aria-hidden="true">#</a> throw 语句</h2><p><code>throw</code>语句的作用是手动中断程序执行，抛出一个错误。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;x 必须为正数&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Uncaught ReferenceError: x is not defined</span>
</code></pre></div><p>上面代码中，如果变量<code>x</code>小于等于<code>0</code>，就手动抛出一个错误，告诉用户<code>x</code>的值不正确，整个程序就会在这里中断执行。可以看到，<code>throw</code>抛出的错误就是它的参数，这里是一个<code>Error</code>实例。</p><p><code>throw</code>也可以抛出自定义错误。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserError</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message <span class="token operator">||</span> <span class="token string">&#39;默认信息&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;UserError&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UserError</span><span class="token punctuation">(</span><span class="token string">&#39;出错了！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught UserError {message: &quot;出错了！&quot;, name: &quot;UserError&quot;}</span>
</code></pre></div><p>上面代码中，<code>throw</code>抛出的是一个<code>UserError</code>实例。</p><p>实际上，<code>throw</code>可以抛出任何类型的值。也就是说，它的参数可以是任何值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 抛出一个字符串</span>
<span class="token keyword">throw</span> <span class="token string">&#39;Error！&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught Error！</span>

<span class="token comment">// 抛出一个数值</span>
<span class="token keyword">throw</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught 42</span>

<span class="token comment">// 抛出一个布尔值</span>
<span class="token keyword">throw</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught true</span>

<span class="token comment">// 抛出一个对象</span>
<span class="token keyword">throw</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">toString</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Error!&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught {toString: ƒ}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 JavaScript 引擎来说，遇到<code>throw</code>语句，程序就中止了。引擎会接收到<code>throw</code>抛出的信息，可能是一个错误实例，也可能是其他类型的值。</p><h2 id="异常捕获机制" tabindex="-1"><a class="header-anchor" href="#异常捕获机制" aria-hidden="true">#</a> 异常捕获机制</h2><h3 id="try-catch-结构" tabindex="-1"><a class="header-anchor" href="#try-catch-结构" aria-hidden="true">#</a> try...catch 结构</h3><p>一旦发生错误，程序就中止执行了。JavaScript 提供了<code>try...catch</code>结构，允许对错误进行处理，选择是否往下执行。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;出错了!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Error: 出错了!</span>
<span class="token comment">//   at &lt;anonymous&gt;:3:9</span>
<span class="token comment">//   ...</span>
</code></pre></div><p>上面代码中，<code>try</code>代码块抛出错误（上例用的是<code>throw</code>语句），JavaScript 引擎就立即把代码的执行，转到<code>catch</code>代码块，或者说错误被<code>catch</code>代码块捕获了。<code>catch</code>接受一个参数，表示<code>try</code>代码块抛出的值。</p><p>如果你不确定某些代码是否会报错，就可以把它们放在<code>try...catch</code>代码块之中，便于进一步对错误进行处理。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理错误</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码中，如果函数<code>f</code>执行报错，就会进行<code>catch</code>代码块，接着对错误进行处理。</p><p><code>catch</code>代码块捕获错误之后，程序不会中断，会按照正常流程继续执行下去。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token string">&quot;出错了&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 111</span>
<span class="token comment">// 222</span>
</code></pre></div><p>上面代码中，<code>try</code>代码块抛出的错误，被<code>catch</code>代码块捕获后，程序会继续向下执行。</p><p><code>catch</code>代码块之中，还可以再抛出错误，甚至使用嵌套的<code>try...catch</code>结构。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">&lt;=</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Uncaught 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>catch</code>代码之中又抛出了一个错误。</p><p>为了捕捉不同类型的错误，<code>catch</code>代码块之中可以加入判断语句。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  foo<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">EvalError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">RangeError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>catch</code>捕获错误之后，会判断错误类型（<code>EvalError</code>还是<code>RangeError</code>），进行不同的处理。</p><h3 id="finally-代码块" tabindex="-1"><a class="header-anchor" href="#finally-代码块" aria-hidden="true">#</a> finally 代码块</h3><p><code>try...catch</code>结构允许在最后添加一个<code>finally</code>代码块，表示不管是否出现错误，都必需在最后运行的语句。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">cleansUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;出错了……&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;此行不会执行&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;完成清理工作&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">cleansUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 完成清理工作</span>
<span class="token comment">// Uncaught Error: 出错了……</span>
<span class="token comment">//    at cleansUp (&lt;anonymous&gt;:3:11)</span>
<span class="token comment">//    at &lt;anonymous&gt;:10:1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，由于没有<code>catch</code>语句块，一旦发生错误，代码就会中断执行。中断执行之前，会先执行<code>finally</code>代码块，然后再向用户提示报错信息。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">idle</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&#39;result&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;FINALLY&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">idle</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// hello</span>
<span class="token comment">// FINALLY</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>try</code>代码块没有发生错误，而且里面还包括<code>return</code>语句，但是<code>finally</code>代码块依然会执行。而且，这个函数的返回值还是<code>result</code>。</p><p>下面的例子说明，<code>return</code>语句的执行是排在<code>finally</code>代码之前，只是等<code>finally</code>代码执行完毕后才返回。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">countUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">countUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 0</span>
count
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码说明，<code>return</code>语句里面的<code>count</code>的值，是在<code>finally</code>代码块运行之前就获取了。</p><p>下面是<code>finally</code>代码块用法的典型场景。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">openFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">writeFile</span><span class="token punctuation">(</span>Data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
  <span class="token function">closeFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码首先打开一个文件，然后在<code>try</code>代码块中写入文件，如果没有发生错误，则运行<code>finally</code>代码块关闭文件；一旦发生错误，则先使用<code>catch</code>代码块处理错误，再使用<code>finally</code>代码块关闭文件。</p><p>下面的例子充分反映了<code>try...catch...finally</code>这三者之间的执行顺序。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> <span class="token string">&#39;bug&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 这句原本会延迟到 finally 代码块结束再执行</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不会运行</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这句会覆盖掉前面那句 return</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不会运行</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不会运行</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token comment">// 3</span>

result
<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>catch</code>代码块结束执行之前，会先执行<code>finally</code>代码块。</p><p><code>catch</code>代码块之中，触发转入<code>finally</code>代码块的标志，不仅有<code>return</code>语句，还有<code>throw</code>语句。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token string">&#39;出错了！&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;捕捉到内部错误&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> e<span class="token punctuation">;</span> <span class="token comment">// 这句原本会等到finally结束再执行</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 直接返回</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 此处不会执行</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;caught outer &quot;bogus&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//  捕捉到内部错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，进入<code>catch</code>代码块之后，一遇到<code>throw</code>语句，就会去执行<code>finally</code>代码块，其中有<code>return false</code>语句，因此就直接返回了，不再会回去执行<code>catch</code>代码块剩下的部分了。</p><p><code>try</code>代码块内部，还可以再使用<code>try</code>代码块。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    consle<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Finally&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Will I run?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Finally</span>
<span class="token comment">// consle is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>try</code>里面还有一个<code>try</code>。内层的<code>try</code>报错（<code>console</code>拼错了），这时会执行内层的<code>finally</code>代码块，然后抛出错误，被外层的<code>catch</code>捕获。</p>`,92),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","jses4.html.vue"]]);export{d as default};
