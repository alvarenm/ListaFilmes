import { http } from '@/services/apiConfig'
import {api_key} from '@/services/apiConfig'
export default {
    getFilmes(termo){
        http.get(`search/movie?api_key=${api_key}&language=pt-BR&query=${termo}&page=1`
        )
        .then(
            res => {
                return res 
            }
        )
        .catch(err => {
            console.log(err)
        })
    }
}