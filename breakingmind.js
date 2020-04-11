let a = []
let c = 0;
let k;
let d;
let delta = 1;
let j;
let b = ["-", "+"]
let dapan = document.getElementsByClassName("dapan");
let m = document.getElementById("btn")


function baobeo() {
    document.getElementById("btn").style.display = "none";
    j = Math.floor(Math.random() * 50) + 1;//random so
    k = Math.floor(Math.random() * 50) + 1;//random so
    d = b[Math.floor(Math.random() * b.length)]//radom dau

    if (d == "-") {
        a[0] = j - k;

    }
    if (d == "+") {
        a[0] = j + k;

    }


    a[1] = a[0] + (Math.floor(Math.random() * 20) - 10); //cho dap an sai gan dap an dung de nhieu
    document.getElementById("hienthicauhoi").textContent = `${j} ${d} ${k}`//hien thi cau hoi

    dapan[0].textContent = a[Math.floor(Math.random() * a.length)];//hien thi dap an
    dapan[1].textContent = a[0] + a[1] - Number(dapan[0].textContent);//hien thi dap an
}

    m.addEventListener("click", function () {
        document.getElementById("hienthidapan").style.display = "block"
        dapan[0].style.display = "block"
        dapan[1].style.display = "block"
        baobeo();
        let time = setInterval(thoigianchay, 100)
        function thoigianchay() {
            document.getElementById("hienthithoigian").style.width = `${600 - 3 * delta}px`
            delta++;
            if (delta == 200) {
                clearInterval(time)
            }
        }
   

        for (let i = 0; i < dapan.length; i++) {
            dapan[i].addEventListener("click", function () {
                if (Number(dapan[i].textContent) == a[0]) {
                    c++;
                    document.getElementById("hienthidapan").textContent = `${c}`
                    baobeo();

                }
                else {document.getElementById("hienthicauhoi").textContent = `BAN DC ${c} DIEM`
                dapan[0].style.display = "none"
                dapan[1].style.display = "none"
                c = 0;
                document.getElementById("btn").style.display = "block";
                document.getElementById("hienthithoigian").style.width = "600px"
                dapan[0].textContent = "";
                dapan[1].textContent = "";
                document.getElementById("hienthidapan").style.display = "none"
                clearInterval(time)
                delta=0;}
                

            })
        }



        setTimeout(function () {
            document.getElementById("hienthicauhoi").textContent = `BAN DC ${c} DIEM`
            dapan[0].style.display = "none"
            dapan[1].style.display = "none"
            //    alert("HET H LAM BAI")
            c = 0;
            document.getElementById("btn").style.display = "block";
            document.getElementById("hienthithoigian").style.width = "600px"
            dapan[0].textContent = "";
            dapan[1].textContent = "";
            document.getElementById("hienthidapan").style.display = "none"
            delta=0;

        }, 21000)

    })





