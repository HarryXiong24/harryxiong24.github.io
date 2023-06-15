(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{588:function(s,t,a){s.exports=a.p+"assets/img/git3.701e02bf.jpg"},589:function(s,t,a){s.exports=a.p+"assets/img/git4.3140921b.jpg"},957:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"工作区和暂存区"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工作区和暂存区"}},[s._v("#")]),s._v(" 工作区和暂存区")]),s._v(" "),n("p",[s._v("Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。")]),s._v(" "),n("h2",{attrs:{id:"工作区-working-directory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工作区-working-directory"}},[s._v("#")]),s._v(" 工作区(Working Directory)")]),s._v(" "),n("p",[s._v("就是您在电脑里能看到的目录，比如 learngit 文件夹就是一个工作区:")]),s._v(" "),n("h2",{attrs:{id:"版本库-repository"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版本库-repository"}},[s._v("#")]),s._v(" 版本库(Repository)")]),s._v(" "),n("p",[s._v("工作区有一个隐藏目录.git，这个不算工作区，而是 Git 的版本库。")]),s._v(" "),n("p",[s._v("Git 的版本库里存了很多东西，其中最重要的就是称为 stage(或者叫 index)的暂存区，还有 Git 为我们自动创建的第一个分支 "),n("code",[s._v("master")]),s._v("，以及指向 master 的一个指针叫 "),n("code",[s._v("HEAD")]),s._v("。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(588),alt:"版本库图例"}})]),s._v(" "),n("p",[s._v("前面讲了我们把文件往 Git 版本库里添加的时候，提交更改，实际上就是把暂存区的所有内容提交到当前分支。我们创建 Git 版本库时，Git 自动为我们创建了唯一一个 "),n("code",[s._v("master")]),s._v(" 分支，所以，现在，"),n("code",[s._v("git commit")]),s._v(" 就是往 master 分支上提交更改。")]),s._v(" "),n("p",[s._v("您可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。")]),s._v(" "),n("p",[s._v("先对 readme.txt 做个修改，比如加上一行内容:")]),s._v(" "),n("div",{staticClass:"language-md line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[s._v("Git is a distributed version control system.\nGit is free software distributed under the GPL.\nGit has a mutable index called stage.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("然后，在工作区新增一个 LICENSE 文本文件(内容随便写)。")]),s._v(" "),n("p",[s._v("先用 "),n("code",[s._v("git status")]),s._v(" 查看一下状态:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nChanges not staged "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commit:\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to update what will be committed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git checkout -- <file>..."')]),s._v(" to discard changes "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" working directory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    modified:   readme.txt\n\nUntracked files:\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to include "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" what will be committed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    LICENSE\n\nno changes added to commit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v(" and/or "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit -a"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("Git 非常清楚地告诉我们，readme.txt 被修改了，而 LICENSE 还从来没有被添加过，所以它的状态是 "),n("code",[s._v("Untracked")]),s._v("。")]),s._v(" "),n("p",[s._v("现在，使用两次命令 "),n("code",[s._v("git add")]),s._v("，把 readme.txt 和 LICENSE 都添加后，用 "),n("code",[s._v("git status")]),s._v(" 再查看一下:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nChanges to be committed:\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git reset HEAD <file>..."')]),s._v(" to unstage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    new file:   LICENSE\n    modified:   readme.txt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("现在，暂存区的状态就变成这样了:")]),s._v(" "),n("p",[n("img",{attrs:{src:a(589),alt:"示例图6"}})]),s._v(" "),n("p",[s._v("所以，"),n("code",[s._v("git add")]),s._v(" 命令实际上就是把要提交的所有修改放到暂存区(Stage)，然后，执行 "),n("code",[s._v("git commit")]),s._v(" 就可以一次性把暂存区的所有修改提交到分支。")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"understand how stage works"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master e43a48b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" understand how stage works\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" files changed, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" insertions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n create mode "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" LICENSE\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("一旦提交后，如果您又没有对工作区做任何修改，那么工作区就是“干净”的:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nnothing to commit, working tree clean\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);