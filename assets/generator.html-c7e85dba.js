import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as p,f as t,a as n,e}from"./app-2e38cc08.js";const o={},c=n("p",null,"通过列表生成式，我们可以直接创建一个列表。但是，受到内存限制，列表容量肯定是有限的。而且，创建一个包含 100 万个元素的列表，不仅占用很大的存储空间，如果我们仅仅需要访问前面几个元素，那后面绝大多数元素占用的空间都白白浪费了。",-1),l=n("p",null,"所以，如果列表元素可以按照某种算法推算出来，那我们是否可以在循环的过程中不断推算出后续的元素呢？这样就不必创建完整的 list，从而节省大量的空间。在 Python 中，这种一边循环一边计算的机制，称为生成器: generator。",-1),r=e(`<p>要创建一个 generator，有很多种方法。第一种方法很简单，只要把一个列表生成式的[]改成()，就创建了一个 generator:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L <span class="token operator">=</span> <span class="token punctuation">[</span>x <span class="token operator">*</span> x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">*</span> x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g
<span class="token operator">&lt;</span>generator <span class="token builtin">object</span> <span class="token operator">&lt;</span>genexpr<span class="token operator">&gt;</span> at <span class="token number">0x1022ef630</span><span class="token operator">&gt;</span>
</code></pre></div><p>创建 <code>L</code> 和 <code>g</code> 的区别仅在于最外层的 <code>[]</code> 和 <code>()</code>，L 是一个 list，而 g 是一个 generator。</p><p>我们可以直接打印出 list 的每一个元素，但我们怎么打印出 generator 的每一个元素呢？</p><p>如果要一个一个打印出来，可以通过 <code>next()</code> 函数获得 generator 的下一个返回值:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">0</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">4</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">9</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">16</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">25</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">36</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">49</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">64</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">81</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
StopIteration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们讲过，generator 保存的是算法，每次调用 <code>next(g)</code>，就计算出 <code>g</code> 的下一个元素的值，直到计算到最后一个元素，没有更多的元素时，抛出 <code>StopIteration</code> 的错误。</p><p>当然，上面这种不断调用 <code>next(g)</code> 实在是太变态了，正确的方法是使用 for 循环，因为 generator 也是可迭代对象:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">*</span> x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> n <span class="token keyword">in</span> g<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">4</span>
<span class="token number">9</span>
<span class="token number">16</span>
<span class="token number">25</span>
<span class="token number">36</span>
<span class="token number">49</span>
<span class="token number">64</span>
<span class="token number">81</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，我们创建了一个 generator 后，基本上永远不会调用 <code>next()</code>，而是通过 for 循环来迭代它，并且不需要关心 <code>StopIteration</code>的错误。</p><p>generator 非常强大。如果推算的算法比较复杂，用类似列表生成式的 for 循环无法实现的时候，还可以用函数来实现。</p><p>比如，著名的斐波拉契数列(Fibonacci)，除第一个和第二个数外，任意一个数都可由前两个数相加得到:</p><p>1, 1, 2, 3, 5, 8, 13, 21, 34, ...</p><p>斐波拉契数列用列表生成式写不出来，但是，用函数把它打印出来却很容易:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    <span class="token keyword">while</span> n <span class="token operator">&lt;</span> <span class="token builtin">max</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b
        n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token string">&#39;done&#39;</span>
</code></pre></div><p>注意，赋值语句:</p><div class="language-python" data-ext="py"><pre class="language-python"><code>a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b
</code></pre></div><p>相当于:</p><div class="language-python" data-ext="py"><pre class="language-python"><code>t <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token comment"># t是一个tuple</span>
a <span class="token operator">=</span> t<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> t<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre></div><p>但不必显式写出临时变量 <code>t</code> 就可以赋值。</p><p>上面的函数可以输出斐波那契数列的前 N 个数:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> fib<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token number">1</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">5</span>
<span class="token number">8</span>
<span class="token string">&#39;done&#39;</span>
</code></pre></div><p>仔细观察，可以看出，<code>fib</code> 函数实际上是定义了斐波拉契数列的推算规则，可以从第一个元素开始，推算出后续任意的元素，这种逻辑其实非常类似 generator。</p><p>也就是说，上面的函数和 generator 仅一步之遥。要把 fib 函数变成 generator，只需要把 <code>print(b)</code> 改为 <code>yield b</code> 就可以了:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    <span class="token keyword">while</span> n <span class="token operator">&lt;</span> <span class="token builtin">max</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> b
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b
        n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token string">&#39;done&#39;</span>
</code></pre></div><p>这就是定义 generator 的另一种方法。如果一个函数定义中包含 <code>yield</code> 关键字，那么这个函数就不再是一个普通函数，而是一个 generator:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> fib<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f
<span class="token operator">&lt;</span>generator <span class="token builtin">object</span> fib at <span class="token number">0x104feaaa0</span><span class="token operator">&gt;</span>
</code></pre></div><p>这里，最难理解的就是 generator 和函数的执行流程不一样。函数是顺序执行，遇到 <code>return</code> 语句或者最后一行函数语句就返回。而变成 generator 的函数，在每次调用 <code>next()</code> 的时候执行，遇到 <code>yield</code> 语句返回，再次执行时从上次返回的 <code>yield</code> 语句处继续执行。</p><p>举个简单的例子，定义一个 generator，依次返回数字 1，3，5:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">odd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;step 1&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;step 2&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;step 3&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre></div><p>调用该 generator 时，首先要生成一个 generator 对象，然后用 <code>next()</code> 函数不断获得下一个返回值:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> o <span class="token operator">=</span> odd<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
step <span class="token number">1</span>
<span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
step <span class="token number">2</span>
<span class="token number">3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
step <span class="token number">3</span>
<span class="token number">5</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
StopIteration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>odd</code> 不是普通函数，而是 generator，在执行过程中，遇到 <code>yield</code> 就中断，下次又继续执行。执行 3 次 <code>yield</code> 后，已经没有 <code>yield</code> 可以执行了，所以，第 4 次调用 <code>next(o)</code> 就报错。</p><p>回到 fib 的例子，我们在循环过程中不断调用 <code>yield</code>，就会不断中断。当然要给循环设置一个条件来退出循环，不然就会产生一个无限数列出来。</p><p>同样的，把函数改成 generator 后，我们基本上从来不会用 <code>next()</code> 来获取下一个返回值，而是直接使用 for 循环来迭代:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> n <span class="token keyword">in</span> fib<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token number">1</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">5</span>
<span class="token number">8</span>
</code></pre></div><p>但是用 for 循环调用 generator 时，发现拿不到 generator 的 <code>return</code> 语句的返回值。如果想要拿到返回值，必须捕获 <code>StopIteration</code> 错误，返回值包含在 <code>StopIteration</code> 的 value 中:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g <span class="token operator">=</span> fib<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">try</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         x <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;g:&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">except</span> StopIteration <span class="token keyword">as</span> e<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Generator return value:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token keyword">break</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
g<span class="token punctuation">:</span> <span class="token number">1</span>
g<span class="token punctuation">:</span> <span class="token number">1</span>
g<span class="token punctuation">:</span> <span class="token number">2</span>
g<span class="token punctuation">:</span> <span class="token number">3</span>
g<span class="token punctuation">:</span> <span class="token number">5</span>
g<span class="token punctuation">:</span> <span class="token number">8</span>
Generator <span class="token keyword">return</span> value<span class="token punctuation">:</span> done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于如何捕获错误，后面的错误处理还会详细讲解。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>generator 是非常强大的工具，在 Python 中，可以简单地把列表生成式改成 generator，也可以通过函数实现复杂逻辑的 generator。</p><p>要理解 generator 的工作原理，它是在 for 循环的过程中不断计算出下一个元素，并在适当的条件结束 for 循环。对于函数改成的 generator 来说，遇到 <code>return</code> 语句或者执行到函数体最后一行语句，就是结束 generator 的指令，for 循环随之结束。</p><p>请注意区分普通函数和 generator 函数，普通函数调用直接返回结果:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> r <span class="token operator">=</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> r
<span class="token number">6</span>
</code></pre></div><p>generator 函数的“调用”实际返回一个 generator 对象:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g <span class="token operator">=</span> fib<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g
<span class="token operator">&lt;</span>generator <span class="token builtin">object</span> fib at <span class="token number">0x1022ef948</span><span class="token operator">&gt;</span>
</code></pre></div>`,46);function u(i,k){return a(),p("div",null,[c,l,t(" more "),r])}const b=s(o,[["render",u],["__file","generator.html.vue"]]);export{b as default};
