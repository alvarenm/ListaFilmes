const api_key = "7af5ad82a7dff227d936293923111806"
const urlNewToken = "https://api.themoviedb.org/3/authentication/token/new?api_key="
export default{
    
    methods: {
        getNewToken(){
            console.log("chegou aqui")
            this.$https.get(`${urlNewToken}${api_key}`)
            .then(res => {
                console.log(`${urlNewToken}${api_key}`)
                console.log(res)
                return res
            })
            .catch(err => {
                console.log(err)
                return err
            })
        }
    }
}