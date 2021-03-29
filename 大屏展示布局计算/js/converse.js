console.log("既然您 打开了控制台，如有错误请联系我：2236472089");
// 设计稿的宽高
let designDraft = {
    width: 0,
    height: 0
}
// 获取元素
let designDraftWidth = document.getElementById("designDraftWidth");//设计稿宽
let designDraftHeight = document.getElementById("designDraftHeight");//设计稿高
let confirm = document.getElementById("confirm");//确认设计稿大小
let width = document.getElementById("width");//输入的宽度
let height = document.getElementById("height");//输入的高度

// 获取本地储存
let converse = JSON.parse(sessionStorage.getItem("converse"));
// 当没有本地储存的时候，给一个默认值，否则就把本地的值 赋给设计稿的宽高
if (converse === null) {
    designDraft.width = 1920;
    designDraft.height = 1080;
    designDraftWidth.placeholder = designDraft.width;
    designDraftHeight.placeholder = designDraft.height;
} else {
    designDraftWidth.value = converse.width;
    designDraft.width = converse.width;
    designDraftHeight.value = converse.height;
    designDraft.height = converse.height;
    document.getElementById("confirm").style.background = "linear-gradient(rgba(27,188,194,1) 0%, rgba(24,163,168,1) 100%)";
}
//对输入的设计稿 进行保存
confirm.onclick = function () {
    // console.log("你好");
    if (designDraftWidth.value == "" && designDraftHeight.value == "") {
        alert("请输入设计稿宽高,否则默认宽高 \n 1920 * 1080");
        return;
    }
    let obj = {
        width: designDraftWidth.value,
        height: designDraftHeight.value
    };
    // 进行储存
    sessionStorage.setItem("converse", JSON.stringify(obj));
}
// 进行计算宽，并且取得 回车事件
width.onkeypress = function (evt) {
    var e = evt || event;
    //兼容事件对象ASC码的兼容写法
    var key = e.keyCode || e.which || e.charCode;
    if (e.keyCode == 13 || e.ctrlKey == true) {
        // 他会直接去调用上面的函数
        width.blur();
        return;
    }
}
width.onblur = () => {
    // console.log(100 / designDraft.width);
    // console.log(designDraft.width);
    document.getElementsByClassName("converse_result")[0].children[0].innerText = (100 / designDraft.width * Number(width.value)).toFixed(2);
}
// 进行计算高，并且取得 回车事件
height.onkeypress = function (evt) {
    let e = evt || event;
    var key = e.keyCode || e.which || e.charCode;
    if (e.keyCode == 13 || e.ctrlKey == true) {
        height.blur();
        return;
    }
}
height.onblur = function () {
    document.getElementsByClassName("converse_result")[1].children[0].innerText = (100 / designDraft.height * Number(height.value)).toFixed(2);
}
