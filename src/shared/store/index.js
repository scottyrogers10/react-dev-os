import { Store } from "generic-data-chamber";
import types from "./types";

const store = new Store({ name: "dev-os", types });
window.store = store;
export default store;
