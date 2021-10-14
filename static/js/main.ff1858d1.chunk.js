(this.webpackJsonppf=this.webpackJsonppf||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(15),r=a.n(n),c=(a(24),a(3)),o=a(52),l=a(53),m=(a(25),a(0));function d(e){var t=e.isSidebarOpen,a=e.setSidebar;return Object(m.jsxs)("div",{className:"header flex-center",children:[Object(m.jsx)("section",{children:Object(m.jsx)("a",{href:"#intro",children:Object(m.jsx)("img",{height:"40px",width:"40px",src:"/images/code.jpg",alt:"Logo"})})}),Object(m.jsxs)("ul",{className:"header-links bold",children:[Object(m.jsxs)("li",{children:[" ",Object(m.jsx)("a",{href:"#intro",children:" Home "})]}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#portfolio",children:" Skills "})}),Object(m.jsxs)("li",{children:[Object(m.jsx)("a",{href:"#works",children:" Projects"})," "]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("a",{href:"#testimonials",children:" Testimonials"})," "]}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#contact",children:" Contact Me "})})]}),Object(m.jsx)("section",{className:"menu-icon",children:t?Object(m.jsx)(l.a,{onClick:function(){return a(!t)}}):Object(m.jsx)(o.a,{onClick:function(){return a(!t)}})})]})}a(31),a(32);var j=function(e){var t=e.item,a=e.aTab,s=e.setATab;return Object(m.jsx)("li",{className:a===t.content?"active":"",onClick:function(){return s(t.content)},children:t.title},t.content)},b=[{name:"React Native",description:"A cross platform mobile development framework",image:"/images/react-native.png"}],h=[{name:"Javascript",description:"Awesome Client Side Scripting Language",image:"/images/javascript.png"},{name:"Bootstrap",description:"Amazing CSS framework for rapid Web development",image:"/images/bootstrap.png"},{name:"TailwindCSS",description:"Awesome Utility based CSS framework for rapid Web development",image:"/images/tailwind.png"},{name:"Materialize",description:"Google's Material Design based CSS framework",image:"/images/materialize.jpeg"},{name:"React",description:"Awesome Javascript frontend framework",image:"/images/react.png"},{name:"NextJS",description:"Awesome Javascript React based fullstack framework",image:"/images/next.jpeg"},{name:"MaterialUI",description:"Awesome Material Design based CSS framework for React",image:"/images/materialui.jfif"},{name:"Vue",description:"Awesome Javscript frontend framework",image:"/images/vue.jpg"},{name:"Vuetify",description:"Awesome Material Design based CSS framework for Vue",image:"/images/vuetify.png"},{name:"SASS",description:"Awesome CSS preprocessor",image:"/images/sass.png"},{name:"GSAP",description:"Greensock Animation Library",image:"/images/gsap.png"},{name:"Framer Motion",description:"React animation Library",image:"/images/framer-motion.png"},{name:"Redux",description:"State Management Library",image:"/images/redux.jpg"}],p=[{name:"Node Js",description:"Awesome Javascript framework",image:"/images/node.png"},{name:"C#",description:"Dotnet Core",image:"/images/csharp.png"},{name:"PHP",description:"Backend Scripting Language",image:"/images/php.png"},{name:"Laravel",description:"Awesome PHP framework",image:"/images/laravel.png"},{name:"MysQL",description:" Awesome Relational Database",image:"/images/mysql.jpg"},{name:"MongoDB",description:"Awesome Non-relational Database",image:"/images/mongodb.jfif"},{name:"PostMan",description:"Awesome Api Testing tool",image:"/images/postman.png"},{name:"MSSQL",description:"Microsoft Structured Query Language",image:"/images/mssql.png"}],g=[{name:"Adobe XD",description:"Adobe XD",image:"/images/adobe.png"},{name:"Figma",description:"Figma ",image:"/images/figma.png"},{name:"PhotoShop",description:"Adobe Photoshop",image:"/images/photoshop.png"}],u=function(e){var t=e.item;return Object(m.jsxs)("li",{className:"portfolio-item",title:t.description,children:[Object(m.jsx)("span",{className:"item-header",children:t.name}),Object(m.jsx)("img",{src:t.image,alt:t.description,className:"item-image"})]})},f=a(54);function O(){var e=Object(s.useState)("frontend"),t=Object(c.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)([]),r=Object(c.a)(n,2),o=r[0],l=r[1];Object(s.useEffect)((function(){switch(a){case"frontend":l(h);break;case"backend":l(p);break;case"design":l(g);break;case"mobile":l(b);break;default:l([])}}),[a]);return Object(m.jsxs)("section",{className:"portfolio",id:"portfolio",children:[Object(m.jsx)("div",{className:"portfolio-head",children:" Skills"}),Object(m.jsx)("ul",{className:"portfolio-tabs",children:[{title:"Frontend",content:"frontend"},{title:"Mobile",content:"mobile"},{title:"Backend",content:"backend"},{title:"Design",content:"design"}].map((function(e,t){return Object(m.jsx)(j,{aTab:a,setATab:i,item:e},t)}))}),Object(m.jsx)("ul",{className:"items-container",children:o.map((function(e,t){return Object(m.jsx)(u,{item:e},t)}))}),Object(m.jsx)("a",{href:"#works",className:"arrow-down",children:Object(m.jsx)(f.a,{})})]})}a(33);var x=a(13),v=a(18);function w(){var e=Object(s.useRef)(),t=x.a.utils.selector(e);x.a.registerPlugin(v.a);var a=Object(s.useRef)();return Object(s.useEffect)((function(){a.current=x.a.timeline({duration:2,delay:0}).from(t(".one"),{opacity:0,delay:1,y:-30}).from(t(".two"),{opacity:0,delay:2,y:-20}).to(t(".three"),{text:{value:"A fullstack developer and problem solver."},duration:4,delay:2}).from(t(".four"),{opacity:0,delay:1,x:-30})}),[]),Object(m.jsxs)("div",{className:"intro",id:"intro",children:[Object(m.jsxs)("section",{className:"intro-top",children:[Object(m.jsx)("img",{src:"images/programmer3.jpg",alt:"my-avatar"}),Object(m.jsx)("img",{src:"/images/eze2.png",alt:"Myavatar"})]}),Object(m.jsxs)("section",{className:"intro-bottom flex-center",children:[Object(m.jsxs)("aside",{ref:e,className:"bold",children:[Object(m.jsx)("p",{className:"one",children:" Hi there...  "}),Object(m.jsx)("p",{className:"two",children:" I am Eze. "}),Object(m.jsx)("p",{className:"three"}),Object(m.jsx)("p",{className:"four",children:Object(m.jsx)("a",{target:"blank",rel:"noopener noreferrer",href:"mailto:chibeze.ochonogor@gmail.com?subject=Hey Eze",className:"anchor-button",children:" Hire Me"})})]}),Object(m.jsx)("a",{href:"#portfolio",className:"arrow-down",children:Object(m.jsx)(f.a,{})})]})]})}a(34);var N=[{role:"Quality Assurance Engineer, eTranzact PLC. ",name:"Ugo Kaine",body:"Just the right attitude and creativity to get the job done. Not many devs have that you know.",avatar:"/images/ugo.jpg",connect:"https://www.linkedin.com/in/chibugo-kaine-6363ab125/"},{role:"C.E.O, MiddleTrust PLC. ",name:"Efe Ojadua",body:"Worked in him at middletrust in building the best Escrow platform in Nigeria, you really want to see what this guy has to offer, you know, he has that eye for the exceptional. Never gives up until he gets the results.",avatar:"/images/efe.jfif",connect:"https://www.linkedin.com/in/ojadua-efe/"},{role:"Senior software Developer, Interswitch. ",name:"Mishael Harry",body:"Collaborated in developing a hospital Management Sysytem for a client, Quite creative developer. This guy is the real deal. Just the right work ethics and dedication to get the job done.",avatar:"/images/mishy.jpg",connect:"https://www.linkedin.com/in/mishael-harry-2b228b120/"},{role:"Quality Assurance Engineer, Union Bank, Nigeria. ",name:"Francis Arharire",body:"Quite a creative and disciplined developer, always keeping to timelines",avatar:"/images/franco.jfif",connect:"https://www.linkedin.com/in/arharhire-francis-73079612b/"}],k=a(55);function y(){var e=Object(s.useRef)();return Object(m.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(m.jsx)("header",{className:"testimonial-head",children:" Testimonials"}),Object(m.jsx)("section",{className:"roller",ref:e,children:N.map((function(e,t){return Object(m.jsx)("aside",{className:"container flex-col",children:Object(m.jsxs)("div",{className:(t%2===0?"even":"")+" item flex-col",children:[Object(m.jsxs)("p",{className:"bold",children:[" ",e.name," "]}),Object(m.jsx)("p",{children:e.role}),Object(m.jsx)("img",{src:e.avatar,alt:"avatar"}),Object(m.jsx)("p",{children:e.body}),Object(m.jsxs)("p",{children:[" ",Object(m.jsxs)("a",{href:e.connect,target:"_blank",rel:"noopener noreferrer",className:"anchor-button outlined flex-center",children:[Object(m.jsx)("span",{children:" Connect "}),Object(m.jsx)(k.a,{})]})]})]})},t)}))})]})}a(35);var S=a(57),A=a(58),C=a(59),M=a(60),z=a(61),E=a(62),T=a(12),P=a(56),U=a(17);function L(){return Object(m.jsx)("div",{className:"loader flex-center",children:Object(m.jsx)("img",{src:"/images/loader.svg",className:"loader",alt:"Loading spinner"})})}var D=function(e){e.modalOpen;var t=e.setmodalOpen,a=Object(s.useRef)(null),i=Object(s.useState)(!1),n=Object(c.a)(i,2),r=n[0],o=n[1],l=Object(U.a)(),d=l.handleSubmit,j=l.register,b=l.formState.errors;return Object(m.jsxs)("section",{className:"form-stration",children:[r&&Object(m.jsx)(L,{}),Object(m.jsxs)("form",{ref:a,onSubmit:d((function(e){o(!0),fetch("https://health-sure.vercel.app/api/folio-message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sender:e.email,title:e.title,message:e.message_body})}).then((function(e){if(!e.ok)throw new Error("Request failed.");o(!1),t(!0),a.current.reset()})).catch((function(e){o(!1),alert(e.message)}))})),children:[Object(m.jsxs)("div",{className:"fieldset flex-col",children:[Object(m.jsx)("input",Object(T.a)({placeholder:" "},j("email",{required:"Come, on...that email is not correct"}))),Object(m.jsx)("label",{htmlFor:"email",children:" Email: "}),b.email&&Object(m.jsx)("span",{className:"error",children:b.email.message})]}),Object(m.jsxs)("div",{className:"fieldset flex-col",children:[Object(m.jsx)("input",Object(T.a)({placeholder:" ",id:"title"},j("title",{required:"Please input your designation dear"}))),Object(m.jsx)("label",{htmlFor:"title",children:" Designation: "}),b.title&&Object(m.jsx)("span",{className:"error",children:b.title.message})]}),Object(m.jsxs)("div",{className:"fieldset flex-col",children:[Object(m.jsx)("textarea",Object(T.a)({placeholder:"  ",id:"message_body"},j("message_body",{required:"Come, on, write something"}))),Object(m.jsx)("label",{htmlFor:"message_body",children:" Message: "}),b.message_body&&Object(m.jsx)("span",{className:"error",children:b.message_body.message})]}),Object(m.jsxs)("div",{className:"flex button",children:[Object(m.jsx)("button",{type:"submit",children:"Send"}),Object(m.jsx)(P.a,{})]})]})]})};function R(e){var t=e.modalOpen,a=e.setmodalOpen;return Object(m.jsxs)("div",{className:"",id:"contact",children:[Object(m.jsx)("header",{className:"contact-head",children:"Get in Touch "}),Object(m.jsxs)("main",{className:"contact",children:[Object(m.jsx)("div",{className:"container illustration flex-center hidden-mobile",children:Object(m.jsx)("img",{src:"/images/undraw.svg",alt:""})}),Object(m.jsxs)("div",{className:"container the-rest",children:[Object(m.jsx)(D,{modalOpen:t,setmodalOpen:a}),Object(m.jsx)("aside",{className:"resume-button",children:Object(m.jsx)("a",{target:"blank",rel:"noopener noreferrer",href:"/files/Ochonogor_Chibeze.pdf",children:"View My Resume"})})]})]}),Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsxs)("section",{className:"social flex-col",children:[Object(m.jsx)("aside",{children:"Let's Connect on Social Media"}),Object(m.jsxs)("aside",{children:[Object(m.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/chibeze-ochonogor-6b5517195",children:[" ",Object(m.jsx)(k.a,{})," "]}),Object(m.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/classEze",children:[" ",Object(m.jsx)(S.a,{})," "]}),Object(m.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://facebook.com/ochonogor.chibeze",children:[" ",Object(m.jsx)(A.a,{})," "]}),Object(m.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/anymail4eze",children:[" ",Object(m.jsx)(C.a,{})," "]}),Object(m.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://wa.me/2348160245148",children:[" ",Object(m.jsx)(M.a,{})," "]})]})]}),Object(m.jsxs)("section",{className:"footer-contact flex-center",children:[Object(m.jsxs)("span",{className:"flex-center",children:[Object(m.jsx)(z.a,{}),Object(m.jsx)("span",{children:"+2348160245148"})]}),Object(m.jsxs)("span",{className:"flex-center",children:[" ",Object(m.jsx)(E.a,{}),Object(m.jsx)("span",{children:"chibeze.ochonogor@gmail.com"})]})]})]})]})}var _=a(63),J=a(64),H=(a(37),function(){var e=Object(s.useState)(0),t=Object(c.a)(e,2),a=t[0],i=t[1],n=[{name:"Draggable",imgUrl:"/images/draggable.png",description:"Drag and drop todo items, cross out completed items, a lot could be done vanilla you know...",github:"https://github.com/classEze/DraggableTodos",liveUrl:"https://classEze.github.io/draggableTodos"},{name:"HealthTrack",imgUrl:"/images/healthtrack.png",description:"A hospital Management System built with Nextjs and TailwindCSS.",github:"https://github.com/classEze",liveUrl:"https://health-sure.vercel.app"},{name:"Telepota",imgUrl:"/images/telepota.png",description:"A taxi booking Progressive Web Application built with Nodejs, Express, Google Places Api, GeoJson and Handlebars.",github:"https://github.com/classEze",liveUrl:"https://telepota.herokuapp.com"},{name:"Searchos",imgUrl:"/images/searchos.png",description:"An hospital Search Application built with Vanilla Js, Google Maps and Places Api",github:"https://github.com/classEze/searchos",liveUrl:"https://searchos.herokuapp.com"},{name:"Middletrust",imgUrl:"/images/middletrust.png",description:"An Escrow platform built with the MERN stack.",github:"https://github.com/classEze",liveUrl:"https://middletrust.com"},{name:"CryptoSpor",imgUrl:"/images/crypto.png",description:"A Crypto Trading Platform built with Laravel, Livewire and Bootstrap.",github:"https://github.com/classEze",liveUrl:"https://cryptospor.com"}];return Object(m.jsxs)("section",{className:"works",id:"works",children:[Object(m.jsx)("h2",{className:"heading",children:" Projects "}),Object(m.jsx)(_.a,{fontSize:"large",onClick:function(e){i(0===a?n.length-1:a-1)},className:"arrow arrow-left"}),Object(m.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*a,"vw)")},children:n.map((function(e){return Object(m.jsx)("article",{className:"container grid-center",children:Object(m.jsxs)("div",{className:"item flex",children:[Object(m.jsxs)("aside",{className:"flex-col",children:[Object(m.jsx)("img",{src:e.imgUrl,alt:"slidertitle"}),Object(m.jsx)("a",{className:"anchor-button",href:e.liveUrl,target:"_blank",rel:"noopener noreferrer",children:" Launch "})]}),Object(m.jsxs)("aside",{className:"flex-col",children:[Object(m.jsx)("span",{className:"project-name bold",children:e.name}),Object(m.jsxs)("p",{className:"project-description",children:[" ",e.description," "]}),Object(m.jsxs)("a",{className:"anchor-button flex-center",href:e.github,target:"_blank",rel:"noopener noreferrer",children:["  ",Object(m.jsx)(S.a,{})," See Repo"]})]})]})},e.liveUrl)}))}),Object(m.jsx)(J.a,{fontSize:"large",onClick:function(e){i(a===n.length-1?0:a+1)},className:"arrow arrow-right"}),Object(m.jsx)("ul",{children:n.map((function(e,t){return Object(m.jsx)("li",{className:a===t?"active":"",onClick:function(){return i(t)}},t)}))})]})}),B=(a(38),function(e){e.message;var t=e.setmodalOpen;return Object(m.jsx)("section",{className:"modal flex-center",onClick:function(){return t(!1)},children:Object(m.jsxs)("div",{className:"modal-content flex",children:[Object(m.jsx)("aside",{className:"flex-center",children:Object(m.jsx)("img",{src:"/images/thumbs2.jfif",alt:"thumbs up"})}),Object(m.jsxs)("aside",{className:"flex-col bold",children:[Object(m.jsx)("p",{className:"bold",children:" Hi there, thanks for reaching out, will get back to you soon enough..."}),Object(m.jsx)("button",{onClick:function(){return t(!1)},children:" Okay "})]})]})})});function F(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(m.jsxs)("div",{className:"content",children:[a&&Object(m.jsx)(B,{setmodalOpen:i,modalOpen:a}),Object(m.jsx)(w,{}),Object(m.jsx)(O,{}),Object(m.jsx)(H,{}),Object(m.jsx)(y,{}),Object(m.jsx)(R,{modalOpen:a,setmodalOpen:i})]})}a(39);function G(e){var t=e.isSidebarOpen,a=e.closeSideBar;return Object(m.jsxs)("section",{className:"nav-container flex "+(t?"active":"inactive"),onClick:a,children:[Object(m.jsx)("div",{}),Object(m.jsx)("nav",{className:"sidenav grid-center",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[" ",Object(m.jsx)("a",{href:"#intro",children:" Home "})]}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#portfolio",children:" Skills "})}),Object(m.jsxs)("li",{children:[Object(m.jsx)("a",{href:"#works",children:" Projects"})," "]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("a",{href:"#testimonials",children:" Testimonials"})," "]}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#contact",children:" Contact Me "})})]})})]})}var Q=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(G,{isSidebarOpen:a,closeSideBar:function(e){i(!1)}}),Object(m.jsx)(d,{isSidebarOpen:a,setSidebar:i}),Object(m.jsx)(F,{})]})};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(Q,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ff1858d1.chunk.js.map
