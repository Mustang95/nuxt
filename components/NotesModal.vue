<template>
  <v-layout row justify-center>
    <v-dialog v-model="open">
      <v-card>
        <v-card-title>
          <span class="headline"></span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-form>
              <v-textarea
                outline
                v-model="note"
                label="Note"
                placeholder="Anotações"
                solo
              ></v-textarea>
              <v-btn color="success" type="submit">Salvar</v-btn>
            </v-form>
            <v-list three-line subheader>
              <v-subheader>Anotações</v-subheader>
              <v-list-tile v-for="(note, key) in NOTES" v-bind:key="key">
                <v-list-tile-content>
                  <v-list-tile-title></v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn icon>
                    <v-icon color="red">delete</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="primary" @click="open = false">Fechar</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="red" dark
            >Remover Tarefa</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "notesModel",
  data: () => ({
    open: false
  })
};
</script>

<style></style>
