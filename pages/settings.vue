<template>
  <v-layout row align-space-between justify-space-between>
    <navbar></navbar>
    <v-flex lg3 pr-1>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img
              src="https://randomuser.me/api/portraits/men/85.jpg"
              alt="User avatar"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-flex>
    <v-flex lg6 pr-2 pl-2>
      <v-form>
        <v-container fluid>
          <v-flex xs12>
            <img height="150px" alt />
            <v-text-field
              label="Selecione a imagem"
              prepend-icon="attach_file"
            ></v-text-field>
            <input type="file" style="display: none" ref="image" />
          </v-flex>
          <v-btn>
            Trocar pano de fundo
            <v-icon right dark>cloud_upload</v-icon>
          </v-btn>
          <v-btn to="/login"
            >Sair
            <v-icon right dark>exit_to_app</v-icon>
          </v-btn>
        </v-container>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import navbar from "~/components/navbar.vue";
export default {
  name: "settings",
  components: {
    navbar
  },
  data: () => ({
    open: true
  })
};
</script>

<style></style>
