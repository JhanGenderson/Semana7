let btnModal = document.getElementById("btnModal");

// let miModal = document.getElementById("miModal");
let miModal = new bootstrap.Modal(document.getElementById("miModal"));

console.log(miModal);
// 4.6
// 5 Es la version que estamos usando

btnModal.addEventListener("click",function(){   
    miModal.show()
})

setTimeout(function(){
    miModal.show()
},2000);