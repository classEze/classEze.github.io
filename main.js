document.querySelector('footer div:nth-child(2)').addEventListener('click', (e)=>window.scrollTo({top:0,left:0, behaviour:'smooth'}))

gsap.registerPlugin("scrollTrigger")
gsap.registerPlugin("textPlugin")

const textTimeline = gsap.timeline()

textTimeline.to('.iam_iam', {text: "Hello, I am Eze, <br />", ease:Power2.easeOut, duration:3})
.from('.iam_fullstack', {opacity:0, ease:Bounce.easeOut, duration:2} )
.to('.iam_welcome', {text: "Welcome to my world!!!", ease:Power4.easeOut, duration:3, delay:1} )


gsap.from('.icodein_box', {duration:5, opacity:0, ease:Bounce.Out} )
gsap.from('.iworkwith_box', {opacity:0, duration:5, ease:Linear} )


