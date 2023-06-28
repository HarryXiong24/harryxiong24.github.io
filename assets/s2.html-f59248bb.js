import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e}from"./app-2e38cc08.js";const t="/assets/2-6a2cf4ba.jpg",p={},o=e('<h2 id="servlet生命周期" tabindex="-1"><a class="header-anchor" href="#servlet生命周期" aria-hidden="true">#</a> Servlet生命周期</h2><p>Servlet 生命周期可被定义为从创建直到毁灭的整个过程。以下是 Servlet 遵循的过程：</p><ul><li><p>Servlet 通过调用 <strong>init ()</strong> 方法进行初始化。</p></li><li><p>Servlet 调用 <strong>service()</strong> 方法来处理客户端的请求。</p></li><li><p>Servlet 通过调用 <strong>destroy()</strong> 方法终止（结束）。</p></li><li><p>最后，Servlet 是由 JVM 的垃圾回收器进行垃圾回收的。</p></li></ul><h3 id="_2-1-生命周期架构图" tabindex="-1"><a class="header-anchor" href="#_2-1-生命周期架构图" aria-hidden="true">#</a> 2.1 生命周期架构图</h3><p>下图显示了一个典型的 Servlet 生命周期方案。</p><ul><li>第一个到达服务器的 HTTP 请求被委派到 Servlet 容器。</li><li>Servlet 容器在调用 service() 方法之前加载 Servlet。</li><li>然后 Servlet 容器处理由多个线程产生的多个请求，每个线程执行一个单一的 Servlet 实例的 service() 方法。</li></ul><p><img src="'+t+`" alt="Servlet 生命周期" loading="lazy"></p><h3 id="_2-2-init-方法" tabindex="-1"><a class="header-anchor" href="#_2-2-init-方法" aria-hidden="true">#</a> 2.2 init() 方法</h3><p>init 方法被设计成只调用一次。它在第一次创建 Servlet 时被调用，在后续每次用户请求时不再调用。因此，它是用于一次性初始化，就像 Applet 的 init 方法一样。</p><p>Servlet 创建于用户第一次调用对应于该 Servlet 的 URL 时，但是您也可以指定 Servlet 在服务器第一次启动时被加载。</p><p>当用户调用一个 Servlet 时，就会创建一个 Servlet 实例，每一个用户请求都会产生一个新的线程，适当的时候移交给 doGet 或 doPost 方法。</p><p><strong>init() 方法简单地创建或加载一些数据，这些数据将被用于 Servlet 的整个生命周期。</strong></p><p>init 方法的定义如下：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化代码...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-3-service-方法" tabindex="-1"><a class="header-anchor" href="#_2-3-service-方法" aria-hidden="true">#</a> 2.3 service() 方法</h3><p>service() 方法是执行实际任务的主要方法。Servlet 容器（即 Web 服务器）调用 service() 方法来处理来自客户端（浏览器）的请求，并把格式化的响应写回给客户端。</p><p>每次服务器接收到一个 Servlet 请求时，服务器会产生一个新的线程并调用服务。service() 方法检查 HTTP 请求类型（GET、POST、PUT、DELETE 等），并在适当的时候调用 doGet、doPost、doPut，doDelete 等方法。</p><p>下面是该方法的特征：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> request<span class="token punctuation">,</span> 
                    <span class="token class-name">ServletResponse</span> response<span class="token punctuation">)</span> 
      <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><p>service() 方法由容器调用，service 方法在适当的时候调用 doGet、doPost、doPut、doDelete 等方法。所以，您不用对 service() 方法做任何动作，您只需要根据来自客户端的请求类型来重载 doGet() 或 doPost() 即可。</p><p>doGet() 和 doPost() 方法是每次服务请求中最常用的方法。下面是这两种方法的特征。</p><h3 id="_2-4-doget-方法" tabindex="-1"><a class="header-anchor" href="#_2-4-doget-方法" aria-hidden="true">#</a> 2.4 doGet() 方法</h3><p>GET 请求来自于一个 URL 的正常请求，或者来自于一个未指定 METHOD 的 HTML 表单，它由 doGet() 方法处理。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
                  <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// Servlet 代码</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-5-dopost-方法" tabindex="-1"><a class="header-anchor" href="#_2-5-dopost-方法" aria-hidden="true">#</a> 2.5 doPost() 方法</h3><p>POST 请求来自于一个特别指定了 METHOD 为 POST 的 HTML 表单，它由 doPost() 方法处理。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
                   <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// Servlet 代码</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-6-destroy-方法" tabindex="-1"><a class="header-anchor" href="#_2-6-destroy-方法" aria-hidden="true">#</a> 2.6 destroy() 方法</h3><p><strong><code>destroy()</code> 方法只会被调用一次，在 Servlet 生命周期结束时被调用</strong></p><p>destroy() 方法可以让您的 Servlet 关闭数据库连接、停止后台线程、把 Cookie 列表或点击计数器写入到磁盘，并执行其他类似的清理活动。</p><p>在调用 destroy() 方法之后，servlet 对象被标记为垃圾回收。destroy 方法定义如下所示：</p><div class="language-java" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 终止化代码...</span>
  <span class="token punctuation">}</span>
</code></pre></div>`,32),c=[o];function l(r,i){return a(),n("div",null,c)}const v=s(p,[["render",l],["__file","s2.html.vue"]]);export{v as default};
