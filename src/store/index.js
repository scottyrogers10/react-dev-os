import { Store } from "generic-data-chamber";
// Store Types //
import windows from "./windows";

const store = new Store({ name: "DEV_TOOLS", types: { windows } });
window.store = store;

export default store;
