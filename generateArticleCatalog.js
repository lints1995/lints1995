/**
 * 生成文章列表代码数组
 * 读取文件目录为/public/md
 * 生成文件位置/const/note.js
 */
const fs = require("fs");

function readFiles(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) return reject("文件读取失败");
      resolve(files);
    });
  });
}
function writeFile(path, content) {
  new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) return reject("文件写入失败");
      resolve(true);
    });
  });
}

readFiles("./public/md")
  .then(async (files) => {
    let arr = [];
    files.map((item, index) => {
      let _item = item.replace(".md", "");
      arr.push({
        id: (index += 1),
        name: _item,
        description: _item,
        date: "2020-12-02",
      });
    });
    writeFile(
      "./src/const/note.js",
      `let NOTE = ${JSON.stringify(arr)}; export default NOTE;`
    );
  })
  .catch((err) => {
    throw new Error(err);
  });
