var u=window.location.href.split("#");
var p=document.querySelectorAll("p");
var q=0;
var n=20;
var c=0;
var t;
var i;
var r;
var a=0;
document.addEventListener("keydown",b=>{m(b.keyCode)})
function m(b){
if(b===37)a--;
if(b===39)a++;
if(a<0)a=p.length-1;
if(a>p.length-1)a=0;
if(b===37 || b===39)window.location.href=u[0]+"#"+a}
var d={
root:null,
rootMargin:"0px",
threshold:b()}
var o=new IntersectionObserver(h,d);
while(q<p.length){
o.observe(p[q]);
p[q].id=q;
q++}
function b(){
t=[];
n=20;
i=1;
while(i<n){r=i/n;t.push(r);i++}
t.push(0);
return t;} 
function h(s,observer){
s.forEach((e)=>{
if(e.intersectionRatio>c)e.target.className="a";
else e.target.className="b";
})}
