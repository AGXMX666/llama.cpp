/**
 * Simplified Chinese (zh-CN) dictionary.
 *
 * Chinese localization by AGXMX (https://github.com/AGXMX666/)
 *
 * Keys are the English source strings as they appear in the code. The
 * translator function falls back to the key itself when no translation
 * exists, so untranslated strings keep showing English.
 */
export const zhCN: Record<string, string> = {
	// language selector
	Auto: '自动',
	Language: '语言',
	'Choose the interface language.': '选择界面语言。',
	'English': 'English',
	'简体中文': '简体中文',

	// settings navigation
	Settings: '设置',
	General: '通用',
	Display: '显示',
	Agentic: '智能体',
	Sampling: '采样',
	Penalties: '惩罚',
	Developer: '开发者',
	Tools: '工具',
	'Import/Export': '导入 / 导出',
	'Reload app': '重新加载应用',
	"Settings are saved in browser's localStorage": '设置保存在浏览器的 localStorage 中',
	'Default: {value}': '默认值:{value}',
	'Reset to default': '恢复默认值',
	'Show system message in conversations': '在对话中显示系统消息',
	'Select {name}': '选择 {name}',

	// common actions
	Cancel: '取消',
	Delete: '删除',
	'Delete {count}': '删除 {count} 个',
	Edit: '编辑',
	Export: '导出',
	Select: '选择',
	Stop: '停止',
	Retry: '重试',
	'Retrying...': '正在重试...',
	Error: '错误',
	Pin: '置顶',
	Unpin: '取消置顶',
	'Pin all': '全部置顶',
	'Unpin all': '全部取消置顶',

	// chat greeting and server states
	'Hello there': '你好',
	'Record audio, type a message': '录制音频或输入消息',
	'Type a message': '输入消息',
	'or upload files to get started': '或上传文件开始使用',
	'Type a message...': '输入消息...',
	'Loading model': '正在加载模型',
	'Server unavailable': '服务器不可用',
	'Connecting to Server': '正在连接服务器',
	'Initializing connection to server...': '正在初始化与服务器的连接...',
	'Server Connection Error': '服务器连接错误',
	'Connecting...': '正在连接...',
	'Retry Connection': '重试连接',
	'Troubleshooting': '故障排查',
	'Start the llama-server:': '启动 llama-server:',
	or: '或',
	'Check that the server is accessible at the correct URL': '检查服务器是否可通过正确的 URL 访问',
	'Verify your network connection': '检查你的网络连接',
	'Check server logs for any error messages': '查看服务器日志中的错误信息',
	'Enter API Key': '输入 API 密钥',
	'API Key': 'API 密钥',
	'Enter your API key...': '输入你的 API 密钥...',
	'API key validated successfully! Connecting...': 'API 密钥验证成功!正在连接...',
	'Validating...': '正在验证...',
	'Success!': '成功!',
	'Save & Retry': '保存并重试',
	'Invalid API key - please check and try again': 'API 密钥无效 - 请检查后重试',
	'Authentication failed ({status})': '认证失败 ({status})',
	'Cannot connect to server - check if server is running': '无法连接服务器 - 请检查服务器是否正在运行',
	'Connection error - please try again': '连接错误 - 请重试',

	// sidebar navigation
	'Open Sidebar': '打开侧栏',
	'Close Sidebar': '关闭侧栏',
	'Go to start': '返回首页',
	'Expand navigation': '展开导航',
	'Collapse navigation': '收起导航',
	'New chat': '新聊天',
	Search: '搜索',
	'MCP Servers': 'MCP 服务器',
	'Search conversations...': '搜索会话...',
	'Search results': '搜索结果',
	'No results found': '未找到结果',
	'No conversations yet': '暂无会话',
	'Start typing to see results': '开始输入以查看结果',
	Pinned: '已置顶',
	'Recent conversations': '最近会话',
	'More actions': '更多操作',
	'See parent conversation': '查看父会话',
	'Stop generation': '停止生成',
	'Delete "{name}"? This action cannot be undone.': '删除"{name}"?此操作无法撤销。',
	'Deselect {name}': '取消选择 {name}',
	'Deselect all': '取消全选',
	'Select all': '全选',
	'{selected} / {total} selected': '已选择 {selected} / {total}',
	'Bulk actions for selected conversations': '所选会话的批量操作',
	'Unavailable for mixed state selection': '混合选择状态下不可用',
	'Export selected': '导出所选',
	'Delete selected': '删除所选',
	'Exit bulk selection mode': '退出批量选择模式',
	'Delete {count} conversation{plural}': '删除 {count} 个会话',
	'This action cannot be undone. The selected conversation{plural} and {pronoun} messages will be permanently removed, including any forks.':
		'此操作无法撤销。所选会话及其消息将被永久删除,包括所有分支。',

	// chat form
	'Skip reasoning': '跳过推理',
	'Add files, prompts, tools or MCP Servers': '添加文件、提示词、工具或 MCP 服务器',
	'Add files': '添加文件',
	'Add to chat': '添加到聊天',
	'Add files, system prompt or configure MCP servers': '添加文件、系统提示或配置 MCP 服务器',
	Reasoning: '推理',
	'System Message': '系统消息',
	'MCP Prompt': 'MCP 提示',
	'MCP Resources': 'MCP 资源',
	'No MCP servers configured': '未配置 MCP 服务器',
	'{count} server': '{count} 个服务器',
	'{count} servers': '{count} 个服务器',
	'{count} tool': '{count} 个工具',
	'{count} tools': '{count} 个工具',
	Images: '图片',
	'Audio Files': '音频文件',
	'Video Files': '视频文件',
	'Text Files': '文本文件',
	'PDF Files': 'PDF 文件',
	'Image processing requires a vision model': '图片处理需要视觉模型',
	'Audio files processing requires an audio model': '音频文件处理需要音频模型',
	'Video files processing requires a video model': '视频文件处理需要视频模型',
	'PDFs will be converted to text. Image-based PDFs may not work properly.':
		'PDF 将转换为文本。基于图片的 PDF 可能无法正常处理。',

	// settings registry - agentic
	'Agentic turns': '智能体轮数',
	'Maximum number of tool execution cycles before stopping (prevents infinite loops).':
		'停止前工具执行的最大轮数(防止无限循环)。',
	'MCP request timeout (seconds)': 'MCP 请求超时(秒)',
	'Timeout for individual MCP tool calls.': '单个 MCP 工具调用的超时时间。',
	'Mention search depth': '@提及搜索深度',
	'How many directory levels below the working directory the @-mention file search descends. Larger values surface deeply nested files but take longer on large trees.':
		'@提及文件搜索会向下搜索多少层目录。值越大可找到更深层的文件,但在大型目录树中会更慢。',

	// settings registry - developer
	'Pre-fill KV cache after response': '回复后预填充 KV 缓存',
	'After each response, re-submit the conversation to pre-fill the server KV cache. Makes the next turn faster since the prompt is already encoded while you read the response.':
		'每次回复后重新提交会话以预填充服务器 KV 缓存。这样下一轮会更快,因为在你阅读回复时提示词已经完成编码。',
	'Disable reasoning content parsing': '禁用推理内容解析',
	'Send reasoning_format=none so the server returns thinking tokens inline instead of extracting them into a separate field.':
		'发送 reasoning_format=none,使服务器直接返回思考tokens,而不是提取到单独的字段。',
	'Exclude reasoning from context': '从上下文中排除推理内容',
	'Strip thinking from previous messages before sending. When off, thinking is sent back via the reasoning_content field so the model sees its own chain-of-thought across turns.':
		'发送前移除历史消息中的思考内容。关闭时,思考内容会通过 reasoning_content 字段发送回模型,使模型能看到自己跨轮的思维链。',
	'Enable raw output toggle': '启用原始输出开关',
	'Show toggle button to display messages as plain text instead of Markdown-formatted content':
		'显示切换按钮,将消息以纯文本而非 Markdown 格式展示',
	'JavaScript sandbox tool': 'JavaScript 沙箱工具',
	'Expose a run_javascript tool to the model. Code runs in a Web Worker inside a sandboxed iframe with an opaque origin, isolated from the WebUI and its API, with a hard timeout.':
		'向模型提供 run_javascript 工具。代码在沙箱化 iframe 中的 Web Worker 内运行,源不透明,与 WebUI 及其 API 隔离,并设有硬性超时。',
	'Symbolic math (nerdamer)': '符号计算 (nerdamer)',
	'Pre-load nerdamer in the sandbox for symbolic computation: simplify, diff, integrate, solve, and more. Requires "JavaScript sandbox tool" to be enabled.':
		'在沙箱中预加载 nerdamer 以进行符号计算:化简、求导、积分、求解等。需要先启用“JavaScript 沙箱工具”。',
	'Custom JSON': '自定义 JSON',
	'Custom JSON parameters to send to the API. Must be valid JSON format.':
		'发送到 API 的自定义 JSON 参数。必须是有效的 JSON 格式。',
	'Custom CSS': '自定义 CSS',
	'CSS injected into the page at runtime. Set it here, or ship it server side via the --ui-config customCss field.':
		'运行时注入页面的 CSS。可在此设置,或通过 --ui-config 的 customCss 字段由服务端下发。',

	// settings registry - display
	'Show message generation statistics': '显示消息生成统计',
	'Display generation statistics (tokens/second, token count, duration) below each assistant message.':
		'在每条助手消息下方显示生成统计(tokens/秒、tokens、耗时)。',
	'Show statistics for individual agentic turns': '显示单个智能体轮次的统计',
	'Display per-turn statistics (tokens, duration) under each turn in agentic responses. Shown only when "Show message generation statistics" is enabled.':
		'在智能体回复的每个轮次下显示统计信息(tokens、耗时)。仅当启用“显示消息生成统计”时显示。',
	'Show thought in progress': '显示思考过程',
	'Expand thought process by default when generating messages.': '生成消息时默认展开思考过程。',
	'Always show tool call content': '始终显示工具调用内容',
	'Automatically expand tool call details while executing and keep them expanded after completion.':
		'执行时自动展开工具调用详情,完成后保持展开。',
	'Render user content as Markdown': '以 Markdown 渲染用户内容',
	'Render user messages using markdown formatting in the chat. Turn this off to keep a message exactly as typed; @-mention badges show either way.':
		'在聊天中以 Markdown 格式渲染用户消息。关闭后可保持消息原文;@提及徽章始终显示。',
	'Render thinking as Markdown': '以 Markdown 渲染思考内容',
	'Render the reasoning/thinking block content as formatted Markdown instead of plain text.':
		'将推理/思考块内容渲染为格式化的 Markdown,而非纯文本。',
	'Use full height code blocks': '使用全高代码块',
	'Always display code blocks at their full natural height, overriding any height limits.':
		'始终以完整自然高度显示代码块,忽略任何高度限制。',
	'Disable automatic scroll': '禁用自动滚动',
	'Disable automatic scrolling while messages stream so you can control the viewport position manually.':
		'消息流式输出时禁用自动滚动,以便手动控制视口位置。',
	'Always show sidebar on desktop': '桌面端始终显示侧栏',
	'Always keep the sidebar visible on desktop instead of auto-hiding it.':
		'在桌面端始终保持侧栏可见,而不是自动隐藏。',
	'Show raw model names': '显示原始模型名称',
	'Display full raw model identifiers (e.g. "ggml-org/GLM-4.7-Flash-GGUF:Q8_0") instead of parsed names with badges.':
		'显示完整的原始模型标识符(如 “ggml-org/GLM-4.7-Flash-GGUF:Q8_0”),而非带徽章的解析后名称。',
	'Show model quantization information': '显示模型量化信息',
	'Display quantization badges (e.g. Q8_0, Q4_K_M) next to model names throughout the interface.':
		'在整个界面的模型名称旁显示量化徽章(如 Q8_0、Q4_K_M)。',
	'Show model tags': '显示模型标签',
	'Display model tags (e.g. "vision", "reasoning") next to model names throughout the interface.':
		'在整个界面的模型名称旁显示模型标签(如 “vision”、“reasoning”)。',
	'Show build version information': '显示构建版本信息',
	'Display the current build version in the bottom-right corner of the interface.':
		'在界面右下角显示当前构建版本。',
	'Show full path in mentions': '在提及中显示完整路径',
	'Display the full file system path inside file and folder @-mention badges instead of just the file or folder name.':
		'在文件和文件夹的 @提及徽章中显示完整文件系统路径,而不仅仅是文件或文件夹名称。',

	// settings registry - general
	Theme: '主题',
	'Choose the color theme for the interface. You can choose between System (follows your device settings), Light, or Dark.':
		'选择界面颜色主题。可选系统(跟随设备设置)、浅色或深色。',
	'Set the API Key if you are using <code> --api-key </code> option for the server.':
		'如果服务器使用了 <code> --api-key </code> 选项,请设置 API 密钥。',
	'The starting message that defines how model should behave.': '定义模型行为的起始消息。',
	'Paste long text to file length': '粘贴长文本转文件长度',
	'On pasting long text, it will be converted to a file. You can control the file length by setting the value of this parameter. Value 0 means disable.':
		'粘贴长文本时会将其转换为文件。可通过此参数控制文件长度。值为 0 表示禁用。',
	'Send message on Enter': '按 Enter 发送消息',
	'Use Enter to send messages and Shift + Enter for new lines. When disabled, use Ctrl/Cmd + Enter.':
		'使用 Enter 发送消息,Shift + Enter 换行。禁用后使用 Ctrl/Cmd + Enter。',
	'Show microphone on empty input': '输入为空时显示麦克风',
	'Automatically show microphone button instead of send button when textarea is empty for models with audio modality support.':
		'对于支持音频模态的模型,输入框为空时自动显示麦克风按钮而非发送按钮。',
	'Enable "Continue" button': '启用“继续”按钮',
	'Enable "Continue" button for assistant messages, including reasoning models.':
		'为助手消息启用“继续”按钮,包括推理模型。',
	'Choose how conversation titles are generated. The first non-empty line uses a fast deterministic rule; the LLM option uses a model-generated title from the first message exchange.':
		'选择会话标题的生成方式。首行非空方式使用快速确定性规则;LLM 方式根据首轮消息生成标题。',
	'LLM title generation prompt': 'LLM 标题生成提示词',
	'Optional template for the title generation prompt. Use {{USER}} for the user message and {{ASSISTANT}} for the assistant message.':
		'标题生成提示词的可选模板。{{USER}} 表示用户消息,{{ASSISTANT}} 表示助手消息。',
	'Copy text attachments as plain text': '以纯文本复制文本附件',
	'When copying a message with text attachments, combine them into a single plain text string instead of a special format that can be pasted back as attachments.':
		'复制带文本附件的消息时,将其合并为单个纯文本字符串,而非可粘贴回附件的特殊格式。',
	'Parse PDF as image': '将 PDF 解析为图片',
	'Parse PDF as image instead of text. Automatically falls back to text processing for non-vision models.':
		'将 PDF 解析为图片而非文本。对非视觉模型自动回退到文本处理。',
	'Maximum image resolution (megapixels)': '最大图片分辨率(百万像素)',
	'Images larger than this will be resized before sending to server. Set to 0 to disable.':
		'大于此值的图片会在发送到服务器前缩放。设为 0 表示禁用。',
	'Use first non-empty line for the conversation title': '使用首个非空行作为会话标题',
	'Generate title with LLM': '使用 LLM 生成标题',
	System: '系统',
	Light: '浅色',
	Dark: '深色',

	// settings footer and tools tab
	'Save settings': '保存设置',
	'Reset Settings to Default': '重置设置为默认值',
	'Reset to Default': '重置为默认',
	"Are you sure you want to reset all settings to their default values? This will reset all parameters to the values provided by the server's /props endpoint and remove all your custom configurations.":
		'确定要将所有设置重置为默认值吗?这会将所有参数重置为服务器 /props 端点提供的值,并清除你的所有自定义配置。',
	'No tools available': '没有可用工具',
	Tool: '工具',
	Enabled: '已启用',
	'Add your first MCP server': '添加你的第一个 MCP 服务器',
	'Add another MCP server': '添加另一个 MCP 服务器',
	'Connect a remote MCP server by URL.': '通过 URL 连接远程 MCP 服务器。',

	// import / export
	Conversations: '会话',
	Import: '导入',
	'Delete All': '全部删除',
	'Export conversations': '导出会话',
	'Import conversations': '导入会话',
	'Delete all conversations': '删除全部会话',
	'Export settings': '导出设置',
	'Import settings': '导入设置',
	Exported: '已导出',
	Imported: '已导入',
	conversation: '个会话',
	conversations: '个会话',
	'Untitled conversation': '未命名会话',
	'and {count} more': '以及另外 {count} 个',
	'Download your conversations as a ZIP of JSONL files. This includes all messages, attachments, and conversation history.':
		'将会话下载为 JSONL 文件的 ZIP 压缩包。包含所有消息、附件和会话历史。',
	'Import one or more conversations from a previously exported ZIP or JSONL file. This will merge with your existing conversations.':
		'从之前导出的 ZIP 或 JSONL 文件导入一个或多个会话。将与现有会话合并。',
	'Permanently delete all conversations and their messages. This action cannot be undone. Consider exporting your conversations first if you want to keep a backup.':
		'永久删除所有会话及其消息。此操作无法撤销。如需备份,请先导出会话。',
	'Export your chat settings and preferences as a JSON file.': '将聊天设置和偏好导出为 JSON 文件。',
	'Import chat settings from a previously exported JSON file. This will merge with your existing settings.':
		'从之前导出的 JSON 文件导入聊天设置。将与现有设置合并。',
	'Are you sure you want to delete all conversations? This action cannot be undone and will permanently remove all your conversations and messages.':
		'确定要删除所有会话吗?此操作无法撤销,将永久删除你的所有会话和消息。',
	'Settings exported': '设置已导出',
	'Failed to export settings': '导出设置失败',
	'Invalid settings file: missing config': '设置文件无效:缺少 config',
	'Settings imported successfully': '设置导入成功',
	'Failed to import settings': '导入设置失败',
	'Failed to open file picker': '打开文件选择器失败',
	'No conversations to export': '没有可导出的会话',
	'No conversations to delete': '没有可删除的会话',
	'Failed to load conversations': '加载会话失败',
	'Failed to export conversations': '导出会话失败',
	'No conversations found in file': '文件中未找到会话',
	'Unknown error': '未知错误',
	'Failed to parse file: {message}': '解析文件失败:{message}',
	'Failed to import conversations': '导入会话失败',
	'Skipped 1 conversation already in your library': '已跳过 1 个库中已有的会话',
	'Skipped {count} conversations already in your library': '已跳过 {count} 个库中已有的会话',
	'Failed to import conversations. Please check the file format.': '导入会话失败。请检查文件格式。',

	// settings registry - penalties
	'Repeat last N': '重复最后 N 个',
	'Last n tokens to consider for penalizing repetition': '用于重复惩罚的最后 n 个tokens',
	'Repeat penalty': '重复惩罚',
	'Controls the repetition of token sequences in the generated text': '控制生成文本中tokens序列的重复程度',
	'Presence penalty': '存在惩罚',
	'Limits tokens based on whether they appear in the output or not.': '根据tokens是否出现在输出中加以限制。',
	'Frequency penalty': '频率惩罚',
	'Limits tokens based on how often they appear in the output.': '根据tokens在输出中出现的频率加以限制。',
	'DRY multiplier': 'DRY 乘数',
	'DRY sampling reduces repetition in generated text even across long contexts. This parameter sets the DRY sampling multiplier.':
		'DRY 采样即使在长上下文中也能减少生成文本的重复。此参数设置 DRY 采样乘数。',
	'DRY base': 'DRY 基数',
	'DRY sampling reduces repetition in generated text even across long contexts. This parameter sets the DRY sampling base value.':
		'DRY 采样即使在长上下文中也能减少生成文本的重复。此参数设置 DRY 采样基值。',
	'DRY allowed length': 'DRY 允许长度',
	'DRY sampling reduces repetition in generated text even across long contexts. This parameter sets the allowed length for DRY sampling.':
		'DRY 采样即使在长上下文中也能减少生成文本的重复。此参数设置 DRY 采样允许的长度。',
	'DRY penalty last N': 'DRY 惩罚最后 N 个',
	'DRY sampling reduces repetition in generated text even across long contexts. This parameter sets DRY penalty for the last n tokens.':
		'DRY 采样即使在长上下文中也能减少生成文本的重复。此参数设置最后 n 个tokens的 DRY 惩罚。',

	// settings registry - sampling
	Temperature: '温度',
	'Controls the randomness of the generated text by affecting the probability distribution of the output tokens. Higher = more random, lower = more focused.':
		'通过影响输出tokens的概率分布来控制生成文本的随机性。越高越随机,越低越集中。',
	'Dynamic temperature range': '动态温度范围',
	'Addon for the temperature sampler. The added value to the range of dynamic temperature, which adjusts probabilities by entropy of tokens.':
		'温度采样器的附加项。增加到动态温度范围上的值,该机制根据tokens熵调整概率。',
	'Dynamic temperature exponent': '动态温度指数',
	'Addon for the temperature sampler. Smoothes out the probability redistribution based on the most probable token.':
		'温度采样器的附加项。基于最可能的tokens平滑概率重分配。',
	'Top K': 'Top K',
	'Keeps only k top tokens.': '仅保留前 k 个tokens。',
	'Top P': 'Top P',
	'Limits tokens to those that together have a cumulative probability of at least p':
		'将tokens限制为累计概率至少达到 p 的那些',
	'Min P': 'Min P',
	'Limits tokens based on the minimum probability for a token to be considered, relative to the probability of the most likely token.':
		'根据tokens可被考虑的最小概率(相对于最可能tokens的概率)来限制tokens。',
	'XTC probability': 'XTC 概率',
	'XTC sampler cuts out top tokens; this parameter controls the chance of cutting tokens at all. 0 disables XTC.':
		'XTC 采样器剔除顶部tokens;此参数控制剔除发生的概率。0 表示禁用 XTC。',
	'XTC threshold': 'XTC 阈值',
	'XTC sampler cuts out top tokens; this parameter controls the token probability that is required to cut that token.':
		'XTC 采样器剔除顶部tokens;此参数控制剔除该tokens所需的tokens概率。',
	'Typical P': '典型 P',
	'Sorts and limits tokens based on the difference between log-probability and entropy.':
		'根据对数概率与熵的差异对tokens排序并限制。',
	'Max tokens': '最大tokens',
	'The maximum number of token per output. Use -1 for infinite (no limit).':
		'每次输出的最大tokens。-1 表示无限(不限制)。',
	Samplers: '采样器',
	'The order at which samplers are applied, in simplified way. Default is "top_k;typ_p;top_p;min_p;temperature": top_k->typ_p->top_p->min_p->temperature':
		'采样器应用的顺序(简化表示)。默认为 "top_k;typ_p;top_p;min_p;temperature":top_k->typ_p->top_p->min_p->temperature',
	'Backend sampling': '后端采样',
	'Enable backend-based samplers. When enabled, supported samplers run on the accelerator backend for faster sampling.':
		'启用基于后端的采样器。启用后,受支持的采样器会在加速器后端上运行,采样速度更快。',

	// non-UI settings (labels and help, surfaced via SETTING_CONFIG_INFO)
	'Show system message': '显示系统消息',
	'Display the system message at the top of each conversation.': '在每个会话顶部显示系统消息。',
	'MCP servers': 'MCP 服务器',
	'Configure MCP servers as a JSON list. Use the form in the MCP Client settings section to edit.':
		'以 JSON 列表配置 MCP 服务器。请使用 MCP 客户端设置区的表单进行编辑。',
	'Counterpart of the conversation title radio; stored and synced without a dedicated UI field.':
		'会话标题单选按钮的对应项;无专用 UI 字段,仅存储与同步。',

	// message actions
	'Fork of {name}': '{name} 的分支',
	Conversation: '会话',
	Copy: '复制',
	Regenerate: '重新生成',
	Continue: '继续',
	'Fork conversation': '分支会话',
	'Show raw output': '显示原始输出',
	'Delete Message': '删除消息',
	'Are you sure you want to delete this message? This action cannot be undone.':
		'确定要删除这条消息吗?此操作无法撤销。',
	'This will delete {count} messages including: {user} user message{userPlural} and {assistant} assistant response{assistantPlural}. All messages in this branch and their responses will be permanently removed. This action cannot be undone.':
		'这将删除 {count} 条消息,包括 {user} 条用户消息和 {assistant} 条助手回复。此分支中的所有消息及其回复将被永久删除。此操作无法撤销。',
	'Delete {count} Messages': '删除 {count} 条消息',
	'Fork Conversation': '分支会话',
	'Create a new conversation branching from this message.': '从此消息创建新会话分支。',
	Fork: '分支',
	Title: '标题',
	'Enter fork name': '输入分支名称',
	'Include all attachments': '包含所有附件',
	'Reasoning...': '推理中...',
	Cancelled: '已取消',
	'Edit your message...': '编辑你的消息...',
	'Update without re-sending': '仅更新不重新发送',
	'Branch conversation after edit': '编辑后分支会话',
	'Discard changes?': '放弃更改?',
	'You have unsaved changes. Are you sure you want to discard them?':
		'你有未保存的更改。确定要放弃吗?',
	Discard: '放弃',
	'Keep editing': '继续编辑',

	// message actions and cards
	'Message copied to clipboard': '消息已复制到剪贴板',
	'Pending user message': '待发送的用户消息',
	'Send immediately': '立即发送',
	'Allow use of': '允许使用',
	from: '来自',
	'Allow once': '允许一次',
	'More allow options': '更多允许选项',
	'Always allow': '始终允许',
	tool: '工具',
	'Always allow all tools from {server}': '始终允许来自 {server} 的所有工具',
	'Approve all tools from {provider}': '批准来自 {provider} 的所有工具',
	Deny: '拒绝',
	'Agentic turn limit reached. Continue?': '已达到智能体轮数上限。是否继续?',
	'Message version {current} of {total}': '消息版本 {current} / {total}',
	'Previous version': '上一版本',
	'Next version': '下一版本',

	// tool call blocks
	Input: '输入',
	Output: '输出',
	'Receiving arguments...': '正在接收参数...',
	'Response was truncated': '响应被截断',
	'Waiting for result...': '等待结果...',
	'Edit file': '编辑文件',
	'(failed)': '(失败)',
	'Search for': '搜索',
	in: '于',
	'Searching...': '正在搜索...',
	'Total matches:': '总匹配数:',
	'(with line numbers)': '(含行号)',
	'No matches': '无匹配',
	'List files': '列出文件',
	'Search files': '搜索文件',
	'Current time': '当前时间',
	'Current time is': '当前时间是',
	'Runtime info': '运行时信息',
	'timed out': '超时',
	'exit {code}': '退出码 {code}',
	'exit 0': '退出码 0',
	'Read file': '读取文件',
	'Read media': '读取媒体',
	'Running...': '运行中...',
	'Write file': '写入文件',
	'Working directory cleared': '工作目录已清除',
	'Set working directory to': '设置工作目录为',

	// dialogs
	'Rename conversation': '重命名会话',
	'Choose a new title for this conversation.': '为这个会话选择一个新标题。',
	'Conversation title': '会话标题',
	Save: '保存',
	'Model Not Available': '模型不可用',
	'The requested model could not be found. Select an available model to continue.':
		'找不到所请求的模型。请选择一个可用模型继续。',
	'Requested:': '请求的模型:',
	'Select an available model:': '选择一个可用模型:',
	'File Upload Error': '文件上传错误',
	'Some files cannot be uploaded with the current model.': '当前模型无法上传部分文件。',
	'Unsupported File Types': '不支持的文件类型',
	'File type not supported': '不支持的文件类型',
	'Not supported by current model': '当前模型不支持',
	'This model supports:': '该模型支持:',
	'Got it': '知道了',
	'Empty Files Detected': '检测到空文件',
	'The following files are empty and have been removed from your attachments:':
		'以下文件为空,已从附件中移除:',
	'Empty Files:': '空文件:',
	'What happened:': '发生了什么:',
	'Empty files cannot be processed or sent to the AI model': '空文件无法处理或发送给 AI 模型',
	'These files have been automatically removed from your attachments': '这些文件已自动从附件中移除',
	'You can try uploading files with content instead': '你可以尝试上传有内容的文件',
	'Export Settings': '导出设置',
	"Warning: This export will include sensitive data such as API keys and MCP server custom headers (e.g., authorization tokens). Do not share this file with anyone you don't trust.":
		'警告:此导出将包含敏感数据,如 API 密钥和 MCP 服务器自定义请求头(如授权tokens)。请勿将此文件分享给任何你不信任的人。',
	'Sensitive data (API keys, MCP server custom headers) will not be included in the export to protect your credentials.':
		'为保护你的凭据,敏感数据(API 密钥、MCP 服务器自定义请求头)不会包含在导出中。',
	'Include sensitive data (not recommended)': '包含敏感数据(不推荐)',
	'Include sensitive data': '包含敏感数据',
	'Export Anyway': '仍然导出',
	'Export Without Sensitive Data': '导出(不含敏感数据)',
	'Delete Conversation': '删除会话',
	'Are you sure you want to delete this conversation? This action cannot be undone and will permanently remove all messages in this conversation.':
		'确定要删除这个会话吗?此操作无法撤销,将永久删除该会话中的所有消息。',
	'Reconnecting to the stream...': '正在重新连接流...',

	// misc
	'Search...': '搜索...',
	'Clear search': '清除搜索',
	Close: '关闭',

	// server status
	'Connection Error': '连接错误',
	Connected: '已连接',
	Unknown: '未知',
	'Unknown Model': '未知模型',

	// statistics
	Reading: '读取',
	Processing: '处理',
	Generation: '生成',
	'Waiting for tokens...': '等待tokens...',
	'Tool calls': '工具调用',
	Summary: '摘要',
	'Agentic summary': '智能体摘要',
	'{count} tokens': '{count} tokens',
	'Generated tokens': '生成的tokens',
	'Generation time': '生成耗时',
	'{rate} t/s': '{rate} tokens/秒',
	'Generation speed': '生成速度',
	'{count} calls': '{count} 次调用',
	'Tool calls executed': '执行的工具调用',
	'Tool execution time': '工具执行耗时',
	'{rate} calls/s': '{rate} 次调用/秒',
	'Tool execution rate': '工具执行速率',
	'{count} turns': '{count} 轮',
	'Agentic turns (LLM calls)': '智能体轮数(LLM 调用)',
	'Total tokens generated': '生成的总tokens',
	'Total time (LLM + tools)': '总耗时(LLM + 工具)',
	'Prompt tokens': '提示tokens',
	'Prompt processing time': '提示处理耗时',
	'{rate} tokens/s': '{rate} tokens/秒',
	'Prompt processing speed': '提示处理速度',

	// web search tool
	'Searching web for "{query}"': '正在搜索网页:"{query}"',
	'Searched web for "{query}"': '已搜索网页:"{query}"',
	'Searching web': '正在搜索网页',
	'Searched web': '已搜索网页',
	'No results': '无结果',
	failed: '失败',
	incomplete: '未完成',
	'Toggle content': '切换内容',

	// chat form action buttons
	'Please select a model first': '请先选择一个模型',
	'Selected model is not available, please select another': '所选模型不可用,请选择其他模型',
	'Current model does not support audio': '当前模型不支持音频',
	Send: '发送',
	'User message with actions': '带操作的用户消息',
	'MCP Prompt message with actions': '带操作的 MCP 提示消息',

	// MCP server dialog
	'Add New MCP Server': '添加新的 MCP 服务器',
	'Recommended Servers': '推荐服务器',
	Dismiss: '忽略',
	Add: '添加',
	'URL is required': '请输入 URL',
	'Invalid URL format': 'URL 格式无效',

	// error messages
	'Access denied': '访问被拒绝',
	'Request failed': '请求失败',
	'Server error - check server logs': '服务器错误 - 请检查服务器日志',
	'Not found': '未找到',
	'Server temporarily unavailable': '服务器暂时不可用',
	'Failed to connect to server': '无法连接到服务器',
	'Server not found - check server address': '找不到服务器 - 请检查服务器地址',
	'Connection refused - server may be offline': '连接被拒绝 - 服务器可能已离线',
	'Request timed out': '请求超时',
	'Server is not running or unreachable': '服务器未运行或无法访问',
	'{generic} ({message})': '{generic}({message})',

	// attachments
	Remove: '移除',
	Previous: '上一个',
	Next: '下一个',
	'Your browser does not support the audio element.': '你的浏览器不支持 audio 元素。',
	'Audio preview not available': '音频预览不可用',
	Audio: '音频',
	'Your browser does not support the video element.': '你的浏览器不支持 video 元素。',
	'Video preview not available': '视频预览不可用',
	Video: '视频',
	'Preview not available for this file type': '该文件类型不支持预览',
	'Failed to load PDF images': '加载 PDF 图片失败',
	Text: '文本',
	Pages: '页面',
	'Preview only': '仅预览',
	'The selected model does not support vision. Only the extracted': '所选模型不支持视觉。仅提取的',
	text: '文本',
	'will be sent to the model.': '将被发送给模型。',
	'Converting PDF to images...': '正在将 PDF 转换为图片...',
	'Page {n}': '第 {n} 页',
	'PDF Page {n}': 'PDF 第 {n} 页',
	'No PDF pages available': '没有可用的 PDF 页面',

	// tools submenu
	'Loading tools...': '正在加载工具...',
	'Run llama-server with': '运行 llama-server 并带上',
	'flag to enable': '参数以启用',
	'Server Tools': '服务器工具',
	'MCP Tools': 'MCP 工具',
	'MCP Server(s) to access': '个 MCP 服务器以访问',
	Enable: '启用',
	'Failed to load tools': '加载工具失败',
	'No servers found': '未找到服务器',
	'Manage MCP Servers': '管理 MCP 服务器',
	'Add MCP Servers': '添加 MCP 服务器',
	'Search servers...': '搜索服务器...',
	'Maximum reasoning effort with extended context usage': '最大推理强度,会占用更多上下文',
	'Scroll to bottom': '滚动到底部',
	'Attach a file': '附加文件',
	'Drop your files here to upload': '将文件拖放到此处上传',

	// context gauge
	'Context usage': '上下文用量',
	Context: '上下文',
	used: '已用',
	remaining: '剩余',
	'No context info available': '无可用上下文信息',
	'Token usage details': 'tokens用量详情',
	'Across all turns': '全部轮次累计',
	'This turn · KV cache': '本轮 · KV 缓存',
	'Prompt tokens evaluated': '已评估的提示tokens',
	'Tokens generated': '生成的tokens',
	'{count} reused from KV cache': '其中 {count} 复用自 KV 缓存',
	Prompt: '提示',
	Generated: '生成',
	'{fresh} fresh + {cached} cached': '{fresh} 新增 + {cached} 缓存',
	'KV cache total': 'KV 缓存总计',
	'Avg speed': '平均速度',
	'Load model': '加载模型',
	'Available context size is only visible once the model is loaded.': '模型加载后才能看到可用的上下文大小。',
	'Loading model...': '正在加载模型...',

	// working directory
	'Open working directory picker': '打开工作目录选择器',
	'Choose working directory': '选择工作目录',
	Browse: '浏览',
	'Reset working directory': '重置工作目录',
	'No matching folders': '无匹配文件夹',
	'Use Prompt': '使用提示',
	'Open file mention picker': '打开文件提及选择器',

	// message extras
	'System message with actions': '带操作的系统消息',
	'Edit system message...': '编辑系统消息...',
	'Show full system message': '显示完整系统消息',
	'Collapse System Message': '收起系统消息',
	'Assistant message with actions': '带操作的助手消息',
	'No output': '无输出',
	'No edits': '无编辑',
	'Media attachment not found in message extras': '消息附件中未找到媒体附件',
	Console: '控制台',

	// content previews
	'Zoom out': '缩小',
	'Zoom in': '放大',
	'Reset view': '重置视图',
	'Download SVG': '下载 SVG',

	// dialogs
	'TCP Timeout': 'TCP 超时',
	'Server Error': '服务器错误',
	'The request did not receive a response from the server before timing out.':
		'请求在超时前未收到服务器响应。',
	'The server responded with an error message. Review the details below.':
		'服务器返回了错误消息。请查看下方详情。',
	'Prompt tokens:': '提示tokens:',
	'Context size:': '上下文大小:',
	'Resource attached: {name}': '资源已附加:{name}',
	'Resource already attached': '资源已附加',
	'Copy content': '复制内容',
	'Download content': '下载内容',
	'No content available': '无可用内容',
	'Try again': '重试',
	'Select a resource to preview': '选择要预览的资源',
	'Model Information': '模型信息',
	'Current model details and capabilities': '当前模型详情与能力',
	'Loading model information...': '正在加载模型信息...',
	Model: '模型',
	'Copy model name to clipboard': '复制模型名称到剪贴板',
	'File Path': '文件路径',
	'Copy model path to clipboard': '复制模型路径到剪贴板',
	'Context Size': '上下文大小',
	tokens: 'tokens',
	'Not available': '不可用',
	'Training Context': '训练上下文',
	'Model Size': '模型大小',
	Parameters: '参数量',
	'Embedding Size': '嵌入维度',
	'Vocabulary Size': '词表大小',
	'Vocabulary Type': '词表类型',
	'Parallel Slots': '并行槽位',
	Modalities: '模态',
	'Build Info': '构建信息',
	'Chat Template': '聊天模板',
	'No model information available': '无可用模型信息',
	'Close preview': '关闭预览',

	// MCP
	'Delete Server': '删除服务器',
	'Are you sure you want to delete': '确定要删除',
	'This action cannot be undone.': '此操作无法撤销。',
	'Configure Server': '配置服务器',
	Update: '更新',
	Refresh: '刷新',
	Resources: '资源',
	Prompts: '提示',
	Logging: '日志',
	Completions: '补全',
	Tasks: '任务',
	'No resources': '无资源',
	Templates: '模板',
	'{count} resource{plural}': '{count} 个资源',
	'{count} template{plural}': '{count} 个模板',
	'Open website': '打开网站',
	'Server instructions': '服务器说明',
	'Search resources...': '搜索资源...',
	'Refresh resources': '刷新资源',
	'Available resources': '可用资源',
	'Read Resource': '读取资源',
	details: '详情',
	'Server URL': '服务器 URL',
	'Display name': '显示名称',
	Authorization: '授权',
	'Paste token here': '在此粘贴tokens',
	Bearer: 'Bearer',
	'Header name': '请求头名称',
	Value: '值',
	'No custom headers configured.': '未配置自定义请求头。',
	'Custom Headers': '自定义请求头',
	'Use llama-server proxy': '使用 llama-server 代理',
	Run: '运行',
	with: '并带上',
	flag: '参数',
	'Name reported by the server': '服务器报告的名称',

	// models
	'Loaded models': '已加载模型',
	'Favorite models': '收藏模型',
	'Available models': '可用模型',
	'Remove from favorites': '取消收藏',
	'Add to favorites': '收藏',
	'Model information': '模型信息',
	'Retry loading model': '重试加载模型',
	'Unload model': '卸载模型',
	'Select model': '选择模型',
	'Search models...': '搜索模型...',
	'Select Model': '选择模型',
	'Choose a model to use for the conversation': '选择用于会话的模型',

	// misc
	'Conversation Name': '会话名称',
	Messages: '消息数',
	'Scroll left': '向左滚动',
	'Scroll right': '向右滚动',
	'Remove item': '移除条目',
	'Error: {message}': '错误:{message}',

	// about section
	About: '关于',
	'A web interface for llama-server.': 'llama-server 的 Web 界面。',
	'Chinese localization': '中文汉化'
};
