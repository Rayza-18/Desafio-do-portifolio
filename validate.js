const form = document.querySelector(".formcontato__form")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const textareaMensagem = document.querySelector("#mensagem")

console.log(form, nome, email);

        form.addEventListener("submit", (event) =>{
            event.preventDefault();
            //verifica se esta vazio
            if(nome.value === ""){
                alert("Preencha seu nome ");
                return;
            }
            //verifica email e se é valido
            if(email.value === "" ||!isEmaiilvalid(email.value)){
                alert("Preencha seu email ");
                return;
            }
            if(assunto.value === ""){
            alert("Preencha o campo assunto ");
             return;
             } 
             if(textareaMensagem.value === ""){
            alert("escreva sua mensagem ");
           return; } 
            //se todos estiverem vazios
            form.submit();
        });

        //função q valida email
        function isEmaiilvalid(email){
            const emailRegex = new RegExp(
                // usuario2@gmail.com.br
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
            );
            if(emailRegex.test(email)){
               return true ;
            }
            return false;
        }
  