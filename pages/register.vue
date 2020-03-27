<template>
  <v-layout
          align-center
          justify-center
        >
  <v-flex xs12 sm8 md4>
    <v-card class="mt-8">
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
            label="Email"
            name="email"
            prepend-icon="email"
            type="email"
          ></v-text-field>
          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
          ></v-text-field>
                    <v-text-field
            id="password"
            label="Confirm Password"
            name="password"
            prepend-icon="lock"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="red" to="/login">
        <v-icon>chevron_left</v-icon>Back</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="success" to="/">Register
         <v-icon>chevron_right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>