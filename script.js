const nextEl=document.querySelector(".right")
const prevEl=document.querySelector(".left")
const imageEL=document.querySelector(".image-container")
const totImg=document.querySelectorAll("img")

let x;
let currImage=1;
nextEl.addEventListener("click",()=>{
    currImage++;
    clearTimeout(x);
    updateImg();

})
prevEl.addEventListener("click",()=>{
    currImage--;
    clearTimeout(x);
    updateImg();
})
function updateImg(){
    if(currImage>totImg.length){
        currImage=1;
    }
    if(currImage<1){
        currImage=totImg.length;
    }
    imageEL.style.transform=`translateX(-${(currImage-1)*500}px)`
    x=setTimeout(()=>{
        currImage++;
        updateImg();
    },2000)
}
updateImg();


