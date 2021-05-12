/**
 * 生成文章列表代码数组
 * 读取文件目录为/public/md
 * 生成文件位置/const/note.js
 */
const fs = require("fs");
fs.readdir("../../../public/md", (err, files) => {
  if (err) throw new Error("文件读取失败！");
  let arr = [];
  files.map((item, index) => {
    arr.push({
      id: (index += 1),
      name: item,
      description: item,
      date: "2020-12-02",
    });
  });
  fs.writeFile(
    "../../const/note.js",
    `let NOTE = ${JSON.stringify(arr)}; export default NOTE;`,
    (err1) => {
      if (err1) throw new Error("写入文件出错");
    }
  );
});
