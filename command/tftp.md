# tftp

在本机和 tftp 服务器之间使用 TFTP 协议传输文件

## 补充说明

**tftp 命令** 用在本机和 tftp 服务器之间使用 TFTP 协议传输文件。

TFTP 是用来下载远程文件的最简单网络协议，它其于 UDP 协议而实现。嵌入式 linux 的 tftp 开发环境包括两个方面：一是 linux 服务器端的 tftp-server 支持，二是嵌入式目标系统的 tftp-client 支持。因为 u-boot 本身内置支持 tftp-client，所以嵌入式目标系统端就不用配置了。下面就详细介绍一下 linux 服务器端 tftp-server 的配置。

### 语法

```shell
tftp(选项)(参数)
```

### 选项

```shell
-c：指定与tftp服务器连接成功后，立即要执行的指令；
-m：指定文件传输模式。可以是ASCII或者Binary；
-v：显示指令详细执行过程；
-V：显示指令版本信息。
```

### 参数

主机：指定 tftp 要联机的 tftp 服务器的 ip 地址或主机名。

### 实例

**1、安装 tftp 服务器**

需要安装 xinetd、tftp 和 tftp-server 3 个软件

如果能上网，通过 yum 安装：

```shell
yum install xinetd
yum install tftp
yum install tftp-server
```

如果不能上网，可以直接安装提供的 rpm 包：

```shell
rpm -ivh xinetd-2.3.14-18.fc9.i386.rpm
rpm -ivh tftp-0.48-3.fc9.i386.rpm
rpm -ivh tftp-server-0.48-3.fc9.i386.rpm
```

**2、配置 tftp 服务器**

修改/etc/xinetd.d/tftp 文件，将其中的 disable=yes 改为 disable=no。主要是设置 TFTP 服务器的根目录，开启服务。修改后的文件如下：

```shell
service tftp
{
       socket_type           =dgram
       protocol              =udp
       wait                  =yes
       user                  =root
       server                =/usr/sbin/in.tftpd
       server_args           =-s  /home/mike/tftpboot -c
       disable               =no
       per_source            =11
       cps                   =100 2
       flags                 =IPv4
}
```

说明：修改项`server_args= -s <path> -c`，其中`<path>`处可以改为你的 tftp-server 的根目录，参数-s 指定 chroot，-c 指定了可以创建文件。

**3、启动 tftp 服务器并关闭防火墙**

```shell
/etc/init.d/iptables stop        # 关闭防火墙
sudo /sbin/service xinetd start
或
service xinetd restart
/etc/init.d/xinetd start
```

看到启动[OK]就可以了

4、查看 tftp 服务是否开启

```shell
netstat -a | grep tftp
```

显示结果为`udp 0 0 *:tftp *:*`表明服务已经开启，就表明 tftp 配置成功了。

**5、tftp 使用**

复制一个文件到 tftp 服务器目录，然后在主机启动 tftp 软件，进行简单测试。

```shell
tftp 192.168.1.2
tftp>get `<download file>`

tftp>put `<upload file>`
tftp>q
```

**6、tftp 命令用法如下**

```shell
tftp your-ip-address
```

进入 TFTP 操作：

- connect：连接到远程 tftp 服务器
- mode：文件传输模式
- put：上传文件
- get：下载文件
- quit：退出
- verbose：显示详细的处理信息
- tarce：显示包路径
- status：显示当前状态信息
- binary：二进制传输模式
- ascii：ascii 传送模式
- rexmt：设置包传输的超时时间
- timeout：设置重传的超时时间
- help：帮助信息
- ? ：帮助信息

**7、如果老是出现“AVC Denial, click icon to view”的错误，并不能传输文件，需要作如下修改**

修改`/etc/sysconfig/selinux`,将 SELINUX 设定为 disable，使用命令`setenforce 0`让 selinux 配置文件生效。

**8、Busybox 中 tftp 命令的用法**

命令格式为：

```shell
tftp [option] ... host [port]
```

如果要下载或上传文件的话是一定要用这些 option 的。

```shell
-g 表示下载文件 (get)
-p 表示上传文件 (put)
-l 表示本地文件名 (local file)
-r 表示远程主机的文件名 (remote file)
```

例如，要从远程主机 192.168.1.2 上下载 embedexpert，则应输入以下命令

```shell
tftp -g -r embedexpert 192.168.1.2
```
