# !/bin/zsh
# 确保脚本抛出遇到的错误
# set -e
# # 生成文章目录
# node generateArticleCatalog.js
# # 打包部署静态文件
# npm run build
# git pull origin master
# 提交
git add -A
read -p "输入提交到的远程分支:" branch
read -p "输入提交到的远程分支:" description
git commit -m $description
git push origin $branch
