# 包管理命令

包管理命令用于软件包的安装、更新、删除和管理。不同的Linux发行版使用不同的包管理系统。

## 命令列表

### Debian/Ubuntu 系列 (APT)

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/apt">apt</a></h3>
    <p>现代化的包管理工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/apt-get">apt-get</a></h3>
    <p>传统的APT包管理工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/apt-key">apt-key</a></h3>
    <p>管理APT密钥</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/aptitude">aptitude</a></h3>
    <p>高级包管理工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/dpkg">dpkg</a></h3>
    <p>Debian包管理器</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/dpkg-query">dpkg-query</a></h3>
    <p>查询dpkg数据库</p>
  </div>
</div>

### Red Hat/CentOS 系列

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/yum">yum</a></h3>
    <p>传统的YUM包管理器</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/dnf">dnf</a></h3>
    <p>新一代的DNF包管理器</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/rpm">rpm</a></h3>
    <p>RPM包管理器</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/rpmquery">rpmquery</a></h3>
    <p>查询RPM包信息</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/rpmbuild">rpmbuild</a></h3>
    <p>构建RPM包</p>
  </div>
</div>

### Arch Linux

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/pacman">pacman</a></h3>
    <p>Arch Linux包管理器</p>
  </div>
</div>

### Alpine Linux

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/apk">apk</a></h3>
    <p>Alpine包管理器</p>
  </div>
</div>

### 通用包管理器

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/snap">snap</a></h3>
    <p>Universal包管理系统</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/flatpak">flatpak</a></h3>
    <p>应用程序沙盒和分发框架</p>
  </div>
</div>

### 语言特定包管理器

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/pip">pip</a></h3>
    <p>Python包管理器</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/npm">npm</a></h3>
    <p>Node.js包管理器</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/gem">gem</a></h3>
    <p>Ruby包管理器</p>
  </div>
</div>

## 常用操作对比

| 操作 | APT (Debian/Ubuntu) | YUM/DNF (RHEL/CentOS) | Pacman (Arch) |
|------|---------------------|----------------------|---------------|
| 更新包列表 | `apt update` | `dnf check-update` | `pacman -Sy` |
| 升级系统 | `apt upgrade` | `dnf upgrade` | `pacman -Syu` |
| 安装包 | `apt install package` | `dnf install package` | `pacman -S package` |
| 删除包 | `apt remove package` | `dnf remove package` | `pacman -R package` |
| 搜索包 | `apt search keyword` | `dnf search keyword` | `pacman -Ss keyword` |
| 显示包信息 | `apt show package` | `dnf info package` | `pacman -Si package` |
| 列出已安装 | `apt list --installed` | `dnf list installed` | `pacman -Q` |
| 清理缓存 | `apt autoremove` | `dnf autoremove` | `pacman -Sc` |

## 实用示例

### APT 包管理

```bash
# 更新包列表
sudo apt update

# 升级所有包
sudo apt upgrade

# 安装软件包
sudo apt install vim git curl

# 删除软件包
sudo apt remove package-name

# 搜索软件包
apt search keyword

# 显示包信息
apt show package-name

# 列出可升级的包
apt list --upgradable

# 自动移除不需要的包
sudo apt autoremove

# 清理包缓存
sudo apt autoclean
```

### YUM/DNF 包管理

```bash
# 更新系统
sudo dnf update

# 安装软件包
sudo dnf install package-name

# 删除软件包
sudo dnf remove package-name

# 搜索软件包
dnf search keyword

# 显示包信息
dnf info package-name

# 列出已安装的包
dnf list installed

# 清理缓存
sudo dnf clean all

# 显示包的依赖关系
dnf deplist package-name
```

### Pacman 包管理

```bash
# 同步并更新系统
sudo pacman -Syu

# 安装软件包
sudo pacman -S package-name

# 删除软件包
sudo pacman -R package-name

# 搜索软件包
pacman -Ss keyword

# 显示包信息
pacman -Si package-name

# 列出已安装的包
pacman -Q

# 清理缓存
sudo pacman -Sc
```

### 现代包管理器

```bash
# Snap 包管理
sudo snap install package-name
sudo snap remove package-name
snap list
snap find keyword

# Flatpak 包管理
flatpak install flathub app-id
flatpak uninstall app-id
flatpak list
flatpak search keyword
```

<style>
.command-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.command-item {
  padding: 20px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.command-item h3 {
  margin: 0 0 8px 0;
}

.command-item h3 a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-family: var(--vp-font-family-mono);
}

.command-item h3 a:hover {
  text-decoration: underline;
}

.command-item p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.5;
}
</style>
