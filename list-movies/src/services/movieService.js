import { http } from '@/services/apiConfig'
import {api_key} from '@/services/apiConfig'
export default {
    getFilmes(termo){
        return http.get(`search/movie?api_key=${api_key}&language=pt-BR&query=${termo}&page=1`)
    }
}