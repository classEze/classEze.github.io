document.querySelector('footer div:nth-child(2)').addEventListener('click', (e)=>window.scrollTo({top:0,left:0, behaviour:'smooth'}))

gsap.registerPlugin("scrollTrigger")
gsap.registerPlugin("textPlugin")

const textTimeline = gsap.timeline()

textTimeline.to('.iam_iam', {text: "Hello, I am Eze, <br />", ease:Power2.easeOut, duration:3})
.from('.iam_fullstack', {opacity:0, ease:Bounce.easeOut, duration:2} )
.to('.iam_welcome', {text: "Welcome to my world!!!", ease:Power4.easeOut, duration:3, delay:1} )



gsap.to('.icodein_box', { opacity:1, x:0,
          duration:2, ease:Bounce.inOut,
          scrollTrigger:{
          trigger:'.icodein_box',
          toggleActions:"play pause play reverse",
          start: "top center"
     }
})

gsap.to('.iworkwith_box', {opacity:1, x:0, duration:2, ease:Bounce.inOut, 
     scrollTrigger:{
          trigger:'.iworkwith_box',
          toggleActions:"play pause play reverse",
          start: "top center"
     }
     })



     // slider

     var activeIndex = 1


     // document.addEventListener('DOMContentLoaded' , carousel )
     const sliders = document.querySelectorAll('.each_show_case aside')

     sliders.forEach(slider=> carousel(slider))

     console.log(sliders)


     function carousel(htmlElement){
          const imageArray = document.querySelectorAll(`#${htmlElement.getAttribute('id')} img`)
          imageArray.forEach((image,index)=>{
          if(index == activeIndex ){
             image.classList.add('active')
          }   
     })
     }

     function changeIndex (e,num) {
        activeIndex += num
        activeIndex === -1 &&  ( activeIndex = document.querySelectorAll(`#${e.target.parentNode.getAttribute('id')} img`).length - 1)
        activeIndex === document.querySelectorAll(`#${e.target.parentNode.getAttribute('id')} img`).length  &&  ( activeIndex = 0 )

        document.querySelector(`#${e.target.parentNode.getAttribute('id')} img.active`).classList.remove('active')
        carousel(e.target.parentNode)
     }



