<script lang="ts">
	import { Languages } from '@lucide/svelte';
	import * as Select from '$lib/components/ui/select';
	import Label from '$lib/components/ui/label/label.svelte';
	import { i18n, t, LANGUAGE_OPTIONS } from '$lib/i18n';
	import type { LanguagePreference } from '$lib/i18n';

	function handleLanguageChange(value: string) {
		i18n.setPreference(value as LanguagePreference);
	}
</script>

<div class="space-y-2">
	<Label class="flex items-center gap-1.5 text-sm font-medium">
		<Languages class="h-3.5 w-3.5 text-muted-foreground" />
		{t('Language')}
	</Label>

	<Select.Root type="single" value={i18n.preference} onValueChange={handleLanguageChange}>
		<div class="relative w-full md:w-auto">
			<Select.Trigger class="w-full">
				{LANGUAGE_OPTIONS.find((option) => option.value === i18n.preference)?.label ?? 'Auto'}
			</Select.Trigger>
			<Select.Content>
				{#each LANGUAGE_OPTIONS as option (option.value)}
					<Select.Item value={option.value} label={option.label}>
						{t(option.label)}
					</Select.Item>
				{/each}
			</Select.Content>
		</div>
	</Select.Root>

	<p class="text-xs text-muted-foreground">{t('Choose the interface language.')}</p>
</div>
