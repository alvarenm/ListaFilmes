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
    getFilmesPopulares(){
        http.get(`movie/popular?api_key=${api_key}&language=pt-BR&page=1`
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