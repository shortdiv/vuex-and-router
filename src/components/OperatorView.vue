<template>
  <div class="info">
    <div class="machine-information">
      <h3>Operator</h3>
      <p>Scruffy</p>
      <h3>Primary Machine</h3>
      <p>{{ primaryMachine }}</p>
    </div>
    <button class="logout-btn" @click="logout">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.45 48.36">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <polyline
              class="cls-1"
              points="45.95 27 45.95 45.86 2.5 45.86 2.5 2.5 21.93 2.5"
            />
            <line class="cls-2" x1="13.6" y1="34.73" x2="38.29" y2="10.41" />
            <polygon
              class="cls-3"
              points="46.34 2.72 42.35 17.32 31.71 6.57 46.34 2.72"
            />
          </g>
        </g>
      </svg>
      <span class="logout-btn--text">Logout</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "OperatorView",
  props: {
    primaryMachine: String
  },
  methods: {
    logout() {
      console.log("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.machine-information {
  p {
    font-size: 2em;
  }

  span {
    position: absolute;
  }
}

.logout-btn {
  position: absolute;
  top: 0;
  right: -28px;
  border: none;
  padding: 12px;
  margin: 15px;
  color: white;
  width: 40px;
  height: 40px;
  background: none;
  transition: width 0.35s;
  -webkit-transition: width 0.35s;
  overflow: hidden;

  &:hover {
    width: 110px;
    cursor: pointer;

    & .logout-btn--text {
      opacity: 0.9;
    }

    & svg {
      transform: translate(-32px, -7px);
    }
  }
}

.logout-btn--text {
  font-size: 1.2em;
  position: absolute;
  right: 3px;
  bottom: 10px;
  overflow: hidden;
  letter-spacing: 1px;
  opacity: 0;
  transition: opacity 0.45s;
  -webkit-transition: opacity 0.35s;
  color: white;
}

svg {
  transform: translate(-6px, -7px);
  width: 30px;
  transition: transform 0.35s;
  -webkit-transition: transform 0.35s;
}

.cls-1 {
  fill: none;
}

.cls-1,
.cls-2 {
  stroke: #fff;
  stroke-miterlimit: 10;
  stroke-width: 5px;
}

.cls-3 {
  fill: #fff;
}

.cls-2 {
  fill: #000;
}
</style>
