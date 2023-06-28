import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as e,e as a}from"./app-2e38cc08.js";const l={},o=a('<h1 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> Github Pages</h1><p>本教程将指导您开启 Github Pages。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>需要重构</p></div><h2 id="前置工作" tabindex="-1"><a class="header-anchor" href="#前置工作" aria-hidden="true">#</a> 前置工作</h2><p>完成 git 软件的安装与配置。</p><h2 id="配置过程" tabindex="-1"><a class="header-anchor" href="#配置过程" aria-hidden="true">#</a> 配置过程</h2><ol><li><p>创建仓库</p><p>新建一个 repository，名字随意。将 clone or download 按钮(图中绿 色键)里面的地址复制下来。</p></li><li><p>创建并推送 index.html 文件</p><p>在本地创建一个空的文件夹，依次执行:</p><ul><li>先创建 index.html(可以新建一个 xx.txt，并改名 index.html)。</li><li>开启命令行工具</li><li>git init</li><li>git remote add 自己用英文起个短小的名字 &quot;刚刚复制的网址&quot;</li><li>git add .</li><li>git commit -m&quot;自己任意写的注释&quot;</li><li>git push 自己用英文起的那个短小的名字 master</li><li>如果成功，刷新 Github 仓库(repository)，可以看到 index.html 已经存在于仓库里</li></ul></li><li><p>开启 Github Pages 功能</p><p>在 repository 的 settings 部分开启 Github Pages 功能。</p></li></ol>',7),r=[o];function h(s,n){return t(),e("div",null,r)}const c=i(l,[["render",h],["__file","github-pages.html.vue"]]);export{c as default};
