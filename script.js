const btn=document.getElementById("themeBtn");

btn.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

btn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

btn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};