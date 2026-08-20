<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { children, title }: Props = $props();
</script>

<div>
	<h3 class="mb-6 text-base font-semibold">{t(title)}</h3>

	<div class="space-y-8">
		{@render children()}
	</div>
</div>
