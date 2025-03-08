import { writable } from 'svelte/store';
import {Torrents} from "./types";

export const client = writable<any>();
export const torrents = writable<Torrents>({});