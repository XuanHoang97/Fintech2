import { readable, writable, derived } from "svelte/store";
import { localStore } from "./localStore.js";

export const sidebarActive = localStore('sidebar-active', 'search');