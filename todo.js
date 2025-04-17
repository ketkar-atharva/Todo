let input=document.getElementById('input-box');
let list=document.getElementById('listcontainer');
let list1=document.getElementById('listcontainer1');
 let input1=document.getElementById('input-box1');
 let p=document.getElementById('prep');
let t=document.getElementById('todo');
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
}
},false);