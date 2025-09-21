# 进程管理命令

进程管理命令用于控制和监控系统中运行的进程，包括启动、停止、暂停、恢复进程等操作。

## 命令列表

### 进程控制

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/kill">kill</a></h3>
    <p>向进程发送信号，通常用于终止进程</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/killall">killall</a></h3>
    <p>按名称杀死进程</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/pkill">pkill</a></h3>
    <p>根据条件杀死进程</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/pgrep">pgrep</a></h3>
    <p>根据条件查找进程</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/pidof">pidof</a></h3>
    <p>查找进程的PID</p>
  </div>
</div>

### 任务控制

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/jobs">jobs</a></h3>
    <p>显示活跃的任务</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/bg">bg</a></h3>
    <p>将任务置于后台运行</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/fg">fg</a></h3>
    <p>将后台任务切换到前台</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/nohup">nohup</a></h3>
    <p>运行命令，忽略挂起信号</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/disown">disown</a></h3>
    <p>从shell的作业列表中移除作业</p>
  </div>
</div>

### 会话管理

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/screen">screen</a></h3>
    <p>终端多路复用器</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/tmux">tmux</a></h3>
    <p>现代化的终端多路复用器</p>
  </div>
</div>

### 系统服务

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/systemctl">systemctl</a></h3>
    <p>systemd服务管理器</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/service">service</a></h3>
    <p>传统的系统服务控制命令</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/chkconfig">chkconfig</a></h3>
    <p>系统服务的运行级别配置</p>
  </div>
</div>

### 进程监控

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/pmap">pmap</a></h3>
    <p>显示进程的内存映射</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/strace">strace</a></h3>
    <p>跟踪进程的系统调用</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/ltrace">ltrace</a></h3>
    <p>跟踪进程的库调用</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/pstack">pstack</a></h3>
    <p>打印进程的堆栈跟踪</p>
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
