import contas from "@/DB/database.js"
const acc = contas.contas;
export default{
    login(conta){
        let i = 0;
        while (i < acc.length){
          if(acc[i].email == conta.email && acc[i].senha == conta.senha){
            window.alert("Bem vindo ao Lista Filmes")
            return
        }
        i++    
       }
        window.alert("Favor insira novamente os dados")
    },
    efetuarCadastro(novaConta){
        for(let i = 0; i < acc.length; i++){
            if(acc[i].email == novaConta.email){
                window.alert("Email ja cadastrado!")
                return false;
            }
        }
        acc.push(novaConta)
        return true
        
    }
}
