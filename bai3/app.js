var inputElement = document.getElementById("num");
var btn = document.getElementById("quay");
console.log(btn);
var ran = parseInt(Math.random() * 10) + 1;
var dem = 0;
btn.addEventListener("click", function () {
    dem++;
    if (dem <= 3) {
        if (inputElement.value == ran) {
            alert("Bạn đã đúng");
        } else {
            alert("Trả lời sai hãy đoán lại");
        }
    } else {
        alert("Hết lượt chơi");
    }
});
