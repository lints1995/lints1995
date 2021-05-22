# !/bin/zsh
# 确保脚本抛出遇到的错误
set -e
# 生成文章目录
node generateArticleCatalog.js
# 打包部署静态文件
npm run build

echo -e "\033[32m 提交的远程分支名 \033[0m"
read -p "请输入：" branch
git pull origin $branch
# 提交
git add -A
echo -e "\033[32m commit提交信息 \033[0m"
read -p "请输入：" description
git commit -m $description
git push origin $branch
