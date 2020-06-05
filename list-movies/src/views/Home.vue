<template>
  <div class="home">
  <v-card id="login">
      <v-card-title class="justify-center">
        Login
      </v-card-title>
  <v-form ref="form">

      <v-text-field
        label = "Email"
        v-model="conta.email"
        solo
        rounded
        prepend-icon = "mdi-account"
        :rules="email_rules"
      ></v-text-field>
          <v-text-field
        label = "Senha"
        v-model="conta.senha"
        solo
        rounded 
        prepend-icon = ' mdi-lock'
        :rules="senha_rules"
          ></v-text-field>

        <v-row>
        <v-col  >
        <v-btn 
        color = "green"
        @click="efetuarLogin">Login</v-btn>
        </v-col>
        <v-col>
          <v-btn 
          absolute  
          right
          color = "blue"
          @click="showRegisterModal= true"
          >Cadastre-se</v-btn>
        </v-col>
        </v-row>
        <!--Modal de Cadastro !-->
        <v-dialog v-model="showRegisterModal" max-width="80%">
          <modal-cadastro @close="showRegisterModal = false"> avasdasd </modal-cadastro>
        </v-dialog>
  </v-form>
  </v-card>
  </div>

  
</template>
<style  >
#login {
    padding: 4em;
    border-radius: 40px;
    margin-top: 5em;
    margin-right: 9em;
    margin-left: 9em;
    line-height: 4em;
    box-shadow: 5px 5px 15px rgba(204, 204, 204);
    padding-top: inherit;
}
</style>

  
<script>
import loginService from "@/services/loginService"
import ModalCadastro from "@/views/ModalCadastro"
export default {
  name: 'Home',
  components: {ModalCadastro},
  data: () => ({
    conta: {
      senha: "",
      email: "",
    },
    email_rules: [
      v => !!v || "Informe um email"
    ],
    senha_rules: [
      v => !!v || "Insira uma senha",
      v => (v && v.length >= 5) || "mínimo 5 caracteres",
      v => (v && v.length <= 40) || "máximo 40 caracteres"
    ],
    showRegisterModal: false
  }),
  methods: {
    efetuarLogin(){
      if(!this.$refs.form.validate()){
        return;
      }
      loginService.login(this.conta)
    },
  }
}
</script>
