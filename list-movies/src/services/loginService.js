import contas from "@/DB/database.js"
import router from "@/router"
var acc = contas.contas;  
export default{
    login(conta){
        let i = 0;
        while (i < acc.length){
          if(acc[i].email == conta.email && acc[i].senha == conta.senha){
            conta = acc[i]
            window.alert("Bem vindo ao Lista Filmes")
            conta.login = true;
            return conta
        }
        i++    
       }
        window.alert("Favor insira novamente os dados")
    },
    getConta(id){
        for(let i=0;i<acc.length; i++){
            if(acc[i].id == id){
                return acc[i]
            }
        }
    },
    getLista(id){
        for(var i = 0; i<acc.length; i++){
            if(acc[i].id == id){
                return acc[i].listaFilmes
            }
        }
    },
    getListaAssistidos(id){
        for(var i = 0; i<acc.length; i++){
            if(acc[i].id == id){
                return acc[i].listaAssistidos
            }
        }
    },
    efetuarCadastro(novaConta){
        for(let i = 0; i < acc.length; i++){
            if(acc[i].email == novaConta.email){
                window.alert("Email ja cadastrado!")
                return false;
            }
        }
        novaConta.id = (acc.length) + 1
        contas.contas.push(novaConta)
        console.log(contas.contas)
        return true
        
    },

    verificaLogin(id){
        for(let i = 0;  i < acc.length; i++){
            if(acc[i].id == id){
                if(acc[i].login){
                    return true;
                }else{
                    router.push({name: 'login', params: {}})
                }

            }
        }
        router.push({name: 'login', params: {}})
    },

    inserirLista(id, movie){
        var filme = {
            title: movie.title,
            poster_path: movie.poster_path,
            overview: movie.overview,
            id: movie.id
        }
        for(let i = 0;  i < acc.length; i++){
            if(acc[i].id == id){
                for(let j = 0; j <acc[i].listaFilmes.length; j++){
                    if(movie.id == acc[i].listaFilmes[j].id){
                        window.alert("Filme ja esta na lista")
                        return
                    }
                }

                acc[i].listaFilmes.push(filme)
                window.alert("Filme adicionado a sua lista")
                return
            }
        }

    },
    inserirAssistido(id, movie){
        var filme = {
            title: movie.title,
            poster_path: movie.poster_path,
            overview: movie.overview,
            id: movie.id
        }
        for(let i = 0;  i < acc.length; i++){
            if(acc[i].id == id){
                for(let j = 0; j <acc[i].listaAssistidos.length; j++){
                    if(movie.id == acc[i].listaAssistidos[j].id){
                        window.alert("Filme ja esta na lista de assistidos")
                        return
                    }
                    
                }
                for(let k = 0; k< acc[i].listaFilmes.length; k++){
                    if(movie.id == acc[i].listaFilmes[k].id){
                        acc[i].listaAssistidos.push(filme)
                        window.alert("Filme adicionado a sua lista de assistidos")
                        return
                    }
                }
                window.alert("Só é possivel adicionar como vistos, filmes da sua lista de filmes")
                return
            }
        }

    },
}
