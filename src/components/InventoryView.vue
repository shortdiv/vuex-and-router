<template>
  <div class="wrapper">
    <a href="/" class="navigation">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.34 15.13">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path class="cls-1" d="M11.13,7.77l18.18-.21" />
            <polygon points="0 7.57 13.1 0 13.1 15.13 0 7.57" />
          </g>
        </g>
      </svg>
      <span>Go Back</span>
    </a>
    <section class="product-list">
      <ul>
        <li
          class="product-list--item"
          v-for="(snack, idx) in inventory"
          :key="idx"
        >
          <div class="product-information">
            <div class="product-avatar"></div>
            <span>{{ snack.productName }}</span>
          </div>

          <div class="supply-count">
            <svg
              :class="{
                caution: true,
                'is-visible': false
              }"
              viewBox="0 0 307.43 274.23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m137.26 20.5-123.69 214.23a19 19 0 0 0 16.43 28.5h247.4a19 19 0 0 0 16.45-28.5l-123.68-214.23a19 19 0 0 0 -32.91 0z"
                fill="#ffd400"
                stroke="#000"
                stroke-miterlimit="10"
                stroke-width="22"
              ></path>
              <path
                d="m140 217.73a12.6 12.6 0 1 1 25.2 0 12.6 12.6 0 1 1 -25.2 0zm23.6-114.8c0 7.4-2.2 26.4-4.8 54.4l-2.6 27.8h-7.2l-2.6-27.8c-2.6-28-4.8-47-4.8-54.4 0-8.6 4.2-12.2 11-12.2s11.03 3.6 11.03 12.2z"
              ></path>
            </svg>
            <span>{{ snack.supply }}</span>
          </div>
        </li>
      </ul>
    </section>
    <section class="action-section">
      <div class="machine-information">
        <div class="machine-id">
          <h3>Machine</h3>
          <p>{{ machineName }}</p>
        </div>
        <div class="machine-state">
          <h3>Last Stocked</h3>
          <p>{{ stockDateTime }}</p>
        </div>
      </div>
      <button class="service-btn" @click="restockMachine">Restock</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "InventoryView",
  data() {
    return {
      stockDateTime: null
    };
  },
  computed: {
    machineName() {
      return this.$store.state.currentlyServicingMachine;
    },
    inventory() {
      return this.$store.state.inventory;
    }
  },
  methods: {
    restockMachine() {
      console.log("restock");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  border-radius: 10px;
  background: #fff;
  border: 1px solid black;
  width: 350px;
  height: 627px;
  position: relative;
}

.navigation {
  position: absolute;
  top: 10px;
  left: 10px;
  text-decoration: none;
  & span {
    padding-left: 10px;
  }
}

.action-section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 200px;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  background: #008a56;
  color: white;
  border-radius: 0 0 10px 10px;
  position: absolute;
  bottom: 0;
  & .service-btn {
    width: 150px;
    cursor: pointer;
    font-size: 20px;
    color: white;
    background: #ffb232;
    padding: 10px 30px;
    border: none;
    border-radius: 10px;
    align-self: flex-start;
    margin-top: 30px;
  }
}

.product-avatar {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.product-list {
  margin: 50px 20px;
  overflow: scroll;
  height: 61%;
}

.product-list--item {
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    border-bottom: 1px solid black;
    margin-bottom: 15px;
  }
}

.supply-count {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  color: white;
  background: #74b39c;
  position: relative;
}

.caution {
  display: none;
  width: 35%;
  position: absolute;
  top: -10px;
  right: -20px;
  z-index: 100;
}

.machine-information {
  h3,
  p {
    margin: 0;
  }
  p {
    font-size: 2em;
  }
}

.machine-state {
  margin-top: 16px;
  p {
    font-size: 1.5em;
  }
}

svg {
  width: 30px;
}

.cls-1 {
  fill: none;
  stroke: #000;
  stroke-miterlimit: 10;
  stroke-width: 5px;
}
</style>
