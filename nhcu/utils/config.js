class Config {
  constructor(){
  }
}
var date = new Date();
var m = date.getMonth() + 1;
var d = date.getDate();
m = m < 10 ? "0" + m : m;
d = d < 10 ? "0" + d : d;
Config.url = "https://baike.baidu.com/cms/home/eventsOnHistory/";
Config.translate = "https://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=";
Config.timestamp = Date.parse(date);
Config.month = m;
Config.date = m +''+ d
export {Config}