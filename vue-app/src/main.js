import { createApp } from "vue";
import App from "./App.vue";

function render() {
  createApp(App).mount("#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("vue 微应用创建");
}

export async function mount(props) {
  console.log("vue 微应用挂载", props);
  render(props);
}
export async function unmount() {
  console.log("vue 微应用卸载");
}
