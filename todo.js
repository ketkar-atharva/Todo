let input=document.getElementById('input-box');
let list=document.getElementById('listcontainer');
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