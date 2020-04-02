<template>
  <v-container>
      <v-layout
          align-center
          justify-center
        >
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12 mt-8">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Login</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Login"
            name="login"
            prepend-icon="person"
            type="text"
          ></v-text-field>
          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn round color="indigo" to="/register" dark>Sign Up</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" to="/" round dark>Login
         <v-icon>chevron_right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
  </v-layout>
  </v-container>
</template>

<script>

export default {
name: "login"
}
</script>

<style>

</style>