let c=0;
let thoigian=document.getElementById("sapdatthoigian")

document.getElementsByClassName("btn")[0].addEventListener("click",function(){
    c=c+1;
    thoigian.textContent=`${c}`;
})

document.getElementsByClassName("btn")[1].addEventListener("click",function(){
    if(c>0){
    c=c-1;
    thoigian.innerHTML=`${c}`;
    }
})

document.getElementById("start").addEventListener("click",function(){
    if(c>0){
    let m=setInterval(thoigianchay,1000)
    function thoigianchay(){
    thoigian.innerHTML=`${c-1}`;
    c=c-1
    if(c==0){
        clearInterval(m);
    }
    }
}
        
    
    
    
})

 




