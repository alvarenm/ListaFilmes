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
    }
}