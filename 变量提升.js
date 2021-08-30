//1 下列代码输出结果正确的是
var val = 12;
function fun1() {
    console.log(val);
    var val = 20;
    console.log(val);
}
fun1();
//2 以下代码执行后，console 输出的信息是？
for (var i = 0; i < 5; i++) {
    requestAnimationFrame(() => console.log(i));
}
//3 执行以下程序段后，x的值是
var x = 0;
switch (++x) {
    case 0: ++x;
    case 1: ++x;
    case 2: ++x;
}
//下面这段JS程序的执行结果是：
var user = {
    count: 1,
    getCount: function () {
        return this.count;
    }
}
var func = user.getCount
console.log(func())
// 6 下面这段JS程序的执行结果是：
function fn() {
    this.a = 0;
    this.b = function () {
        alert(this.a);
    }
}

fn.prototype = {
    b: function () {
        this.a = 20;
        alert(this.a);
    },
    c: function () {
        this.a = 30;
        alert(this.a);
    }
}

var myfn = new fn();
myfn.b();
myfn.c();
//7.下面这段JS程序的执行结果是： 
console.log(a)
var a = 1;
var getNum = function () {
    a = 2;
}
function getNum() {
    a = 3;
}
console.log(a)
getNum()
console.log(a)
// 8..下面这段JS程序的执行结果是： 
var a = {}
var b = {
    key: "a"
}
var c = {
    key: "c"
}

a[b] = "123";
a[c] = "456";

console.log(a[b])
//9 下面这段JS程序的执行结果是： 
var f = function () {
    var c = "ccc";
    return {
        a: function () {
            return c;
        },
        b: function (d) {
            c = d;
        }
    }
}()

console.warn(f.a())
console.warn(f.c)
console.warn(f.b("www"))
console.warn(f.a())
//10 js执行问题
console.log('a')

setTimeout(function () {
    console.log('b')
}, 200)

setTimeout(function () {
    console.log('c')
}, 0)

console.log('d')
// 数组去重（用目前你知道的所有方法）
let arr = [1, 2, 2, 3, 3, 4, 5, 5, 88, 99, "1", "1", "2", "1", "1", "2", "5", "4", "3"]

// 数组排序（用目前你知道的所有方法）
[8, 6, 1, 2, 3, 4, 7, 9, 5]

// 编码提  编写一个产生在 m、n 之间的随机整数的方法(m，n,你自己设置可以为10~20，也可以20~30)