<template>
<v-card>
  <v-card-title class="justify-center">
    Cadastre-se Já
  </v-card-title>
  <v-spacer></v-spacer>
  <v-form ref = "form">
    <v-card-text>
      <v-text-field
        label = "Email:"
        v-model="novaConta.email"
        solo
        rounded
        :rules="email_rules"
      ></v-text-field>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-text>
      <v-text-field
        label = "Senha"
        v-model="novaConta.senha"
        solo
        rounded
        :rules="senha_rules"
      ></v-text-field>
    </v-card-text>
    <v-card-text>
      <v-text-field
        label = "Nome"
        v-model="novaConta.nome"
        solo
        rounded
      ></v-text-field>
    </v-card-text>
    <v-card-title class="justify-center">
      Selecione sua data de nascimento
    </v-card-title>
    <v-card-text>
      <v-date-picker
      landscape
      full-width
      locale= "pt-BR"
      v-model="novaConta.nascimento">
      </v-date-picker>
    </v-card-text>
    <v-spacer></v-spacer>
  </v-form>
  <br>
  <v-row class = "justify-center">
  <v-btn color = "green"
  @click="cadastrar()">Cadastrar</v-btn>
  </v-row>
  <br>
</v-card>
</template>
<script>
import loginService from "@/services/loginService"
export default {
  name: "ModalCadastro",
  data: () => ({
    novaConta:{
      email: "",
      senha: "",
      nome: "",
      nascimento: "",
      listaFilmes: {},
      login: false,
      id: '',
    },
    email_rules: [
      v => !!v || "Informe um email"
    ],
    senha_rules: [
      v => !!v || "Insira uma senha",
      v => (v && v.length >= 5) || "mínimo 5 caracteres",
      v => (v && v.length <= 40) || "máximo 40 caracteres"
    ],
    mask: {
      nascimento: "##/##/####"
    },
    showRegisterModal: false
  }),
  methods: {
    limparCampos(){
      this.novaConta = {}
    },
    cadastrar(){
       if(!this.$refs.form.validate()){
        return;
    }
    var res = loginService.efetuarCadastro(this.novaConta);
    if (res){
      window.alert("Bem vindo")
    }

  }

}
}
</script>
