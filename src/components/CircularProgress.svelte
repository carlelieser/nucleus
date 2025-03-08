<script lang="ts">
	import {onMount} from "svelte";
	import {min} from "lodash";
	import Icon from "@iconify/svelte";

	export let value = 0;
	export let size = 24;
	export let stroke = 4;
	export let trackColor = "stroke-green-200";
	export let progressColor = "stroke-green-500";
	export let checkColor = "text-green-500";

	$: progress = min([value, 1]);
	$: done = progress === 1;

	$: center = size / 2;
	$: radius = (center) - stroke;
	$: circumference = (radius * 2 * Math.PI).toFixed(2);
	$: dasharray = `${circumference} ${circumference}`;
	$: dashoffset = (1 - (-1 * ((1 - value) * circumference))).toFixed(2);
	$: leftoverDashOffset = (1 - (value * circumference)).toFixed(2);
	$: iconSize = (center) + stroke;

</script>

<div class="flex items-center justify-center relative">
	{#if value >= 1}
		<Icon icon="material-symbols:check" class="absolute z-10 {done ? 'text-white' : checkColor}" style="width: {iconSize}px; height: {iconSize}px;"/>
	{/if}
	<div>
		<svg
				class="-rotate-90 z-0"
				width="{size}"
				height="{size}">

			<circle
					class="{done ? 'stroke-white fill-green-500' : `${progressColor} fill-transparent`}"
					stroke-width="{stroke}"
					stroke-dasharray={dasharray}
					stroke-dashoffset={dashoffset}
					r="{radius}"
					cx="{center}"
					cy="{center}" pathLength="{circumference - 1}"/>
			<circle
					class="{trackColor}"
					stroke-width="{stroke}"
					stroke-dasharray={dasharray}
					stroke-dashoffset={leftoverDashOffset}
					fill="transparent"
					r="{radius}"
					cx="{center}"
					cy="{center}" pathLength="{circumference - 1}"
			/>
		</svg>
	</div>

	<input
			class="hidden"
			value="{value}"
			type="number"
			min="0"
			max="100"
	/>
</div>



