import { registerMicroApps, start } from "qiankun";

const loader = (loading) => {
  console.log("loading", loading);
};

const microApps = [
  {
    name: "m-vue",
    entry: "//localhost:3001",
    container: "#m-vue-root",
    activeRule: "/m-vue",
    loader,
  },
];

registerMicroApps(microApps, {
  beforeLoad: () => {
    console.log("加载前");
  },
  beforeMount: () => {
    console.log("挂载前");
  },
  afterMount: () => {
    console.log("挂载后");
  },
  beforeUnmount: () => {
    console.log("卸载前");
  },
  afterUnmount: () => {
    console.log("卸载后");
  },
});

start();
