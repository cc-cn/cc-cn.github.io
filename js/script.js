Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var u=function e(a,i){var r;return function(){var t=arguments,n=this,e=function e(){return a.apply(n,t)};clearTimeout(r),r=setTimeout(e,i)}},e=function(){"use strict";var i=document.documentElement,r='button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])',m={trigger:null,panel:null,tabbableEls:null,firstTabbable:null,lastTabbable:null,inertOmmits:null},e=function e(t){var n=t.trigger,a=t.panel,i=t.inertOmmits;if(!n||!a)throw new Error("SlidingMenu can't initialized.\ncheck your options");m.trigger=n,m.panel=a,m.tabbableEls=a.querySelectorAll(r),m.firstTabbable=m.tabbableEls&&m.tabbableEls[0],m.lastTabbable=m.tabbableEls&&m.tabbableEls[m.tabbableEls.length-1],m.inertOmmits=i,a.addEventListener("transitionend",s,!1),n.addEventListener("click",l,!1)},p=function e(){var t;return m.panel.classList.contains("nav--animate")},l=function e(){p()?f():t()},t=function e(){var t=m.panel,n=m.trigger;i.classList.add("sidebar-opened"),document.addEventListener("keydown",o,!1),u(function(){t.classList.add("nav--animate"),t.setAttribute("aria-hidden","false"),n.lastChild.textContent="close",n.setAttribute("aria-expanded","true"),a(t)},50)()},f=function e(){var t=m.panel;n(),t.classList.remove("nav--animate"),document.removeEventListener("keydown",o,!1)},a=function e(){for(var t=m.inertOmmits,n=m.panel,a=-1,i;i=n.parentNode.children[++a];)i===n||i.matches(t)||(i.setAttribute("aria-hidden","true"),i.setAttribute("inert",""))},n=function e(){for(var t=document.querySelectorAll("[inert]"),n=-1,a;a=t[++n];)a.removeAttribute("aria-hidden"),a.removeAttribute("inert")},s=function e(){var t=m.firstTabbable,n=m.trigger,a=m.panel;u(function(){p()?t.focus():(n.lastChild.textContent="menu",n.setAttribute("aria-expanded","false"),i.classList.remove("sidebar-opened"),a.setAttribute("aria-hidden","true"),n.focus())},20)()},o=function e(t){var n=t=t||window.event,a=n.keyCode,i=n.which,r=n.target,l=n.srcElement,s=n.shiftKey,o=m.lastTabbable,u=m.firstTabbable,b=m.trigger,c,d=r||l;switch(a||i){case 27:p()&&f();break;case 9:p()&&d===b&&s?(t.preventDefault(),t.stopPropagation(),o.focus()):p()&&d===b&&!s?(t.preventDefault(),t.stopPropagation(),u.focus()):d===u&&s?(t.preventDefault(),t.stopPropagation(),b.focus()):d!==o||s||(t.preventDefault(),t.stopPropagation(),b.focus());break}};return{init:e,isVisible:p}}();e.init({trigger:document.getElementsByClassName("nav-toggle")[0],panel:document.getElementsByClassName("nav")[0],inertOmmits:".gnb, style, meta, link, base, script, .nav"});