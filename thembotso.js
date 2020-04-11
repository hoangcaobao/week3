let c=0;
let a=document.getElementById("ketqua")

document.getElementsByClassName("btn")[0].addEventListener("click",function(){
    c=c+1;
    document.getElementById("ketqua").textContent=`${c}`;
})

document.getElementsByClassName("btn")[1].addEventListener("click",function(){
    c=c-1;
    document.getElementById("ketqua").innerHTML=`${c}`;
})

document.getElementById("restart").addEventListener("click",function(){
    c=0;
    document.getElementById("ketqua").innerHTML=`${c}`; 
})