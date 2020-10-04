import { Store } from "generic-data-chamber";
// Store Types //
import toolBrowser from "./tool-browser";
import ui from "./ui";
import windows from "./windows";

const store = new Store({ name: "dev-tools", types: { toolBrowser, ui, windows } });
export default store;
