<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  background: #333;
  font-family: "Gothic A1", sans-serif;
  display: flex;
  justify-content: center;
}

ul {
  margin: 0;
  padding: 0;
}

h3,
p {
  margin: 0;
  padding: 0;
}

.service-btn {
  width: 100px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  background: #ffb232;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-top: 30px;
}

button:disabled,
button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
