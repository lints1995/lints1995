# !/bin/zsh
# 确保脚本抛出遇到的错误
set -e
# 生成文章目录
node generateArticleCatalog.js
# 打包部署静态文件
npm run build
# 提交
git pull origin master
git add .
read -p "commit信息：" description
git commit -m $description
git push origin master
