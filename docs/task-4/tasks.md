# Task 4 任务拆解（待你确认后执行）

## 1. 文案与合规确认
- 由于 overview 页面目前仅显示登录/注册，需要你提供 overview 文档要点或授权访问。
- 根据 overview 文档补齐：品牌规范、披露文案要求、禁用词与展示限制。
- 如果必须使用官方披露文案或 Logo，更新设计与文案。
- 文案以 GamsGo 官网卖点为准：目前使用官网中文卖点并翻译为英文（含义一致）。

## 2. 仅英文版渲染
- 在 `src/App.tsx` 中，按钮区块包一层条件渲染：
  - `currentLanguage === 'English'` 时显示
  - 其他语言不显示（避免新增翻译）

## 3. 页面位置与结构
- 插入点：生成器 iframe 区块 **结束后**、`Get Inspired` 标题 **之前**。
- 保持现有容器宽度与 padding（`max-w-[1280px]`, `px-4 sm:px-6 lg:px-8`）。

## 4. 视觉与交互实现
- Primary CTA（Caricature）采用更高权重样式。
- Secondary CTA（GamsGo）使用更轻的按钮样式。
- 两个按钮 hover 与导航 Features/FAQs 一致。
- Disclosure 文案一行，灰色小号。
- 预留 A/B 文案切换位置（若后续需要做转化测试）。
 - 实施阶段使用 frontend-design skill 约束（遵循现有风格，避免过度重构）。

## 5. 追踪（可选）
- 如有现成埋点系统，新增：
  - `cta_caricature_click`
  - `cta_gamsgo_click`
- 若暂无埋点，至少保留 `data-cta` 属性，方便后续接入。

## 6. QA 清单
- Desktop/Mobile 按钮布局正确（横排/竖排）。
- Hover 视觉一致，按钮点击新开标签。
- 只在英文版出现，其他语言不渲染。
- 不影响 iframe 显示与页面滚动。
