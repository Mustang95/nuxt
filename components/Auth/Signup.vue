<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="mt-8">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
                <v-alarm :alert="true" color="error" icon="warning">Este usuario já existe!</v-alarm>
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="person"
                type="text"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="email"
                type="email"
                :rules="[rules.required, rules.email]"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
                rules="[rules.required]"
                v-model="password"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Confirm Password"
                name="password"
                prepend-icon="lock"
                type="password"
                rules="[rules.required]"
                :error="!valid()"
                v-model="confirm_password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="black" to="/login" dark>
              <v-icon>chevron_left</v-icon>Back</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success" to="/">
              Register
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
    name: "signup",
    data: () => ({
        password: '',
        confirm_password: '',
        rules: {
            required:  value => !!value || "Obrigatório.",
            email: value => {
                const  pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || "E-mail inválido.";
            }
        }
    }),
    methods: {
        valid(){
            return this.password === this.confirm_password;
        }
    }
};
</script>

<style></style>
