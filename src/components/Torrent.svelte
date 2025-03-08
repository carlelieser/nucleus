<script>
    import Button from "./Button.svelte";
    import CircularProgress from "./CircularProgress.svelte";
    import File from "./File.svelte";
    import TorrentStats from "./TorrentStats.svelte";
    import {removeTorrent} from "../utils";
    import {shell} from "electron";

    export let torrent;

    const handleOpenFolder = () => {
        shell.openPath(torrent.path);
    }

    const handleRemove = () => {
        removeTorrent(torrent.id);
    }
</script>

<div class="w-full h-full relative" style="height: 300px;">
	<div class="group transition-all transform rounded-2xl bg-white shadow-xl space-y-2 flex flex-col w-full absolute translate-y-0 z-10 scale-100 hover:-translate-y-2 hover:z-40 hover:shadow-2xl"
	     style="height: 300px; min-height: 300px;" role="gridcell" tabindex="-1">
		<div class="grow flex-1 min-w-0 relative overflow-x-hidden">
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4">
				{#each torrent.files as file}
					<File file={file}/>
				{/each}
			</div>
			<div class="sticky -bottom-1 left-0 w-full h-24 bg-gradient-to-b from-0% to-100% from-gray-50/10 to-white"></div>
		</div>
		<div class="h-[0.5px] w-full bg-black bg-opacity-10"></div>
		<div class="flex-none grow-0 flex-col">
			<div class="p-4">
				<div class="flex items-center">
					<div class="space-y-1 grow">
						<div class="text-2xl font-bold">{torrent.name}</div>
						<TorrentStats torrent={torrent}/>
					</div>
					<div class="flex items-center justify-end">
						<CircularProgress value={torrent.progress} size={48}/>
					</div>
				</div>
			</div>
			<div class="transition-all pointer-events-none opacity-0 top-0 absolute rounded-xl translate-y-4 left-0 z-50 bg-white text-black w-full h-full group-hover:translate-y-0 group-hover:opacity-100 p-4 text-center space-y-4 flex flex-col items-center justify-center transform-gpu group-hover:scale-105 shadow-3xl group-hover:pointer-events-auto">
				<div class="text-3xl font-bold">{torrent.name}</div>
				<TorrentStats torrent={torrent} full={true}/>
				<div class="flex items-center justify-center gap-2 w-full flex-wrap">
					<Button icon="material-symbols:expand-content" label="Expand"/>
					<Button icon="material-symbols:folder" label="Open folder" on:click={handleOpenFolder}/>
					<Button variant="error" icon="material-symbols:delete" label="Remove" on:click={handleRemove}/>
					{#if torrent.done}
						<Button variant="success" icon="material-symbols:refresh" label="Retry"/>
					{:else}
						{#if torrent.paused}
							<Button variant="success" icon="material-symbols:play" label="Resume"/>
						{:else}
							<Button variant="error" icon="material-symbols:pause" label="Stop"/>
						{/if}
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>