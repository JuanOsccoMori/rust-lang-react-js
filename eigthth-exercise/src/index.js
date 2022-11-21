import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createAppStore } from "./store/config/configStore";
let appStore = createAppStore()

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(
<Provider store={appStore}>
    <App/>
</Provider>
);