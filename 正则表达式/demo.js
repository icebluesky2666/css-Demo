
//js正则的使用


// RegExp对象: var pattern = new RegExp("模式字符串", "修饰符");
// 修饰符: i表示忽略大小写, g表示全局匹配
// 字面量: var pattern = /模式/修饰符;

// 元字符
// *:    任意个（有或没有都可以）
// +:    一次或多次
// ?:    零次或一次
// ^:    从开头匹配, 以某字符开头的意思
// .:    除\n以外的字符
// $:    从结尾匹配, 以某字符结束的意思
// |:    或
// ():   分组匹配
// []:   选择匹配
// {}:   匹配次数, 出现次数的匹配

// [0123456789]等价于[0-9]
// [0-9]等价于\d
// \D: 不包含[0-9]
// [abcdefg...xyz]等价于[a-z]
// {n}必须出现N次
// {a, b}最少出现a次, 最多出现b次
// {a,}最少出现a次, 最多不限
// {0,}最少不限, 最多不限


// \w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'。
// \s 匹配任意的空白符
// \d 匹配数字
// \b 匹配单词的开始或结束
// ^ 匹配字符串的开始
// $ 匹配字符串的结束
// \w能不能匹配汉字要视你的操作系统和你的应用环境而定


// 中文验证
function isChinese(str) {
    var pattern = /^[\u4e00-\u9fa6]$/;
    return pattern.test(str);
}
// 正整数验证
function isPositiveInteger(str) {
    var pattern = /^\+?[1-9]\d*$/;
    return pattern.test(str);
}
// 负整数验证
function isNegtiveInteger(str) {
    var pattern = /^\-[1-9]\d*$/;
    return pattern.test(str);
}
// 整数验证
function isInteger(str) {
    var pattern = /^[+-]?[1-9]\d*$|^0$/g;
    return pattern.test(str);
}
// 小数验证
function isDecimal(str) {
    var pattern = /^[-+]?\d+\.\d*[1-9]$/g;
    return pattern.test(str);
}
// 两位小数验证
function isTwoDecimal(str) {
    var pattern = /^[-+]?\d\.\d[1-9]$|^[-+]?[1-9]\d+\.\d[1-9]$/g;
    return pattern.test(str);
}
// 长度为6任意字符
function isArbitrarily(str) {
    var pattern = /^.{6}$/g;
    return pattern.test(str);
}
//大写字母，最少5位，最多10位
function isUppercase(str) {
    var pattern = /^[A-Z]{5,10}$/g;
    return pattern.test(str);
}
//小写字母，最少1位
function isLowercase(str) {
    var pattern = /^[a-z]+$/g;
    return pattern.test(str);
}
//字母数字，0不准开头，必须6位
function isLetter(str) {
    var pattern = /^[a-zA-Z1-9][a-zA-Z0-9]{5}$/g;
    return pattern.test(str);
}
//匹配_、{、[开头，后面可以没有字符
function isCharacter(str) {
    var pattern = /^[_{[].*$/g;
    return pattern.test(str);
}
//匹配邮政编码，共六位数字，第一位不能为0
function isPost(str) {
    var pattern = /^[1-9]\d{5}$/g;
    return pattern.test(str);
}
//匹配文件压缩包(XXXXX.zip|xxx.rar|xx.gz)
function isCompress(str) {
    var pattern = /^\w+(\.zip|\.rar|\.gz)$/g;
    return pattern.test(str);
}
//匹配电子邮箱
function isMailbox(str) {
    var pattern = /^\w{6,12}@[a-zA-Z0-9]{1,10}(\.[a-z]{2,4}){1,2}$/g;
    return pattern.test(str);
}
//匹配手机号
function isPhone(str) {
    var pattern = /^1(39|30|31|58|85|75)\d{8}$/g;
    return pattern.test(str);
}
//匹配固定电话号
function isTelephone(str) {
    var pattern = /^\d{3,4}\-\d{7,8}(\-\d{1-4})?$/g;
    return pattern.test(str);
}

  //匹配身份证号
  function isID(str) {
	　　　　var pattern = /^\d{17}[xX0-9]$/;
	　　　　return pattern.test(str);
  }

  //验证日期
  function isDate(str) {
　　　　var pattern = /^(19\d{2}|2\d{3})([-/.])(0[1-9]|1[0-2])\2(0[1-9]|[1-2]\d|3[0-1])$/;
　　　　return pattern.test(str);
  }
//匹配IP地址
//（a.b.c.d）的形式，其中，a,b,c,d都是0~255之间的十进制整数 [1-9]?\d  1\d\d  199  249 255
function isIP(str) {
    var pattern = /^((25[0-5]|2[0-4]\d|[1-9]?\d|1\d{2})\.){3}(25[0-5]|2[0-4]\d|[1-9]?\d|1\d{2})$/;
    return pattern.test(str);
}
//匹配URL地址
//http(https)://主机名或IP地址(:端口)(/path)
//http(s)://(www.)域名.com(.cn) : 端口号（如8080,两到四位）/文件夹名/文件
function isUrl(str) {
    var pattern = /^(http|https)\:\/\/(w{3}\.)?\w+(\.com|\.com\.cn)(\:\d{2,4})?(\/.+)*/;
    return pattern.test(str);
}
//匹配HTML标签
function isHtml(str) {
    var pattern = /^<([a-z]+)><\/\1>|<[a-z]+\/>$/;
    return pattern.test(str);
}


//功能实现
var btn = document.getElementById("btn");
btn.onclick = function(){
    var content = document.getElementById("t1").value;

    var value = isPositiveInteger(content);
    value ? alert("正确") : alert("错误")
}