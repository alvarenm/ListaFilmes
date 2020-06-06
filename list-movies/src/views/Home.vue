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
      <div id="movies-search">
          <v-card>
            <v-row>
            <v-col cols="3">
              <v-card-title>
                  {{"aff"}}
              </v-card-title>
            <v-spacer></v-spacer>
              <v-card-text>
                <v-img
                    src ="http://image.tmdb.org/t/p/original//8j0myrRCU5WTtaReeJ6jrytzuYp.jpg"
                    alt=''
                    width="130px"
                    /> 
              </v-card-text>
                </v-col>
                <v-col cols="6">
                   <v-card-text>
                       Aqui vai a descrição
                   </v-card-text>
                </v-col>
                </v-row>
          </v-card>
        
      </div>
  </v-container>
  
</template>

<script>
import loginService from "@/services/loginService"
import movieService from '@/services/movieService'
export default {
    data: () => ({

        termo: '',

    }),

    methods: {
        buscaFilmes(termo){
            
           console.log(movieService.getFilmes(termo))
        }

    },
    
    mounted() {
        loginService.verificaLogin(this.$route.params.id)
        
    }

}
</script>

<style>
#p1{
    text-align: center;
}
</style>