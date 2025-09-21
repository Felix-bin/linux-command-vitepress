import fs from "fs";
import path from "path";

const commandsDir = path.resolve(process.cwd(), "command");

// 根据首字母对命令进行分组
function groupCommandsByLetter() {
  const groups = {};

  try {
    const files = fs.readdirSync(commandsDir);

    files
      .filter((file) => file.endsWith(".md"))
      .forEach((file) => {
        const commandName = file.replace(".md", "");
        const firstLetter = commandName[0].toUpperCase();

        if (!groups[firstLetter]) {
          groups[firstLetter] = [];
        }

        groups[firstLetter].push({
          text: commandName,
          link: `/command/${commandName}`,
        });
      });

    // 对每组内的命令进行排序
    Object.keys(groups).forEach((letter) => {
      groups[letter].sort((a, b) => a.text.localeCompare(b.text));
    });
  } catch (error) {
    console.warn("Warning: Could not read commands directory:", error.message);
  }

  return groups;
}

// 命令分类映射
const commandCategories = {
  文件操作: [
    "ls",
    "cd",
    "pwd",
    "mkdir",
    "rmdir",
    "rm",
    "cp",
    "mv",
    "find",
    "locate",
    "file",
    "stat",
    "touch",
    "ln",
    "readlink",
    "tree",
    "basename",
    "dirname",
  ],
  文本处理: [
    "cat",
    "less",
    "more",
    "head",
    "tail",
    "grep",
    "sed",
    "awk",
    "sort",
    "uniq",
    "cut",
    "tr",
    "wc",
    "diff",
    "patch",
    "join",
    "paste",
    "tee",
  ],
  系统信息: [
    "ps",
    "top",
    "htop",
    "uptime",
    "who",
    "w",
    "id",
    "whoami",
    "uname",
    "hostname",
    "date",
    "cal",
    "df",
    "du",
    "free",
    "lscpu",
    "lsblk",
    "lsof",
  ],
  进程管理: [
    "kill",
    "killall",
    "jobs",
    "bg",
    "fg",
    "nohup",
    "screen",
    "tmux",
    "pidof",
    "pgrep",
    "pkill",
    "service",
    "systemctl",
  ],
  网络工具: [
    "ping",
    "wget",
    "curl",
    "ssh",
    "scp",
    "rsync",
    "netstat",
    "ss",
    "iptables",
    "firewall-cmd",
    "dig",
    "nslookup",
    "host",
  ],
  压缩归档: [
    "tar",
    "gzip",
    "gunzip",
    "zip",
    "unzip",
    "bzip2",
    "bunzip2",
    "xz",
    "7z",
  ],
  权限管理: [
    "chmod",
    "chown",
    "chgrp",
    "umask",
    "su",
    "sudo",
    "passwd",
    "groups",
  ],
  包管理: [
    "apt",
    "apt-get",
    "yum",
    "dnf",
    "pacman",
    "rpm",
    "dpkg",
    "snap",
    "pip",
  ],
};

// 分类名称到URL路径的映射
const categoryUrlMap = {
  文件操作: "file-operations",
  文本处理: "text-processing",
  系统信息: "system-info",
  进程管理: "process-management",
  网络工具: "network-tools",
  压缩归档: "archive-compression",
  权限管理: "permissions",
  包管理: "package-management",
};

// 生成侧边栏
export function generateSidebar() {
  const commandGroups = groupCommandsByLetter();

  return {
    "/": [
      {
        text: "开始使用",
        items: [
          { text: "介绍", link: "/" },
          { text: "所有命令", link: "/commands" },
        ],
      },
      {
        text: "命令分类",
        collapsed: false,
        items: Object.keys(commandCategories).map((category) => ({
          text: category,
          link: `/category/${categoryUrlMap[category]}`,
        })),
      },
      {
        text: "按字母浏览",
        collapsed: true,
        items: Object.keys(commandGroups)
          .sort()
          .map((letter) => ({
            text: `${letter} (${commandGroups[letter].length})`,
            collapsed: true,
            items: commandGroups[letter],
          })),
      },
    ],

    "/command/": [
      {
        text: "返回",
        items: [
          { text: "← 返回首页", link: "/" },
          { text: "← 所有命令", link: "/commands" },
        ],
      },
      {
        text: "相关命令",
        collapsed: false,
        items: Object.keys(commandGroups)
          .sort()
          .map((letter) => ({
            text: `${letter}`,
            collapsed: true,
            items: commandGroups[letter],
          })),
      },
    ],
  };
}
