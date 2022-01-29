import { Store } from "data-chamber";
// Store Types //
import toolBrowser from "./tool-browser";
import ui from "./ui";
import osWindows from "./os-windows";

const store = new Store({ name: "dev-tools", types: { toolBrowser, ui, osWindows } });
export default store;
