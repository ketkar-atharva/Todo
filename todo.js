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
add.style.display="none";
h.style.display="none";




let n=1;
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
   }else if(n<=6){
     let li=document.createElement("li");
     li.innerHTML=input1.value;
     list1.appendChild(li);
     p.style.height="400px";
     n++;
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
     n--;
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
function additem2(){
 if(input2.value==""){
   alert("Enter task");
 }else if(n<=6){
   let li=document.createElement("li");
   li.innerHTML=input2.value;
   list2.appendChild(li);
   f.style.height="400px";
   n++;
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
     n--;
 }
},false);