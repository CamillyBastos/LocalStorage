let btn = document.querySelector("#btn");
let user = document.querySelector("#user");
let welcome = document.querySelector("#welcome");
let exit = document.querySelector("#exit");


/*1-salvar storage*/
/*localStorage.setItem("userName", "Camilly");*/
/*2-pegar item localStorage */
/*let userName = localStorage.getItem("userName");*/
/*3-apagar item*/
/*localStorage.removeItem("userName"); */

const sair = () => {
    localStorage.removeItem("userName")
    welcome.innerHTML = `Faça seu login`

}


exit.addEventListener("click", sair)


function pegarNome() {
    localStorage.setItem("userName", user.value);
    let userName = localStorage.getItem("userName");   

    if(userName.trim() != ""){
       welcome.innerHTML = `olá ${userName}, Seja 
    Bem-vindo!`;}
    
}
function PegarValorLocal(){

    let userName = localStorage.getItem("userName");  

 if(userName == null){
    welcome.innerHTML = `Faça seu login`
 }else{
    welcome.innerHTML = `olá ${userName}, Seja
    Bem-vindo!`;
 }    
}
PegarValorLocal()
btn.addEventListener ("click",pegarNome)