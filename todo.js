let input=document.getElementById('input-box');
let list=document.getElementById('listcontainer');
let list1=document.getElementById('listcontainer1');
let input1=document.getElementById('input-box1');
let p=document.getElementById('prep');
let t=document.getElementById('todo');
let f=document.getElementById('format');
let h=document.getElementById('head3');
let input2=document.getElementById('input-box2');
let list2=document.getElementById('listcontainer2');
let title=document.getElementById('input-boxt');
let add=document.getElementById('addtask');
let addtitle=document.getElementById('addtitle');
let h1=document.getElementById('head1');
let h2=document.getElementById('head2');
let title1=document.getElementById('input-boxt1');
let title2=document.getElementById('input-boxt2');
let addtitle1=document.getElementById('addtitle1');
let addtitle2=document.getElementById('addtitle2');
h1.style.display="none";
let add1=document.getElementById('addtask0');
let add2=document.getElementById('addtask2');
add.style.display="none";
add1.style.display="none";
add2.style.display="none";
h.style.display="none";
h2.style.display="none";
let ev1=document.getElementById('container1');
let ev2=document.getElementById('container2');
let ev3=document.getElementById('container3');
ev1.style.display="none";
ev2.style.display="none";
ev3.style.display="none";



let n=1;
let m=1;
let v=1;
function additem(){
     if(input.value==""){
       alert("Enter task");
     }else if(n<=6){
       let li=document.createElement("li");
       li.innerHTML=input.value;
       list.appendChild(li);
       t.style.height="400px";
       n++;
       let span=document.createElement("span");
       span.innerHTML="\u00d7";
       li.appendChild(span);
   

     }else{
       alert("Only 6 task can be entered");
     }
     input.value="";
}
list.addEventListener('click',function(e){
   if(e.target.tagName=="LI"){
       e.target.classList.toggle("checked");
   }else if( e.target.tagName=="SPAN"){
       e.target.parentElement.remove();
       n--;
   }
},false);

function additem1(){
   if(input1.value==""){
     alert("Enter task");
   }else if(m<=6){
     let li=document.createElement("li");
     li.innerHTML=input1.value;
     list1.appendChild(li);
     p.style.height="400px";
     m++;
     let span=document.createElement("span");
     span.innerHTML="\u00d7";
     li.appendChild(span);
 

   }else{
     alert("Only 6 task can be entered");
   }
   input1.value="";
}
list1.addEventListener('click',function(e){
 if(e.target.tagName=="LI"){
     e.target.classList.toggle("checked");
 }else if( e.target.tagName=="SPAN"){
     e.target.parentElement.remove();
     m--;
 }
},false);

function additemt(){
 if(title.value==""){
   alert("Add title");
 }else{
   let t=document.createElement("h3");
   t.innerHTML=title.value;
   h.appendChild(t);
   addtitle.style.display="none";
   h.style.display="block";
  add.style.display="inline-flex";
 }
 input2.value="";
}
function additemt1(){
 if(title1.value==""){
   alert("Add title");
 }else{
   let t=document.createElement("h3");
   t.innerHTML=title1.value;
   h1.appendChild(t);
   addtitle1.style.display="none";
   h1.style.display="block";
  add1.style.display="inline-flex";
 }
 input2.value="";
}
function additemt2(){
 if(title2.value==""){
   alert("Add title");
 }else{
   let t=document.createElement("h3");
   t.innerHTML=title2.value;
   h2.appendChild(t);
   addtitle2.style.display="none";
   h2.style.display="block";
  add2.style.display="inline-flex";
 }
 input2.value="";
}
function additem2(){
 if(input2.value==""){
   alert("Enter task");
 }else if(v<=6){
   let li=document.createElement("li");
   li.innerHTML=input2.value;
   list2.appendChild(li);
   f.style.height="400px";
   v++;
   let span=document.createElement("span");
   span.innerHTML="\u00d7";
   li.appendChild(span);


 }else{
   alert("Only 6 task can be entered");
 }
 input2.value="";
}
list2.addEventListener('click',function(e){
 if(e.target.tagName=="LI"){
     e.target.classList.toggle("checked");
 }else if( e.target.tagName=="SPAN"){
     e.target.parentElement.remove();
     v--;
 }
},false);

let k=1;
function addevent(){
 if(k==1){
   ev1.style.display="flex";
   k++;
 }else if(k==2){
   ev2.style.display="flex";
   k++;
 }else if(k==3){
   ev3.style.display="flex";
   k++;
 }else{
   alert("Only 3 events can be added");
 }
}