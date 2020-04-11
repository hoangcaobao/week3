let so = document.getElementsByClassName("so")
let dapan = document.getElementById("dapan")

 dapan.textContent=""
for (let i = 0; i < so.length; i++) { // them cac chuc nang cho cac so
    
    so[i].addEventListener("mouseover", function () {
        so[i].style.backgroundColor = "blue"
    })
    
    so[i].addEventListener("mouseout", function () {
        so[i].style.backgroundColor = "blanchedalmond"
    })

    
    so[i].addEventListener("click", function () {
        dapan.textContent += so[i].textContent
    })
}


let pheptinh = document.getElementsByClassName("pheptinh")

for (let i = 0; i < pheptinh.length; i++) { //them cac chuc nang cho cac phep tinh
    pheptinh[i].addEventListener("mouseover", function () {
        pheptinh[i].style.backgroundColor = "blue"
    })
    pheptinh[i].addEventListener("mouseout", function () {
        pheptinh[i].style.backgroundColor = "blanchedalmond"
    })
    pheptinh[i].addEventListener("click", function () {
        dapan.textContent += pheptinh[i].textContent
    })
}

let daubang = document.getElementById("daubang")

daubang.addEventListener("mouseover", function () {
    daubang.style.backgroundColor = "blue";
})

daubang.addEventListener("mouseout", function () {
    daubang.style.backgroundColor = "blanchedalmond";
})

daubang.addEventListener("click", function () {
    console.log(dapan.textContent.length)
    let a = [-1]; // . a[] de em luu tru vi tri cac dau. a[0] va a[cuoi cung] la vi tri bat dau va ket thuc
    let b = []; // de em luu tru cac so giua cac dau
    let c = []; // de em lay ra tu b sao cho cac so co dau * canh nhau thi nhan vao roi
    let k = 0;
    let n = 0;
    let m = 0;

    for (let i = 0; i < dapan.textContent.length; i++) { // tim vi tri cac dau
        if (dapan.textContent[i] == "+" || dapan.textContent[i] == "x" || dapan.textContent[i] == "-" || dapan.textContent[i] == "/") {
            n++;
            a[n] = i;

        }
    }
    
    a.push(Number(dapan.textContent.length)) //push de lay diem moc cuoi cung


    for (let l = 0; l < a.length - 1; l++) { //lay so giua khoang cach cac dau 
        b[m] = Number(dapan.textContent.substring(a[l] + 1, a[l + 1]))
        m++;
    }


    c[0] = b[0]; //mac dinh cho so hang dau tien cua c = b[0]
    for (let z = 0; z < a.length; z++) {
        if (dapan.textContent[a[z]] == "+") {//neu gap phai dau + thi ngay lap tuc xet vi tri tiep theo cua c
            k++;
            c[k] = b[z];// lay cai tiep theo lam moc de khi gap dau * hoac / thi lap tuc * / vao. Con neu gap lai dau cong thi xet den vi tri tiep theo cua c
    }
        if (dapan.textContent[a[z]] == "-") {//tuong tu nhu tren 
            k++;
            c[k] = b[z];
        }
        if (dapan.textContent[a[z]] == "x") {
            c[k] *= b[z];

    }
        if (dapan.textContent[a[z]] == "/") {
            c[k] /= b[z];
        }
    }

    let ketqua = c[0]
    let p = 1;

    for (let z = 0; z < a.length; z++) {// luc nay so luong dau + voi - se bang voi so luong so trong c  -1
        if (dapan.textContent[a[z]] == "+") {//kiem tra dau
            ketqua += c[p]; 
            p++ //cu tang tu tu thoi vi em biet the nao bon no cung se + - het
        }
        if (dapan.textContent[a[z]] == "-") {//kiem tra dau
            ketqua -= c[z];
            p++
        }
    }
    dapan.textContent = `${ketqua}`
   
})

let ac=document.getElementById("ac")
ac.addEventListener("mouseover", function () {
    ac.style.backgroundColor = "blue";
})

ac.addEventListener("mouseout", function () {
    ac.style.backgroundColor = "blanchedalmond";
})
ac.addEventListener("click",function(){
    dapan.textContent=""
})
let del=document.getElementById("del")
del.addEventListener("mouseover", function () {
    del.style.backgroundColor = "blue";
})

del.addEventListener("mouseout", function () {
    del.style.backgroundColor = "blanchedalmond";
})

del.addEventListener("click",function(){
    console.log( dapan.textContent[dapan.textContent.length-1])
    // dapan.textContent[dapan.textContent.length-1]="0"
    dapan.textContent=dapan.textContent.substring(0,dapan.textContent.length-1)
}) 


