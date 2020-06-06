import { http } from '@/services/apiConfig'
import {api_key} from '@/services/apiConfig'
export default {
    autenticar(){
        http.get(`authentication/token/new?api_key=${api_key}`)
        .then(
            res => {
                console.log(res)
            } 
        ) 
        .catch(err => {
            console.log(err)
        })
    },
    getFilmes(termo){
        http.get(`search/movie?api_key=${api_key}&language=pt-BR&query=${termo}&page=1`
        )
        .then(
            res => {
                console.log(res.data)
            }
        )
        .catch(err => {
            console.log(err.data)
        })
    }
}