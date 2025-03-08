<script>
    import prettyBytes from "pretty-bytes";
    import Icon from "@iconify/svelte";
    import CircularProgress from "./CircularProgress.svelte";

    export let file;
</script>

<div class="flex items-start space-x-2 bg-white text-black border rounded-xl p-2">
	<div class="w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center bg-blue-50">
		{#if !file.done}
			<CircularProgress value={file.progress}/>
		{:else}
			<Icon icon="mdi:file" class="text-blue-500"/>
		{/if}
	</div>
	<div class="flex-1 min-w-0">
		<div class="text-ellipsis overflow-hidden whitespace-nowrap">{file.name}</div>
		<div class="opacity-70">{prettyBytes(file.length)}</div>
	</div>
</div>