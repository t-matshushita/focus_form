'use strict';

const num = Math.floor( Math.random() * 6);
// const my_ans = parseInt(window.prompt('数あてゲーム。0 ~ 5の数字を入力してください。'));

let msg;
// if(my_ans === num) {
//     msg = 'あたり！';
// } else if(my_ans < num) {
//     msg = '残念、もっと大きい';
// } else if(my_ans > num){
//     msg = '残念、もっと小さい';
// } else {
//     msg = '0 ~ 5の数字を入力してください。';
// }
// window.alert(msg);

console.log(num);
// console.log(my_ans);
// console.log(msg);

let focusMethod = function getFocus() {           
    let field1 = document.getElementById("myTextField1");
    // let field2 = document.getElementById("myTextField2");

    let tmp_val = field1.value;
    field1.value = '';
    field1.focus();
    field1.value = tmp_val;

    // field2.focus();
    // field2.setSelectionRange(0, 4);
}

