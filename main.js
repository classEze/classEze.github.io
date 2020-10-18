// gsap.registerPlugin(scrollTrigger)
// gsap.registerPlugin(textPlugin)
gsap.from('.iam_text', {opacity:0, scale:0.5, duration:10})




//manipulations
document.querySelector('.mobile_menu').addEventListener('click', (e)=>{
    document.querySelector('.mobile_nav').style.display='flex';
})

document.querySelector('.close').addEventListener('click', (e)=>{
    document.querySelector('.mobile_nav').style.display='none';
})