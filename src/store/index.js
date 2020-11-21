import { Store } from "generic-data-chamber";
// Store Types //
import toolBrowser from "./tool-browser";
import ui from "./ui";
import uiWindows from "./ui-windows";

const store = new Store({ name: "dev-tools", types: { toolBrowser, ui, uiWindows } });
export default store;
