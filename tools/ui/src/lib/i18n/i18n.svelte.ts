/**
 * Lightweight i18n store: English source strings as keys, zh-CN dictionary
 * lookup with fallback to the key itself.
 *
 * Chinese localization by AGXMX (https://github.com/AGXMX666/)
 */
import { browser } from '$app/environment';
import { LANGUAGE_LOCALSTORAGE_KEY } from '$lib/constants/storage.constants';
import { zhCN } from './dictionary.zh';

export type LanguagePreference = 'auto' | 'en' | 'zh-CN';
export type ResolvedLanguage = 'en' | 'zh-CN';

export const LANGUAGE_OPTIONS: Array<{ value: LanguagePreference; label: string }> = [
	{ value: 'auto', label: 'Auto' },
	{ value: 'en', label: 'English' },
	{ value: 'zh-CN', label: '简体中文' }
];

function loadPreference(): LanguagePreference {
	if (!browser) return 'auto';

	try {
		const stored = localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY);

		if (stored === 'auto' || stored === 'en' || stored === 'zh-CN') {
			return stored;
		}
	} catch (error) {
		console.warn(`Failed to load ${LANGUAGE_LOCALSTORAGE_KEY}:`, error);
	}

	return 'auto';
}

function detectBrowserLanguage(): ResolvedLanguage {
	if (!browser) return 'en';

	return navigator.language?.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
}

class I18nStore {
	preference = $state<LanguagePreference>(loadPreference());

	get language(): ResolvedLanguage {
		return this.preference === 'auto' ? detectBrowserLanguage() : this.preference;
	}

	setPreference(preference: LanguagePreference) {
		this.preference = preference;

		if (browser) {
			try {
				localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, preference);
			} catch (error) {
				console.warn(`Failed to persist ${LANGUAGE_LOCALSTORAGE_KEY}:`, error);
			}
		}
	}

	t(text: string, vars?: Record<string, string | number>): string {
		let result = this.language === 'zh-CN' ? (zhCN[text] ?? text) : text;

		if (vars) {
			result = result.replace(/\{(\w+)\}/g, (match, key: string) =>
				key in vars ? String(vars[key]) : match
			);
		}

		return result;
	}
}

export const i18n = new I18nStore();

/** Translate an English source string, optionally interpolating `{name}` vars. */
export function t(text: string, vars?: Record<string, string | number>): string {
	return i18n.t(text, vars);
}
