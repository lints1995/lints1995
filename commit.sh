# !/bin/zsh
# 确保脚本抛出遇到的错误
# set -e
# # 生成文章目录
# node generateArticleCatalog.js
# # 打包部署静态文件
# npm run build
# echo "输入要提交的分支"
echo $barch
echo -n "输入提交到的远程分支名："
read
echo "提交到远程分支： $REPLY"
git pull origin $REPLY
# 提交
git add -A
echo $description
git commit -m $description
git push origin $REPLY
