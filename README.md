# Ou's Friends

你已经要准备和我交朋友了。真的准备好了吗？

## 交换要求

按常理来说，友链肯定是 **先友后链** 啦。不过，我打算更改一下策略：如果是很熟悉的朋友，可以直接 DM 我发起交换申请；而一般路过陌生人的话，需要按照接下来的要求和我交换，否则可能会被无情打回.jpg

接下来，如果建站时间过短（最短也得 3 个月）的网站还是别来啦。我不确定你能否在做网站这条路上越走越远，还是一时新鲜感、随便做做就放弃了。

再来，域名肯定是有要求的啦，要求如下：

- 使用自己购买的付费域名；
- 使用位于 [Public Suffix List](https://publicsuffix.org/list/public_suffix_list.dat) 中的任意一个非自行付费域名；
- 域名已启用 HTTPS；

最后，我也对网站的内容有所要求：

- 「广告」我自认为算是网站的内容之一，所以网站的广告不能多到一个令人反感的程度；
- 我没有特定的内容限制，但严重违反道德伦理、色情、擦边等内容是绝对不能容忍的；
- 我不要求你的网站有多少非常有意义的内容，但如果是采稿、洗稿这类行为的网站还是考虑一下绕路吧。

确定你的网站符合上述的所有要求了吗？那我们继续吧。

## 交换步骤

首先，请将我的网站添加到你的友链列表里。这里以博客为例：

- 网站标题：`Restent's Notebook`
- 网站链接：`https://blog.gxres.net`
- Slogan：`静寂に問う 答えを求めて`
- 头像：[https://library.gxres.net/images/icons/avatar.webp](https://library.gxres.net/images/icons/avatar.webp)

接下来，创建一个本仓库的 Fork，并按照接下来的步骤操作：

- 将一张方形（内容 + 透明区域）、不大于 100KB、256x 大小的 WebP 格式头像上传到 `src/img` 文件夹里，命名为 `[domain].webp`（例如 `blog.gxres.net.webp`；
- 按照下述格式将你的信息添加到 `list.yaml` 中：
  ```
  - name: "你的名字" # 请使用双引号包裹
    slogan: "你的 Slogan" # 请使用双引号包裹 
    avatar: https://links.slirv.vip/img/example.com.webp # 头像文件，请修改 `img/` 后的内容
    link: https://example.com # 你的网站链接
  ```
- 上述操作完成后，请新建一个 Pull Request，等待合并即可。

当你的 Pull Request 被通过、合并后，你的网站将在 12 小时内展示在我的 [友链页面](https://library.gxres.net/links)。

---

灵感源于 [SukkaW/Friends](https://github.com/SukkaW/Friends) 与 [ChrAlpha/Friends](https://github.com/ChrAlpha/Friends)，Restent Ou 与 SliverRiver 保留一切最终解释权。