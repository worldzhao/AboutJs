function render(template,context) {
// 准备正则 匹配至少一个 字母
// 正则的 开始是 {{  结束是 }}
// 中间的 小括号 可以对 正则 筛选出来的 字符串 再次筛选
  var reg = /{{(\w+)}}/;
// 准备挖好坑的字符串
  var template = template;
// 准备 用来填坑的 对象
  var context = context;
// 首先 使用正则对象 验证一次 字符串 while 会看 result 是否有值
// 这一次 找到的 有两个值
/* 
    第一个  {{href}} 索引为0
    第二个 href  索引为1,小括号找到的
*/
  var result;
  while( result = reg.exec(str)){
      console.log(result);// 0:{{href}} 1:href
      // 获取 匹配的 key(href)
      var key = result[1];
      // 通过key 获取value
      var value = obj[key];
      // 替换  替换的是 {{href}}
      str = str.replace(result[0],value);
  }
  // 执行完毕 
  return str;
}