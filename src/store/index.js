import { Store } from "generic-data-chamber";
// Store Types //
import windows from "./windows";

const store = new Store({ name: "dev-tools", types: { windows } });
export default store;
