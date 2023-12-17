const e=document.querySelectorAll(".buttons"),t=document.querySelectorAll(".sections"),n=document.querySelectorAll(".side-nav__link"),o=document.querySelectorAll(".form__card"),r=document.querySelectorAll(".yearly"),c=document.querySelector(".buttons-confirm"),l=document.getElementById("section--4"),i=document.getElementById("section--5"),s=document.querySelector(".side-nav__link--1"),a=document.querySelector(".side-four"),u=document.querySelectorAll(".error-message"),d=document.querySelector(".form"),m=document.querySelectorAll(".form__input"),f=document.querySelector(".email-input"),_=document.querySelector(".number-input"),v=document.querySelector(".name-input"),y=document.querySelectorAll(".form__footer-text"),h=document.querySelectorAll(".month-amount");document.querySelectorAll(".wrapper__bottom-bottom");const S=document.querySelector(".month-text"),x=document.querySelector(".month-total");document.querySelector(".form__cards");const L=document.getElementById("card-text"),q=document.querySelector(".amount--2 "),E=function(){// Add more robust email validation
let e=document.querySelector(".error-message-email"),t=/\S+@\S+\.\S+/.test(f.value);return""!==f.value&&t?(e.classList.add("hidden"),!0):(e.classList.remove("hidden"),!1)},C=function(){let e=document.querySelector(".error-message-number");return""===_.value?(e.classList.remove("hidden"),!1):(e.classList.add("hidden"),!0)},p=function(){let e=document.querySelector(".error-message-name");return""===v.value?(e.classList.remove("hidden"),!1):(e.classList.add("hidden"),!0)},g=function(){u.forEach(e=>{e.classList.add("hidden")})},$=function(){t.forEach(e=>{e.classList.add("hidden")})},b=function(){h.forEach(e=>{let t=e.textContent,n=t.match(/\$(\d+(\.\d{1,2})?)\/mo/);if(n){let t=parseFloat(n[1]),o=isNaN(t)?"Invalid input":`+$${10*t}/yr`;e.textContent=o}else console.error("Invalid input format in addYearsPrice")}),S.textContent="(Yearly)",x.textContent="(per year)",r.forEach(e=>{e.classList.remove("hidden")})},A=function(){h.forEach(e=>{let t=e.textContent,n=t.match(/\$(\d+(\.\d{1,2})?)\/yr/);if(n){let t=parseFloat(n[1]),o=isNaN(t)?"Invalid input":`+$${t/10}/mo`;e.textContent=o}else console.log("Invalid input format")}),S.textContent="(Monthly)",x.textContent="(per month)",r.forEach(e=>{e.classList.add("hidden");// Use remove instead of add
})},k=function(e){e.classList.add("hidden")},I=function(e){e.classList.remove("hidden")},B=function(e){e.classList.add("side-nav__link--active")},w=function(e){e.classList.remove("side-nav__link--active")},N=function(e){e.classList.add("form__card--active")},D=function(e){e.classList.remove("form__card--active")},F=function(e){e.classList.add("form__box--active")},j=function(e){e.classList.remove("form__box--active")},Y=function(e){let t=e.reduce((e,t)=>{// Extract the numeric value and the sign
let n=t.match(/([-+]?\d+(\.\d+)?)/);if(n){let o=parseFloat(n[1])||0,r=t.includes("-")?-1:1;return e+r*o}return e},0);return t},M=function(e){e.classList.add("form__footer-text--active")},P=function(e){e.classList.remove("form__footer-text--active")},T=function(e){let t=e.match(/^\w+/),n=t?t[0]:"";return n},z=function(e){let t=e.match(/(?:\S+\s)?(\S+)$/),n=t?t[1]:"";return n},G=function(e){// Match the middle word in the format Pro +$150/YR 2 months free
let t=e.match(/(?:\S+\s)?(\+\$\d+(?:\/\w+)?)\s/),n=t?t[1]:"";return n};//////////////////////EVENTListeners FIXME///////////////////////////
document.addEventListener("click",function(e){let t=e.target.closest(".side-nav__link");if(t){e.preventDefault();let o=t.getAttribute("href").substring(1),r=document.getElementById(o);if(r){let o=Array.from(m),c=o.some(e=>""===e.value);if(c){e.preventDefault(),E(),p(),C();return}g(),$(),I(r),n.forEach(e=>w(e)),B(t)}}}),e.forEach(e=>{e.addEventListener("click",function(t){n.forEach(e=>w(e));let o=e.getAttribute("href").substring(1),r=document.querySelector(`.side-nav__link[href="#${o}"]`);if(r){let e=document.getElementById(o);if(e){// Convert NodeList to an array
let n=[...m],o=n.some(e=>""===e.value);if(o||B(r),o){// Prevent the default button click action
t.preventDefault(),B(s),E(),p(),C();return}g(),// Add 'hidden' class to all sections
$(),// Remove the 'hidden' class from the target section
I(e)}}})}),c.addEventListener("click",function(){k(l),I(i),B(a)});let H=[];d.addEventListener("click",function(e){let t=e.target;if(t.classList.contains("form__card")){// Guard clause
if(!t)return;o.forEach(e=>D(e)),N(t);let e=t.innerText,n=T(e);L.textContent=n;let r=z(e),c=G(e),l=[c[6]],i=[c[7]],s=l.join("")+i.join(""),a=s.toLocaleLowerCase();q.textContent=r,"free"===q.textContent&&(q.textContent=c);let u=document.querySelectorAll(".amount--3"),d=document.querySelector(".amount--4"),m=q.textContent,f=u[0].textContent,_=u[1].textContent;// console.log(arrTwo, arrThree);
H=[f,_,m];let v=Y(H),y=`$${v}/mo`;if(d.textContent=y,a){let e=`$${v}/${a}`;d.textContent=e}else{let e=`$${v}/mo`;d.textContent=e}}if(t.classList.contains("form__footer-text")){// Guard clause
if(!t)return;y.forEach(e=>P(e)),M(t),t.classList.contains("form__footer-text--year")?b():A()}if(t.classList.contains("form__box-radio")){let t=e.target.closest(".form__box");// Guard clause
if(!t)return;t.classList.contains("form__box--active")?j(t):F(t)}});//# sourceMappingURL=index.823d9680.js.map

//# sourceMappingURL=index.823d9680.js.map