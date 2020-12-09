# 安装环境
## docker安装
更新包索引和安装包，以允许在 https://aptapt上使用存储库
apt-get update
apt-get install \
apt-transport-https \
ca-certificates \
curl \
gnupg-agent \
software-properties-common
添加 Docker 的官方 GPG 密钥:
curl -fsSL https://download.docker.com/linux/ubuntu/gpg|sudo apt-key add -
使用以下命令设置稳定存储库
add-apt-repository \
&quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) \
stable&quot;
安装 DOCKER 引擎
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io

## git安装
apt install git-all
git本地仓库用户名和密码设置 
git config --global user.name "conor" 
git config --global user.email “goodcoolzc@hotmail.com”

## vscode安装

## ssh安装
apt install openssh-server -y
配置
code /etc/ssh/sshd_config
将PermitRootLogin后面的值为yes
重启 
service ssh restart
使用 ssh-keygen 工具在本机创建 ssh 秘钥，创建时一路回车即可
ssh-keygen
完成后，可以查看生成的文件。默认的话，会在.ssh文件夹下生成两个文件
cd .ssh/
ls
id_rsa (私钥)  id_rsa.pub (公钥)
上传公钥
ssh-copy-id username@remote-server(远程Server用户名和IP地址)
比如： ssh-copy-id conor@192.168.1.101
首次登录时候需要，输入一次SSH秘钥的密码。
对于已经使用过ssh key，产生过其他的文件的，这里可以加上[-i name]选择制定文件的公钥上传到服务器。
ssh-copy-id -i ~/.ssh/id_rsa.pub username@remote-server
比如： ssh-copy-id -i ~/.ssh/id_rsa.pub conor@192.168.1.101

## edge安装

## ubuntu镜像
运行镜像
mac: 
docker run -itd --net host --name ubuntu -v /Users/conor/git:/root -w /root conorzhang/ubu-node-express-mysql:04-10-4-8-v0
win:
docker run -itd --net host --name ubuntu -v /mnt/c/Users/dauab/docker-file:/root -w /root conorzhang/ubu-node-express-mysql:04-10-4-8-v0
增加重启动
docker update --restart=always ubuntu
提交镜像
docker commit ubu-container ubu-docker:v1
存出镜像
docker save -o ubu-node-express-mysql.tar conorzhang/ubu-node-express-mysql:04-10-4-8-v0
导入镜像
cd .
docker load < ubu-docker.tar

## node安装
apt install nodejs

## npm安装
apt install npm

## mysql安装
安装MySQL8
apt update
apt upgrade
apt install mysql-server
安装失败就再来一遍
启动mysql服务器
service mysql start
查看运行状态
service mysqld status 
查看默认账户名密码
cat /etc/mysql/debian.cnf
进入默认账户
mysql -udebian-sys-maint -pSIEJN03gbvyYvZ9k
进入后修改密码：
ALTER USER 'root'@'%' IDENTIFIED BY '123456' PASSWORD EXPIRE NEVER;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
flush privileges;
quit;
重新进入
mysql -h localhost -P 3306 -uroot -p123456

## adminer镜像
docker run -it -p 8888:8080 --name adminer -e ADMINER_DEFAULT_SERVER=mysql -v /mnt/c/Users/dauab/docker-file:/root -w /root conorzhang/11adminer:4.7.7
进入容器，在远程连接功能栏，手动转发端口8080
打开默认客户端连接http://127.0.0.1:8080
系统：mysql
服务器：127.0.0.1:3306
用户名：root
密码：123456

## cnpm安装
1.临时使用
npm install -g cnpm --registry https://registry.npm.taobao.org
2.持久使用
npm config set registry https://registry.npm.taobao.org

## express安装
cnpm install -g express-generator

## nodemon安装
cnpm install -g nodemon

## tree安装
apt install tree
查看至二级目录
tree -L 2

# 创建express项目
## 初始化项目文件
express hello
初始文件目录
.
├── app.js
├── bin
│ └── www
├── package.json
├── public
│ ├── images
│ ├── javascripts
│ └── stylesheets
│ └── style.css
├── routes
│ ├── index.js
│ └── users.js
└── views
├── error.jade
├── index.jade
└── layout.jade

## 安装依赖插件
cd hello
cnpm install //cnpm依赖库
（项目插件）
cnpm install async -S //异步处理方法库
cnpm install dateformate -S //时间处理方法库
cnpm install jsonwebtoken -S //Token生成及验证
cnpm install multer -S //上传文件方法库
cnpm install sequelize -S
cnpm install mongoose -S
cnpm install nunjucks-S 
cnpm install pm2 -S
cnpm install webpack -S 
（可选）
cnpm install mongodb -S
cnpm install mysql2 -S
cnpm install art-template -S
cnpm install express-art-template -S

## 项目迁移初始化
npm install

## 启动项目
npm start

