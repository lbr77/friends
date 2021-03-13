const fs = require('fs/promises');
const giteeFriend = require('./components/gitee');
const YAML = require('json2yaml');
const axios = require('axios');
const index = async () => {
  console.log("Start");
  let giteedata = await giteeFriend.getData();
  const obj = giteedata;
  const friendlinkFormat=[
    {
      "class_name": "大佬们",
      "link_list": obj
    }
  ]
  await fs.writeFile('./dist/friend.json', JSON.stringify(friendlinkFormat), 'utf8', (err) => {
    if (err) throw err;
  });
  await fs.writeFile('./dist/link.yml',YAML.stringify(friendlinkFormat).replace("---",""),'utf8',(err)=>{
    if (err) throw err;
  })
  console.log('写入完成');
}
index();
