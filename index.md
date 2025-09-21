---
layout: home

hero:
  name: "Linux 命令大全"
  text: "Linux Command"
  tagline: "最全面的 Linux 命令参考手册，收录 600+ 个命令详细说明和使用示例"
  image:
    src: /logo.svg
    alt: Linux Command Logo
  actions:
    - theme: brand
      text: 开始使用
      link: /commands
    - theme: alt
      text: 分类浏览
      link: /category/file-operations

features:
  - icon: 📚
    title: 详细文档
    details: 收录 600+ 个 Linux 命令，每个命令都有详细的语法说明、参数介绍和实用示例
  - icon: 🔍
    title: 快速搜索
    details: 支持全文搜索功能，快速找到你需要的命令和相关信息
  - icon: 📱
    title: 响应式设计
    details: 完全响应式设计，支持桌面端和移动端，随时随地查阅命令手册
  - icon: ⚡
    title: 分类清晰
    details: 按功能将命令分为8大类，包括文件操作、文本处理、系统信息等
  - icon: 🎯
    title: 实用示例
    details: 每个命令都配有实际使用示例，让你快速上手和掌握
  - icon: 🆓
    title: 开源免费
    details: 完全开源，基于 MIT 许可证，可以自由使用和贡献
---

## 热门命令

<div class="command-grid">
  <a href="/command/ls" class="command-card">
    <h3>ls</h3>
    <p>显示目录内容列表</p>
  </a>
  <a href="/command/cd" class="command-card">
    <h3>cd</h3>
    <p>切换工作目录</p>
  </a>
  <a href="/command/grep" class="command-card">
    <h3>grep</h3>
    <p>强大的文本搜索工具</p>
  </a>
  <a href="/command/cat" class="command-card">
    <h3>cat</h3>
    <p>连接多个文件并打印到标准输出</p>
  </a>
  <a href="/command/find" class="command-card">
    <h3>find</h3>
    <p>在目录树中查找文件</p>
  </a>
  <a href="/command/tar" class="command-card">
    <h3>tar</h3>
    <p>打包和压缩文件</p>
  </a>
</div>

## 🎖️ 致敬

本项目致敬并基于 [@jaywcjlove](https://github.com/jaywcjlove) 的优秀开源项目 [linux-command](https://github.com/jaywcjlove/linux-command)，使用 VitePress 重新构建，提供更现代化的文档体验，并提供分类索引。

感谢原作者及所有贡献者为 Linux 社区所做的卓越贡献！ 🙏

<style>
.command-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.command-card {
  padding: 20px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
}

.command-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 16px var(--vp-shadow-2);
}

.command-card h3 {
  margin: 0 0 8px 0;
  color: var(--vp-c-brand);
  font-family: var(--vp-font-family-mono);
}

.command-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
}
</style>
