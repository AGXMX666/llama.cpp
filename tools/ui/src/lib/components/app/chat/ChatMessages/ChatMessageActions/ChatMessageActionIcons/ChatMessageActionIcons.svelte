<script lang="ts">
	import { ArrowRight, Copy, Edit, GitBranch, RefreshCw, Trash2 } from '@lucide/svelte';
	import {
		ActionIcon,
		ChatMessageActionIconsBranchingControls,
		DialogConfirmation
	} from '$lib/components/app';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Switch } from '$lib/components/ui/switch';
	import { getChatMessageActionsContext, getChatMessageEditContext } from '$lib/contexts';
	import { MessageRole } from '$lib/enums';
	import { t } from '$lib/i18n';
	import { conversationsStore } from '$lib/stores';

	interface Props {
		role: MessageRole.USER | MessageRole.ASSISTANT;
		justify: 'start' | 'end';
		actionsPosition: 'left' | 'right';
		onRegenerate?: () => void;
		onContinue?: () => void;
		showRawOutputSwitch?: boolean;
		rawOutputEnabled?: boolean;
		onRawOutputToggle?: (enabled: boolean) => void;
	}

	let {
		actionsPosition,
		justify,
		onContinue,
		onRawOutputToggle,
		onRegenerate,
		rawOutputEnabled = false,
		role,
		showRawOutputSwitch = false
	}: Props = $props();

	const messageActions = getChatMessageActionsContext();
	const editCtx = getChatMessageEditContext();

	let showForkDialog = $state(false);
	let forkName = $state('');
	let forkIncludeAttachments = $state(true);

	function handleConfirmDelete() {
		messageActions.confirmDelete();
		messageActions.setShowDeleteDialog(false);
	}

	function handleOpenForkDialog() {
		const conv = conversationsStore.activeConversation;

		forkName = t('Fork of {name}', { name: conv?.name ?? t('Conversation') });
		forkIncludeAttachments = true;
		showForkDialog = true;
	}

	function handleConfirmFork() {
		messageActions.forkConversation?.({
			includeAttachments: forkIncludeAttachments,
			name: forkName.trim()
		});
		showForkDialog = false;
	}
</script>

<div class="relative {justify === 'start' ? 'mt-2' : ''} flex h-6 items-center justify-between">
	<div
		class="{actionsPosition === 'left'
			? 'left-0'
			: 'right-0'} flex items-center gap-2 opacity-100 transition-opacity"
	>
		{#if messageActions.siblingInfo && messageActions.siblingInfo.totalSiblings > 1}
			<ChatMessageActionIconsBranchingControls />
		{/if}

		<div
			class="pointer-events-auto inset-0 flex items-center gap-1 opacity-100 transition-all duration-150"
		>
			<ActionIcon icon={Copy} tooltip={t('Copy')} onclick={messageActions.copy} />

			<ActionIcon icon={Edit} tooltip={t('Edit')} onclick={editCtx.startEdit} />

			{#if role === MessageRole.ASSISTANT && onRegenerate}
				<ActionIcon icon={RefreshCw} tooltip={t('Regenerate')} onclick={() => onRegenerate()} />
			{/if}

			{#if role === MessageRole.ASSISTANT && onContinue}
				<ActionIcon icon={ArrowRight} tooltip={t('Continue')} onclick={onContinue} />
			{/if}

			{#if messageActions.forkConversation}
				<ActionIcon
					icon={GitBranch}
					tooltip={t('Fork conversation')}
					onclick={handleOpenForkDialog}
				/>
			{/if}

			<ActionIcon icon={Trash2} tooltip={t('Delete')} onclick={messageActions.requestDelete} />
		</div>
	</div>

	{#if showRawOutputSwitch}
		<div class="flex items-center gap-2">
			<span class="text-xs text-muted-foreground">{t('Show raw output')}</span>
			<Switch
				checked={rawOutputEnabled}
				onCheckedChange={(checked) => onRawOutputToggle?.(checked)}
			/>
		</div>
	{/if}
</div>

<DialogConfirmation
	open={messageActions.showDeleteDialog}
	title={t('Delete Message')}
	description={messageActions.deletionInfo && messageActions.deletionInfo.totalCount > 1
		? t(
				'This will delete {count} messages including: {user} user message{userPlural} and {assistant} assistant response{assistantPlural}. All messages in this branch and their responses will be permanently removed. This action cannot be undone.',
				{
					count: messageActions.deletionInfo.totalCount,
					user: messageActions.deletionInfo.userMessages,
					userPlural: messageActions.deletionInfo.userMessages > 1 ? 's' : '',
					assistant: messageActions.deletionInfo.assistantMessages,
					assistantPlural: messageActions.deletionInfo.assistantMessages > 1 ? 's' : ''
				}
			)
		: t('Are you sure you want to delete this message? This action cannot be undone.')}
	confirmText={messageActions.deletionInfo && messageActions.deletionInfo.totalCount > 1
		? t('Delete {count} Messages', { count: messageActions.deletionInfo.totalCount })
		: t('Delete')}
	cancelText={t('Cancel')}
	variant="destructive"
	icon={Trash2}
	onConfirm={handleConfirmDelete}
	onCancel={() => messageActions.setShowDeleteDialog(false)}
/>

<DialogConfirmation
	bind:open={showForkDialog}
	title={t('Fork Conversation')}
	description={t('Create a new conversation branching from this message.')}
	confirmText={t('Fork')}
	cancelText={t('Cancel')}
	icon={GitBranch}
	onConfirm={handleConfirmFork}
	onCancel={() => (showForkDialog = false)}
>
	<div class="flex flex-col gap-4 py-2">
		<div class="flex flex-col gap-2">
			<Label for="fork-name">{t('Title')}</Label>

			<Input
				id="fork-name"
				class="text-foreground"
				placeholder={t('Enter fork name')}
				type="text"
				bind:value={forkName}
			/>
		</div>

		<div class="flex items-center gap-2">
			<Checkbox
				id="fork-attachments"
				checked={forkIncludeAttachments}
				onCheckedChange={(checked) => {
					forkIncludeAttachments = checked === true;
				}}
			/>

			<Label for="fork-attachments" class="cursor-pointer text-sm font-normal">
				{t('Include all attachments')}
			</Label>
		</div>
	</div>
</DialogConfirmation>
