(self.webpackChunk=self.webpackChunk||[]).push([[854],{8792:(e,n,s)=>{s(1629),s(6099),s(3500);var i=document.querySelector("#navigation"),o=document.querySelector(".menu-btn"),l=document.querySelector(".close-btn"),t=document.querySelector(".menu-mobile"),a=document.querySelector("nav ul li a"),d=document.querySelector(".logo a span"),c=document.querySelectorAll(".menu-mobile li");function r(){(window.innerWidth<750||window.scrollY>0)&&(i.classList.add("navigation"),a.classList.add("elementos"),d.classList.add("logoNombre"))}o.addEventListener("click",(function(){o.style.display="none",l.style.display="block",l.style.color="white",t.classList.add("active"),i.classList.add("navigation"),r()})),l.addEventListener("click",(function(){o.style.display="block",l.style.display="none",t.classList.remove("active"),window.innerWidth<970?i.classList.add("navigation"):i.classList.remove("navigation"),r()})),window.addEventListener("resize",(function(){window.innerWidth>=850?(o.style.display="none",l.style.display="none",i.classList.remove("navigation"),d.classList.remove("logoNombre")):(o.style.display="block",l.style.display="none",i.classList.add("navigation"),d.classList.add("logoNombre")),r()})),c.forEach((function(e){return e.addEventListener("click",(function(){t.classList.remove("active"),o.style.display="block",l.style.display="none",r()}))})),window.addEventListener("scroll",(function(){window.scrollY>0&&window.scrollY<300?window.innerWidth>=750?d.classList.add("logoNombre"):i.classList.add("navigation"):window.scrollY>300?i.style.display="none":(i.classList.remove("navigation"),d.classList.remove("logoNombre")),r()}));var v=window.scrollY;window.addEventListener("scroll",(function(){var e=window.scrollY;e<v&&(i.style.display="flex"),v=e})),window.dispatchEvent(new Event("scroll")),r()}},e=>{e.O(0,[454],(()=>{return n=8792,e(e.s=n);var n}));e.O()}]);