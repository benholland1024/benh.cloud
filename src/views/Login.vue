<template>
  <div class="text-center">
    <br/><br/>
    <h1>admin login</h1>
    <p>
      username: <input type="text" v-model="username">
    </p>
    <br/>
    <p>
      password: <input type="password" v-model="password">
    </p>
    <br/>
    <button @click="submit_login()">submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submit_login() {
      console.log(`Submitting login with username ${this.username} and pass ${this.password}`);
    }
  }
}
</script>