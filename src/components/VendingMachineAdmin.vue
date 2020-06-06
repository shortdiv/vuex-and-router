<template>
  <div class="wrapper">
    <section class="machine-list">
      <h2>Machines</h2>
      <div v-for="(machine, idx) in machines" :key="idx">
        <VendingMachineItem :machine="machine" />
      </div>
    </section>
    <section class="action-section">
      <OperatorView :primaryMachine="primaryMachine" />
    </section>
  </div>
</template>

<script>
import OperatorView from "./OperatorView";
import VendingMachineItem from "./VendingMachineItem";

export default {
  name: "VendingMachineAdmin",
  components: {
    OperatorView,
    VendingMachineItem
  },
  data() {
    return {
      primaryMachine: "Wash Bucket",
      machines: [
        {
          name: "Leela",
          lastServiced: "Feb 2019",
          condition: "working"
        },
        {
          name: "Hermes",
          lastServiced: "Feb 2019",
          condition: "working"
        },
        {
          name: "Bender",
          lastServiced: "Feb 2019",
          condition: "working"
        },
        {
          name: "Farnsworth",
          lastServiced: "Feb 2019",
          condition: "retired"
        },
        {
          name: "Fry",
          lastServiced: "Feb 2019",
          condition: "broken"
        },
        {
          name: "Wash Bucket",
          lastServiced: "Jan 2020",
          condition: "working"
        }
      ]
    };
  },
  methods: {
    logout() {
      // we'll dispatch our logout and reroute here //
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  margin-top: 100px;
}

.wrapper {
  border-radius: 10px;
  background: #f4f4f6;
  border: 1px solid black;
  width: 350px;
  height: 627px;
  position: relative;
}

.machine-list {
  margin: 20px;
  overflow: scroll;
  height: 65%;
}

.action-section {
  height: 200px;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  background: #008a56;
  color: white;
  border-radius: 0 0 10px 10px;
  position: absolute;
  bottom: 0;
}
.machine-information {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  p {
    font-size: 2em;
  }
}

.buttons {
  align-self: flex-start;
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
.logout-btn {
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 0;
  padding: 10px;
}
.machine-card {
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 100px;
  box-sizing: border-box;
  padding: 10px 10px 10px 40px;
  border-radius: 3px;
  margin: 20px 10px;
  background: #fff;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.01, 1.01);
    transform: scale(1.01, 1.01);
    &::after {
      opacity: 1;
    }
  }
}

.machine-state {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.75em;
  font-weight: 100;
}

.machine-condition--tab {
  background: red;
  width: 5%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px 0 0 3px;
}

.working {
  background: #76c1a5;
}

.retired {
  background: #fcdd1d;
}

.broken {
  background: #d0011b;
}

.machine-card--info {
  width: 150px;
}
</style>
