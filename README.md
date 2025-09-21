# Linux 命令大全

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/Felix-bin/linux-command-vitepress)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Website](https://img.shields.io/badge/website-online-brightgreen.svg)](https://felix-bin.github.io/linux-command-vitepress/)

> 一个全面的 Linux 命令参考手册，基于linux-command/command下提供的md包含的600+ 个命令详细说明和使用示例

## 🎖️ 致敬

本项目致敬并基于 [@jaywcjlove](https://github.com/jaywcjlove) 的优秀开源项目 [linux-command](https://github.com/jaywcjlove/linux-command.git)，使用 VitePress 重新构建，提供更现代化的文档体验，并提供分类索引。

感谢原作者及所有贡献者为 Linux 社区所做的卓越贡献！ 🙏

## 🚀 特性

- 📚 **详细文档** - 收录 600+ 个 Linux 命令，每个命令都有详细的语法说明、参数介绍和实用示例
- 🔍 **快速搜索** - 支持全文搜索功能，快速找到你需要的命令和相关信息
- 📱 **响应式设计** - 完全响应式设计，支持桌面端和移动端，随时随地查阅命令手册
- ⚡ **分类清晰** - 按功能将命令分为 8 大类，包括文件操作、文本处理、系统信息等
- 🎯 **实用示例** - 每个命令都配有实际使用示例，让你快速上手和掌握
- 🆓 **开源免费** - 完全开源，基于 MIT 许可证，可以自由使用和贡献

## 📂 命令分类

### [文件操作](/category/file-operations)

`ls` `cd` `pwd` `mkdir` `rm` `cp` `mv` `find` `locate` `chmod` `chown` `ln` 等

### [文本处理](/category/text-processing)

`cat` `grep` `sed` `awk` `sort` `uniq` `cut` `tr` `head` `tail` `less` `more` 等

### [系统信息](/category/system-info)

`ps` `top` `htop` `df` `du` `free` `uname` `whoami` `uptime` `lscpu` `lsblk` 等

### [进程管理](/category/process-management)

`kill` `killall` `jobs` `bg` `fg` `nohup` `screen` `tmux` `systemctl` `service` 等

### [网络工具](/category/network-tools)

`ping` `wget` `curl` `ssh` `scp` `rsync` `netstat` `ss` `iptables` `dig` `nmap` 等

### [压缩归档](/category/archive-compression)

`tar` `gzip` `zip` `unzip` `bzip2` `xz` `7z` `rar` `cpio` 等

### [权限管理](/category/permissions)

`chmod` `chown` `chgrp` `su` `sudo` `useradd` `usermod` `passwd` `groups` 等

### [包管理](/category/package-management)

`apt` `yum` `dnf` `pacman` `rpm` `dpkg` `snap` `pip` `npm` 等

## 🛠️ 开发

### 环境要求

- Node.js >= 18.0.0
- npm

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/Felix-bin/linux-command-vitepress.git
cd linux-command-vitepress

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 项目结构

```
linux-command-vitepress/
├── .vitepress/           # VitePress 配置
│   ├── config.js        # 主配置文件
│   ├── sidebar.js       # 侧边栏配置
│   └── theme/           # 自定义主题
├── command/             # 命令文档目录 (600+ 个命令)
├── category/            # 分类页面
├── public/              # 静态资源
├── index.md            # 首页
├── commands.md         # 所有命令页面
└── package.json        # 项目配置
```

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

### 添加新命令

如果你想添加新的命令文档：

1. 在 `command/` 目录下创建新的 `.md` 文件
2. 按照现有命令文档的格式编写
3. 确保包含命令说明、语法、选项、参数和实例
4. 在相应的分类页面中添加链接

### 文档格式

每个命令文档应该包含以下部分：

````markdown
# 命令名

简短描述

## 补充说明

详细说明命令的用途和工作原理

### 语法

```shell
command [options] [arguments]
```
````

### 选项

```shell
-a, --all     # 选项说明
-h, --help    # 显示帮助信息
```

### 实例

```shell
# 示例1：基本用法
command option argument

# 示例2：高级用法
command --advanced-option
```



## 📄 许可证
本项目基于 [MIT](LICENSE) 许可证开源。

## 🔗 相关链接

- [在线文档](https://felix-bin.github.io/linux-command-vitepress/)
- [GitHub 仓库](https://github.com/Felix-bin/linux-command-vitepress)
- [反馈问题](https://github.com/Felix-bin/linux-command-vitepress/issues)
- [原始项目](https://github.com/jaywcjlove/linux-command) - 感谢 [@jaywcjlove](https://github.com/jaywcjlove)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者们！

---

如果这个项目对你有帮助，请给我们一个 ⭐️！




