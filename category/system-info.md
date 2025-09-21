# 系统信息命令

系统信息命令用于获取和监控 Linux 系统的各种状态信息，包括进程、内存、磁盘、网络等。

## 命令列表

### 进程信息

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/ps">ps</a></h3>
    <p>显示当前运行的进程快照</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/top">top</a></h3>
    <p>实时显示系统中运行的进程</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/htop">htop</a></h3>
    <p>增强版的 top，提供更友好的界面</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/pstree">pstree</a></h3>
    <p>以树形结构显示进程关系</p>
  </div>
</div>

### 系统状态

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/uptime">uptime</a></h3>
    <p>显示系统运行时间和负载</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/w">w</a></h3>
    <p>显示已登录用户及其活动</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/who">who</a></h3>
    <p>显示当前登录的用户</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/whoami">whoami</a></h3>
    <p>显示当前用户名</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/id">id</a></h3>
    <p>显示用户和组ID</p>
  </div>
</div>

### 系统信息

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/uname">uname</a></h3>
    <p>显示系统信息</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/hostname">hostname</a></h3>
    <p>显示或设置主机名</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/hostnamectl">hostnamectl</a></h3>
    <p>控制系统主机名</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/date">date</a></h3>
    <p>显示或设置系统日期</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/timedatectl">timedatectl</a></h3>
    <p>控制系统时间和日期</p>
  </div>
</div>

### 硬件信息

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/lscpu">lscpu</a></h3>
    <p>显示CPU架构信息</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/lsblk">lsblk</a></h3>
    <p>列出所有可用块设备</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/lspci">lspci</a></h3>
    <p>列出PCI设备</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/lsusb">lsusb</a></h3>
    <p>列出USB设备</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/dmidecode">dmidecode</a></h3>
    <p>获取硬件信息</p>
  </div>
</div>

### 存储和内存

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/df">df</a></h3>
    <p>显示文件系统磁盘空间使用情况</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/du">du</a></h3>
    <p>显示目录空间使用情况</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/free">free</a></h3>
    <p>显示内存使用情况</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/lsof">lsof</a></h3>
    <p>列出打开的文件</p>
  </div>
</div>

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
