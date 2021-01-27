let aimage1=document.querySelector('.youxizhongxin .right .all')
let aimage=document.querySelector('.youxizhongxin .right .aimage')
aimage1.addEventListener('mouseover',(e)=>{
    aimage.style.background='url(./img/下载中心/'+e.target.className+'.png)';
})
aimage1.addEventListener('mouseout',(e)=>{
    aimage.style.background='';
})
for (let i = 0; i < 5; i++) {
   console.log(i)
}

