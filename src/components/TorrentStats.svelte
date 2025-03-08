<script>
import prettyBytes from "pretty-bytes";
import Icon from "@iconify/svelte";

export let torrent;
export let full = !torrent.done;
</script>

<div class="flex space-x-4 max-w-sx whitespace-nowrap text-ellipsis relative overflow-hidden min-w-0">
	<div class="flex items-center space-x-1 min-w-0">
		<Icon icon="mdi:file" class="text-black opacity-70"/>
		<div class="text-ellipsis overflow-hidden relative whitespace-nowrap">
			{prettyBytes(torrent.downloaded, {
                maximumFractionDigits: 0
            })}
		</div>
	</div>
	{#if full}
		<div class="flex items-center space-x-1 min-w-0">
			<Icon icon="mdi:download" class="text-green-500"/>
			<div class="text-ellipsis overflow-hidden relative whitespace-nowrap">{prettyBytes(torrent.done ? 0 : torrent.downloadSpeed, {
                maximumFractionDigits: 0
            })}/s
			</div>
		</div>
		<div class="flex items-center space-x-1 min-w-0">
			<Icon icon="mdi:upload" class="text-red-500"/>
			<div class="text-ellipsis overflow-hidden whitespace-nowrap">{prettyBytes(torrent.done ? 0 : torrent.uploadSpeed, {
                maximumFractionDigits: 0
            })}/s
			</div>
		</div>
	{/if}
</div>