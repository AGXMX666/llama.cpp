<script lang="ts">
	import { ExternalLink } from '@lucide/svelte';
	import { APP_NAME } from '$lib/constants';
	import { t } from '$lib/i18n';

	const GITHUB_URL = 'https://github.com/AGXMX666/';
</script>

<div class="space-y-6">
	<div>
		<h4 class="text-sm font-medium">{APP_NAME}</h4>

		<p class="mt-2 text-sm text-muted-foreground">{t('A web interface for llama-server.')}</p>
	</div>

	<div class="rounded-lg border border-border/50 bg-muted/30 p-4">
		<h4 class="text-sm font-medium">{t('Chinese localization')}</h4>

		<div class="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
			<span class="text-sm text-muted-foreground">AGXMX</span>

			<a
				href={GITHUB_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
			>
				<ExternalLink class="h-3.5 w-3.5" />

				{GITHUB_URL}
			</a>
		</div>
	</div>
</div>
