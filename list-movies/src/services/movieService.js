import { http } from '@/services/apiConfig'
import {api_key} from '@/services/apiConfig'
export default {
    getFilmes(termo){
        http.get(`search/movie?api_key=${api_key}&language=pt-BR&query=${termo}&page=1`
        )
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
    }
}