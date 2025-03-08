<script lang="ts">
	import {onDestroy, onMount} from "svelte";
	import {client, torrents} from "../store";
	import Store from "electron-store";
	import {addTorrent} from "../utils";
	import {Torrents} from "../types";
	import dragDrop from "drag-drop";
	import Torrent from "./Torrent.svelte";
	import Transmission from "../transmission";
	import {get} from "svelte/store";


	const store = new Store({
		name: "nucleus"
	});

	client.set(new Transmission());

	let torrents_value: Torrents = {};
	let torrents_unsubscribe = null;

	$: torrents_array = Object.values(torrents_value);

	const init = () => {
		const storedTorrents = (store.get("torrents") ?? {}) as Torrents;
		torrents.set(storedTorrents);
		torrents_value = storedTorrents;
		Object.values(torrents_value).forEach(({id}) => {
			addTorrent(id);
		});
	}

	onMount(() => {
		init();

		get(client).getFiles("2");

		dragDrop("body", (files) => {
			addTorrent(files[0].path, true)
		});

		torrents_unsubscribe = torrents.subscribe((value) => {
			store.set("torrents", value);
			torrents_value = value;
		});
	});

	onDestroy(torrents_unsubscribe);
</script>

<div class="w-full flex-1 bg-gray-800 p-8">
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start max-w-screen-2xl mx-auto z-0 relative">
		{#each torrents_array as torrent}
			<Torrent torrent={torrent}/>
		{/each}
	</div>
</div>