import { Store } from "generic-data-chamber";
// Store Types //
import toolBrowser from "./tool-browser";
import windows from "./windows";

const store = new Store({ name: "dev-tools", types: { toolBrowser, windows } });
export default store;
