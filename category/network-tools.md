# 网络工具命令

网络工具命令用于网络配置、诊断、数据传输等网络相关操作。

## 命令列表

### 网络诊断

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/ping">ping</a></h3>
    <p>测试网络连接，发送ICMP回显请求</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/ping6">ping6</a></h3>
    <p>IPv6版本的ping命令</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/traceroute">traceroute</a></h3>
    <p>跟踪数据包到目标主机的路由</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/tracepath">tracepath</a></h3>
    <p>跟踪网络路径的MTU</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/mtr">mtr</a></h3>
    <p>结合ping和traceroute的网络诊断工具</p>
  </div>
</div>

### 网络信息

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/netstat">netstat</a></h3>
    <p>显示网络连接、路由表、接口统计</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/ss">ss</a></h3>
    <p>现代化的netstat替代工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/ifconfig">ifconfig</a></h3>
    <p>配置网络接口</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/ip">ip</a></h3>
    <p>现代化的网络配置工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/route">route</a></h3>
    <p>显示和操作IP路由表</p>
  </div>
</div>

### DNS工具

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/nslookup">nslookup</a></h3>
    <p>查询DNS记录</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/dig">dig</a></h3>
    <p>强大的DNS查询工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/host">host</a></h3>
    <p>DNS查询工具</p>
  </div>
</div>

### 数据传输

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/wget">wget</a></h3>
    <p>非交互式网络下载器</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/curl">curl</a></h3>
    <p>传输数据工具，支持多种协议</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/scp">scp</a></h3>
    <p>安全复制文件</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/rsync">rsync</a></h3>
    <p>远程文件同步工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/ftp">ftp</a></h3>
    <p>文件传输协议客户端</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/sftp">sftp</a></h3>
    <p>安全文件传输协议</p>
  </div>
</div>

### 远程连接

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/ssh">ssh</a></h3>
    <p>安全shell远程登录</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/telnet">telnet</a></h3>
    <p>远程登录工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/nc">nc</a></h3>
    <p>netcat网络工具</p>
  </div>
</div>

### 网络监控

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/tcpdump">tcpdump</a></h3>
    <p>网络数据包分析器</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/iftop">iftop</a></h3>
    <p>实时网络流量监控</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/nethogs">nethogs</a></h3>
    <p>按进程监控网络使用情况</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/nmap">nmap</a></h3>
    <p>网络探测工具和安全扫描器</p>
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
