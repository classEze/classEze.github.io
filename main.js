document.querySelector('footer div:nth-child(2)').addEventListener('click', (e)=>window.scrollTo({top:0,left:0, behaviour:'smooth'}))

gsap.registerPlugin("scrollTrigger")
gsap.registerPlugin("textPlugin")

const textTimeline = gsap.timeline()

textTimeline.to('.iam_iam', {text: "Hello, I am Eze, <br />", ease:Power2.easeOut, duration:3})
.from('.iam_fullstack', {opacity:0, ease:Bounce.easeOut, duration:2} )
.to('.iam_welcome', {text: "Welcome to my world!!!", ease:Power4.easeOut, duration:3, delay:1} )


const boxTimeline = gsap.timeline()

boxTimeline.to('.icodein_box', { opacity:1, x:0,
          duration:3, ease:Bounce.Out,
          scrollTrigger:{
          trigger:'.icodein_box',
          toggleActions:"play none none none",
          start: "top center"
     }
}).from('.icodein_box .matete' , {opacity:0, stagger: 1.5})

gsap.to('.iworkwith_box', {opacity:1, x:0, duration:5, ease:Linear, 
     scrollTrigger:{
          trigger:'.iworkwith_box',
          toggleActions:"restart pause play reverse",
          start: "top center"
     }
     })


