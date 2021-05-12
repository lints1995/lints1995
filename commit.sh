# !/bin/zsh
# 确保脚本抛出遇到的错误
set -e
echo -e "\e[40;37m hello world! \e[0m";
# 生成静态文件
npm run build
# 提交
git add -A
git commit -m '内容更新'
git push origin master