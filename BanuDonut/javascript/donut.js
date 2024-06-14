let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

const quantity = document.getElementsByClassName("quantity");
const price = document.getElementsByClassName("price");
const tr = document.getElementsByClassName("tr");
const cancle = document.getElementsByClassName("cancle");
const total = document.getElementById("totalNum");
var donutsP = [1000, 1250, 1500, 1750];
var totalP = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const currency = document.getElementById("currency");

var select = document.getElementsByClassName("amount");

for (var i = 0; i <= 8; i++) {
    for (var j = 0; j <= 9; j++) {
        var opt = document.createElement("option");
        opt.value = j;
        opt.innerHTML = j;
        select[i].appendChild(opt);
    }
}
select[0].onchange = function () {
    menuChange(0);
    totalP[0] = price[0].textContent = donutsP[2] * select[0].value;
    totalNum();
    shop.textContent = "";
}
quantity[0].onchange = function () {
    listChange(0);
    totalP[0] = price[0].innerHTML = donutsP[2] * quantity[0].value;
    totalNum();
}
select[1].onchange = function () {
    menuChange(1);
    totalP[1] = price[1].textContent = donutsP[1] * select[1].value;
    totalNum();
    shop.textContent = "";
}
quantity[1].onchange = function () {
    listChange(1);
    totalP[1] = price[1].innerHTML = donutsP[1] * quantity[1].value;
    totalNum();
}
select[2].onchange = function () {
    menuChange(2);
    totalP[2] = price[2].textContent = donutsP[1] * select[2].value;
    totalNum();
    shop.textContent = "";
}
quantity[2].onchange = function () {
    listChange(2);
    totalP[2] = price[2].innerHTML = donutsP[1] * quantity[2].value;
    totalNum();
}
select[3].onchange = function () {
    menuChange(3);
    totalP[3] = price[3].textContent = donutsP[1] * select[3].value;
    totalNum();
    shop.textContent = "";
}
quantity[3].onchange = function () {
    listChange(3);
    totalP[3] = price[3].innerHTML = donutsP[1] * quantity[3].value;
    totalNum();
}
select[4].onchange = function () {
    menuChange(4);
    totalP[4] = price[4].textContent = donutsP[1] * select[4].value;
    totalNum();
    shop.textContent = "";
}
quantity[4].onchange = function () {
    listChange(4);
    totalP[4] = price[4].innerHTML = donutsP[1] * quantity[4].value;
    totalNum();
}
select[5].onchange = function () {
    menuChange(5);
    totalP[5] = price[5].textContent = donutsP[0] * select[5].value;
    totalNum();
    shop.textContent = "";
}
quantity[5].onchange = function () {
    listChange(5);
    totalP[5] = price[5].innerHTML = donutsP[0] * quantity[5].value;
    totalNum();
}
select[6].onchange = function () {
    menuChange(6);
    totalP[6] = price[6].textContent = donutsP[3] * select[6].value;
    totalNum();
    shop.textContent = "";
}
quantity[6].onchange = function () {
    listChange(6);
    totalP[6] = price[6].innerHTML = donutsP[3] * quantity[6].value;
    totalNum();
}
select[7].onchange = function () {
    menuChange(7);
    totalP[7] = price[7].textContent = donutsP[3] * select[7].value;
    totalNum();
    shop.textContent = "";
}
quantity[7].onchange = function () {
    listChange(7);
    totalP[7] = price[7].innerHTML = donutsP[3] * quantity[7].value;
    totalNum();
}
select[8].onchange = function () {
    menuChange(8);
    totalP[8] = price[8].textContent = donutsP[2] * select[8].value;
    totalNum();
    shop.textContent = "";
}
quantity[8].onchange = function () {
    listChange(8);
    totalP[8] = price[8].innerHTML = donutsP[2] * quantity[8].value;
    totalNum();
}

function menuChange(x) {
    if (select[x].value > 0) {
        quantity[x].value = select[x].value;
        tr[x].style.display = "table-row";
    } else {
        tr[x].style.display = "none";
    }
}

function listChange(x) {
    select[x].value = quantity[x].value;
    if (quantity[x].value < 1) {
        tr[x].style.display = "none";
    }
}

function totalNum() {
    var totalNum = 0;
    for (tot of totalP) {
        totalNum += tot;
    }
    if (currency.value == "iqd") {
        total.textContent = totalNum;
    } else {
        total.textContent = Math.round((totalNum * 0.0007).toFixed(2));
    }
}
currency.onchange = function (){
    totalNum();
}
cancle[0].onclick = e => {
    e.target.parentNode.style.display = "none";
    select[0].value = 0;
    totalP[0] = 0;
    totalNum();
}
cancle[1].onclick = e => {
    e.target.parentNode.style.display = "none";
    select[1].value = 0;
    totalP[1] = 0;
    totalNum();
}
cancle[2].onclick = e => {
    e.target.parentNode.style.display = "none";
    select[2].value = 0;
    totalP[2] = 0;
    totalNum();
}
cancle[3].onclick = e => {
    e.target.parentNode.style.display = "none";
    select[3].value = 0;
    totalP[3] = 0;
    totalNum();
}
cancle[4].onclick = e => {
    e.target.parentNode.style.display = "none";
    select[4].value = 0;
    totalP[4] = 0;
    totalNum();
}
cancle[5].onclick = e => {
    e.target.parentNode.style.display = "none";
    select[5].value = 0;
    totalP[5] = 0;
    totalNum();
}
cancle[6].onclick = e => {
    e.target.parentNode.style.display = "none";
    select[6].value = 0;
    totalP[6] = 0;
    totalNum();
}
cancle[7].onclick = e => {
    e.target.parentNode.style.display = "none";
    select[7].value = 0;
    totalP[7] = 0;
    totalNum();
}
cancle[8].onclick = e => {
    e.target.parentNode.style.display = "none";
    select[8].value = 0;
    totalP[8] = 0;
    totalNum();
}

const submitBtn = document.getElementById("submit");
const nam = document.getElementById("name");
const tel = document.getElementById("tel");
const address = document.getElementById("address");
const order = document.querySelectorAll('input[name="order"]');
const shop = document.getElementById("shoperr");
const cancleBtn = document.getElementById("cancleBtn");


cancleBtn.addEventListener('click', () => {
    window.location.reload(true);
});

submitBtn.addEventListener('click', () => {
    telCh(), nameCh(), addCh(), radioCh(), shopCh();
    if (telCh() && nameCh() && addCh() && radioCh() && shopCh()) {
        invoice();
    }
});

function telCh() {
    if (!tel.value.match(/^[0](750|770|780)[0-9]{7}$/)) {
        document.getElementById("telerr").textContent = "!تکایە ژمارەی ڕاست بنوسە";
        return false;
    } else {
        document.getElementById("telerr").textContent = "";
        return true;
    }
}

function nameCh() {
    if (!nam.value.match(/^[a-zA-Z]+$/)) {
        document.getElementById("namerr").textContent = "!تکایە ناوی ڕاست بنوسە";
        return false;
    } else {
        document.getElementById("namerr").textContent = "";
        return true;
    }
}

function addCh() {
    if (address.value == "" && (order[1].checked == true || (order[0].checked == false && order[1].checked == false))) {
        document.getElementById("adderr").textContent = "!تکایە ناونیشانی ڕاست بنوسە";
        return false;
    } else {
        document.getElementById("adderr").textContent = "";
        return true;
    }
}

function radioCh() {
    if (order[0].checked == false && order[1].checked == false) {
        document.getElementById("raderr").textContent = "!تکایە جۆری داواکاری دیاری بکە";
        return false;
    } else {
        document.getElementById("raderr").textContent = "";
        return true;
    }
}
order[0].onclick = function () {
    address.setAttribute("disabled", "");
    document.getElementById("adderr").textContent = "";
    document.getElementById("addL").style.textDecoration = "line-through";
    address.value = "";
}
order[1].onclick = function () {
    address.removeAttribute("disabled", "");
    document.getElementById("addL").style.textDecoration = "none";
}

function shopCh() {
    b = false;
    for (var l = 0; l <= 8; l++) {
        if (select[l].value > 0) {
            b = true;
        }
    }
    if (b == false) {
        shop.textContent = "!هیچ دۆنەتێک زیاد نەکراوە بۆ لیستی کڕین";
        return false;
    } else {
        shop.textContent = "";
        return true;
    }
}
let today = new Date().toLocaleDateString();
const fTr = document.getElementsByClassName("finaltr");

function invoice() {
    document.getElementById("invoice").style.display = "flex";
    document.getElementById("fName").textContent = nam.value + document.getElementById("fName").textContent;
    document.getElementById("fNum").textContent = tel.value + document.getElementById("fNum").textContent;
    document.getElementById("fAdd").textContent = address.value + document.getElementById("fAdd").textContent;
    document.getElementById("date").textContent = today + document.getElementById("date").textContent;
    for (var t = 0; t <= 8; t++) {
        if (totalP[t] == 0) {
            fTr[t].style.display = "none"
        } else {
            fTr[t].firstChild.textContent = totalP[t];
        }
    }
    var totalNumber = 0;
    for (tot of totalP) {
        totalNumber += tot;
    }
    if(currency.value=="iqd"){
        document.getElementById("fTotal").textContent = totalNumber;
        document.getElementById("fCur").textContent = "IQD";
    } else {
        document.getElementById("fTotal").textContent = Math.round((totalNumber * 0.0007).toFixed(2));
        document.getElementById("fCur").textContent = "$";
    }
    if (order[0].checked) {
        document.getElementById("fOrd").textContent = " هەڵگرتن " + document.getElementById("fOrd").textContent;
    } else {
        document.getElementById("fOrd").textContent = " گەیاندن " + document.getElementById("fOrd").textContent;
    }
    const inputs = document.querySelectorAll("input");
    for (inp of inputs) {
        inp.setAttribute("disabled", "")
    }
    const selects = document.querySelectorAll("select");
    for (sel of selects) {
        sel.disabled = true;
    }
    document.getElementById("link").style.visibility = "hidden";
    window.scrollTo(0, 2300);
}
document.getElementById("again").onclick = function (){
    window.location.reload(true);
}