# 压缩归档命令

压缩归档命令用于文件和目录的打包、压缩、解压缩操作，是文件管理中的重要工具。

## 命令列表

### 通用归档工具

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/tar">tar</a></h3>
    <p>磁带归档工具，最常用的打包工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/cpio">cpio</a></h3>
    <p>复制文件至归档包</p>
  </div>
</div>

### gzip 系列

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/gzip">gzip</a></h3>
    <p>GNU压缩工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/gunzip">gunzip</a></h3>
    <p>GNU解压缩工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/zcat">zcat</a></h3>
    <p>查看压缩文件内容</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/pigz">pigz</a></h3>
    <p>并行的gzip实现</p>
  </div>
</div>

### bzip2 系列

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/bzip2">bzip2</a></h3>
    <p>高压缩比的压缩工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/bunzip2">bunzip2</a></h3>
    <p>bzip2解压缩工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/bzcat">bzcat</a></h3>
    <p>查看bzip2压缩文件内容</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/bzcmp">bzcmp</a></h3>
    <p>比较bzip2压缩文件</p>
  </div>
</div>

### ZIP 系列

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/zip">zip</a></h3>
    <p>创建ZIP压缩文件</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/unzip">unzip</a></h3>
    <p>解压ZIP文件</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/zipinfo">zipinfo</a></h3>
    <p>显示ZIP文件信息</p>
  </div>
</div>

### xz 系列

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/xz">xz</a></h3>
    <p>高效的LZMA2压缩工具</p>
  </div>
</div>

### 其他压缩工具

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/7z">7z</a></h3>
    <p>7-Zip压缩工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/rar">rar</a></h3>
    <p>RAR压缩工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/unrar">unrar</a></h3>
    <p>RAR解压工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/compress">compress</a></h3>
    <p>传统的UNIX压缩工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/uncompress">uncompress</a></h3>
    <p>解压compress文件</p>
  </div>
</div>

## 常用压缩格式对比

| 格式     | 压缩比 | 速度 | 兼容性 | 用途         |
| -------- | ------ | ---- | ------ | ------------ |
| .tar.gz  | 中等   | 快   | 极好   | 通用归档     |
| .tar.bz2 | 高     | 慢   | 好     | 高压缩需求   |
| .tar.xz  | 最高   | 最慢 | 较好   | 最佳压缩     |
| .zip     | 中等   | 中等 | 极好   | 跨平台       |
| .7z      | 高     | 中等 | 中等   | Windows 兼容 |

## 实用示例

### 常用打包压缩

```bash
# 创建tar.gz压缩包
tar -czf archive.tar.gz directory/

# 创建tar.bz2压缩包
tar -cjf archive.tar.bz2 directory/

# 创建tar.xz压缩包
tar -cJf archive.tar.xz directory/

# 创建ZIP文件
zip -r archive.zip directory/
```

### 解压缩操作

```bash
# 解压tar.gz
tar -xzf archive.tar.gz

# 解压tar.bz2
tar -xjf archive.tar.bz2

# 解压tar.xz
tar -xJf archive.tar.xz

# 解压ZIP文件
unzip archive.zip
```

### 查看压缩包内容

```bash
# 查看tar包内容
tar -tf archive.tar.gz

# 查看ZIP包内容
unzip -l archive.zip

# 查看7z包内容
7z l archive.7z
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
