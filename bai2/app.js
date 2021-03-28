let String1 = prompt("nhap vao chuoi 1");
let String2 = prompt("nhap vao chuoi 2");
let a = [...String1];
let b = [...String2];
console.log(a);
console.log(b);
let mergeString = "";

function merge2String() {
    for (let i = 0; i < a.length && i < b.length; i++) {
        mergeString = mergeString + a[i] + b[i];
    }
    if (a.length > b.length) {
        mergeString = mergeString + a[a.length - 1];
    }
    if (a.length < b.length) {
        mergeString = mergeString + b[b.length - 1];
    }
    return mergeString;
}

console.log(merge2String());
