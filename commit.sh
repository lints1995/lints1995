# !/bin/zsh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build
# 提交
git add -A
git commit -m '内容更新'
git push origin master