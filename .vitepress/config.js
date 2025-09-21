import { defineConfig } from "vitepress";
import { generateSidebar } from "./sidebar.js";

export default defineConfig({
  lang: "zh-CN",
  title: "Linux 命令大全",
  description: "最全面的 Linux 命令参考手册",

  cleanUrls: true,
  lastUpdated: true,

  head: [
    [
      "meta",
      { name: "viewport", content: "width=device-width,initial-scale=1" },
    ],
    ["meta", { name: "author", content: "Linux Command" }],
    [
      "meta",
      { name: "keywords", content: "linux,命令,shell,bash,终端,command" },
    ],
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  ],

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "所有命令", link: "/commands" },
      {
        text: "分类浏览",
        items: [
          { text: "文件操作", link: "/category/file-operations" },
          { text: "文本处理", link: "/category/text-processing" },
          { text: "系统信息", link: "/category/system-info" },
          { text: "进程管理", link: "/category/process-management" },
          { text: "网络工具", link: "/category/network-tools" },
          { text: "压缩归档", link: "/category/archive-compression" },
          { text: "权限管理", link: "/category/permissions" },
          { text: "包管理", link: "/category/package-management" },
        ],
      },
      { text: "GitHub", link: "https://github.com/jaywcjlove/linux-command" },
    ],

    sidebar: generateSidebar(),

    socialLinks: [
      { icon: "github", link: "https://github.com/jaywcjlove/linux-command" },
    ],

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索命令",
            buttonAriaLabel: "搜索命令",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    editLink: {
      pattern: "https://github.com/jaywcjlove/linux-command/edit/main/:path",
      text: "在 GitHub 上编辑此页",
    },

    footer: {
      message: "基于 MIT 许可发布",
      copyright: "Copyright © 2024 Linux Command",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    lastUpdatedText: "最后更新于",

    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",

    outline: {
      label: "页面导航",
      level: [2, 3],
    },
  },

  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },

  sitemap: {
    hostname: "https://wangchujiang.com/linux-command/",
  },
});
