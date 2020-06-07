<template>
  <v-container>
          <div>
              <v-app-bar id="appbar" color="rgb(104, 105, 106)" flat app>
                <v-row>
                    <h4>Lista Filmes</h4>
                    </v-row>
                    <v-row>
                        <v-btn
                        icon
                        @click="goHome()"
                        ><v-icon>mdi-magnify</v-icon>
                        Busca de filmes
                        </v-btn>
                    </v-row>
                    <v-row>
                    <v-btn
                    icon
                    @click="goLista()"
                    ><v-icon>mdi-popcorn</v-icon>
                    Minha Lista de Filmes
                    </v-btn>
                    </v-row>
                    <v-row>
                    <v-btn
                    icon
                    @click="goAssistidos()"
                    ><v-icon>mdi-check</v-icon>
                    Meus filmes assistidos
                    </v-btn>
                    </v-row>
            </v-app-bar>
          <h1 id="p1">
              Procure por um filme
          </h1>
            <br/>
                <v-text-field
                outlined
                placeholder="Busque por um filme"
                v-model='termo'
                @keydown.enter="buscaFilmes(termo)"
                ></v-text-field>    
          <v-btn
          dark
          @click="buscaFilmes(termo)"
          >Buscar</v-btn>
          </div>
          <br/>
          <v-container v-if="getDone">
              <div id="movies-search" >
          <v-card v-for="filme in filmes" :key="filme.index" tile>
            <v-row>
            <v-col cols="4">
              <v-card-title>
                  {{filme.title}}
              </v-card-title>
            <v-spacer></v-spacer>
              <v-card-text>
                <v-img
                    :src ="`http://image.tmdb.org/t/p/original/${filme.poster_path}`" 
                    alt=''
                    width="140px"
                    /> 
              </v-card-text>
                </v-col>
                <v-col cols="5">
                   <v-card-text>
                       <br/>
                       <br/>
                       <br/>
                       {{filme.overview}}
                   </v-card-text>
                </v-col>
                <br/>   
                <v-col cols = "3">
                    <v-row id="botao1" justify="center">
                        <v-btn
                        dark
                        @click="adicionaLista($route.params.id,filme)"
                        >
                            <v-icon>
                                mdi-popcorn
                            </v-icon>
                            Colocar na lista
                        </v-btn> 
                    </v-row>
                    <br/>
                    <v-spacer/>
                    <v-row id="botao2" justify="center">
                        <v-btn
                            dark
                            @click="adicionaAssistido($route.params.id, filme)"
                        >
                            <v-icon>
                                mdi-check
                            </v-icon>
                            Marcar como visto
                        </v-btn>
                    </v-row>
                </v-col>
                </v-row>
                <v-spacer/>
          </v-card>


        
      </div>
          </v-container>
      
  </v-container>
  
</template>

<script>
import loginService from "@/services/loginService"
import movieService from '@/services/movieService'
import router from "@/router"
export default {
    data: () => ({
        id: '',
        termo: '',
        aux: '',
        filmes: [{}],
        getDone: false,
       
       buscaFilmes(termo){
         this.aux = movieService.getFilmes(termo)
         this.aux.then(
             res => {
                this.filmes = res.data.results
                this.getDone = true
             }
         )
        },

        adicionaLista(id, idFilme){
            loginService.inserirLista(id,idFilme)
        },

        adicionaAssistido(id, idFilme){
            loginService.inserirAssistido(id,idFilme)
        },
       goHome(){
            router.push({name: 'home', params: {id: this.$route.params.id}})
        },

        goLista(){
            router.push({name:'lista', params: {id: this.$route.params.id}})
        },

        goAssistidos(){
            router.push({name: 'assistidos', params: {id: this.$route.params.id}})
        }
       
    }),
    mounted() {

        loginService.verificaLogin(this.$route.params.id)
        this.id = this.$route.params.id
    }

}
</script>

<style>
#p1{
    text-align: center;
}
#botao1{
    padding-top: 80px;
}
#botao2{
    padding-top: 10px;
}
#appbar{
    align-items: left;
}
</style>