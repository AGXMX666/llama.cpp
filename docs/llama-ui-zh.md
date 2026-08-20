# llama.cpp tools/ui 汉化 (私有 fork 定制)

- i18n 方案:英文原文作为字典 key,`src/lib/i18n/`:
  - `dictionary.zh.ts`: `Record<string, string>`,key = 英文原文,value = 中文
  - `i18n.svelte.ts`: `t(text, vars?)` 支持 `{var}` 插值;偏好 'auto'|'en'|'zh-CN';auto 检测 navigator.language 前缀 zh
  - 未命中字典时回退英文原文(上游更新文案不坏)
- localStorage key:`LlamaUi.language`(storage.constants.ts)
- 设置页「显示」区顶部有 SettingsChatLanguage 语言选择组件
- 渲染层模式:模板 `{t('Text')}`、属性 `tooltip={t('Text')}`、props 默认 placeholder 在模板传 `t(placeholder)`
- 复数用两个 key('{count} file'/'{count} files')+三元;字典重复 key 会导致 TS 编译错误
- 验证命令(在 tools/ui):`node_modules\.bin\svelte-check.cmd --tsconfig .\tsconfig.json`(通过=无输出)、`node_modules\.bin\vite.cmd build`
- 注意:本机 PowerShell 终端不稳定,cmdlet 会随机丢失;可用 `C:\Windows\System32\cmd.exe /c` 或 [System.Diagnostics.Process] 绕过
- 尚未翻译:models 选择器、McpServerCard 系列、附件预览、context gauge、部分对话框等次要组件(回退英文,功能正常)
