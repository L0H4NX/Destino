
var resposta = document.querySelector("#resposta")
var btnprgt = document.querySelector("#btn")

const respostas = [
    "Não.",
    "Talvez sim.",
    "Espero que sim.",
    "Certeza!",
    "Eu não tenho tanta certeza...",
    "Não conte com isso.",
    "Não há dúvidas!",
    "Pergunte novamente mais tarde...",
    "Minhas fontes dizem não.",
    "Concentre-se e pergunte novamente.",
    "As pespectivas não são tão boas...",
    "sim!",
    "Não é possivel prever agora",
    "Melhor não te dizer agora.",
    "Definitivamente sim!",
    "Minha resposta é não!"
]


//Gerando função ao clicar no botão
function fazerPergunta(){
  var ipt = document.querySelector(".input")
    if(ipt.value == ""){
        alert("Verifique a pergunta e tente novamente")
        return
    }

   btnprgt.setAttribute("disabled", true)
    
//Gerando numero aleatorio
    const totalRespostas = respostas.length //Total: 16
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    console.log(respostas[numeroAleatorio] )

    //Manipulando HTML
    var pergunta = "<div>" + ipt.value + "</div>"
    resposta.innerHTML = pergunta + respostas[numeroAleatorio]
    resposta.style.opacity = "1";
    setTimeout(function(){
        resposta.style.opacity = "0";
        btnprgt.removeAttribute("disabled")
    }, 3000)
    return
}
//Gerar numero aleatorio
//console.log(respostas.length)