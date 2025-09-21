# 文本处理命令

文本处理是 Linux 系统的强项之一，提供了丰富而强大的文本处理工具。这些命令可以用于查看、搜索、编辑、分析和处理文本文件。

## 命令列表

### 文本查看

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/cat">cat</a></h3>
    <p>连接多个文件并打印到标准输出，常用于查看文件内容</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/less">less</a></h3>
    <p>分页查看文件内容，支持向前向后翻页</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/more">more</a></h3>
    <p>分页查看文件内容，只支持向前翻页</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/head">head</a></h3>
    <p>显示文件的前几行（默认10行）</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/tail">tail</a></h3>
    <p>显示文件的后几行，常用于查看日志文件</p>
  </div>
</div>

### 文本搜索与匹配

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/grep">grep</a></h3>
    <p>强大的文本搜索工具，支持正则表达式</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/egrep">egrep</a></h3>
    <p>扩展的正则表达式搜索工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/fgrep">fgrep</a></h3>
    <p>快速的固定字符串搜索工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/ag">ag</a></h3>
    <p>银搜索器，比 grep 更快的代码搜索工具</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/ack">ack</a></h3>
    <p>程序员友好的搜索工具</p>
  </div>
</div>

### 文本编辑与转换

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/sed">sed</a></h3>
    <p>流编辑器，用于文本替换、删除、插入等操作</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/awk">awk</a></h3>
    <p>强大的文本处理工具，适合处理结构化文本</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/tr">tr</a></h3>
    <p>字符转换工具，可以替换或删除字符</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/cut">cut</a></h3>
    <p>从文本中提取指定的列或字段</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/paste">paste</a></h3>
    <p>合并文件的行</p>
  </div>
</div>

### 文本排序与统计

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/sort">sort</a></h3>
    <p>对文本行进行排序</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/uniq">uniq</a></h3>
    <p>报告或删除重复的行</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/wc">wc</a></h3>
    <p>统计文件的行数、单词数和字符数</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/nl">nl</a></h3>
    <p>给文本行添加行号</p>
  </div>
</div>

### 文本比较

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/diff">diff</a></h3>
    <p>比较两个文件的差异</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/comm">comm</a></h3>
    <p>逐行比较两个已排序的文件</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/cmp">cmp</a></h3>
    <p>逐字节比较两个文件</p>
  </div>
</div>

## 实用示例

### 日志分析

```bash
# 查看日志文件最后100行
tail -n 100 /var/log/syslog

# 实时监控日志文件
tail -f /var/log/apache2/access.log

# 搜索错误信息
grep -i "error" /var/log/syslog

# 统计IP访问次数
awk '{print $1}' access.log | sort | uniq -c | sort -nr
```

### 文本处理流水线

```bash
# 提取、排序并统计唯一值
cat data.txt | cut -d',' -f2 | sort | uniq -c

# 搜索并高亮显示
grep --color=always "pattern" file.txt

# 替换文本内容
sed 's/old_text/new_text/g' file.txt

# 复杂的 awk 处理
awk -F',' '{sum+=$3} END {print "Total: " sum}' data.csv
```

### 数据清洗

```bash
# 删除空行
sed '/^$/d' file.txt

# 删除重复行
sort file.txt | uniq

# 转换大小写
tr '[:lower:]' '[:upper:]' < file.txt

# 删除特定字符
tr -d '[:digit:]' < file.txt
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
