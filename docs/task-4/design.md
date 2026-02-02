# Task 4 设计文档（基于当前首页结构）

## 布局策略（方案 A，推荐）
**主转化优先**：`caricaturemaker.art` 作为主按钮，GamsGo 作为次级补量按钮。
**位置**：放在“生成器 iframe”下方、`Get Inspired` 之前，避免影响主区块结构。

### ASCII 结构（Desktop）
```text
[Fixed Nav]
Logo | Features | FAQs                           [Lang] [ce]

[Hero]
[Raphael AI badge]
[Title]
[Subtitle]
[Badges]

[Generator Card]
H2: {t.generator}
[iframe: raphaelai.org]

[NEW: Monetization Row]
[Primary CTA: Try Caricature Maker]  [Secondary CTA: Save on Streaming - GamsGo]
[Affiliate disclosure line (small, muted)]

[Get Inspired]
[Image grid]

[Features]
[Testimonials]
[FAQs]
[Footer]
```

### ASCII 结构（Mobile）
```text
[Generator Card]
[iframe]

[Primary CTA]
[Secondary CTA]
[Disclosure]

[Get Inspired]
[Image grid]
```

## 视觉样式
- **主按钮（Caricature）**：更高权重（实心/渐变/更醒目色），承接主转化。
- **次按钮（GamsGo）**：更轻（描边或浅底），避免喧宾夺主。
- **Hover 规则**：与导航栏 Features/FAQs 一致（`hover:bg-[#E5B06E] hover:text-white rounded-lg transition`）。
- **披露文案**：小号、灰色、弱视觉权重，紧随按钮行下方。

## 文案策略（用于最大化转化）
- 清晰优先：一句话说明“更实惠的数字订阅”。
- 结果导向：强调“更低价格 + 快速交付 + 24/7 支持”。
- 具体性：提及“7 年”“24 小时退款”等明确数字（源自官网）。
- CTA 行动化：按钮用“Get/Enjoy/Pay Less”而非笼统的“Learn more”。 

## 文案建议（英文，来自 GamsGo 官网卖点并翻译）
**GamsGo 官网卖点要点（中文原意）**
- 更实惠的数字订阅
- 连续 7 年高质量、价格可负担
- 付款后实时交付
- SSL 安全支付
- 7×24 实时支持
- 24 小时退款保证
- 98% 用户满意

**推荐组合（高转化，英文翻译版）**
1) Secondary CTA："Affordable Digital Subscriptions — GamsGo"  
   Supporting line："Instant delivery, 24/7 support, and a 24‑hour refund guarantee."
2) Secondary CTA："7 Years of Affordable Subscriptions — GamsGo"  
   Supporting line："Secure SSL checkout and 98% user satisfaction."
3) Secondary CTA："Premium Subscriptions for Less — GamsGo"  
   Supporting line："Fast delivery and reliable support, anytime."

**Primary CTA（主转化）**
- "Try Caricature Maker"

**Disclosure**
- "Affiliate disclosure: We may earn a commission if you buy through this link."

> 文案基于官网中文卖点翻译，后续若 overview 限制某些措辞再做替换。

## 交互逻辑
- 仅在 `currentLanguage === 'English'` 时渲染。
- 两个按钮均 **新标签打开**，并添加 `rel="noopener sponsored"`。
- Secondary CTA 视觉权重低于 Primary。
- 不触发页面阻断式弹窗（除非后续确认允许使用 exit-intent）。
