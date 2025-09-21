# 权限管理命令

权限管理命令用于控制文件、目录的访问权限以及用户和组的管理。

## 命令列表

### 权限控制

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/chmod">chmod</a></h3>
    <p>修改文件或目录权限</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/chown">chown</a></h3>
    <p>修改文件或目录的所有者</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/chgrp">chgrp</a></h3>
    <p>修改文件或目录的所属组</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/umask">umask</a></h3>
    <p>设置默认权限掩码</p>
  </div>
</div>

### 用户切换

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/su">su</a></h3>
    <p>切换用户身份</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/sudo">sudo</a></h3>
    <p>以其他用户身份执行命令</p>
  </div>
</div>

### 用户管理

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/useradd">useradd</a></h3>
    <p>添加新用户账户</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/userdel">userdel</a></h3>
    <p>删除用户账户</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/usermod">usermod</a></h3>
    <p>修改用户账户</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/passwd">passwd</a></h3>
    <p>修改用户密码</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/chpasswd">chpasswd</a></h3>
    <p>批量修改用户密码</p>
  </div>
</div>

### 组管理

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/groupadd">groupadd</a></h3>
    <p>添加新组</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/groupdel">groupdel</a></h3>
    <p>删除组</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/groupmod">groupmod</a></h3>
    <p>修改组属性</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/groups">groups</a></h3>
    <p>显示用户所属组</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/gpasswd">gpasswd</a></h3>
    <p>管理组密码和成员</p>
  </div>
</div>

### 扩展属性

<div class="command-list">
  <div class="command-item">
    <h3><a href="/command/getfacl">getfacl</a></h3>
    <p>获取文件访问控制列表</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/setfacl">setfacl</a></h3>
    <p>设置文件访问控制列表</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/lsattr">lsattr</a></h3>
    <p>显示文件扩展属性</p>
  </div>
  
  <div class="command-item">
    <h3><a href="/command/chattr">chattr</a></h3>
    <p>修改文件扩展属性</p>
  </div>
</div>

## 权限基础知识

### 标准权限

Linux文件权限使用三组权限位：
- **所有者权限** (user): 文件/目录的所有者
- **组权限** (group): 文件/目录所属组的成员  
- **其他权限** (other): 其他所有用户

每组权限包含三个权限位：
- **r** (read): 读权限 - 4
- **w** (write): 写权限 - 2
- **x** (execute): 执行权限 - 1

### 权限表示方法

```bash
# 符号表示法
chmod u+rwx,g+rw,o+r filename

# 数字表示法  
chmod 764 filename

# 常用权限组合
chmod 755 script.sh    # 可执行文件
chmod 644 document.txt # 普通文件
chmod 600 private.key  # 私密文件
chmod 755 directory/   # 目录权限
```

### 特殊权限

```bash
# SUID (Set User ID) - 4000
chmod u+s executable

# SGID (Set Group ID) - 2000  
chmod g+s executable

# Sticky Bit - 1000
chmod +t directory/
```

## 实用示例

### 批量权限管理

```bash
# 递归修改目录权限
chmod -R 755 /var/www/html/

# 批量修改文件所有者
chown -R www-data:www-data /var/www/

# 查找并修改权限
find /path -type f -exec chmod 644 {} \;
find /path -type d -exec chmod 755 {} \;
```

### 用户组管理

```bash
# 创建用户并指定组
useradd -g users -G wheel,docker newuser

# 将用户添加到组
usermod -aG sudo username

# 查看用户组信息
groups username
id username
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
