<template>
  <v-container>
      <v-app-bar color="rgb(104, 105, 106)" flat app>
          <v-spacer></v-spacer>
              Lista Filmes

      </v-app-bar>
          <div>
          <h1 id="p1">
              Procure por um filme
          </h1>
            <br/>
                <v-text-field
                outlined
                placeholder="Busque por um filme"
                v-model='termo'
                ></v-text-field>    
          <v-btn
          dark
          @click="buscaFilmes(termo)"
          >Buscar</v-btn>
          </div>
          <br/>
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
                        @click="adicionaLista($route.params.id,filme.id)"
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
                            @click="adicionaAssistido($route.params.id, filme.id)"
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
  
</template>

<script>
import loginService from "@/services/loginService"
import movieService from '@/services/movieService'
export default {
    data: () => ({
        id: '',
        termo: '',
        aux: '',
        filmes: [{
        isFull:false
        }],
       
       buscaFilmes(termo){
         this.aux = movieService.getFilmes(termo)
         this.aux.then(
             res => {
                 this.filmes = res.data.results
                 console.log(this.filmes)
             }
         )
        },
        adicionaLista(id, idFilme){
            loginService.inserirLista(id,idFilme)
        },
        adicionaAssistido(id, idFilme){
            loginService.inserirAssistido(id,idFilme)
        }

    }),
    mounted() {

        loginService.verificaLogin(this.$route.params.id)
        this.id = this.$route.params.id
        console.log(this.id)
        
        
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
</style>