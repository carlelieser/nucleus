<script lang="ts">
	import Icon from '@iconify/svelte';

	export let label = "";
	export let secondaryLabel = "";

	export let variant: "primary" | "secondary" | "error" | "success" = "primary";
	export let icon = false;
	export let className = "";
	export let size = 0;

	export const paddingHorizontal = size * 4 + (!label && icon ? 8 : 16)+ "px";
	export const paddingVertical = size * 4 + 8 + "px";

	let variantClass = "";

	$: {
		let color = "";

		if (variant === "primary") color = "indigo";
		if (variant === "secondary") color = "gray";
		if (variant === "error") color = "red";
		if (variant === "success") color = "green";

		variantClass = `bg-${color}-100 text-${color}-600 hover:bg-${color}-600 hover:text-${color}-50`
	}

</script>

<div
		on:click
		on:keydown
		class="cursor-pointer transition-all group {variantClass} rounded-full hover:shadow-2xl text-[{size *
		4 +
		18}px] inline-block {className}"
		style="padding-left: {paddingHorizontal}; padding-right: {paddingHorizontal}; padding-top: {paddingVertical}; padding-bottom: {paddingVertical};"
		role="button"
		tabindex="-1"
>
	<div class="flex items-center space-x-2">
		{#if icon}
			<Icon {icon} style="width: 24px; height: 24px; opacity: 70%;"/>
		{/if}
		{#if label || secondaryLabel}
			<div class="flex flex-col items-start sm:space-x-2 sm:flex-row sm:items-center">
				{#if label}
					<div class="font-medium whitespace-nowrap">{label}</div>
				{/if}
				{#if secondaryLabel}
					<div class="opacity-70 text-xs sm:text-sm">{secondaryLabel}</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
