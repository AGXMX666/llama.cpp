<script lang="ts">
	import { Download, Pin, PinOff, Trash2, X } from '@lucide/svelte';
	import { ActionIcon, DialogConfirmation } from '$lib/components/app';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { TooltipSide } from '$lib/enums';
	import { t } from '$lib/i18n';

	interface Props {
		class?: string;
		selectedCount: number;
		visibleCount: number;
		allVisibleSelected: boolean;
		someVisibleSelected: boolean;
		someSelectedPinned: boolean;
		pinStateIsMixed: boolean;
		onSelectAllToggle: () => void;
		onBulkPinToggle: () => void;
		onBulkExport: () => void;
		onBulkDelete: () => void;
		onClose: () => void;
	}

	let {
		allVisibleSelected,
		class: className = '',
		onBulkDelete,
		onBulkExport,
		onBulkPinToggle,
		onClose,
		onSelectAllToggle,
		pinStateIsMixed,
		selectedCount,
		someSelectedPinned,
		someVisibleSelected,
		visibleCount
	}: Props = $props();

	let showDeleteDialog = $state(false);

	function handleDeleteClick() {
		showDeleteDialog = true;
	}

	function handleDeleteConfirm() {
		showDeleteDialog = false;
		onBulkDelete();
	}

	function handleDeleteCancel() {
		showDeleteDialog = false;
	}

	const hasSelection = $derived(selectedCount > 0);
	const isMasterChecked = $derived(allVisibleSelected);
	const isMasterIndeterminate = $derived(!allVisibleSelected && someVisibleSelected);

	const pinTooltip = $derived(
		hasSelection
			? pinStateIsMixed
				? t('Unavailable for mixed state selection')
				: someSelectedPinned
					? selectedCount === 1
						? t('Unpin')
						: t('Unpin all')
					: selectedCount === 1
						? t('Pin')
						: t('Pin all')
			: t('Pin')
	);

	const pinDisabled = $derived(!hasSelection || pinStateIsMixed);
</script>

<div
	role="toolbar"
	aria-label={t('Bulk actions for selected conversations')}
	class="flex items-center gap-1.5 rounded-xl border border-border/50 bg-background/50 px-2 py-1.5 shadow-sm backdrop-blur-xl {className}"
>
	<label class="flex min-w-0 cursor-pointer items-center gap-2">
		<Checkbox
			checked={isMasterChecked}
			indeterminate={isMasterIndeterminate}
			onCheckedChange={onSelectAllToggle}
			aria-label={isMasterChecked ? t('Deselect all') : t('Select all')}
		/>

		<span class="truncate text-xs font-medium text-muted-foreground">
			{t('{selected} / {total} selected', {
				selected: selectedCount,
				total: visibleCount
			})}
		</span>
	</label>

	<div class="ml-auto flex items-center gap-0.75">
		<ActionIcon
			icon={someSelectedPinned ? PinOff : Pin}
			tooltip={pinTooltip}
			tooltipSide={TooltipSide.TOP}
			disabled={pinDisabled}
			ariaLabel={pinTooltip}
			size="sm"
			iconSize="h-3.5 w-3.5"
			class="h-7 w-7 rounded-md bg-transparent backdrop-blur-none hover:bg-accent! {pinDisabled
				? 'cursor-not-allowed'
				: ''} {!pinDisabled ? 'opacity-100' : 'opacity-40'}"
			onclick={onBulkPinToggle}
		/>

		<ActionIcon
			icon={Download}
			tooltip={t('Export')}
			tooltipSide={TooltipSide.TOP}
			disabled={!hasSelection}
			ariaLabel={t('Export selected')}
			size="sm"
			iconSize="h-3.5 w-3.5"
			class="h-7 w-7 rounded-md bg-transparent backdrop-blur-none hover:bg-accent! {hasSelection
				? 'opacity-100'
				: 'opacity-40'}"
			onclick={onBulkExport}
		/>

		<ActionIcon
			icon={Trash2}
			tooltip={t('Delete selected')}
			tooltipSide={TooltipSide.TOP}
			disabled={!hasSelection}
			ariaLabel={t('Delete selected')}
			size="sm"
			iconSize="h-3.5 w-3.5 text-destructive"
			class="h-7 w-7 rounded-md bg-transparent backdrop-blur-none hover:bg-destructive/10! dark:hover:bg-destructive/20! disabled:hover:bg-transparent {hasSelection
				? 'opacity-100'
				: 'opacity-40'}"
			onclick={handleDeleteClick}
		/>

		<div class="mx-1 h-4 w-px bg-border" aria-hidden="true"></div>

		<ActionIcon
			icon={X}
			tooltip={t('Exit bulk selection mode')}
			tooltipSide={TooltipSide.TOP}
			ariaLabel={t('Exit bulk selection mode')}
			size="sm"
			iconSize="h-3.5 w-3.5"
			class="h-7 w-7 rounded-md bg-transparent backdrop-blur-none hover:bg-accent!"
			onclick={onClose}
		/>
	</div>
</div>

<DialogConfirmation
	bind:open={showDeleteDialog}
	title={t('Delete {count} conversation{plural}', {
		count: selectedCount,
		plural: selectedCount === 1 ? '' : 's'
	})}
	description={t(
		'This action cannot be undone. The selected conversation{plural} and {pronoun} messages will be permanently removed, including any forks.',
		{
			plural: selectedCount === 1 ? '' : 's',
			pronoun: selectedCount === 1 ? 'its' : 'their'
		}
	)}
	confirmText={selectedCount === 1 ? t('Delete') : t('Delete {count}', { count: selectedCount })}
	cancelText={t('Cancel')}
	variant="destructive"
	icon={Trash2}
	onConfirm={handleDeleteConfirm}
	onCancel={handleDeleteCancel}
/>
