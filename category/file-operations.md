# 文件操作命令

文件操作是 Linux 系统中最基础也是最常用的操作。这一类命令主要用于文件和目录的创建、删除、复制、移动、查找等操作。

## 命令列表

### 基础文件操作

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/ls">ls</a></h3>
    <p>显示目录内容列表，是最常用的文件查看命令</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/cd">cd</a></h3>
    <p>切换当前工作目录</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/pwd">pwd</a></h3>
    <p>显示当前工作目录的完整路径</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/mkdir">mkdir</a></h3>
    <p>创建目录（文件夹）</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/rmdir">rmdir</a></h3>
    <p>删除空目录</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/rm">rm</a></h3>
    <p>删除文件或目录</p>
  </div>
</div>

### 文件复制与移动

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/cp">cp</a></h3>
    <p>复制文件或目录</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/mv">mv</a></h3>
    <p>移动文件或目录，也可用于重命名</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/ln">ln</a></h3>
    <p>创建链接文件（硬链接或符号链接）</p>
  </div>
</div>

### 文件查找与信息

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/find">find</a></h3>
    <p>在目录树中搜索文件和目录</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/locate">locate</a></h3>
    <p>快速查找文件，基于数据库搜索</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/which">which</a></h3>
    <p>查找命令的位置</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/whereis">whereis</a></h3>
    <p>查找二进制文件、源码文件和手册页文件的位置</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/file">file</a></h3>
    <p>识别文件类型</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/stat">stat</a></h3>
    <p>显示文件或文件系统的详细状态</p>
  </div>
</div>

### 其他实用工具

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/touch">touch</a></h3>
    <p>创建空文件或更新文件时间戳</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/tree">tree</a></h3>
    <p>以树形结构显示目录内容</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/basename">basename</a></h3>
    <p>从完整路径中提取文件名</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/dirname">dirname</a></h3>
    <p>从完整路径中提取目录路径</p>
  </div>
</div>

## 常用示例

### 基础操作流程

```bash
# 查看当前目录内容
ls -la

# 创建目录
mkdir myproject

# 进入目录
cd myproject

# 创建文件
touch index.html style.css

# 复制文件
cp style.css backup.css

# 移动文件
mv backup.css styles/

# 查找文件
find . -name "*.css"

# 删除文件
rm backup.css
```

### 批量操作

```bash
# 创建多个目录
mkdir -p project/{src,dist,docs}

# 批量复制
cp *.txt backup/

# 批量删除
rm *.tmp

# 递归删除目录
rm -rf temp_folder
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
