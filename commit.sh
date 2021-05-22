# !/bin/zsh
# 确保脚本抛出遇到的错误
set -e
# 生成文章目录
node generateArticleCatalog.js
# 打包部署静态文件
npm run build

echo -e "\033[32m 输入提交到的远程分支 \033[0m"
read -p "输入完成敲击enter：" branch
git pull origin $branch
# 提交
git add -A
echo -e "\033[32m 输入commit提交信息 \033[0m"
read -p "输入完成敲击enter：" description
git commit -m $description
git push origin $branch
