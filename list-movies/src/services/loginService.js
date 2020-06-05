import contas from "@/DB/database.js"
import router from "@/router"
const acc = contas.contas;  
export default{
    login(conta){
        let i = 0;
        while (i < acc.length){
          if(acc[i].email == conta.email && acc[i].senha == conta.senha){
            conta = acc[i]
            console.log(conta)
            console.log(acc[i])
            window.alert("Bem vindo ao Lista Filmes")
            conta.login = true;
            return conta
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
        novaConta.id = (acc.length) - 1
        acc.push(novaConta)
        console.log(acc)
        return true
        
    },
    verificaLogin(id){
        for(let i = 0; i < acc.length; i++){
            if(acc[i].id == id){
                if(acc[i].login){
                    return true;
                }else{
                    router.push({name: 'login', params: {}})
                }

            }
        }
    }
}
