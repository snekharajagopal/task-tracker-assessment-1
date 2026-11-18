const input=document.getElementById("#task")
const list=document.getElementById("#list")
const btn=document.querySelector("#btn");
btn.addEventListener('click',function(){
    const li=document.createElement("li");
    li.textContent=input.value.trim();
    list.append(li);


});
const tasks=document.getElementById("#tasks");
tasks.addEventListener("submit",function(e){
    e.preventDefault();
    list.classList.toggle("done");

})