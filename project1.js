var b_3 = document.querySelector('.b_3');
var i1 = document.querySelector('.i1');
i1.onclick = function () {
    b_3.style.display = "none";
}
var text = document.querySelector('input');
var logo13 = document.querySelector('.logo13');
text.onfocus = function () {
    if (text.value == "        请在这里输入你想搜索的宝贝") {
        text.value = '';
    }
    logo13.style.display = 'none';
}
text.onblur = function () {
    if (text.value == '') {
        text.value = "        请在这里输入你想搜索的宝贝";
    }
    logo13.style.display = 'block';
}
var b3 = document.querySelector('.b3');
b3.onmouseover = function () {
    this.style.cursor = 'pointer';
}
var b_4 = document.querySelector('.b_4');
var b_5 = document.querySelector('.b_5');
var b_6 = document.querySelector('.b_6');
var b_7 = document.querySelector('.b_7');
var b_8 = document.querySelector('.b_8');
var b_9 = document.querySelector('.b_9');
var b_10 = document.querySelector('.b_10');
var b_11 = document.querySelector('.b_11');
var num = 0;
var b13=document.querySelector('.b13');
var b14=document.querySelector('.b14');
var b15=document.querySelector('.b15');
b_4.onclick = function () {
    b_5.style.backgroundColor = 'hotpink';
    b_6.style.backgroundColor = 'hotpink';
    b_7.style.backgroundColor = 'hotpink';
    b_8.style.backgroundColor = 'hotpink';
    b_9.style.backgroundColor = 'hotpink';
    b_10.style.backgroundColor = 'hotpink';
    b_11.style.backgroundColor = 'hotpink';
    this.style.backgroundColor = 'pink';
}
b_5.onclick = function () {
    b_4.style.backgroundColor = 'hotpink';
    b_6.style.backgroundColor = 'hotpink';
    b_7.style.backgroundColor = 'hotpink';
    b_8.style.backgroundColor = 'hotpink';
    b_9.style.backgroundColor = 'hotpink';
    b_10.style.backgroundColor = 'hotpink';
    b_11.style.backgroundColor = 'hotpink';
    this.style.backgroundColor = 'pink';
}
b_6.onclick = function () {
    b_5.style.backgroundColor = 'hotpink';
    b_4.style.backgroundColor = 'hotpink';
    b_7.style.backgroundColor = 'hotpink';
    b_8.style.backgroundColor = 'hotpink';
    b_9.style.backgroundColor = 'hotpink';
    b_10.style.backgroundColor = 'hotpink';
    b_11.style.backgroundColor = 'hotpink';
    this.style.backgroundColor = 'pink';
}
b_7.onclick = function () {
    b_5.style.backgroundColor = 'hotpink';
    b_6.style.backgroundColor = 'hotpink';
    b_4.style.backgroundColor = 'hotpink';
    b_8.style.backgroundColor = 'hotpink';
    b_9.style.backgroundColor = 'hotpink';
    b_10.style.backgroundColor = 'hotpink';
    b_11.style.backgroundColor = 'hotpink';
    this.style.backgroundColor = 'pink';
}
b_8.onclick = function () {
    b_5.style.backgroundColor = 'hotpink';
    b_6.style.backgroundColor = 'hotpink';
    b_7.style.backgroundColor = 'hotpink';
    b_4.style.backgroundColor = 'hotpink';
    b_9.style.backgroundColor = 'hotpink';
    b_10.style.backgroundColor = 'hotpink';
    b_11.style.backgroundColor = 'hotpink';
    this.style.backgroundColor = 'pink';
}
b_9.onclick = function () {
    b_5.style.backgroundColor = 'hotpink';
    b_6.style.backgroundColor = 'hotpink';
    b_7.style.backgroundColor = 'hotpink';
    b_8.style.backgroundColor = 'hotpink';
    b_4.style.backgroundColor = 'hotpink';
    b_10.style.backgroundColor = 'hotpink';
    b_11.style.backgroundColor = 'hotpink';
    this.style.backgroundColor = 'pink';
}
b_10.onclick = function () {
    b_5.style.backgroundColor = 'hotpink';
    b_6.style.backgroundColor = 'hotpink';
    b_7.style.backgroundColor = 'hotpink';
    b_8.style.backgroundColor = 'hotpink';
    b_9.style.backgroundColor = 'hotpink';
    b_4.style.backgroundColor = 'hotpink';
    b_11.style.backgroundColor = 'hotpink';
    this.style.backgroundColor = 'pink';
}
b_11.onclick = function () {
    b_5.style.backgroundColor = 'hotpink';
    b_6.style.backgroundColor = 'hotpink';
    b_7.style.backgroundColor = 'hotpink';
    b_8.style.backgroundColor = 'hotpink';
    b_9.style.backgroundColor = 'hotpink';
    b_10.style.backgroundColor = 'hotpink';
    b_4.style.backgroundColor = 'hotpink';
    this.style.backgroundColor = 'pink';
}
var list1 = document.querySelector('.list1');
var lis = list1.children;
var b12 = document.querySelector('.b12');
var b12s = b12.children;
var m1=document.querySelector('.m1');
lis[0].onmouseover = function () {
    b12s[0].style.display = 'block';
    lis[0].style.backgroundColor = '#999';
}
lis[0].onmouseout = function () {
    b12s[0].style.display = 'none';
    lis[0].style.backgroundColor = 'white';
}
lis[1].onmouseover = function () {
    b12s[1].style.display = 'block';
    lis[1].style.backgroundColor = '#999';
}
lis[1].onmouseout = function () {
    b12s[1].style.display = 'none';
    lis[1].style.backgroundColor = 'white';
}
lis[2].onmouseover = function () {
    b12s[2].style.display = 'block';
    lis[2].style.backgroundColor = '#999';
}
lis[2].onmouseout = function () {
    b12s[2].style.display = 'none';
    lis[2].style.backgroundColor = 'white';
}
lis[3].onmouseover = function () {
    b12s[3].style.display = 'block';
    lis[3].style.backgroundColor = '#999';
}
lis[3].onmouseout = function () {
    b12s[3].style.display = 'none';
    lis[3].style.backgroundColor = 'white';
}
lis[4].onmouseover = function () {
    b12s[4].style.display = 'block';
    lis[4].style.backgroundColor = '#999';
}
lis[4].onmouseout = function () {
    b12s[4].style.display = 'none';
    lis[4].style.backgroundColor = 'white';
}
lis[5].onmouseover = function () {
    b12s[5].style.display = 'block';
    lis[5].style.backgroundColor = '#999';
}
lis[5].onmouseout = function () {
    b12s[5].style.display = 'none';
    lis[5].style.backgroundColor = 'white';
}
lis[6].onmouseover = function () {
    b12s[6].style.display = 'block';
    lis[6].style.backgroundColor = '#999';
}
lis[6].onmouseout = function () {
    b12s[6].style.display = 'none';
    lis[6].style.backgroundColor = 'white';
}
lis[7].onmouseover = function () {
    b12s[7].style.display = 'block';
    lis[7].style.backgroundColor = '#999';
}
lis[7].onmouseout = function () {
    b12s[7].style.display = 'none';
    lis[7].style.backgroundColor = 'white';
}
lis[8].onmouseover = function () {
    b12s[8].style.display = 'block';
    lis[8].style.backgroundColor = '#999';
}
lis[8].onmouseout = function () {
    b12s[8].style.display = 'none';
    lis[8].style.backgroundColor = 'white';
}
lis[9].onmouseover = function () {
    b12s[9].style.display = 'block';
    lis[9].style.backgroundColor = '#999';
}
lis[9].onmouseout = function () {
    b12s[9].style.display = 'none';
    lis[9].style.backgroundColor = 'white';
}
lis[10].onmouseover = function () {
    b12s[10].style.display = 'block';
    lis[10].style.backgroundColor = '#999';
}
lis[10].onmouseout = function () {
    b12s[10].style.display = 'none';
    lis[10].style.backgroundColor = 'white';
}
lis[11].onmouseover = function () {
    b12s[11].style.display = 'block';
    lis[11].style.backgroundColor = '#999';
}
lis[11].onmouseout = function () {
    b12s[11].style.display = 'none';
    lis[11].style.backgroundColor = 'white';
}
lis[12].onmouseover = function () {
    b12s[12].style.display = 'block';
    lis[12].style.backgroundColor = '#999';
}
lis[12].onmouseout = function () {
    b12s[12].style.display = 'none';
    lis[12].style.backgroundColor = 'white';
}
lis[13].onmouseover = function () {
    b12s[13].style.display = 'block';
    lis[13].style.backgroundColor = '#999';
}
lis[13].onmouseout = function () {
    b12s[13].style.display = 'none';
    lis[13].style.backgroundColor = 'white';
}
lis[14].onmouseover = function () {
    b12s[14].style.display = 'block';
    lis[14].style.backgroundColor = '#999';
}
lis[14].onmouseout = function () {
    b12s[14].style.display = 'none';
    lis[14].style.backgroundColor = 'white';
}
b12s[0].onmouseover = function () {
    b12s[0].style.display = 'block';
    lis[0].style.backgroundColor = '#999';
}
b12s[0].onmouseout = function () {
    b12s[0].style.display = 'none';
    lis[0].style.backgroundColor = 'white';
}
b12s[1].onmouseover = function () {
    b12s[1].style.display = 'block';
    lis[1].style.backgroundColor = '#999';
}
b12s[1].onmouseout = function () {
    b12s[1].style.display = 'none';
    lis[1].style.backgroundColor = 'white';
}
b12s[2].onmouseover = function () {
    b12s[2].style.display = 'block';
    lis[2].style.backgroundColor = '#999';
}
b12s[2].onmouseout = function () {
    b12s[2].style.display = 'none';
    lis[2].style.backgroundColor = 'white';
}
b12s[3].onmouseover = function () {
    b12s[3].style.display = 'block';
    lis[3].style.backgroundColor = '#999';
}
b12s[3].onmouseout = function () {
    b12s[3].style.display = 'none';
    lis[3].style.backgroundColor = 'white';
}
b12s[4].onmouseover = function () {
    b12s[4].style.display = 'block';
    lis[4].style.backgroundColor = '#999';
}
b12s[4].onmouseout = function () {
    b12s[4].style.display = 'none';
    lis[4].style.backgroundColor = 'white';
}
b12s[5].onmouseover = function () {
    b12s[5].style.display = 'block';
    lis[5].style.backgroundColor = '#999';
}
b12s[5].onmouseout = function () {
    b12s[5].style.display = 'none';
    lis[5].style.backgroundColor = 'white';
}
b12s[6].onmouseover = function () {
    b12s[6].style.display = 'block';
    lis[6].style.backgroundColor = '#999';
}
b12s[6].onmouseout = function () {
    b12s[6].style.display = 'none';
    lis[6].style.backgroundColor = 'white';
}
b12s[7].onmouseover = function () {
    b12s[7].style.display = 'block';
    lis[7].style.backgroundColor = '#999';
}
b12s[7].onmouseout = function () {
    b12s[7].style.display = 'none';
    lis[7].style.backgroundColor = 'white';
}
b12s[8].onmouseover = function () {
    b12s[8].style.display = 'block';
    lis[8].style.backgroundColor = '#999';
}
b12s[8].onmouseout = function () {
    b12s[8].style.display = 'none';
    lis[8].style.backgroundColor = 'white';
}
b12s[9].onmouseover = function () {
    b12s[9].style.display = 'block';
    lis[9].style.backgroundColor = '#999';
}
b12s[10].onmouseout = function () {
    b12s[10].style.display = 'none';
    lis[10].style.backgroundColor = 'white';
}
b12s[11].onmouseover = function () {
    b12s[11].style.display = 'block';
    lis[11].style.backgroundColor = '#999';
}
b12s[11].onmouseout = function () {
    b12s[11].style.display = 'none';
    lis[11].style.backgroundColor = 'white';
}
b12s[12].onmouseover = function () {
    b12s[12].style.display = 'block';
    lis[12].style.backgroundColor = '#999';
}
b12s[12].onmouseout = function () {
    b12s[12].style.display = 'none';
    lis[12].style.backgroundColor = 'white';
}
b12s[13].onmouseover = function () {
    b12s[13].style.display = 'block';
    lis[13].style.backgroundColor = '#999';
}
b12s[13].onmouseout = function () {
    b12s[13].style.display = 'none';
    lis[13].style.backgroundColor = 'white';
}
b12s[14].onmouseover = function () {
    b12s[14].style.display = 'block';
    lis[14].style.backgroundColor = '#999';
}
b12s[14].onmouseout = function () {
    b12s[14].style.display = 'none';
    lis[14].style.backgroundColor = 'white';
}
window.onload = function speed() {
    if (num == 0) {
        b13.style.backgroundColor = 'gray';
        b14.style.backgroundColor = 'white';
        b15.style.backgroundColor = 'white';
        m1.src='images/G1.jpg';
        console.log(1);
    }
    if (num == 1) {
        b14.style.backgroundColor = 'gray';
        b13.style.backgroundColor = 'white';
        b15.style.backgroundColor = 'white';
        m1.src='images/G2.jpg';
        console.log(2);
    }
    if (num == 2) {
        b15.style.backgroundColor = 'gray';
        b14.style.backgroundColor = 'white';
        b13.style.backgroundColor = 'white';
        m1.src='images/G3.jpg';
        console.log(3);
    }
    num++;
    if(num==3){
        num=0;
    }
    window.setTimeout(speed, 3000);
}