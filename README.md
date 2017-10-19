# 鸿荣家装-H5
 
 
 ## 常用指令
 * npm install 初次启动时,需要运行npm install 安装所有开发依赖
 * npm run mb mac打包指令
 * npm run wb windows 打包指令
 * npm run dev localhost启动,端口8080
 * npm run port localhost指定端口启动
 * npm run hot 热更新
 * npm run ip 指定ip端口启动
 
 ## 版本提交
 只需要提交src文件夹里面的内容，其他的文件夹或文件不需要提交

 ## 发布
 1、更改services/fetch/config.js的rootPath为服务器接口地址
 2、运行npm run wb(windows打包)或npm run mb(mac打包)
 3、把生成的dist文件夹与index.html文件一起压缩，上传至服务器对应的路径中