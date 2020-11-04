// gsap.registerPlugin(scrollTrigger)
// gsap.registerPlugin(textPlugin)
gsap.from('.iam_text', {opacity:0, scale:0.2, duration:5})




//mobile_nav manipulations
document.querySelector('.mobile_menu').addEventListener('click', (e)=>{
    document.querySelector('div.hidden_nav').classList.toggle('mobile_nav')
})

document.querySelector('.close').addEventListener('click', (e)=>{
    document.querySelector('.mobile_nav').classList.toggle('mobile_nav')
})