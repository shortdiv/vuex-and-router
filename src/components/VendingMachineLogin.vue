<template>
  <div class="wrapper">
    <div class="avatar">
      <img src="" alt="" />
    </div>
    <div class="action-box">
      <h2>Sign In</h2>
      <form action @submit.prevent="handleLogin">
        <label class="login-row">
          Username
          <input type="text" />
        </label>
        <label class="pw-row">
          Password
          <input type="password" />
        </label>
        <button type="submit" class="submit-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "VendingMachineLogin",
  methods: {
    handleLogin() {
      // we'll dispatch the login and reroute here //
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrapper {
  border-radius: 10px;
  border: 1px solid black;
  width: 350px;
  height: 627px;
  position: relative;
  background: #76c1a5;
}
.avatar {
  width: 100px;
  height: 100px;
  background: #d8d8d8;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  position: relative;
  margin-top: 100px;
  border: 7px solid #008a56;
  z-index: 100;
}

.action-box {
  z-index: 10;
  position: relative;
  color: white;
  text-align: left;
  width: 70%;
  height: 250px;
  margin: 0 auto;
  background: #008a56;
  margin-top: -50px;
  h2 {
    font-weight: 400;
    position: absolute;
    left: 50%;
    top: 50px;
    margin: 0;
    margin-left: -36px;
  }
  form {
    position: absolute;
    bottom: 0;
    text-align: center;
    padding: 1rem 2.5rem;
    label:not(:first-child) {
      margin-top: 13px;
      display: block;
    }
    input {
      float: right;
      margin-left: 10px;
      -webkit-appearance: none;
      border: none;
      background: #008a56;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: 0;
      margin: 0;
      width: 100%;
    }
  }
}
.login-row,
.pw-row {
  padding-top: 1rem;
}
.submit-button {
  width: 100px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background: #ffb232;
  padding: 5px;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
}
</style>
