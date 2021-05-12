# !/bin/zsh
# 确保脚本抛出遇到的错误
set -e
printf "\e[42 %s\n \e[0m" "hello world!";
# 生成静态文件
npm run build
# 提交
git add -A
git commit -m '内容更新'
git push origin master