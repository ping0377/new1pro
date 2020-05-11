import $axios from 'axios';
// let HTTP = '/api/';// 发布模式要改成这个
// let HTTP = 'http://yunxiyigl.fryxy.cn/api/';
let HTTP='http://managedev.fryxy.cn/api/';

export async function getallmsg(data) {
  let Data = new FormData();
  let url = HTTP + 'XiYiManager.ashx?Function=HttpQueryAllCompany';
  Data.append("data", JSON.stringify(data));
  return $axios.post(url, Data, {
    emulateJSON: true
  }, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
