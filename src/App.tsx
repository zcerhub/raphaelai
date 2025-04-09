import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Brush, Code2, Palette, Sparkles, Download, ChevronRight, Globe, ChevronDown, Image, Shuffle, DollarSign, Star, Languages, Zap, Shield, Paintbrush, Check, X } from 'lucide-react';

// 添加类型定义
interface Translation {
  features: string;
  faqs: string;
  title: string;
  subtitle: string;
  free: string;
  poweredBy: string;
  noLogin: string;
  unlimited: string;
  generator: string;
  getInspired: string;
  getInspiredDesc: string;
  testimonial: string;
  testimonialTitle: string;
  testimonialDesc: string;
  faqTitle: string;
  faqContact: string;
  copyright: string;
  footerDesc: string;
  product: string;
  company: string;
  about: string;
  blog: string;
  contact: string;
  api: string;
  pricing: string;
  keyFeaturesTitle: string;
  keyFeaturesDesc: string;
  zeroCost: string;
  zeroCostDesc: string;
  stateArt: string;
  stateArtDesc: string;
  textUnderstanding: string;
  textUnderstandingDesc: string;
  lightningFast: string;
  lightningFastDesc: string;
  privacy: string;
  privacyDesc: string;
  multiStyle: string;
  multiStyleDesc: string;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    answer: string;
  }>;
}

// 添加多语言内容
const translations: Record<string, Translation> = {
  'English': {
    features: 'Features',
    faqs: 'FAQs',
    title: 'Create stunning AI-generated images in seconds',
    subtitle: 'World\'s First Unlimited Free AI Image Generator',
    free: '100% Free',
    poweredBy: 'Powered by Flux.1 Dev',
    noLogin: 'No Login Required',
    unlimited: 'Unlimited Generations',
    generator: 'AI Image Generator',
    getInspired: 'Get Inspired',
    getInspiredDesc: 'Get inspired by what others are creating with Raphael',
    testimonial: 'Testimonial',
    testimonialTitle: 'What Users Say About Raphael AI',
    testimonialDesc: 'Hear from creators and professionals who use our AI Image Generator daily.',
    faqTitle: 'Frequently Asked Questions',
    faqContact: 'Have another question? Contact us at support@raphael.app',
    copyright: '© 2024 Raphael AI. All rights reserved.',
    footerDesc: 'Create stunning AI-generated images in seconds with the world\'s first unlimited free AI Image Generator.',
    product: 'Product',
    company: 'Company',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    api: 'API',
    pricing: 'Pricing',
    keyFeaturesTitle: 'Key Features of Raphael',
    keyFeaturesDesc: 'Experience the next generation of AI image generation - powerful, free, and privacy-focused.',
    zeroCost: 'Zero-Cost Creation',
    zeroCostDesc: 'The world\'s first completely free AI image generator with no usage limits or registration requirements.',
    stateArt: 'State-of-the-Art Quality',
    stateArtDesc: 'Powered by FLUX.1-Dev model, delivering photorealistic images with exceptional detail and artistic style control.',
    textUnderstanding: 'Advanced Text Understanding',
    textUnderstandingDesc: 'Superior text-to-image capabilities with accurate interpretation of complex prompts and text overlay features.',
    lightningFast: 'Lightning-Fast Generation',
    lightningFastDesc: 'Optimized inference pipeline ensuring rapid image generation without compromising quality.',
    privacy: 'Enhanced Privacy Protection',
    privacyDesc: 'Zero data retention policy - your prompts and generated images are never stored on our servers.',
    multiStyle: 'Multi-Style Support',
    multiStyleDesc: 'Create images across various artistic styles, from photorealistic to anime, oil paintings to digital art.',
    // FAQ questions and answers
    faqItems: [
      {
        question: 'What is Raphael AI and how does it work?',
        answer: 'Raphael AI is the world\'s first completely free, unlimited AI image generator powered by the FLUX.1-Dev model. It allows you to create high-quality images from text descriptions without any registration or usage limits.'
      },
      {
        question: 'Is Raphael AI really free to use?',
        answer: 'Yes, Raphael AI is completely free to use! We are committed to being the world\'s largest and most powerful free AI Image Generator. There are no hidden fees, no credit card required, and no usage limits.'
      },
      {
        question: 'What makes Raphael AI different from other AI image generators?',
        answer: 'Raphael AI is the only platform offering unlimited free access to the powerful FLUX.1-Dev model. We provide superior image quality, fast generation speed, and complete privacy protection, all without any cost or registration requirements.'
      },
      {
        question: 'Do I need to create an account to use Raphael AI?',
        answer: 'No, you don\'t need to create an account or register. Simply visit raphael.app and start generating images immediately. We believe in making AI accessible to everyone without barriers.'
      },
      {
        question: 'What types of images can I create with Raphael AI?',
        answer: 'You can create a wide variety of images including photorealistic scenes, artistic illustrations, digital art, anime-style images, and more. The FLUX.1-Dev model excels at understanding complex prompts and generating diverse visual styles.'
      },
      {
        question: 'How does Raphael AI protect my privacy?',
        answer: 'We take privacy seriously. We don\'t store your prompts or generated images on our servers, and we don\'t require any personal information. Your creations remain completely private and are deleted after generation.'
      },
      {
        question: 'What is the FLUX.1-Dev model?',
        answer: 'FLUX.1-Dev is a state-of-the-art AI model known for its exceptional image quality, prompt accuracy, and style versatility. It\'s typically expensive to use, but Raphael makes it freely available to everyone.'
      },
      {
        question: 'Are there any limitations to using Raphael AI?',
        answer: 'While Raphael AI is free and unlimited, we maintain standard content guidelines to ensure appropriate use. The platform is designed for web use currently, with mobile apps planned for the future.'
      },
      {
        question: 'Can I use the generated images commercially?',
        answer: 'Yes, you own the rights to the images you generate with Raphael AI. You can use them for both personal and commercial purposes, making it perfect for creators and businesses alike.'
      },
      {
        question: 'Is Raphael AI available on mobile devices?',
        answer: 'Currently, Raphael AI is available through our website at raphael.app, which works great on mobile browsers. We\'re actively developing dedicated mobile apps to provide an even better experience soon.'
      },
      {
        question: 'How can I provide feedback or report issues?',
        answer: 'We welcome your feedback! You can reach our support team at support@raphael.app. Your input helps us improve and maintain the best free AI image generation service.'
      },
      {
        question: 'What\'s next for Raphael AI?',
        answer: 'We\'re constantly improving our service with regular updates to the AI model and user interface. Future plans include mobile apps and additional creative features, while maintaining our commitment to being completely free.'
      }
    ],
    // 用户评论
    testimonials: [
      {
        name: 'David Thompson',
        role: 'Independent Game Developer',
        answer: '"As a solo game dev, Raphael AI Image Generator is invaluable. The speed and quality of asset generation are unmatched, and being free means I can focus my budget elsewhere."'
      },
      {
        name: 'Emily Parker',
        role: 'Content Creator on YouTube',
        answer: '"I create thumbnails daily using Raphael AI Image Generator. The text understanding is incredible - it captures exactly what I need, and the no-registration policy makes it super convenient."'
      },
      {
        name: 'Robert Wilson',
        role: 'UI/UX Designer at TechFlow',
        answer: '"The FLUX.1-Dev model in Raphael AI Image Generator produces the most consistent and high-quality results I\'ve seen. It\'s become our go-to tool for generating mockup images."'
      },
      {
        name: 'Jennifer Adams',
        role: 'E-commerce Business Owner',
        answer: '"Running an online store requires constant image creation. Raphael\'s free AI Image Generator helps me create professional product photos instantly. It\'s literally saving my business thousands."'
      },
      {
        name: 'Michael Anderson',
        role: 'Digital Artist at ArtStation',
        answer: '"Raphael\'s AI Image Generator is a game-changer. The FLUX.1-Dev model produces incredibly detailed images that I use as concept art. The fact that it\'s completely free is mind-blowing!"'
      }
    ]
  },
  '繁體中文': {
    features: '特點',
    faqs: '常見問題',
    title: '几秒钟内创建令人惊叹的AI生成图像',
    subtitle: '世界首个免费无限制AI图像生成器',
    free: '100%免费',
    poweredBy: '由Flux.1 Dev提供支持',
    noLogin: '无需登录',
    unlimited: '无限生成',
    generator: 'AI图像生成器',
    getInspired: '获取灵感',
    getInspiredDesc: '从其他人使用Raphael创建的作品中获取灵感',
    testimonial: '用户评价',
    testimonialTitle: '用户对Raphael AI的评价',
    testimonialDesc: '听听每天使用我们AI图像生成器的创作者和专业人士的意见。',
    faqTitle: '常见问题解答',
    faqContact: '还有其他问题？请联系我们：support@raphael.app',
    copyright: '© 2024 Raphael AI. 保留所有权利。',
    footerDesc: '使用世界首个免费无限制的AI图像生成器，几秒钟内创建令人惊叹的AI生成图像。',
    product: '产品',
    company: '公司',
    about: '关于我们',
    blog: '博客',
    contact: '联系我们',
    api: 'API',
    pricing: '价格',
    keyFeaturesTitle: 'Raphael 的主要特点',
    keyFeaturesDesc: '体验下一代 AI 图像生成 - 强大、免费且注重隐私',
    zeroCost: '零成本创作',
    zeroCostDesc: '世界首个完全免费的 AI 图像生成器，无使用限制，无需注册',
    stateArt: '顶尖品质',
    stateArtDesc: '由 FLUX.1-Dev 模型驱动，生成照片级别的图像，具有出色的细节和艺术风格控制',
    textUnderstanding: '高级文本理解',
    textUnderstandingDesc: '出色的文本到图像能力，准确理解复杂提示和文本叠加功能',
    lightningFast: '闪电般速度',
    lightningFastDesc: '优化的推理管道，确保快速生成图像而不影响质量',
    privacy: '增强隐私保护',
    privacyDesc: '零数据保留政策 - 您的提示和生成的图像永远不会存储在我们的服务器上',
    multiStyle: '多样风格支持',
    multiStyleDesc: '创建各种艺术风格的图像，从照片级真实到动漫风格，从油画到数字艺术',
    // FAQ问题与答案
    faqItems: [
      {
        question: 'Raphael AI是什么，它是如何工作的？',
        answer: 'Raphael AI是世界上第一个完全免费、无限制的AI图像生成器，由FLUX.1-Dev模型提供支持。它允许您从文本描述中创建高质量图像，无需任何注册或使用限制。'
      },
      {
        question: 'Raphael AI真的免费使用吗？',
        answer: '是的，Raphael AI完全免费使用！我们致力于成为世界上最大、最强大的免费AI图像生成器。没有隐藏费用，无需信用卡，也没有使用限制。'
      },
      {
        question: 'Raphael AI与其他AI图像生成器有何不同？',
        answer: 'Raphael AI是唯一一个提供无限免费访问强大FLUX.1-Dev模型的平台。我们提供卓越的图像质量、快速的生成速度和完整的隐私保护，所有这些都不需要任何费用或注册要求。'
      },
      {
        question: '我需要创建账户才能使用Raphael AI吗？',
        answer: '不，您不需要创建账户或注册。只需访问raphael.app并立即开始生成图像。我们相信让AI技术无障碍地为所有人所用。'
      },
      {
        question: '我可以用Raphael AI创建哪些类型的图像？',
        answer: '您可以创建各种各样的图像，包括逼真的场景、艺术插图、数字艺术、动漫风格图像等。FLUX.1-Dev模型擅长理解复杂提示并生成多样化的视觉风格。'
      },
      {
        question: 'Raphael AI如何保护我的隐私？',
        answer: '我们非常重视隐私。我们不会在服务器上存储您的提示或生成的图像，也不需要任何个人信息。您的创作完全保持私密，并在生成后被删除。'
      },
      {
        question: 'FLUX.1-Dev模型是什么？',
        answer: 'FLUX.1-Dev是一个最先进的AI模型，以其卓越的图像质量、提示准确性和风格多样性而闻名。它通常使用成本较高，但Raphael使它免费提供给所有人。'
      },
      {
        question: '使用Raphael AI有什么限制吗？',
        answer: '虽然Raphael AI是免费且无限制的，但我们维持标准内容指南以确保适当使用。该平台目前为网页设计，移动应用计划在未来推出。'
      },
      {
        question: '我可以将生成的图像用于商业用途吗？',
        answer: '是的，您拥有使用Raphael AI生成的图像的权利。您可以将它们用于个人和商业目的，这使它成为创作者和企业的理想选择。'
      },
      {
        question: 'Raphael AI在移动设备上可用吗？',
        answer: '目前，Raphael AI可通过我们的网站raphael.app访问，在移动浏览器上运行良好。我们正在积极开发专用移动应用，以便不久后提供更好的体验。'
      },
      {
        question: '如何提供反馈或报告问题？',
        answer: '我们欢迎您的反馈！您可以通过support@raphael.app联系我们的支持团队。您的反馈有助于我们改进和维护最好的免费AI图像生成服务。'
      },
      {
        question: 'Raphael AI的未来计划是什么？',
        answer: '我们不断通过定期更新AI模型和用户界面来改进我们的服务。未来计划包括移动应用和额外的创意功能，同时保持我们完全免费的承诺。'
      }
    ],
    // 中文用户评论
    testimonials: [
      {
        name: '大卫·汤普森',
        role: '独立游戏开发者',
        answer: '"作为一名独立游戏开发者，Raphael AI图像生成器价值连城。资源生成的速度和质量无与伦比，而且免费使用让我能够将预算用在其他地方。"'
      },
      {
        name: '艾米丽·帕克',
        role: 'YouTube内容创作者',
        answer: '"我每天都使用Raphael AI图像生成器创建缩略图。它对文本的理解能力令人难以置信——能精确捕捉我所需要的内容，而且无需注册的政策使它非常便捷。"'
      },
      {
        name: '罗伯特·威尔逊',
        role: 'TechFlow的UI/UX设计师',
        answer: '"Raphael AI图像生成器中的FLUX.1-Dev模型产生了我所见过的最一致和高质量的结果。它已经成为我们生成模型图像的首选工具。"'
      },
      {
        name: '詹妮弗·亚当斯',
        role: '电子商务企业主',
        answer: '"经营在线商店需要持续创建图像。Raphael的免费AI图像生成器帮助我即时创建专业的产品照片。它实实在在地为我的企业节省了数千元成本。"'
      },
      {
        name: '迈克尔·安德森',
        role: 'ArtStation的数字艺术家',
        answer: '"Raphael的AI图像生成器是一个改变游戏规则的工具。FLUX.1-Dev模型生成的细节丰富的图像，我将其用作概念艺术。它完全免费的事实令人难以置信！"'
      }
    ]
  },
  '繁體中文': {
    features: '特點',
    faqs: '常見問題',
    title: '幾秒鐘內創建令人驚嘆的AI生成圖像',
    subtitle: '世界首個免費無限制AI圖像生成器',
    free: '100%免費',
    poweredBy: '由Flux.1 Dev提供支持',
    noLogin: '無需登錄',
    unlimited: '無限生成',
    generator: 'AI圖像生成器',
    getInspired: '獲取靈感',
    getInspiredDesc: '從其他人使用Raphael創建的作品中獲取靈感',
    testimonial: '用戶評價',
    testimonialTitle: '用戶對Raphael AI的評價',
    testimonialDesc: '聽聽每天使用我們AI圖像生成器的創作者和專業人士的意見。',
    faqTitle: '常見問題解答',
    faqContact: '還有其他問題？請聯繫我們：support@raphael.app',
    copyright: '© 2024 Raphael AI. 保留所有權利。',
    footerDesc: '使用世界首個免費無限制的AI圖像生成器，幾秒鐘內創建令人驚嘆的AI生成圖像。',
    product: '製品',
    company: '公司',
    about: '會社概要',
    blog: '部落格',
    contact: '聯繫我們',
    api: 'API',
    pricing: '價格',
    keyFeaturesTitle: 'Raphael 的主要特點',
    keyFeaturesDesc: '體驗下一代 AI 圖像生成 - 強大、免費且注重隱私',
    zeroCost: '零成本創作',
    zeroCostDesc: '世界首個完全免費的 AI 圖像生成器，無使用限制，無需註冊',
    stateArt: '頂尖品質',
    stateArtDesc: '由 FLUX.1-Dev 模型驅動，生成照片級別的圖像，具有出色的細節和藝術風格控制',
    textUnderstanding: '高級文本理解',
    textUnderstandingDesc: '出色的文本到圖像能力，準確理解複雜提示和文本疊加功能',
    lightningFast: '閃電般速度',
    lightningFastDesc: '優化的推理管道，確保快速生成圖像而不影響質量',
    privacy: '增強隱私保護',
    privacyDesc: '零數據保留政策 - 您的提示和生成的圖像永遠不會存儲在我們的服務器上',
    multiStyle: '多樣風格支持',
    multiStyleDesc: '創建各種藝術風格的圖像，從照片級真實到動漫風格，從油畫到數字藝術',
    // FAQ問題與答案
    faqItems: [
      {
        question: 'Raphael AI是什麼，它是如何工作的？',
        answer: 'Raphael AI是世界上第一個完全免費、無限制的AI圖像生成器，由FLUX.1-Dev模型提供支持。它允許您從文本描述中創建高質量圖像，無需任何註冊或使用限制。'
      },
      {
        question: 'Raphael AI真的免費使用嗎？',
        answer: '是的，Raphael AI完全免費使用！我們致力於成為世界上最大、最強大的免費AI圖像生成器。沒有隱藏費用，無需信用卡，也沒有使用限制。'
      },
      {
        question: 'Raphael AI與其他AI圖像生成器有何不同？',
        answer: 'Raphael AI是唯一一個提供無限免費訪問強大FLUX.1-Dev模型的平台。我們提供卓越的圖像質量、快速的生成速度和完整的隱私保護，所有這些都不需要任何費用或註冊要求。'
      },
      {
        question: '我需要創建賬戶才能使用Raphael AI嗎？',
        answer: '不，您不需要創建賬戶或註冊。只需訪問raphael.app並立即開始生成圖像。我們相信讓AI技術無障礙地為所有人所用。'
      },
      {
        question: '我可以用Raphael AI創建哪些類型的圖像？',
        answer: '您可以創建各種各樣的圖像，包括逼真的場景、藝術插圖、數字藝術、動漫風格圖像等。FLUX.1-Dev模型擅長理解複雜提示並生成多樣化的視覺風格。'
      },
      {
        question: 'Raphael AI如何保護我的隱私？',
        answer: '我們非常重視隱私。我們不會在服務器上存儲您的提示或生成的圖像，也不需要任何個人信息。您的創作完全保持私密，並在生成後被刪除。'
      },
      {
        question: 'FLUX.1-Dev模型是什麼？',
        answer: 'FLUX.1-Dev是一個最先進的AI模型，以其卓越的圖像質量、提示準確性和風格多樣性而聞名。它通常使用成本較高，但Raphael使它免費提供給所有人。'
      },
      {
        question: '使用Raphael AI有什麼限制嗎？',
        answer: '雖然Raphael AI是免費且無限制的，但我們維持標準內容指南以確保適當使用。該平台目前為網頁設計，移動應用計劃在未來推出。'
      },
      {
        question: '我可以將生成的圖像用於商業用途嗎？',
        answer: '是的，您擁有使用Raphael AI生成的圖像的權利。您可以將它們用於個人和商業目的，這使它成為創作者和企業的理想選擇。'
      },
      {
        question: 'Raphael AI在移動設備上可用嗎？',
        answer: '目前，Raphael AI可通過我們的網站raphael.app訪問，在移動瀏覽器上運行良好。我們正在積極開發專用移動應用，以便不久後提供更好的體驗。'
      },
      {
        question: '如何提供反饋或報告問題？',
        answer: '我們歡迎您的反饋！您可以通過support@raphael.app聯繫我們的支持團隊。您的反饋有助於我們改進和維護最好的免費AI圖像生成服務。'
      },
      {
        question: 'Raphael AI的未來計劃是什麼？',
        answer: '我們不斷通過定期更新AI模型和用戶界面來改進我們的服務。未來計劃包括移動應用和額外的創意功能，同時保持我們完全免費的承諾。'
      }
    ],
    // 繁體中文用戶評論
    testimonials: [
      {
        name: '大衛·湯普森',
        role: '獨立遊戲開發者',
        answer: '"作為一名獨立遊戲開發者，Raphael AI圖像生成器價值連城。資源生成的速度和質量無與倫比，而且免費使用讓我能夠將預算用在其他地方。"'
      },
      {
        name: '艾米麗·帕克',
        role: 'YouTube內容創作者',
        answer: '"我每天都使用Raphael AI圖像生成器創建縮略圖。它對文本的理解能力令人難以置信——能精確捕捉我所需要的內容，而且無需註冊的政策使它非常便捷。"'
      },
      {
        name: '羅伯特·威爾遜',
        role: 'TechFlow的UI/UX設計師',
        answer: '"Raphael AI圖像生成器中的FLUX.1-Dev模型產生了我所見過的最一致和高質量的結果。它已經成為我們生成模型圖像的首選工具。"'
      },
      {
        name: '珍妮弗·亞當斯',
        role: '電子商務企業主',
        answer: '"經營線上商店需要持續創建圖像。Raphael的免費AI圖像生成器幫助我即時創建專業的產品照片。它實實在地在為我的企業節省了數千元成本。"'
      },
      {
        name: '邁克爾·安德森',
        role: 'ArtStation的數字藝術家',
        answer: '"Raphael的AI圖像生成器是一個改變遊戲規則的工具。FLUX.1-Dev模型生成的細節豐富的圖像，我將其用作概念藝術。它完全免費的事實令人難以置信！"'
      }
    ]
  },
  '繁體中文': {
    features: '特點',
    faqs: '常見問題',
    title: '幾秒鐘內創建令人驚嘆的AI生成圖像',
    subtitle: '世界首個免費無限制AI圖像生成器',
    free: '100%免費',
    poweredBy: '由Flux.1 Dev提供支持',
    noLogin: '無需登錄',
    unlimited: '無限生成',
    generator: 'AI圖像生成器',
    getInspired: '獲取靈感',
    getInspiredDesc: '從其他人使用Raphael創建的作品中獲取靈感',
    testimonial: '用戶評價',
    testimonialTitle: '用戶對Raphael AI的評價',
    testimonialDesc: '聽聽每天使用我們AI圖像生成器的創作者和專業人士的意見。',
    faqTitle: '常見問題解答',
    faqContact: '還有其他問題？請聯繫我們：support@raphael.app',
    copyright: '© 2024 Raphael AI. 保留所有權利。',
    footerDesc: '使用世界首個免費無限制的AI圖像生成器，幾秒鐘內創建令人驚嘆的AI生成圖像。',
    product: '製品',
    company: '公司',
    about: '會社概要',
    blog: '部落格',
    contact: '聯繫我們',
    api: 'API',
    pricing: '價格',
    keyFeaturesTitle: 'Raphael 的主要特點',
    keyFeaturesDesc: '體驗下一代 AI 圖像生成 - 強大、免費且注重隱私',
    zeroCost: '零成本創作',
    zeroCostDesc: '世界首個完全免費的 AI 圖像生成器，無使用限制，無需註冊',
    stateArt: '頂尖品質',
    stateArtDesc: '由 FLUX.1-Dev 模型驅動，生成照片級別的圖像，具有出色的細節和藝術風格控制',
    textUnderstanding: '高級文本理解',
    textUnderstandingDesc: '出色的文本到圖像能力，準確理解複雜提示和文本疊加功能',
    lightningFast: '閃電般速度',
    lightningFastDesc: '優化的推理管道，確保快速生成圖像而不影響質量',
    privacy: '增強隱私保護',
    privacyDesc: '零數據保留政策 - 您的提示和生成的圖像永遠不會存儲在我們的服務器上',
    multiStyle: '多樣風格支持',
    multiStyleDesc: '創建各種藝術風格的圖像，從照片級真實到動漫風格，從油畫到數字藝術',
    faqItems: [
      {
        question: 'Raphael AI是什麼，它是如何工作的？',
        answer: 'Raphael AI是世界上第一個完全免費、無限制的AI圖像生成器，由FLUX.1-Dev模型提供支持。它允許您從文本描述中創建高質量圖像，無需任何註冊或使用限制。'
      },
      {
        question: 'Raphael AI真的免費使用嗎？',
        answer: '是的，Raphael AI完全免費使用！我們致力於成為世界上最大、最強大的免費AI圖像生成器。沒有隱藏費用，無需信用卡，也沒有使用限制。'
      },
      {
        question: 'Raphael AI與其他AI圖像生成器有何不同？',
        answer: 'Raphael AI是唯一一個提供無限免費訪問強大FLUX.1-Dev模型的平台。我們提供卓越的圖像質量、快速的生成速度和完整的隱私保護，所有這些都不需要任何費用或註冊要求。'
      },
      {
        question: '我需要創建賬戶才能使用Raphael AI嗎？',
        answer: '不，您不需要創建賬戶或註冊。只需訪問raphael.app並立即開始生成圖像。我們相信讓AI技術無障礙地為所有人所用。'
      },
      {
        question: '我可以用Raphael AI創建哪些類型的圖像？',
        answer: '您可以創建各種各樣的圖像，包括逼真的場景、藝術插圖、數字藝術、動漫風格圖像等。FLUX.1-Dev模型擅長理解複雜提示並生成多樣化的視覺風格。'
      },
      {
        question: 'Raphael AI如何保護我的隱私？',
        answer: '我們非常重視隱私。我們不會在服務器上存儲您的提示或生成的圖像，也不需要任何個人信息。您的創作完全保持私密，並在生成後被刪除。'
      },
      {
        question: 'FLUX.1-Dev模型是什麼？',
        answer: 'FLUX.1-Dev是一個最先進的AI模型，以其卓越的圖像質量、提示準確性和風格多樣性而聞名。它通常使用成本較高，但Raphael使它免費提供給所有人。'
      },
      {
        question: '使用Raphael AI有什麼限制嗎？',
        answer: '雖然Raphael AI是免費且無限制的，但我們維持標準內容指南以確保適當使用。該平台目前為網頁設計，移動應用計劃在未來推出。'
      },
      {
        question: '我可以將生成的圖像用於商業用途嗎？',
        answer: '是的，您擁有使用Raphael AI生成的圖像的權利。您可以將它們用於個人和商業目的，這使它成為創作者和企業的理想選擇。'
      },
      {
        question: 'Raphael AI在移動設備上可用嗎？',
        answer: '目前，Raphael AI可通過我們的網站raphael.app訪問，在移動瀏覽器上運行良好。我們正在積極開發專用移動應用，以便不久後提供更好的體驗。'
      },
      {
        question: '如何提供反饋或報告問題？',
        answer: '我們歡迎您的反饋！您可以通過support@raphael.app聯繫我們的支持團隊。您的反饋有助於我們改進和維護最好的免費AI圖像生成服務。'
      },
      {
        question: 'Raphael AI的未來計劃是什麼？',
        answer: '我們不斷通過定期更新AI模型和用戶界面來改進我們的服務。未來計劃包括移動應用和額外的創意功能，同時保持我們完全免費的承諾。'
      }
    ],
    testimonials: [
      {
        name: '大衛·湯普森',
        role: '獨立遊戲開發者',
        answer: '"作為一名獨立遊戲開發者，Raphael AI圖像生成器價值連城。資源生成的速度和質量無與倫比，而且免費使用讓我能夠將預算用在其他地方。"'
      },
      {
        name: '艾米麗·帕克',
        role: 'YouTube內容創作者',
        answer: '"我每天都使用Raphael AI圖像生成器創建縮略圖。它對文本的理解能力令人難以置信——能精確捕捉我所需要的內容，而且無需註冊的政策使它非常便捷。"'
      },
      {
        name: '羅伯特·威爾遜',
        role: 'TechFlow的UI/UX設計師',
        answer: '"Raphael AI圖像生成器中的FLUX.1-Dev模型產生了我所見過的最一致和高質量的結果。它已經成為我們生成模型圖像的首選工具。"'
      },
      {
        name: '珍妮弗·亞當斯',
        role: '電子商務企業主',
        answer: '"經營線上商店需要持續創建圖像。Raphael的免費AI圖像生成器幫助我即時創建專業的產品照片。它實實在地在為我的企業節省了數千元成本。"'
      },
      {
        name: '邁克爾·安德森',
        role: 'ArtStation的數字藝術家',
        answer: '"Raphael的AI圖像生成器是一個改變遊戲規則的工具。FLUX.1-Dev模型生成的細節豐富的圖像，我將其用作概念藝術。它完全免費的事實令人難以置信！"'
      }
    ]
  },
  '日本語': {
    features: '機能',
    faqs: 'よくある質問',
    title: '数秒でAIが生成する驚くべき画像を作成',
    subtitle: '世界初の無制限無料AIイメージジェネレーター',
    free: '100%無料',
    poweredBy: 'Flux.1 Dev搭載',
    noLogin: 'ログイン不要',
    unlimited: '無制限生成',
    generator: 'AIイメージジェネレーター',
    getInspired: 'インスピレーションを得る',
    getInspiredDesc: '他のユーザーがRaphaelで作成している作品からインスピレーションを得ましょう',
    testimonial: 'お客様の声',
    testimonialTitle: 'Raphael AIに関するユーザーの声',
    testimonialDesc: '私たちのAIイメージジェネレーターを日常的に使用しているクリエイターやプロフェッショナルの声をお聞きください。',
    faqTitle: 'よくある質問',
    faqContact: '他の質問がありますか？support@raphael.appまでお問い合わせください',
    copyright: '© 2024 Raphael AI. All rights reserved.',
    footerDesc: '世界初の無制限無料AIイメージジェネレーターで、数秒で驚くべきAI生成画像を作成。',
    product: '製品',
    company: '会社',
    about: '会社概要',
    blog: 'ブログ',
    contact: 'お問い合わせ',
    api: 'API',
    pricing: '料金',
    keyFeaturesTitle: 'Raphael の主要な特徴',
    keyFeaturesDesc: '次世代の AI イメージ生成 - 強力で無料でありながら、プライバシーにも配慮したもの',
    zeroCost: 'ゼロコスト創作',
    zeroCostDesc: '世界初の完全無料 AI イメージ生成器。使用制限なく、登録不要です。',
    stateArt: 'トップクオリティ',
    stateArtDesc: 'FLUX.1-Dev モデルを搭載した世界初の完全無料 AI イメージ生成器。写真レベルの画像を生成し、優れたアートスタイルの制御も可能です。',
    textUnderstanding: '高度なテキスト理解',
    textUnderstandingDesc: '複雑なプロンプトに対応したテキストオーバーレイ機能を備えた、優れたテキストから画像への変換能力。',
    lightningFast: '光速生成',
    lightningFastDesc: '最適化された推論パイプラインにより、品質を維持しながら高速で画像を生成します。',
    privacy: '高度なプライバシー保護',
    privacyDesc: 'ゼロデータリテンションポリシー - あなたのプロンプトと生成された画像は、いつでも当社のサーバーに保存されません。',
    multiStyle: '多様なスタイルサポート',
    multiStyleDesc: '様々なアートスタイルの画像を作成できます。写真レベルの真実さからアニメ風のイラスト、油彩画、デジタルアートまで。',
    faqItems: [
      {
        question: 'Raphael AIとは何ですか？どのように機能しますか？',
        answer: 'Raphael AIは、FLUX.1-Devモデルを搭載した世界初の完全無料・無制限のAIイメージジェネレーターです。登録や使用制限なしで、テキストの説明から高品質な画像を作成できます。'
      },
      {
        question: 'Raphael AIは本当に無料で使えますか？',
        answer: 'はい、Raphael AIは完全無料でご利用いただけます！私たちは世界最大かつ最も強力な無料AIイメージジェネレーターを目指しています。隠れた料金や、クレジットカード情報の入力、使用制限は一切ありません。'
      },
      {
        question: 'Raphael AIと他のAIイメージジェネレーターとの違いは何ですか？',
        answer: 'Raphael AIは、強力なFLUX.1-Devモデルへの無制限の無料アクセスを提供する唯一のプラットフォームです。費用や登録の必要なく、優れた画質、高速な生成速度、完全なプライバシー保護を提供しています。'
      },
      {
        question: 'Raphael AIを使用するにはアカウントを作成する必要がありますか？',
        answer: 'いいえ、アカウントの作成や登録は必要ありません。raphael.appにアクセスするだけで、すぐに画像生成を開始できます。私たちは、誰もが障壁なくAIにアクセスできるべきだと考えています。'
      },
      {
        question: 'Raphael AIでどのような種類の画像を作成できますか？',
        answer: 'フォトリアルな風景、アート的なイラスト、デジタルアート、アニメ調の画像など、さまざまな画像を作成できます。FLUX.1-Devモデルは、複雑なプロンプトを理解し、多様な視覚スタイルを生成することに優れています。'
      },
      {
        question: 'Raphael AIはプライバシーをどのように保護していますか？',
        answer: 'プライバシーを重視しています。プロンプトや生成された画像をサーバーに保存せず、個人情報も必要としません。作成物は完全にプライベートで、生成後は削除されます。'
      },
      {
        question: 'FLUX.1-Devモデルとは何ですか？',
        answer: 'FLUX.1-Devは、優れた画質、プロンプトの正確性、スタイルの多様性で知られる最先端のAIモデルです。通常は高額な使用料が必要ですが、Raphaelは誰でも無料で利用できるようにしています。'
      },
      {
        question: 'Raphael AIの使用に制限はありますか？',
        answer: 'Raphael AIは無料で無制限ですが、適切な使用を確保するための標準的なコンテンツガイドラインを設けています。現在はウェブ用に設計されており、モバイルアプリは今後リリース予定です。'
      },
      {
        question: '生成された画像を商用利用できますか？',
        answer: 'はい、Raphael AIで生成した画像の権利はあなたにあります。個人利用、商用利用ともに可能で、クリエイターやビジネスに最適です。'
      },
      {
        question: 'Raphael AIはモバイルデバイスで利用できますか？',
        answer: '現在、Raphael AIはraphael.appのウェブサイトを通じて利用可能で、モバイルブラウザでも快適に動作します。より良い体験を提供するための専用モバイルアプリを現在開発中です。'
      },
      {
        question: 'フィードバックや問題の報告はどのようにすればよいですか？',
        answer: 'フィードバックをお待ちしています！support@raphael.appで私たちのサポートチームにご連絡ください。皆様のご意見は、最高の無料AIイメージ生成サービスの改善と維持に役立ちます。'
      },
      {
        question: 'Raphael AIの今後の展開は？',
        answer: 'AIモデルとユーザーインターフェースの定期的な更新により、サービスを常に改善しています。完全無料の約束を守りながら、モバイルアプリや追加のクリエイティブ機能など、今後の計画を進めています。'
      }
    ],
    testimonials: [
      {
        name: 'デイビッド・トンプソン',
        role: 'インディーゲーム開発者',
        answer: '「個人ゲーム開発者として、Raphael AIイメージジェネレーターは非常に価値があります。アセット生成のスピードと品質は比類なく、無料であることで予算を他に回せます。」'
      },
      {
        name: 'エミリー・パーカー',
        role: 'YouTubeコンテンツクリエイター',
        answer: '"Raphael AIイメージジェネレーターを使って毎日サムネイルを作成しています。テキストの理解力が素晴らしく、必要なものを正確に捉え、登録不要なのも便利です。」'
      },
      {
        name: '로버트 윌슨',
        role: 'TechFlow의 UI/UX 디자이너',
        answer: '"Raphael AI 이미지 생성기의 FLUX.1-Dev 모델은 제가 본 것 중 가장 일관성 있고 고품질의 결과물을 만듭니다. 목업 이미지 생성을 위한 우리의 필수 도구가 되었습니다."'
      },
      {
        name: '제니퍼 아담스',
        role: '이커머스 사업주',
        answer: '"온라인 스토어 운영에는 지속적인 이미지 생성이 필요합니다. Raphael의 무료 AI 이미지 생성기 덕분에 전문적인 제품 사진을 즉시 만들 수 있습니다. 말 그대로 우리 비즈니스에 수천 달러를 절약해주고 있습니다."'
      },
      {
        name: '마이클 앤더슨',
        role: 'ArtStation의 디지털 아티스트',
        answer: '"Raphael의 AI 이미지 생성기는 게임 차이저입니다. FLUX.1-Dev 모델은 믿을 수 없을 정도로 세밀한 이미지를 생성하고, 그것을 컨셉트 아트로 사용합니다. 완전히 무료라는 것이 놀라워요!"'
      }
    ]
  },
  'Deutsch': {
    features: 'Funktionen',
    faqs: 'Häufig gestellte Fragen',
    title: 'Ein beeindruckendes AI-generiertes Bild in Sekunden erstellen',
    subtitle: 'Die erste unbegrenzte kostenlose AI-Bildgenerator der Welt',
    free: '100% kostenlos',
    poweredBy: 'Powered by Flux.1 Dev',
    noLogin: 'Kein Login erforderlich',
    unlimited: 'Unbegrenzte Generierungen',
    generator: 'AI-Bildgenerator',
    getInspired: 'Inspiration bekommen',
    getInspiredDesc: 'Inspiriert von denen, die mit Raphael arbeiten',
    testimonial: 'Testimonial',
    testimonialTitle: 'Was die Benutzer über Raphael AI sagen',
    testimonialDesc: 'Hören Sie von Kreativen und Fachleuten, die unseren AI-Bildgenerator täglich verwenden.',
    faqTitle: 'Häufig gestellte Fragen',
    faqContact: 'Haben Sie eine andere Frage? Bitte kontaktieren Sie uns unter support@raphael.app',
    copyright: '© 2024 Raphael AI. Alle Rechte vorbehalten.',
    footerDesc: 'Ein beeindruckendes AI-generiertes Bild in Sekunden mit dem ersten unbegrenzten kostenlosen AI-Bildgenerator der Welt erstellen.',
    product: 'Produkt',
    company: 'Firma',
    about: 'Über uns',
    blog: 'Blog',
    contact: 'Kontakt',
    api: 'API',
    pricing: 'Preis',
    keyFeaturesTitle: 'Hauptfunktionen von Raphael',
    keyFeaturesDesc: 'Erleben Sie die nächste Generation der KI-Bildgenerierung - leistungsstark, kostenlos und datenschutzorientiert.',
    zeroCost: 'Kostenlose Erstellung',
    zeroCostDesc: 'Der weltweit erste komplett kostenlose KI-Bildgenerator ohne Nutzungslimits oder Registrierungspflicht.',
    stateArt: 'Modernste Qualität',
    stateArtDesc: 'Angetrieben vom FLUX.1-Dev-Modell, das fotorealistische Bilder mit außergewöhnlichen Details und künstlerischer Stilkontrolle liefert.',
    textUnderstanding: 'Fortgeschrittenes Textverständnis',
    textUnderstandingDesc: 'Überlegene Text-zu-Bild-Fähigkeiten mit präziser Interpretation komplexer Eingaben und Textüberlagerungsfunktionen.',
    lightningFast: 'Blitzschnelle Generierung',
    lightningFastDesc: 'Optimierte Inferenz-Pipeline für schnelle Bildgenerierung ohne Qualitätseinbußen.',
    privacy: 'Verbesserter Datenschutz',
    privacyDesc: 'Null-Datenspeicherung-Politik - Ihre Eingaben und generierten Bilder werden nie auf unseren Servern gespeichert.',
    multiStyle: 'Multi-Stil-Unterstützung',
    multiStyleDesc: 'Erstellen Sie Bilder in verschiedenen künstlerischen Stilen, von fotorealistisch bis Anime, von Ölgemälden bis zur digitalen Kunst.',
    faqItems: [
      {
        question: 'Was ist Raphael AI und wie funktioniert es?',
        answer: 'Raphael AI ist der erste vollständig kostenlose, unbegrenzte AI-Bildgenerator, der auf dem FLUX.1-Dev-Modell basiert. Es ermöglicht es Ihnen, hochwertige Bilder aus Textbeschreibungen zu erstellen, ohne dass Sie sich registrieren oder Grenzen einhalten müssen.'
      },
      {
        question: 'Ist Raphael AI wirklich kostenlos?',
        answer: 'Ja, Raphael AI ist vollständig kostenlos! Wir sind daran interessiert, den größten und stärksten kostenlosen AI-Bildgenerator der Welt zu werden. Es gibt keine versteckten Kosten, keine Kreditkarte erforderlich, und es gibt keine Nutzungsgrenzen.'
      },
      {
        question: 'Was macht Raphael AI von anderen AI-Bildgeneratoren?',
        answer: 'Raphael AI ist die einzige Plattform, die Zugriff auf das starke FLUX.1-Dev-Modell mit unbegrenztem kostenlosen Zugriff bietet. Wir bieten eine überlegene Bildqualität, eine schnelle Generierungsgeschwindigkeit und vollständige Datenschutzschutz, alles ohne Kosten oder Registrierungsanforderungen.'
      },
      {
        question: 'Muss ich ein Konto erstellen, um Raphael AI zu verwenden?',
        answer: 'Nein, Sie müssen kein Konto erstellen oder sich registrieren. Besuchen Sie einfach raphael.app und starten Sie sofort das Bildgenerieren. Wir glauben, dass AI für jeden zugänglich sein sollte, ohne Barrieren zu überschreiten.'
      },
      {
        question: 'Welche Arten von Bildern kann ich mit Raphael AI erstellen?',
        answer: 'Sie können eine Vielzahl von Bildern erstellen, einschließlich fotorealistischen Szenen, künstlerischen Illustrationen, digitaler Kunst, Anime-Stilbildern und mehr. Das FLUX.1-Dev-Modell ist in der Lage, komplexe Befehle zu verstehen und eine vielfältige visuelle Stilrichtung zu generieren.'
      },
      {
        question: 'Wie schützt Raphael AI meine Privatsphäre?',
        answer: 'Wir nehmen die Privatsphäre ernst. Wir speichern Ihre Befehle oder generierte Bilder nicht auf unseren Servern, und wir benötigen keine persönlichen Informationen. Ihre Erstellungen bleiben vollständig privat und werden nach der Generierung gelöscht.'
      },
      {
        question: 'Was ist das FLUX.1-Dev-Modell?',
        answer: 'FLUX.1-Dev ist ein modernes AI-Modell, das für seine hervorragende Bildqualität, Präzision der Anweisungen und Stilvielfalt bekannt ist. Es ist normalerweise teuer zu verwenden, aber Raphael macht es jedem kostenlos zur Verfügung.'
      },
      {
        question: 'Gibt es irgendwelche Einschränkungen bei der Verwendung von Raphael AI?',
        answer: 'Obwohl Raphael AI kostenlos und unbegrenzt ist, halten wir Standard-Inhaltsrichtlinien aufrecht, um eine angemessene Verwendung zu gewährleisten. Derzeit ist die Plattform für Webdesign ausgelegt, und mobile Apps sind für die Zukunft geplant.'
      },
      {
        question: 'Kann ich die generierten Bilder für kommerzielle Zwecke verwenden?',
        answer: 'Ja, Sie besitzen die Rechte an den von Ihnen mit Raphael AI generierten Bildern. Sie können sie sowohl für persönliche als auch kommerzielle Zwecke verwenden, was es für Kreative und Unternehmen perfekt macht.'
      },
      {
        question: 'Ist Raphael AI auf mobilen Geräten verfügbar?',
        answer: 'Derzeit ist Raphael AI über unsere Website raphael.app verfügbar, die auf mobilen Browsern sehr gut funktioniert. Wir entwickeln derzeit spezialisierte mobile Apps, um eine noch bessere Erfahrung zu bieten.'
      },
      {
        question: 'Wie kann ich Feedback oder Probleme melden?',
        answer: 'Wir freuen uns über Ihr Feedback! Sie können sich mit unserem Support-Team unter support@raphael.app in Verbindung setzen. Ihr Input hilft uns, die beste kostenlose AI-Bildgenerierungsdienstleistung zu verbessern und aufrechtzuerhalten.'
      },
      {
        question: 'Was ist Raphael AI zukünftig geplant?',
        answer: 'Wir verbessern unseren Service durch regelmäßige Updates des AI-Modells und der Benutzeroberfläche. Zukünftige Pläne umfassen mobile Apps und zusätzliche kreative Funktionen, während wir unseren vollständigen Verpflichtungen zur kostenlosen Bereitstellung treten.'
      }
    ],
    testimonials: [
      {
        name: 'David Thompson',
        role: 'Independent Game Developer',
        answer: '"As a solo game dev, Raphael AI Image Generator is invaluable. The speed and quality of asset generation are unmatched, and being free means I can focus my budget elsewhere."'
      },
      {
        name: 'Emily Parker',
        role: 'Content Creator on YouTube',
        answer: '"I create thumbnails daily using Raphael AI Image Generator. The text understanding is incredible - it captures exactly what I need, and the no-registration policy makes it super convenient."'
      },
      {
        name: 'Robert Wilson',
        role: 'UI/UX Designer at TechFlow',
        answer: '"The FLUX.1-Dev model in Raphael AI Image Generator produces the most consistent and high-quality results I\'ve seen. It\'s become our go-to tool for generating mockup images."'
      },
      {
        name: 'Jennifer Adams',
        role: 'E-commerce Business Owner',
        answer: '"Running an online store requires constant image creation. Raphael\'s free AI Image Generator helps me create professional product photos instantly. It\'s literally saving my business thousands."'
      },
      {
        name: 'Michael Anderson',
        role: 'Digital Artist at ArtStation',
        answer: '"Raphael\'s AI Image Generator is a game-changer. The FLUX.1-Dev model produces incredibly detailed images that I use as concept art. The fact that it\'s completely free is mind-blowing!"'
      }
    ]
  },
  'Français': {
    features: 'Fonctionnalités',
    faqs: 'Questions fréquentes',
    title: 'Créer une image générée par IA en quelques secondes',
    subtitle: 'Premier générateur d\'images gratuites et illimitées de l\'histoire',
    free: '100% gratuit',
    poweredBy: 'Propulsé par Flux.1 Dev',
    noLogin: 'Pas de connexion nécessaire',
    unlimited: 'Génération illimitée',
    generator: 'Générateur d\'images IA',
    getInspired: 'Obtenir une inspiration',
    getInspiredDesc: 'Tirez parti de ce que les autres créent avec Raphael',
    testimonial: 'Témoignage',
    testimonialTitle: 'Ce que les utilisateurs disent de Raphael AI',
    testimonialDesc: 'Écoutez les avis des créatifs et des professionnels qui utilisent quotidiennement notre service de génération d\'images IA.',
    faqTitle: 'Questions fréquentes',
    faqContact: 'Vous avez une autre question? Contactez-nous à support@raphael.app',
    copyright: '© 2024 Raphael AI. Tous droits réservés.',
    footerDesc: 'Créer une image générée par IA en quelques secondes avec le premier générateur d\'images gratuites et illimitées de l\'histoire.',
    product: 'Produit',
    company: 'Entreprise',
    about: 'À propos',
    blog: 'Blog',
    contact: 'Contact',
    api: 'API',
    pricing: 'Prix',
    keyFeaturesTitle: 'Fonctionnalités de Raphael',
    keyFeaturesDesc: 'Expérience la prochaine génération de génération d\'images IA - puissante, gratuite et axée sur la vie privée',
    zeroCost: 'Création à coût zéro',
    zeroCostDesc: 'Premier générateur d\'images IA gratuit et illimité du monde. Aucun coût, aucune limite d\'utilisation, aucun besoin de s\'inscrire',
    stateArt: 'Qualité d\'état de l\'art',
    stateArtDesc: 'Propulsé par le modèle FLUX.1-Dev, ce générateur d\'images IA produit des images de niveau professionnel, avec une excellente qualité d\'image et un contrôle parfait de l\'artiste.',
    textUnderstanding: 'Compréhension avancée du texte',
    textUnderstandingDesc: 'Capacité exceptionnelle de conversion texte-image, avec une interprétation précise des invites complexes et des fonctionnalités de superposition de texte.',
    lightningFast: 'Génération rapide',
    lightningFastDesc: 'Pipeline d\'inférence optimisée assurant une génération d\'images rapide sans compromettre la qualité.',
    privacy: 'Protection renforcée de la vie privée',
    privacyDesc: 'Politique de non-conservation des données - vos invites et images générées ne sont jamais stockées sur nos serveurs.',
    multiStyle: 'Support de plusieurs styles',
    multiStyleDesc: 'Créer des images dans divers styles artistiques, de la photographie réaliste à l\'animation, des peintures à l\'huile aux arts numériques.',
    faqItems: [
      {
        question: 'Qu\'est-ce que Raphael AI et comment ça fonctionne?',
        answer: 'Raphael AI est le premier générateur d\'images gratuites et illimitées de l\'histoire, basé sur le modèle FLUX.1-Dev. Il vous permet de créer des images de haute qualité à partir de descriptions textuelles sans aucune restriction d\'inscription ou de limites d\'utilisation.'
      },
      {
        question: 'Raphael AI est-il vraiment gratuit?',
        answer: 'Oui, Raphael AI est entièrement gratuit! Nous nous engageons à devenir le plus grand et le plus puissant générateur d\'images gratuites de l\'histoire. Il n\'y a pas de coûts cachés, aucune carte de crédit requise, et aucune limite d\'utilisation.'
      },
      {
        question: 'Quelle est la différence entre Raphael AI et les autres générateurs d\'images IA?',
        answer: 'Raphael AI est la seule plateforme offrant un accès illimité et gratuit au puissant modèle FLUX.1-Dev. Nous fournissons une excellente qualité d\'image, une vitesse de génération rapide et une protection totale de la vie privée, tout cela sans aucun coût ou exigence de l\'inscription.'
      },
      {
        question: 'Dois-je créer un compte pour utiliser Raphael AI?',
        answer: 'Non, vous n\'avez pas besoin de créer un compte ou de vous inscrire. Il suffit de visiter raphael.app et de commencer immédiatement à générer des images. Nous croyons que l\'IA doit être accessible à tous sans barrières.'
      },
      {
        question: 'Quels types d\'images puis-je créer avec Raphael AI?',
        answer: 'Vous pouvez créer une variété d\'images, y compris des scènes photoréalistes, des illustrations artistiques, des arts numériques, des images d\'anime et plus encore. Le modèle FLUX.1-Dev est excellent pour comprendre les invites complexes et générer une variété de styles visuels.'
      },
      {
        question: 'Comment Raphael AI protège-t-il ma vie privée?',
        answer: 'Nous prenons la vie privée au sérieux. Nous ne stockons pas vos invites ou images générées sur nos serveurs, et nous n\'exigeons aucune information personnelle. Vos créations restent complètement privées et sont supprimées après la génération.'
      },
      {
        question: 'Qu\'est-ce que le modèle FLUX.1-Dev?',
        answer: 'FLUX.1-Dev est un modèle d\'IA de pointe pour sa qualité d\'image exceptionnelle, sa précision des invites et sa polyvalence stylistique. Il est généralement coûteux à utiliser, mais Raphael le rend gratuit pour tout le monde.'
      },
      {
        question: 'Y a-t-il des limitations à l\'utilisation de Raphael AI?',
        answer: 'Bien que Raphael AI soit gratuit et illimité, nous maintenons des lignes directrices de contenu standard pour assurer une utilisation appropriée. La plateforme est actuellement conçue pour le web, avec des applications mobiles prévues pour le futur.'
      },
      {
        question: 'Puis-je utiliser les images générées à des fins commerciales?',
        answer: 'Oui, vous possédez les droits sur les images que vous générez avec Raphael AI. Vous pouvez les utiliser à des fins personnelles et commerciales, ce qui est parfait pour les créatifs et les entreprises.'
      },
      {
        question: 'Raphael AI est-il disponible sur des appareils mobiles?',
        answer: 'Actuellement, Raphael AI est disponible via notre site web raphael.app, ce qui fonctionne très bien sur les navigateurs mobiles. Nous développons actuellement des applications mobiles dédiées pour offrir une meilleure expérience bientôt.'
      },
      {
        question: 'Comment puis-je fournir des commentaires ou signaler des problèmes?',
        answer: 'Nous vous remercions pour vos commentaires! Vous pouvez nous contacter au support@raphael.app. Votre avis nous aide à améliorer et à maintenir le meilleur service de génération d\'images IA gratuites.'
      },
      {
        question: 'Quelle est la prochaine étape pour Raphael AI?',
        answer: 'Nous améliorons continuellement notre service grâce à des mises à jour régulières de l\'IA et de l\'interface utilisateur. Les futures idées incluent des applications mobiles et des fonctionnalités créatives supplémentaires, tout en respectant notre engagement à rester totalement gratuit.'
      }
    ],
    testimonials: [
      {
        name: 'David Thompson',
        role: 'Independent Game Developer',
        answer: '"As a solo game dev, Raphael AI Image Generator is invaluable. The speed and quality of asset generation are unmatched, and being free means I can focus my budget elsewhere."'
      },
      {
        name: 'Emily Parker',
        role: 'Content Creator on YouTube',
        answer: '"I create thumbnails daily using Raphael AI Image Generator. The text understanding is incredible - it captures exactly what I need, and the no-registration policy makes it super convenient."'
      },
      {
        name: 'Robert Wilson',
        role: 'UI/UX Designer at TechFlow',
        answer: '"The FLUX.1-Dev model in Raphael AI Image Generator produces the most consistent and high-quality results I\'ve seen. It\'s become our go-to tool for generating mockup images."'
      },
      {
        name: 'Jennifer Adams',
        role: 'E-commerce Business Owner',
        answer: '"Running an online store requires constant image creation. Raphael\'s free AI Image Generator helps me create professional product photos instantly. It\'s literally saving my business thousands."'
      },
      {
        name: 'Michael Anderson',
        role: 'Digital Artist at ArtStation',
        answer: '"Raphael\'s AI Image Generator is a game-changer. The FLUX.1-Dev model produces incredibly detailed images that I use as concept art. The fact that it\'s completely free is mind-blowing!"'
      }
    ]
  },
  'Italiano': {
    features: 'Funzionalità',
    faqs: 'Domande frequenti',
    title: 'Crea immagini generate dall\'IA in pochi secondi',
    subtitle: 'Il primo generatore di immagini IA gratuito e illimitato al mondo',
    free: '100% gratuito',
    poweredBy: 'Basato su Flux.1 Dev',
    noLogin: 'Nessun login richiesto',
    unlimited: 'Generazione illimitata',
    generator: 'Generatore di immagini IA',
    getInspired: 'Trova ispirazione',
    getInspiredDesc: 'Lasciati ispirare da ciò che gli altri creano con Raphael',
    testimonial: 'Testimonianze',
    testimonialTitle: 'Cosa dicono gli utenti di Raphael AI',
    testimonialDesc: 'Ascolta le opinioni dei creativi e dei professionisti che utilizzano quotidianamente il nostro generatore di immagini IA.',
    faqTitle: 'Domande frequenti',
    faqContact: 'Hai altre domande? Contattaci a support@raphael.app',
    copyright: '© 2024 Raphael AI. Tutti i diritti riservati.',
    footerDesc: 'Crea immagini straordinarie generate dall\'IA in pochi secondi con il primo generatore di immagini IA gratuito e illimitato al mondo.',
    product: 'Prodotto',
    company: 'Azienda',
    about: 'Chi siamo',
    blog: 'Blog',
    contact: 'Contatti',
    api: 'API',
    pricing: 'Prezzi',
    keyFeaturesTitle: 'Caratteristiche principali di Raphael',
    keyFeaturesDesc: 'Esperienza la prossima generazione di generazione di immagini IA - potente, gratuita e con attenzione alla privacy',
    zeroCost: 'Creazione a costo zero',
    zeroCostDesc: 'Primo generatore di immagini IA gratuito e illimitato del mondo. Nessun costo, nessuna limitazione di utilizzo, nessun bisogno di iscriversi',
    stateArt: 'Qualità di stato dell\'arte',
    stateArtDesc: 'Basato sul modello FLUX.1-Dev, questo generatore di immagini IA produce immagini di livello professionale, con una eccellente qualità delle immagini e un perfetto controllo dello stile artistico.',
    textUnderstanding: 'Comprendimento avanzato del testo',
    textUnderstandingDesc: 'Capacità eccezionale di conversione testo-immagine, con una interpretazione precisa di prompt complessi e funzionalità di sovrapposizione del testo.',
    lightningFast: 'Generazione rapidissima',
    lightningFastDesc: 'Pipeline di inferenza ottimizzata che assicura una generazione rapida delle immagini senza compromettere la qualità.',
    privacy: 'Protezione avanzata della privacy',
    privacyDesc: 'Politica di zero conservazione dei dati - i tuoi prompt e le immagini generate non vengono mai memorizzati sui nostri server.',
    multiStyle: 'Supporto multi-stile',
    multiStyleDesc: 'Crea immagini in vari stili artistici, dal fotorrealistico all\'anime, dai dipinti ad olio all\'arte digitale.',
    faqItems: [
      {
        question: 'Raphael AI e cosa fa? Come funziona?',
        answer: 'Raphael AI è il primo generatore di immagini gratuito e illimitato dell\'historia, basato sul modello FLUX.1-Dev. Ti permette di creare immagini di alta qualità a partire da descrizioni testuali senza dover registrarti o rispettare limiti di utilizzo.'
      },
      {
        question: 'Raphael AI è veramente gratuito?',
        answer: 'Sì, Raphael AI è completamente gratuito! Ci impegniamo a diventare il più grande e potente generatore di immagini gratuite dell\'historia. Non ci sono costi nascosti, nessuna carta di credito richiesta, nessun limite di utilizzo.'
      },
      {
        question: 'Qual è la differenza tra Raphael AI e gli altri generatori di immagini IA?',
        answer: 'Raphael AI è l\'unico piattaforma che offre un accesso illimitato e gratuito al potente modello FLUX.1-Dev. Ci offriamo una qualità delle immagini eccezionale, una velocità di generazione rapida e una protezione totale della privacy, tutto ciò senza costi o richieste di iscrizione.'
      },
      {
        question: 'Devo creare un account per usare Raphael AI?',
        answer: 'No, non è necessario creare un account o registrarsi. Basta visitare raphael.app e iniziare subito a generare immagini. Crediamo che l\'IA debba essere accessibile a tutti senza barriere.'
      },
      {
        question: 'Con Raphael AI posso creare quali tipi di immagini?',
        answer: 'Puoi creare una varietà di immagini, tra cui scene fotorrealistiche, illustrazioni artistiche, arte digitale, immagini di anime e molto altro. Il modello FLUX.1-Dev è eccezionale nel capire comandi complessi e generare una varietà di stili visivi.'
      },
      {
        question: 'Raphael AI come protegge la mia privacy?',
        answer: 'Ci prendiamo la privacy molto seriamente. Non memorizziamo i tuoi prompt o immagini sul server, né richiediamo alcuna informazione personale. Le tue creazioni restano completamente private e vengono eliminate dopo la generazione.'
      },
      {
        question: 'Cos\'è il modello FLUX.1-Dev?',
        answer: 'FLUX.1-Dev è un modello di IA di punta per la sua qualità delle immagini eccezionale, la precisione dei comandi e la varietà stilistica. Normalmente costa, ma Raphael lo rende gratuito a tutti.'
      },
      {
        question: 'Ci sono limiti all\'uso di Raphael AI?',
        answer: 'Mentre Raphael AI è gratuito e illimitato, manteniamo linee guida standard sui contenuti per garantire un uso appropriato. La piattaforma è attualmente progettata per il web, con app mobili pianificate per il futuro.'
      },
      {
        question: 'Puis-je utiliser les images générées à des fins commerciales?',
        answer: 'Oui, vous possédez les droits sur les images que vous générez avec Raphael AI. Vous pouvez les utiliser à des fins personnelles et commerciales, ce qui est parfait pour les créatifs et les entreprises.'
      },
      {
        question: 'Raphael AI est-il disponible sur des appareils mobiles?',
        answer: 'Actuellement, Raphael AI est disponible via notre site web raphael.app, ce qui fonctionne très bien sur les navigateurs mobiles. Nous développons actuellement des applications mobiles dédiées pour offrir une meilleure expérience bientôt.'
      },
      {
        question: 'Comment puis-je fournir des commentaires ou signaler des problèmes?',
        answer: 'Nous vous remercions pour vos commentaires! Vous pouvez nous contacter au support@raphael.app. Votre avis nous aide à améliorer et à maintenir le meilleur service de génération d\'images IA gratuites.'
      },
      {
        question: 'Quelle est la prochaine étape pour Raphael AI?',
        answer: 'Nous améliorons continuellement notre service grâce à des mises à jour régulières de l\'IA et de l\'interface utilisateur. Les futures idées incluent des applications mobiles et des fonctionnalités créatives supplémentaires, tout en respectant notre engagement à rester totalement gratuit.'
      }
    ],
    testimonials: [
      {
        name: 'ديفيد طومسون',
        role: 'مطور ألعاب مستقل',
        answer: '"كمطور ألعاب مستقل، Raphael AI لا يقدر بثمن. سرعة وجودة إنشاء الأصول لا مثيل لها، وكونه مجانياً يعني أنني أستطيع تركيز ميزانيتي في مكان آخر."'
      },
      {
        name: 'إيميلي باركر',
        role: 'منشئة محتوى على يوتيوب',
        answer: '"أقوم بإنشاء صور مصغرة يومياً باستخدام Raphael AI. فهم النص مذهل - يلتقط بالضبط ما أحتاجه، وسياسة عدم التسجيل تجعله مريحاً للغاية."'
      },
      {
        name: 'روبرت ويلسون',
        role: 'مصمم واجهات مستخدم في TechFlow',
        answer: '"نموذج FLUX.1-Dev في Raphael AI ينتج أكثر النتائج ثباتاً وجودة مما رأيت. لقد أصبح أداتنا المفضلة لإنشاء صور النماذج الأولية."'
      },
      {
        name: 'جنيفر آدامز',
        role: 'مالكة متجر إلكتروني',
        answer: '"إدارة متجر عبر الإنترنت تتطلب إنشاء صور باستمرار. مولد صور Raphael المجاني يساعدني في إنشاء صور منتجات احترافية فوراً. إنه يوفر لشركتي آلاف الدولارات حرفياً."'
      },
      {
        name: 'مايكل أندرسون',
        role: 'فنان رقمي في ArtStation',
        answer: '"مولد صور Raphael يغير قواعد اللعبة. نموذج FLUX.1-Dev ينتج صوراً غنية بالتفاصيل أستخدمها كفن مفاهيمي. حقيقة أنه مجاني تماماً أمر مذهل!"'
      }
    ]
  },
  'Español': {
    features: 'Características',
    faqs: 'Preguntas frecuentes',
    title: 'Crear imágenes generadas por IA en segundos',
    subtitle: 'El primer generador de imágenes gratuitas y sin límites del mundo',
    free: '100% gratis',
    poweredBy: 'Powered by Flux.1 Dev',
    noLogin: 'No se requiere inicio de sesión',
    unlimited: 'Generaciones ilimitadas',
    generator: 'Generador de imágenes IA',
    getInspired: 'Inspírate',
    getInspiredDesc: 'Inspírate de lo que otros están creando con Raphael',
    testimonial: 'Testimonio',
    testimonialTitle: 'Lo que los usuarios dicen sobre Raphael AI',
    testimonialDesc: 'Escucha las opiniones de creadores y profesionales que utilizan diariamente nuestro servicio de generación de imágenes IA.',
    faqTitle: 'Preguntas frecuentes',
    faqContact: '¿Tienes otra pregunta? Contáctanos en support@raphael.app',
    copyright: '© 2024 Raphael AI. Todos los derechos reservados.',
    footerDesc: 'Crear imágenes generadas por IA en segundos con el primer generador de imágenes gratuitas y sin límites del mundo.',
    product: 'Producto',
    company: 'Empresa',
    about: 'Sobre nosotros',
    blog: 'Blog',
    contact: 'Contacto',
    api: 'API',
    pricing: 'Precio',
    keyFeaturesTitle: 'Características principales de Raphael',
    keyFeaturesDesc: 'Experimenta la próxima generación de generación de imágenes IA - potente, gratuita y centrada en la privacidad',
    zeroCost: 'Creación de costo cero',
    zeroCostDesc: 'Primer generador de imágenes IA gratuito y sin límites del mundo. Sin costo, sin límite de uso, sin necesidad de registrarse',
    stateArt: 'Calidad de estado del arte',
    stateArtDesc: 'Propulsado por el modelo FLUX.1-Dev, este generador de imágenes IA produce imágenes de nivel profesional, con una excelente calidad de imagen y un control perfecto del estilo artístico.',
    textUnderstanding: 'Comprensión avanzada del texto',
    textUnderstandingDesc: 'Capacidad excepcional de conversión texto-imagen, con una interpretación precisa de los comandos complejos y las funciones de superposición de texto.',
    lightningFast: 'Generación rápida',
    lightningFastDesc: 'Pipeline de inferencia optimizada que asegura una generación rápida de imágenes sin comprometer la calidad.',
    privacy: 'Privacidad mejorada',
    privacyDesc: 'Política de cero retención de datos - tus comandos y las imágenes generadas no se guardan en nuestros servidores.',
    multiStyle: 'Soporte de varios estilos',
    multiStyleDesc: 'Crear imágenes en varios estilos artísticos, desde la fotografía realista hasta el anime, de la pintura al óleo hasta el arte digital.',
    faqItems: [
      {
        question: '¿Qué es Raphael AI y cómo funciona?',
        answer: 'Raphael AI es el primer generador de imágenes gratuitas y sin límites del mundo, basado en el modelo FLUX.1-Dev. Te permite crear imágenes de alta calidad a partir de descripciones textuales sin necesidad de registrarte o cumplir límites de uso.'
      },
      {
        question: '¿Raphael AI es realmente gratuito?',
        answer: '¡Sí, Raphael AI es completamente gratuito! Nos comprometemos a convertirnos en el mayor y más potente generador de imágenes gratuitas del mundo. No hay costos ocultos, ninguna tarjeta de crédito requerida, y no hay límites de uso.'
      },
      {
        question: '¿Qué diferencia hay entre Raphael AI y otros generadores de imágenes IA?',
        answer: 'Raphael AI es la única plataforma que ofrece acceso ilimitado y gratuito al potente modelo FLUX.1-Dev. Nosotros te proporcionamos una excelente calidad de imagen, una velocidad de generación rápida y una protección total de la privacidad, todo eso sin costo ni requisitos de inscripción.'
      },
      {
        question: '¿Necesito crear una cuenta para usar Raphael AI?',
        answer: 'No, no es necesario crear una cuenta o registrarse. Simplemente visita raphael.app y comienza a generar imágenes de inmediato. Creemos que la IA debe ser accesible para todos sin barreras.'
      },
      {
        question: '¿Con Raphael AI puedo crear qué tipos de imágenes?',
        answer: 'Puedes crear una variedad de imágenes, incluyendo escenas fotorrealistas, ilustraciones artísticas, arte digital, imágenes de anime y mucho más. El modelo FLUX.1-Dev es excelente para entender comandos complejos y generar una variedad de estilos visuales.'
      },
      {
        question: '¿Raphael AI cómo protege mi privacidad?',
        answer: 'Nos tomamos la privacidad muy en serio. No guardamos tus comandos o imágenes generadas en nuestros servidores, y tampoco requerimos ninguna información personal. Tus creaciones permanecen completamente privadas y se eliminan después de la generación.'
      },
      {
        question: '¿Qué es el modelo FLUX.1-Dev?',
        answer: 'FLUX.1-Dev es un modelo de IA de punta para su excelente calidad de imagen, precisión de comandos y variedad estilística. Normalmente cuesta, pero Raphael lo hace gratuito para todos.'
      },
      {
        question: '¿Hay algún límite para usar Raphael AI?',
        answer: 'Raphael AI es gratuito y sin límites, pero mantenemos líneas de guía estándar sobre contenido para garantizar un uso apropiado. La plataforma está actualmente diseñada para la web, con aplicaciones móviles planeadas para el futuro.'
      },
      {
        question: '¿Puedo usar las imágenes generadas con fines comerciales?',
        answer: 'Sí, usted tiene derechos sobre las imágenes que genera con Raphael AI. Puede usarlos tanto para fines personales como comerciales, lo que es perfecto para creadores y empresas.'
      },
      {
        question: '¿Raphael AI está disponible en dispositivos móviles?',
        answer: 'Actualmente, Raphael AI está disponible a través de nuestro sitio web raphael.app, que funciona muy bien en navegadores móviles. Actualmente estamos desarrollando aplicaciones móviles dedicadas para ofrecer una mejor experiencia en poco tiempo.'
      },
      {
        question: '¿Cómo puedo proporcionar comentarios o informar problemas?',
        answer: '¡Estamos encantados de escuchar tus comentarios! Puedes contactarnos en support@raphael.app. Tu opinión nos ayuda a mejorar y mantener el mejor servicio de generación de imágenes IA gratuitas.'
      },
      {
        question: '¿Cuál es la próxima etapa para Raphael AI?',
        answer: 'Estamos mejorando continuamente nuestro servicio gracias a actualizaciones regulares del modelo de IA y la interfaz de usuario. Las ideas futuras incluyen aplicaciones móviles y funciones creativas adicionales, manteniendo nuestra promesa de ser totalmente gratuita.'
      }
    ],
    testimonials: [
      {
        name: 'David Thompson',
        role: 'Independent Game Developer',
        answer: '"As a solo game dev, Raphael AI Image Generator is invaluable. The speed and quality of asset generation are unmatched, and being free means I can focus my budget elsewhere."'
      },
      {
        name: 'Emily Parker',
        role: 'Content Creator on YouTube',
        answer: '"I create thumbnails daily using Raphael AI Image Generator. The text understanding is incredible - it captures exactly what I need, and the no-registration policy makes it super convenient."'
      },
      {
        name: 'Robert Wilson',
        role: 'UI/UX Designer at TechFlow',
        answer: '"The FLUX.1-Dev model in Raphael AI Image Generator produces the most consistent and high-quality results I\'ve seen. It\'s become our go-to tool for generating mockup images."'
      },
      {
        name: 'Jennifer Adams',
        role: 'E-commerce Business Owner',
        answer: '"Running an online store requires constant image creation. Raphael\'s free AI Image Generator helps me create professional product photos instantly. It\'s literally saving my business thousands."'
      },
      {
        name: 'Michael Anderson',
        role: 'Digital Artist at ArtStation',
        answer: '"Raphael\'s AI Image Generator is a game-changer. The FLUX.1-Dev model produces incredibly detailed images that I use as concept art. The fact that it\'s completely free is mind-blowing!"'
      }
    ]
  },
  'Português': {
    features: 'Características',
    faqs: 'Perguntas frequentes',
    title: 'Criar imagens geradas pela IA em segundos',
    subtitle: 'O primeiro gerador de imagens gratuitas e sem limites do mundo',
    free: '100% grátis',
    poweredBy: 'Powered by Flux.1 Dev',
    noLogin: 'Não é necessário login',
    unlimited: 'Gerações ilimitadas',
    generator: 'Gerador de imagens IA',
    getInspired: 'Obter inspiração',
    getInspiredDesc: 'Obtenha inspiração de lo que outros estão criando com Raphael',
    testimonial: 'Depoimento',
    testimonialTitle: 'O que os usuários dizem sobre Raphael AI',
    testimonialDesc: 'Ouvir as opiniões de criadores e profissionais que usam diariamente nosso serviço de geração de imagens IA.',
    faqTitle: 'Perguntas frequentes',
    faqContact: 'Você tem outra pergunta? Contate-nos em support@raphael.app',
    copyright: '© 2024 Raphael AI. Todos os direitos reservados.',
    footerDesc: 'Criar imagens geradas pela IA em segundos com o primeiro gerador de imagens gratuitas e sem limites do mundo.',
    product: 'Produto',
    company: 'Empresa',
    about: 'Sobre nós',
    blog: 'Blog',
    contact: 'Contato',
    api: 'API',
    pricing: 'Preço',
    keyFeaturesTitle: 'Características principais de Raphael',
    keyFeaturesDesc: 'Experimente a próxima geração de geração de imagens IA - potente, gratuita e centrada na privacidade',
    zeroCost: 'Criação de custo zero',
    zeroCostDesc: 'Primeiro gerador de imagens IA gratuito e sem limites do mundo. Sem custo, sem limite de uso, sem necessidade de se inscrever',
    stateArt: 'Qualidade de estado do arte',
    stateArtDesc: 'Propulsado pelo modelo FLUX.1-Dev, este gerador de imagens IA produz imagens de nível profissional, com uma excelente qualidade de imagem e um controle perfeito do estilo artístico.',
    textUnderstanding: 'Compreensão avançada do texto',
    textUnderstandingDesc: 'Capacidade excepcional de conversão texto-imagem, com uma interpretação precisa dos comandos complexos e das funcionalidades de sobreposição de texto.',
    lightningFast: 'Geração rápida',
    lightningFastDesc: 'Pipeline de inferência otimizada que garante uma geração rápida de imagens sem comprometer a qualidade.',
    privacy: 'Privacidade aprimorada',
    privacyDesc: 'Política de zero retenção de dados - seus comandos e as imagens geradas nunca são armazenados em nossos servidores.',
    multiStyle: 'Suporte a vários estilos',
    multiStyleDesc: 'Criar imagens em vários estilos artísticos, desde a fotografia realista até o anime, da pintura a óleo até o arte digital.',
    faqItems: [
      {
        question: 'O que é Raphael AI e como funciona?',
        answer: 'Raphael AI é o primeiro gerador de imagens gratuitas e sem limites do mundo, baseado no modelo FLUX.1-Dev. Permite criar imagens de alta qualidade a partir de descrições textuais sem precisar se inscrever ou cumprir limites de uso.'
      },
      {
        question: 'Raphael AI é realmente gratuito?',
        answer: 'Sim, Raphael AI é completamente gratuito! Nós nos comprometemos a tornar-se o maior e mais potente gerador de imagens gratuitas do mundo. Não há custos ocultos, nenhum cartão de crédito exigido, e não há limites de uso.'
      },
      {
        question: 'Qual é a diferença entre Raphael AI e outros geradores de imagens IA?',
        answer: 'Raphael AI é a única plataforma que oferece acesso ilimitado e gratuito ao potente modelo FLUX.1-Dev. Nós fornecemos uma excelente qualidade de imagem, uma velocidade de geração rápida e uma proteção total da privacidade, tudo isso sem custo ou exigências de inscrição.'
      },
      {
        question: 'Eu preciso criar uma conta para usar Raphael AI?',
        answer: 'Não, você não precisa criar uma conta ou se inscrever. Basta visitar raphael.app e começar imediatamente a gerar imagens. Acreditamos que a IA deve ser acessível a todos sem barreiras.'
      },
      {
        question: 'Com Raphael AI, o que posso criar?',
        answer: 'Você pode criar uma variedade de imagens, incluindo cenários fotorrealistas, ilustrações artísticas, arte digital, imagens de anime e muito mais. O modelo FLUX.1-Dev é excelente para entender comandos complexos e gerar uma variedade de estilos visuais.'
      },
      {
        question: 'Raphael AI como protege minha privacidade?',
        answer: 'Nós nos preocupamos muito com a privacidade. Não armazenamos seus comandos ou imagens geradas em nossos servidores, e também não exigimos nenhuma informação pessoal. Suas criações permanecem completamente privadas e são excluídas após a geração.'
      },
      {
        question: 'O que é o modelo FLUX.1-Dev?',
        answer: 'FLUX.1-Dev é um modelo de IA de ponta para sua excelente qualidade de imagem, precisão dos comandos e variedade estilística. Normalmente custa, mas Raphael o torna gratuito para todos.'
      },
      {
        question: 'Há algum limite para usar Raphael AI?',
        answer: 'Raphael AI é gratuito e sem limites, mas mantemos diretrizes de conteúdo padrão para garantir um uso apropriado. A plataforma está atualmente projetada para a web, com aplicativos móveis planejados para o futuro.'
      },
      {
        question: 'Posso usar as imagens geradas com fins comerciais?',
        answer: 'Sim, você possui os direitos sobre as imagens que gera com Raphael AI. Você pode usá-las para fins pessoais e comerciais, o que é perfeito para criadores e empresas.'
      },
      {
        question: 'Raphael AI está disponível em dispositivos móveis?',
        answer: 'Atualmente, Raphael AI está disponível através do nosso site web raphael.app, que funciona muito bem em navegadores móveis. Estamos ativamente desenvolvendo aplicativos móveis dedicados para oferecer uma melhor experiência em breve.'
      },
      {
        question: 'Como posso fornecer comentários ou relatar problemas?',
        answer: 'Estamos gratos por seus comentários! Você pode nos contatar no support@raphael.app. Seu feedback nos ajuda a melhorar e manter o melhor serviço de geração de imagens IA gratuitas.'
      },
      {
        question: 'Qual é a próxima etapa para Raphael AI?',
        answer: 'Estamos constantemente melhorando nosso serviço graças a atualizações regulares do modelo de IA e da interface do usuário. As novas ideias incluem aplicativos móveis e funcionalidades criativas adicionais, mantendo nossa promessa de ser totalmente gratuita.'
      }
    ],
    testimonials: [
      {
        name: 'David Thompson',
        role: 'Independent Game Developer',
        answer: '"As a solo game dev, Raphael AI Image Generator is invaluable. The speed and quality of asset generation are unmatched, and being free means I can focus my budget elsewhere."'
      },
      {
        name: 'Emily Parker',
        role: 'Content Creator on YouTube',
        answer: '"I create thumbnails daily using Raphael AI Image Generator. The text understanding is incredible - it captures exactly what I need, and the no-registration policy makes it super convenient."'
      },
      {
        name: 'Robert Wilson',
        role: 'UI/UX Designer at TechFlow',
        answer: '"The FLUX.1-Dev model in Raphael AI Image Generator produces the most consistent and high-quality results I\'ve seen. It\'s become our go-to tool for generating mockup images."'
      },
      {
        name: 'Jennifer Adams',
        role: 'E-commerce Business Owner',
        answer: '"Running an online store requires constant image creation. Raphael\'s free AI Image Generator helps me create professional product photos instantly. It\'s literally saving my business thousands."'
      },
      {
        name: 'Michael Anderson',
        role: 'Digital Artist at ArtStation',
        answer: '"Raphael\'s AI Image Generator is a game-changer. The FLUX.1-Dev model produces incredibly detailed images that I use as concept art. The fact that it\'s completely free is mind-blowing!"'
      }
    ]
  },
  'العربية': {
    features: 'الميزات',
    faqs: 'الأسئلة الشائعة',
    title: 'إنشاء صور توليد الذكاء الاصطناعي في غضون ثوان',
    subtitle: 'أول مولد صور توليد الذكاء الاصطناعي مجاني وبلا حدود',
    free: '100% مجاني',
    poweredBy: 'مدعوم بنموذج Flux.1 Dev',
    noLogin: 'لا تحتاج لتسجيل الدخول',
    unlimited: 'إنشاء بلا حدود',
    generator: 'مولد صور توليد الذكاء الاصطناعي',
    getInspired: 'الحصول على مبادرة',
    getInspiredDesc: 'احصل على مبادرة من أشخاص آخرين ينشأون عملهم باستخدام Raphael',
    testimonial: 'التعليق',
    testimonialTitle: 'ما يقوله المستخدمون عن Raphael AI',
    testimonialDesc: 'اسمع رأي المبدعين والخبراء الذين يستخدمون خدمتنا اليومية لتوليد الصور باستخدام الذكاء الاصطناعي.',
    faqTitle: 'الأسئلة الشائعة',
    faqContact: 'هل لديك سؤال آخر؟ يرجى الاتصال بنا: support@raphael.app',
    copyright: '© 2024 Raphael AI. جميع الحقوق محفوظة.',
    footerDesc: 'إنشاء صور توليد الذكاء الاصطناعي في غضون ثوان باستخدام أول مولد صور توليد الذكاء الاصطناعي مجاني وبلا حدود.',
    product: 'المنتج',
    company: 'الشركة',
    about: 'معلومات عنا',
    blog: 'مدونة',
    contact: 'الاتصال',
    api: 'API',
    pricing: 'السعر',
    keyFeaturesTitle: 'الميزات الرئيسية لـ Raphael',
    keyFeaturesDesc: 'تجربة الجيل التالي من توليد الصور باستخدام الذكاء الاصطناعي - قوي، مجاني، ومركز على الخصوصية',
    zeroCost: 'إنشاء بلا تكلفة',
    zeroCostDesc: 'أول مولد صور توليد الذكاء الاصطناعي مجاني وبلا حدود. لا توجد قيود على الاستخدام، لا تحتاج للتسجيل',
    stateArt: 'جودة الحالة العالية',
    stateArtDesc: 'مدعوم بنموذج FLUX.1-Dev، ينتج هذا المولد صور عالية الجودة من الصور الفوتوغرافية، ويمكن التحكم في نوعية الأداء الفني.',
    textUnderstanding: 'فهم جيد للنص',
    textUnderstandingDesc: 'قدرة فريدة لتحويل النص إلى صورة، مع تفسير دقيق للأوامر المعقدة ووظائف التراكب.',
    lightningFast: 'إنشاء سريع',
    lightningFastDesc: 'خط التفسير الأمثل يضمن إنشاء صور عالية الجودة بدون تقليل الجودة.',
    privacy: 'خصوصية جيدة',
    privacyDesc: 'سياسة الصفر للتراجع عن البيانات - أوامرك والصور التي تم إنشاؤها لن توجد على خوادمنا أبداً.',
    multiStyle: 'دعم عدة الأنماط',
    multiStyleDesc: 'يمكنك إنشاء صور في أنواع متعددة من الأنماط الفنية، من التصوير الفوتوغرافي إلى الرسوم المتحركة، من النقاش الدهبي إلى الفن الرقمي، والمزيد.',
    faqItems: [
      {
        question: 'ما هو Raphael AI وكيف يعمل؟',
        answer: 'Raphael AI هو أول مولد صور ذكاء اصطناعي مجاني وغير محدود في العالم، مدعوم بنموذج FLUX.1-Dev. يتيح لك إنشاء صور عالية الجودة من وصف نصي دون أي تسجيل أو قيود استخدام.'
      },
      {
        question: 'هل Raphael AI مجاني حقاً للاستخدام؟',
        answer: 'نعم، Raphael AI مجاني تماماً للاستخدام! نحن ملتزمون بأن نكون أكبر وأقوى مولد صور ذكاء اصطناعي مجاني في العالم. لا توجد رسوم خفية، ولا حاجة لبطاقة ائتمان، ولا قيود على الاستخدام.'
      },
      {
        question: 'ما الذي يميز Raphael AI عن مولدات الصور الأخرى بالذكاء الاصطناعي؟',
        answer: 'Raphael AI هو المنصة الوحيدة التي تقدم وصولاً مجانياً غير محدود إلى نموذج FLUX.1-Dev القوي. نحن نقدم جودة صور متفوقة، وسرعة إنشاء عالية، وحماية خصوصية كاملة، كل ذلك دون أي تكلفة أو متطلبات تسجيل.'
      },
      {
        question: 'هل أحتاج إلى إنشاء حساب لاستخدام Raphael AI؟',
        answer: 'لا، لست بحاجة إلى إنشاء حساب أو التسجيل. ما عليك سوى زيارة raphael.app والبدء في إنشاء الصور فوراً. نحن نؤمن بجعل الذكاء الاصطناعي متاحاً للجميع دون عوائق.'
      },
      {
        question: 'ما أنواع الصور التي يمكنني إنشاؤها باستخدام Raphael AI؟',
        answer: 'يمكنك إنشاء مجموعة متنوعة من الصور بما في ذلك المشاهد الواقعية، والرسوم التوضيحية الفنية، والفن الرقمي، والصور بأسلوب الأنمي، والمزيد. يتفوق نموذج FLUX.1-Dev في فهم التوجيهات المعقدة وإنشاء أنماط بصرية متنوعة.'
      },
      {
        question: 'كيف يحمي Raphael AI خصوصيتي؟',
        answer: 'نحن نأخذ الخصوصية على محمل الجد. لا نخزن توجيهاتك أو الصور المنشأة على خوادمنا، ولا نطلب أي معلومات شخصية. إبداعاتك تظل خاصة تماماً ويتم حذفها بعد الإنشاء.'
      },
      {
        question: 'ما هو نموذج FLUX.1-Dev؟',
        answer: 'FLUX.1-Dev هو نموذج ذكاء اصطناعي متطور معروف بجودة صوره الاستثنائية، ودقة التوجيهات، وتنوع الأساليب. عادةً ما يكون استخدامه مكلفاً، لكن Raphael يجعله متاحاً مجاناً للجميع.'
      },
      {
        question: 'هل هناك أي قيود على استخدام Raphael AI؟',
        answer: 'بينما Raphael AI مجاني وغير محدود، نحن نحافظ على إرشادات محتوى قياسية لضمان الاستخدام المناسب. المنصة مصممة حالياً للاستخدام على الويب، مع التخطيط لتطبيقات الهاتف المحمول في المستقبل.'
      },
      {
        question: 'هل يمكنني استخدام الصور المنشأة تجارياً؟',
        answer: 'نعم، أنت تمتلك حقوق الصور التي تنشئها باستخدام Raphael AI. يمكنك استخدامها للأغراض الشخصية والتجارية، مما يجعلها مثالية للمبدعين والشركات على حد سواء.'
      },
      {
        question: 'هل Raphael AI متاح على الأجهزة المحمولة؟',
        answer: 'حالياً، Raphael AI متاح من خلال موقعنا على raphael.app، والذي يعمل بشكل جيد على متصفحات الهواتف المحمولة. نحن نعمل بنشاط على تطوير تطبيقات مخصصة للهواتف المحمولة لتقديم تجربة أفضل قريباً.'
      },
      {
        question: 'كيف يمكنني تقديم ملاحظات أو الإبلاغ عن مشكلات؟',
        answer: 'نرحب بملاحظاتك! يمكنك التواصل مع فريق الدعم لدينا على support@raphael.app. مدخلاتك تساعدنا في تحسين وصيانة أفضل خدمة مجانية لإنشاء الصور بالذكاء الاصطناعي.'
      },
      {
        question: 'ما هو مستقبل Raphael AI؟',
        answer: 'نحن نعمل باستمرار على تحسين خدمتنا من خلال تحديثات منتظمة لنموذج الذكاء الاصطناعي وواجهة المستخدم. تشمل الخطط المستقبلية تطبيقات الهواتف المحمولة وميزات إبداعية إضافية، مع الحفاظ على التزامنا بكونها مجانية تماماً.'
      }
    ],
    testimonials: [
      {
        name: 'ديفيد طومسون',
        role: 'مطور ألعاب مستقل',
        answer: '"كمطور ألعاب مستقل، Raphael AI لا يقدر بثمن. سرعة وجودة إنشاء الأصول لا مثيل لها، وكونه مجانياً يعني أنني أستطيع تركيز ميزانيتي في مكان آخر."'
      },
      {
        name: 'إيميلي باركر',
        role: 'منشئة محتوى على يوتيوب',
        answer: '"أقوم بإنشاء صور مصغرة يومياً باستخدام Raphael AI. فهم النص مذهل - يلتقط بالضبط ما أحتاجه، وسياسة عدم التسجيل تجعله مريحاً للغاية."'
      },
      {
        name: 'روبرت ويلسون',
        role: 'مصمم واجهات مستخدم في TechFlow',
        answer: '"نموذج FLUX.1-Dev في Raphael AI ينتج أكثر النتائج ثباتاً وجودة مما رأيت. لقد أصبح أداتنا المفضلة لإنشاء صور النماذج الأولية."'
      },
      {
        name: 'جنيفر آدامز',
        role: 'مالكة متجر إلكتروني',
        answer: '"إدارة متجر عبر الإنترنت تتطلب إنشاء صور باستمرار. مولد صور Raphael المجاني يساعدني في إنشاء صور منتجات احترافية فوراً. إنه يوفر لشركتي آلاف الدولارات حرفياً."'
      },
      {
        name: 'مايكل أندرسون',
        role: 'فنان رقمي في ArtStation',
        answer: '"مولد صور Raphael يغير قواعد اللعبة. نموذج FLUX.1-Dev ينتج صوراً غنية بالتفاصيل أستخدمها كفن مفاهيمي. حقيقة أنه مجاني تماماً أمر مذهل!"'
      }
    ]
  },
  'বাংলা': {
    features: 'বৈশিষ্ট্য',
    faqs: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    title: 'কয়েক সেকেন্ডে AI-জেনারেট করা চমৎকার ছবি তৈরি করুন',
    subtitle: 'বিশ্বের প্রথম সীমাহীন বিনামূল্যের AI ইমেজ জেনারেটর',
    free: '100% বিনামূল্যে',
    poweredBy: 'Flux.1 Dev দ্বারা চালিত',
    noLogin: 'লগইন প্রয়োজন নেই',
    unlimited: 'সীমাহীন জেনারেশন',
    generator: 'AI ইমেজ জেনারেটর',
    getInspired: 'অনুপ্রাণিত হন',
    getInspiredDesc: 'অন্যদের দ্বারা Raphael দিয়ে তৈরি করা কাজ থেকে অনুপ্রাণিত হন',
    testimonial: 'প্রশংসাপত্র',
    testimonialTitle: 'Raphael AI সম্পর্কে ব্যবহারকারীরা কী বলেন',
    testimonialDesc: 'যারা প্রতিদিন আমাদের AI ইমেজ জেনারেটর ব্যবহার করেন তাদের কাছ থেকে শুনুন।',
    faqTitle: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    faqContact: 'আরও প্রশ্ন আছে? আমাদের সাথে support@raphael.app এ যোগাযোগ করুন',
    copyright: '© 2024 Raphael AI. সর্বস্বত্ব সংরক্ষিত।',
    footerDesc: 'বিশ্বের প্রথম সীমাহীন বিনামূল্যের AI ইমেজ জেনারেটর দিয়ে কয়েক সেকেন্ডে চমৎকার AI-জেনারেট করা ছবি তৈরি করুন।',
    product: 'পণ্য',
    company: 'কোম্পানি',
    about: 'আমাদের সম্পর্কে',
    blog: 'ব্লগ',
    contact: 'যোগাযোগ',
    api: 'API',
    pricing: 'মূল্য',
    keyFeaturesTitle: 'Raphael-এর মূল বৈশিষ্ট্য',
    keyFeaturesDesc: 'AI ইমেজ জেনারেশনের পরবর্তী প্রজন্মের অভিজ্ঞতা নিন - শক্তিশালী, বিনামূল্যে এবং গোপনীয়তা-কেন্দ্রিক',
    zeroCost: 'শূন্য-খরচ সৃষ্টি',
    zeroCostDesc: 'বিশ্বের প্রথম সম্পূর্ণ বিনামূল্যের AI ইমেজ জেনারেটর যার কোনো ব্যবহার সীমা বা নিবন্ধনের প্রয়োজন নেই',
    stateArt: 'অত্যাধুনিক গুণমান',
    stateArtDesc: 'FLUX.1-Dev মডেল দ্বারা চালিত, অসাধারণ বিস্তারিত এবং শৈল্পিক শৈলী নিয়ন্ত্রণ সহ ফটোরিয়ালিস্টিক ছবি প্রদান করে',
    textUnderstanding: 'উন্নত টেক্সট বোঝার ক্ষমতা',
    textUnderstandingDesc: 'জটিল প্রম্প্ট এবং টেক্সট ওভারলে বৈশিষ্ট্যগুলির সঠিক ব্যাখ্যা সহ উন্নত টেক্সট-টু-ইমেজ ক্ষমতা',
    lightningFast: 'বজ্রপাতের মতো দ্রুত',
    lightningFastDesc: 'অপ্টিমাইজড ইনফারেন্স পাইপলাইন যা গুণমানের সাথে আপোস না করে দ্রুত ইমেজ জেনারেশন নিশ্চিত করে',
    privacy: 'উন্নত গোপনীয়তা সুরক্ষা',
    privacyDesc: 'শূন্য ডেটা ধারণ নীতি - আপনার প্রম্প্ট এবং জেনারেট করা ছবিগুলি কখনই আমাদের সার্ভারে সংরক্ষণ করা হয় না',
    multiStyle: 'বহু-শৈলী সমর্থন',
    multiStyleDesc: 'বিভিন্ন শৈল্পিক শৈলীতে ছবি তৈরি করুন, ফটোরিয়ালিস্টিক থেকে অ্যানিমে, তেল চিত্র থেকে ডিজিটাল আর্ট পর্যন্ত',
    faqItems: [
      {
        question: 'Raphael AI কি এবং এটি কিভাবে কাজ করে?',
        answer: 'Raphael AI হল বিশ্বের প্রথম সম্পূর্ণ বিনামূল্যের, সীমাহীন AI ইমেজ জেনারেটর যা FLUX.1-Dev মডেল দ্বারা চালিত। এটি আপনাকে টেক্সট বর্ণনা থেকে উচ্চ-গুণমানের ছবি তৈরি করতে দেয়, কোনো নিবন্ধন বা ব্যবহার সীমা ছাড়াই।'
      },
      {
        question: 'Raphael AI সত্যিই বিনামূল্যে ব্যবহার করা যায়?',
        answer: 'হ্যাঁ, Raphael AI সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায়! আমরা বিশ্বের বৃহত্তম এবং সবচেয়ে শক্তিশালী বিনামূল্যের AI ইমেজ জেনারেটর হতে প্রতিশ্রুতিবদ্ধ। কোনো লুকানো খরচ নেই, কোনো ক্রেডিট কার্ডের প্রয়োজন নেই এবং কোনো ব্যবহার সীমা নেই।'
      },
      {
        question: 'Raphael AI অন্যান্য AI ইমেজ জেনারেটর থেকে কীভাবে আলাদা?',
        answer: 'Raphael AI একমাত্র প্ল্যাটফর্ম যা শক্তিশালী FLUX.1-Dev মডেলে সীমাহীন বিনামূল্যে অ্যাক্সেস প্রদান করে। আমরা উন্নত ইমেজ কোয়ালিটি, দ্রুত জেনারেশন স্পিড এবং সম্পূর্ণ গোপনীয়তা সুরক্ষা প্রদান করি, সবই কোনো খরচ বা নিবন্ধনের প্রয়োজন ছাড়াই।'
      },
      {
        question: 'Raphael AI ব্যবহার করতে কি অ্যাকাউন্ট তৈরি করতে হবে?',
        answer: 'না, আপনাকে অ্যাকাউন্ট তৈরি বা নিবন্ধন করতে হবে না। শুধু raphael.app ভিজিট করুন এবং অবিলম্বে ছবি জেনারেট করা শুরু করুন। আমরা বিশ্বাস করি যে AI সবার জন্য বাধাহীনভাবে অ্যাক্সেসযোগ্য হওয়া উচিত।'
      },
      {
        question: 'Raphael AI দিয়ে আমি কী ধরনের ছবি তৈরি করতে পারি?',
        answer: 'আপনি ফটোরিয়ালিস্টিক দৃশ্য, শৈল্পিক চিত্র, ডিজিটাল আর্ট, অ্যানিমে-স্টাইল ইমেজ এবং আরও অনেক কিছু সহ বিভিন্ন ধরনের ছবি তৈরি করতে পারেন। FLUX.1-Dev মডেল জটিল প্রম্প্ট বোঝার এবং বিভিন্ন ভিজ্যুয়াল স্টাইল জেনারেট করার ক্ষেত্রে উৎকৃষ্ট।'
      },
      {
        question: 'Raphael AI কিভাবে আমার গোপনীয়তা রক্ষা করে?',
        answer: 'আমরা গোপনীয়তাকে অত্যন্ত গুরুত্বের সাথে নিই। আমরা আপনার প্রম্প্ট বা জেনারেট করা ছবিগুলি আমাদের সার্ভারে সংরক্ষণ করি না এবং কোনো ব্যক্তিগত তথ্যের প্রয়োজন নেই। আপনার সৃষ্টিগুলি সম্পূর্ণরূপে ব্যক্তিগত থাকে এবং জেনারেশনের পরে মুছে ফেলা হয়।'
      },
      {
        question: 'FLUX.1-Dev মডেল কি?',
        answer: 'FLUX.1-Dev হল একটি অত্যাধুনিক AI মডেল যা তার অসাধারণ ইমেজ কোয়ালিটি, প্রম্প্ট নির্ভুলতা এবং শৈলী বহুমুখীতার জন্য পরিচিত। এটি সাধারণত ব্যবহার করতে ব্যয়বহুল, কিন্তু Raphael এটিকে সবার জন্য বিনামূল্যে উপলব্ধ করে।'
      },
      {
        question: 'Raphael AI ব্যবহার করার কোনো সীমাবদ্ধতা আছে কি?',
        answer: 'যদিও Raphael AI বিনামূল্যে এবং সীমাহীন, আমরা উপযুক্ত ব্যবহার নিশ্চিত করতে স্ট্যান্ডার্ড কন্টেন্ট গাইডলাইন বজায় রাখি। প্ল্যাটফর্মটি বর্তমানে ওয়েব ব্যবহারের জন্য ডিজাইন করা হয়েছে, ভবিষ্যতে মোবাইল অ্যাপের পরিকল্পনা রয়েছে।'
      },
      {
        question: 'আমি কি জেনারেট করা ছবিগুলি বাণিজ্যিকভাবে ব্যবহার করতে পারি?',
        answer: 'হ্যাঁ, আপনি Raphael AI দিয়ে জেনারেট করা ছবিগুলির অধিকার রাখেন। আপনি সেগুলি ব্যক্তিগত এবং বাণিজ্যিক উভয় উদ্দেশ্যে ব্যবহার করতে পারেন, যা ক্রিয়েটর এবং ব্যবসা উভয়ের জন্যই আদর্শ।'
      },
      {
        question: 'Raphael AI মোবাইল ডিভাইসে উপলব্ধ কি?',
        answer: 'বর্তমানে, Raphael AI আমাদের ওয়েবসাইট raphael.app এর মাধ্যমে উপলব্ধ, যা মোবাইল ব্রাউজারে ভালোভাবে কাজ করে। আমরা শীঘ্রই আরও ভালো অভিজ্ঞতা প্রদানের জন্য ডেডিকেটেড মোবাইল অ্যাপস ডেভেলপ করছি।'
      },
      {
        question: 'আমি কিভাবে প্রতিক্রিয়া দেব বা সমস্যা রিপোর্ট করব?',
        answer: 'আমরা আপনার প্রতিক্রিয়া স্বাগত জানাই! আপনি আমাদের সাপোর্ট টিমকে support@raphael.app এ যোগাযোগ করতে পারেন। আপনার ইনপুট আমাদের সেরা বিনামূল্যের AI ইমেজ জেনারেশন সার্ভিস উন্নত এবং বজায় রাখতে সাহায্য করে।'
      },
      {
        question: 'Raphael AI-এর ভবিষ্যৎ পরিকল্পনা কি?',
        answer: 'আমরা AI মডেল এবং ইউজার ইন্টারফেসের নিয়মিত আপডেটের মাধ্যমে আমাদের সার্ভিস ক্রমাগত উন্নত করছি। ভবিষ্যতের পরিকল্পনায় মোবাইল অ্যাপস এবং অতিরিক্ত ক্রিয়েটিভ ফিচার অন্তর্ভুক্ত রয়েছে, সম্পূর্ণ বিনামূল্যে থাকার আমাদের অঙ্গীকার বজায় রেখে।'
      }
    ],
    testimonials: [
      {
        name: 'ডেভিড থম্পসন',
        role: 'স্বাধীন গেম ডেভেলপার',
        answer: '"একজন একক গেম ডেভেলপার হিসেবে, Raphael AI ইমেজ জেনারেটর অমূল্য। অ্যাসেট জেনারেশনের গতি এবং গুণমান অতুলনীয়, এবং বিনামূল্যে হওয়ার অর্থ আমি আমার বাজেট অন্য কোথাও ফোকাস করতে পারি।"'
      },
      {
        name: 'এমিলি পার্কার',
        role: 'YouTube কন্টেন্ট ক্রিয়েটর',
        answer: '"আমি প্রতিদিন Raphael AI ইমেজ জেনারেটর ব্যবহার করে থাম্বনেইল তৈরি করি। টেক্সট বোঝার ক্ষমতা অবিশ্বাস্য - এটি ঠিক যা চাই তা ক্যাপচার করে, এবং নো-রেজিস্ট্রেশন পলিসি এটিকে সুপার সুবিধাজনক করে তোলে।"'
      },
      {
        name: 'রবার্ট উইলসন',
        role: 'TechFlow-এ UI/UX ডিজাইনার',
        answer: '"Raphael AI ইমেজ জেনারেটরে FLUX.1-Dev মডেলটি আমি যতটুকু দেখেছি তার মধ্যে সবচেয়ে সামঞ্জস্যপূর্ণ এবং উচ্চ-গুণমানের ফলাফল উৎপন্ন করে। এটি মকআপ ইমেজ জেনারেট করার জন্য আমাদের গো-টু টুল হয়ে উঠেছে।"'
      },
      {
        name: 'জেনিফার অ্যাডামস',
        role: 'ই-কমার্স ব্যবসার মালিক',
        answer: '"একটি অনলাইন স্টোর চালানোর জন্য ক্রমাগত ইমেজ ক্রিয়েশন প্রয়োজন। Raphael-এর বিনামূল্যের AI ইমেজ জেনারেটর আমাকে তাত্ক্ষণিকভাবে পেশাদার পণ্যের ফটো তৈরি করতে সাহায্য করে। এটি আক্ষরিক অর্থেই আমার ব্যবসাকে হাজার হাজার ডলার বাঁচাচ্ছে।"'
      },
      {
        name: 'মাইকেল অ্যান্ডারসন',
        role: 'ArtStation-এ ডিজিটাল আর্টিস্ট',
        answer: '"Raphael-এর AI ইমেজ জেনারেটর একটি গেম-চেঞ্জার। FLUX.1-Dev মডেল অবিশ্বাস্যভাবে বিস্তারিত ইমেজ উৎপন্ন করে যা আমি কনসেপ্ট আর্ট হিসাবে ব্যবহার করি। এটি সম্পূর্ণ বিনামূল্যে হওয়ার বিষয়টি মাইন্ড-ব্লোয়িং!"'
      }
    ]
  },
  'हिन्दी': {
    features: 'विशेषताएं',
    faqs: 'अक्सर पूछे जाने वाले प्रश्न',
    title: 'कुछ सेकंड में एआई द्वारा उत्पन्न छवियां बनाना',
    subtitle: 'विश्व का पहला आदर्श छवि जनरेटर जो 100% मुफ्त है',
    free: '100% मुफ्त',
    poweredBy: 'Flux.1 Dev द्वारा समर्थित',
    noLogin: 'लॉगिन की आवश्यकता नहीं है',
    unlimited: 'अनिश्चित उत्पन्न',
    generator: 'AI छवि जनरेटर',
    getInspired: 'आशुभूत मिलना',
    getInspiredDesc: 'अन्य लोगों द्वारा Raphael द्वारा बनाए गए कामों से आशुभूत मिलें',
    testimonial: 'उपयोक्ता विचार',
    testimonialTitle: 'उपयोक्ता Raphael AI के बारे में क्या कहते हैं',
    testimonialDesc: 'हमारे AI छवि जनरेटर का उपयोग करने वाले निर्माताओं और पेशेवरों से सुनें।',
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqContact: 'कोई और प्रश्न है? हमसे support@raphael.app पर संपर्क करें',
    copyright: '© 2024 Raphael AI. सभी अधिकार सुरक्षित।',
    footerDesc: 'विश्व के पहले अनिश्चित नि: शुल्क AI छवि जनरेटर के साथ कुछ सेकंड में शानदार AI उत्पन्न छवियां बनाएं।',
    product: 'उत्पाद',
    company: 'कंपनी',
    about: 'हमारे बारे में',
    blog: 'ब्लॉग',
    contact: 'संपर्क करें',
    api: 'API',
    pricing: 'मूल्य निर्धारण',
    keyFeaturesTitle: 'Raphael की मुख्य विशेषताएं',
    keyFeaturesDesc: 'AI छवि निर्माण की अगली पीढ़ी का अनुभव करें - शक्तिशाली, मुफ्त और गोपनीयता पर केंद्रित।',
    zeroCost: 'शून्य-लागत उत्पादन',
    zeroCostDesc: 'दुनिया का पहला पूरी तरह से मुफ्त AI छवि जनरेटर जिसमें कोई उपयोग सीमा या पंजीकरण आवश्यकताएं नहीं हैं।',
    stateArt: 'अत्याधुनिक गुणवत्ता',
    stateArtDesc: 'FLUX.1-Dev मॉडल द्वारा संचालित, असाधारण विवरण और कलात्मक शैली नियंत्रण के साथ फोटोरियलिस्टिक छवियां प्रदान करता है।',
    textUnderstanding: 'उन्नत टेक्स्ट समझ',
    textUnderstandingDesc: 'जटिल प्रॉम्प्ट और टेक्स्ट ओवरले सुविधाओं की सटीक व्याख्या के साथ बेहतर टेक्स्ट-टू-इमेज क्षमताएं।',
    lightningFast: 'बिजली-तेज़ पीढ़ी',
    lightningFastDesc: 'अनुकूलित निष्कर्ष पाइपलाइन जो गुणवत्ता से समझौता किए बिना तेजी से छवि उत्पन्न करना सुनिश्चित करता है।',
    privacy: 'बढ़ी हुई गोपनीयता सुरक्षा',
    privacyDesc: 'जीरो डेटा रिटेंशन पॉलिसी - आपके प्रॉम्प्ट और जनरेट की गई छवियों को कभी भी हमारे सर्वर पर स्टोर नहीं किया जाता है।',
    multiStyle: 'मल्टी-स्टाइल सपोर्ट',
    multiStyleDesc: 'विभिन्न कलात्मक शैलियों में छवियां बनाएं, फोटोरियलिस्टिक से एनिमे, तेल चित्र से डिजिटल आर्ट तक।',
    faqItems: [
      {
        question: 'Raphael AI क्या है और यह कैसे काम करता है?',
        answer: 'Raphael AI दुनिया का पहला पूरी तरह से मुफ्त, असीमित AI छवि जनरेटर है जो FLUX.1-Dev मॉडल द्वारा संचालित है। यह आपको किसी भी पंजीकरण या उपयोग सीमा के बिना टेक्स्ट विवरण से उच्च गुणवत्ता वाली छवियां बनाने की अनुमति देता है।'
      },
      {
        question: 'क्या Raphael AI वास्तव में उपयोग करने के लिए स्वतंत्र है?',
        answer: 'हां, Raphael AI पूरी तरह से उपयोग करने के लिए मुफ्त है! हम दुनिया के सबसे बड़े और सबसे शक्तिशाली मुफ्त AI छवि जनरेटर बनने के लिए प्रतिबद्ध हैं। कोई छिपी हुई फीस नहीं, कोई क्रेडिट कार्ड की आवश्यकता नहीं, और कोई उपयोग सीमा नहीं।'
      },
      {
        question: 'Raphael AI को अन्य AI छवि जनरेटर से क्या अलग बनाता है?',
        answer: 'Raphael AI एकमात्र प्लेटफॉर्म है जो शक्तिशाली FLUX.1-Dev मॉडल तक असीमित मुफ्त पहुंच प्रदान करता है। हम बेहतर छवि गुणवत्ता, तेज जनरेशन स्पीड और पूर्ण गोपनीयता सुरक्षा प्रदान करते हैं, सभी बिना किसी लागत या पंजीकरण आवश्यकताओं के।'
      },
      {
        question: 'क्या मुझे Raphael AI का उपयोग करने के लिए एक खाता बनाना होगा?',
        answer: 'नहीं, आपको खाता बनाने या पंजीकरण करने की आवश्यकता नहीं है। बस raphael.app पर जाएं और तुरंत छवियां उत्पन्न करना शुरू करें। हम बिना बाधाओं के हर किसी के लिए AI को सुलभ बनाने में विश्वास करते हैं।'
      },
      {
        question: 'मैं Raphael AI के साथ किस प्रकार की छवियां बना सकता हूं?',
        answer: 'आप फोटोरियलिस्टिक सीन, आर्टिस्टिक इलस्ट्रेशन, डिजिटल आर्ट, एनिमे-स्टाइल इमेज और बहुत कुछ सहित विभिन्न प्रकार की छवियां बना सकते हैं। FLUX.1-Dev मॉडल जटिल प्रॉम्प्ट को समझने और विविध विजुअल स्टाइल उत्पन्न करने में उत्कृष्ट है।'
      },
      {
        question: 'Raphael AI मेरी गोपनीयता की रक्षा कैसे करता है?',
        answer: 'हम गोपनीयता को गंभीरता से लेते हैं। हम आपके प्रॉम्प्ट या उत्पन्न छवियों को अपने सर्वर पर स्टोर नहीं करते हैं, और हमें किसी भी व्यक्तिगत जानकारी की आवश्यकता नहीं है। आपकी रचनाएं पूरी तरह से निजी रहती हैं और उत्पन्न होने के बाद हटा दी जाती हैं।'
      },
      {
        question: 'FLUX.1-Dev मॉडल क्या है?',
        answer: 'FLUX.1-Dev एक अत्याधुनिक AI मॉडल है जो अपनी असाधारण छवि गुणवत्ता, प्रॉम्प्ट सटीकता और शैली बहुमुखी प्रतिभा के लिए जाना जाता है। इसका उपयोग करना आमतौर पर महंगा होता है, लेकिन Raphael इसे हर किसी के लिए स्वतंत्र रूप से उपलब्ध कराता है।'
      },
      {
        question: 'Raphael AI का उपयोग करने के लिए कोई सीमाएं हैं?',
        answer: 'जबकि Raphael AI मुफ्त और असीमित है, हम उचित उपयोग सुनिश्चित करने के लिए मानक सामग्री दिशानिर्देश बनाए रखते हैं। प्लेटफॉर्म वर्तमान में वेब उपयोग के लिए डिज़ाइन किया गया है, भविष्य के लिए मोबाइल ऐप्स की योजना है।'
      },
      {
        question: 'क्या मैं उत्पन्न छवियों का वाणिज्यिक रूप से उपयोग कर सकता हूं?',
        answer: 'हां, आप Raphael AI के साथ उत्पन्न छवियों के अधिकार रखते हैं। आप उन्हें व्यक्तिगत और वाणिज्यिक दोनों उद्देश्यों के लिए उपयोग कर सकते हैं, जिससे यह निर्माताओं और व्यवसायों दोनों के लिए बिल्कुल सही है।'
      },
      {
        question: 'क्या Raphael AI मोबाइल डिवाइस पर उपलब्ध है?',
        answer: 'वर्तमान में, Raphael AI हमारी वेबसाइट raphael.app के माध्यम से उपलब्ध है, जो मोबाइल ब्राउज़र पर शानदार काम करती है। हम जल्द ही और भी बेहतर अनुभव प्रदान करने के लिए समर्पित मोबाइल ऐप्स विकसित कर रहे हैं।'
      },
      {
        question: 'मैं प्रतिक्रिया कैसे दे सकता हूं या समस्याओं की रिपोर्ट कैसे कर सकता हूं?',
        answer: 'हम आपकी प्रतिक्रिया का स्वागत करते हैं! आप हमारी सहायता टीम से support@raphael.app पर संपर्क कर सकते हैं। आपका इनपुट हमें सर्वश्रेष्ठ मुफ्त AI छवि उत्पन्न सेवा को बेहतर बनाने और बनाए रखने में मदद करता है।'
      },
      {
        question: 'Raphael AI के लिए आगे क्या है?',
        answer: 'हम AI मॉडल और उपयोगकर्ता इंटरफ़ेस के नियमित अपडेट के साथ अपनी सेवा को लगातार बेहतर बना रहे हैं। भविष्य की योजनाओं में मोबाइल ऐप्स और अतिरिक्त रचनात्मक सुविधाएं शामिल हैं, जबकि पूरी तरह से मुफ्त होने की हमारी प्रतिबद्धता बनाए रखी गई है।'
      }
    ],
    testimonials: [
      {
        name: 'डेविड थॉम्पसन',
        role: 'स्वतंत्र गेम डेवलपर',
        answer: '"एक एकल गेम डेवलपर के रूप में, Raphael AI छवि जनरेटर अमूल्य है। एसेट जनरेशन की गति और गुणवत्ता अद्वितीय हैं, और मुफ्त होने का मतलब है कि मैं अपना बजट कहीं और फोकस कर सकता हूं।"'
      },
      {
        name: 'एमिली पार्कर',
        role: 'YouTube वीडियो क्रिएटर',
        answer: '"मैं Raphael AI छवि जनरेटर का उपयोग करके रोजाना थंबनेल बनाती हूं। टेक्स्ट समझ अविश्वसनीय है - यह बिल्कुल वही कैप्चर करता है जो मुझे चाहिए, और नो-रजिस्ट्रेशन पॉलिसी इसे सुपर सुविधाजनक बनाती है।"'
      },
      {
        name: 'रॉबर्ट विल्सन',
        role: 'TechFlow में UI/UX डिजाइनर',
        answer: '"Raphael AI छवि जनरेटर में FLUX.1-Dev मॉडल सबसे सुसंगत और उच्च गुणवत्ता वाले परिणाम उत्पन्न करता है जो मैंने देखे हैं। यह मॉकअप छवियां उत्पन्न करने के लिए हमारा पसंदीदा टूल बन गया है।"'
      },
      {
        name: 'जेनिफर एडम्स',
        role: 'ई-कॉमर्स बिजनेस ओनर',
        answer: '"ऑनलाइन स्टोर चलाने के लिए लगातार छवि निर्माण की आवश्यकता होती है। Raphael का मुफ्त AI छवि जनरेटर मुझे तुरंत पेशेवर उत्पाद फोटो बनाने में मदद करता है। यह शाब्दिक रूप से मेरे व्यवसाय के हजारों बचा रहा है।"'
      },
      {
        name: 'माइकल एंडरसन',
        role: 'ArtStation पर डिजिटल आर्टिस्ट',
        answer: '"Raphael का AI छवि जनरेटर एक गेम-चेंजर है। FLUX.1-Dev मॉडल अविश्वसनीय रूप से विस्तृत छवियां उत्पन्न करता है जिन्हें मैं कॉन्सेप्ट आर्ट के रूप में उपयोग करता हूं। यह तथ्य कि यह पूरी तरह से मुफ्त है, दिमाग उड़ा देने वाला है!"'
      }
    ]
  }
};

function App() {
  const [prompt, setPrompt] = React.useState('');
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState<{data?: Array<{url: string}>, error?: string} | null>(null);
  const [retryCount, setRetryCount] = React.useState(0);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const maxRetries = 3;
  
  // 当前语言的文本内容
  const t = translations[currentLanguage as keyof typeof translations] || translations['English'];
  
  // 所有有翻译的语言
  const availableLanguages = Object.keys(translations);
  
  // 当选择语言时，检查翻译完整性
  const handleLanguageChange = (language: string) => {
    if (availableLanguages.includes(language)) {
      setCurrentLanguage(language);
      setShowLanguageDropdown(false);
    } else {
      console.warn(`语言 ${language} 的翻译不存在或不完整，使用英语作为后备`);
      setCurrentLanguage('English');
      setShowLanguageDropdown(false);
    }
  };

  const promptOptions = [
    "A polar fox walking through a snowy landscape, with pristine white fur and alert eyes.",
    "A basketball player captured mid-air during a slam dunk, with a cheering crowd in the background.",
    "A black and white photograph of a woman standing in the rain, holding an umbrella, with a blurred city street in the background.",
    "A World War II trench scene. A weathered wooden sign at the trench's entrance reads 'No Man's Land,' with bullet holes piercing through the letters.",
    "A medieval-style portrait of a noblewoman in a lavish gown, seated in an ancient palace, with a solemn expression.",
    "An abandoned castle overgrown with vines, with sunlight streaming through broken windows.",
    "A neon-lit street in a cyberpunk city, with a digital shop sign displaying 'Cyber Sushi – Open 24/7.' Holographic text floats above the crowd, showcasing ongoing deals.",
    "A city street illuminated by neon lights, with pedestrians in futuristic attire and holographic advertisements floating above.",
    "A meticulously arranged sushi platter with vibrant colors and artistic presentation.",
    "A deserted haunted house with broken windows, appearing especially eerie under the moonlight.",
    "Vibrant liquids blending together underwater, forming unique abstract patterns.",
    "An inventor wearing goggles, working in a laboratory filled with gears and steam.",
    "A black and white photograph of a rainy city street. A woman holding an umbrella stands next to a neon sign that reads 'Eternal Rain,' with the letters glowing softly through the mist.",
    "Soldiers in a World War II trench engaged in intense combat, with fighter planes soaring overhead.",
    "An elf warrior standing at the entrance of a magical forest. Behind her, an ancient stone tablet etched with glowing runes spells out the phrase 'Guardians of the Emerald Realm.'"
  ];
  
  const languages = [
    'English',
    '简体中文',
    '繁體中文',
    '日本語',
    '한국어',
    'Deutsch',
    'Français',
    'Italiano',
    'Español',
    'Português',
    'العربية',
    'हिन्दी',
    'বাংলা',
    'Bahasa Indonesia',
    'Bahasa Melayu',
    'ภาษาไทย',
    'עברית',
    'Русский',
    'اردو',
    'Türkçe',
    'Tiếng Việt',
    'فارسی',
    'मराठी',
    'தமிழ்',
    'Polski',
    'తెలుగు',
    'नेपाली'
  ];

  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const resetIframePosition = () => {
      if (iframeRef.current) {
        try {
          const iframeWindow = iframeRef.current.contentWindow;
          if (iframeWindow) {
            // 设置初始滚动位置
            iframeWindow.scrollTo(0, 200);  // 调整这个值来控制上移的距离
            
            try {
              // 防止用户滚动
              iframeWindow.addEventListener('scroll', (e) => {
                e.preventDefault();
                iframeWindow.scrollTo(0, 200);
              }, { passive: false });
              
              // 注入 CSS 来隐藏广告
              const iframeDocument = iframeRef.current.contentDocument || iframeWindow.document;
              if (iframeDocument) {
                const style = iframeDocument.createElement('style');
                style.textContent = `
                  /* 隐藏广告区域 */
                  .ad-container,
                  .advertisement,
                  div[id*="ad-container"],
                  div[class*="ad-container"],
                  div[class*="adsbygoogle"],
                  iframe[id*="google_ads"],
                  div[id*="banner"],
                  div[class*="banner"] {
                    display: none !important;
                  }
                `;
                iframeDocument.head.appendChild(style);
              }
            } catch (e) {
              console.log("无法注入CSS，这是正常的跨域限制");
            }
          }
        } catch (e) {
          console.log("无法访问iframe内容，这是正常的跨域限制");
        }
      }
    };
    
    // 在 iframe 加载完成时执行
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', () => {
        resetIframePosition();
        // 确保在内容加载后也能正确定位
        setTimeout(resetIframePosition, 1000);
      });
    }
    
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', resetIframePosition);
      }
    };
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const handleClear = () => {
    setPrompt('');
  };
  
  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * promptOptions.length);
    setPrompt(promptOptions[randomIndex]);
  };

  const generateImage = (shouldRetry = true, retry = 0) => {
    if (!prompt) return;
    
    setIsLoading(true);
    setResult(null);
    
    const options = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer sk-cscehhzqtcwadqkrlwffdhxkdsnudasnvxrprxwahmcwjvsi',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "Kwai-Kolors/Kolors",
        prompt: prompt,
        image_size: "1024x1024",
        batch_size: 4,
        num_inference_steps: 20,
        guidance_scale: 7.5
      })
    };

    console.log(`发送请求 (重试: ${retry}/${maxRetries}):`, options);

    fetch('https://api.siliconflow.cn/v1/images/generations', options)
      .then(response => response.json())
      .then(response => {
        console.log("接收响应:", JSON.stringify(response));
        
        if (response.code === 50604 || (response.message && response.message.includes("rate limiting"))) {
          if (shouldRetry && retry < maxRetries) {
            console.log(`API频率限制，${2000 * (retry + 1)}ms后重试...`);
            setRetryCount(retry + 1);
            setTimeout(() => {
              generateImage(shouldRetry, retry + 1);
            }, 2000 * (retry + 1));
            return;
          } else {
            console.log("达到最大重试次数，继续显示加载状态");
            setTimeout(() => {
              generateImage(true, 0);
            }, 5000);
            return;
          }
        }
        
        let imageData = [];
        
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          imageData = response.data;
        } 
        else if (response.data && typeof response.data === 'object') {
          imageData = [response.data];
        }
        else if (response.url) {
          imageData = [{ url: response.url }];
        }
        else if (response.message || response.error) {
          console.log("API返回错误，继续显示加载状态并重试");
          setTimeout(() => {
            generateImage(true, 0);
          }, 5000);
          return;
        }
        else {
          imageData = [{ url: "/1 (1).webp" }];
        }
        
        if (imageData.length === 1) {
          imageData = [
            imageData[0],
            imageData[0],
            imageData[0],
            imageData[0]
          ];
        }
        
        setResult({ data: imageData });
        setIsLoading(false);
        setRetryCount(0);
      })
      .catch(err => {
        console.error("请求错误:", err);
        
        if (shouldRetry && retry < maxRetries) {
          console.log(`请求失败，${2000 * (retry + 1)}ms后重试...`);
          setRetryCount(retry + 1);
          setTimeout(() => {
            generateImage(shouldRetry, retry + 1);
          }, 2000 * (retry + 1));
        } else {
          console.log("请求错误达到最大重试次数，继续显示加载状态");
          setTimeout(() => {
            generateImage(true, 0);
          }, 5000);
        }
      });
  };

  const handleGenerate = () => {
    generateImage(true, 0);
  };

  const handleRetry = () => {
    generateImage(true, 0);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <img src="/raphael.png" alt="Raphael AI" className="w-8 h-8 rounded-full" />
                <span className="ml-2 text-xl font-bold text-[rgb(204,144,92)]">Raphael AI</span>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <a href="#features" className="text-gray-600 hover:bg-[#E5B06E] hover:text-white px-3 py-2 rounded-lg transition">{t.features}</a>
                <a href="#faqs" className="text-gray-600 hover:bg-[#E5B06E] hover:text-white px-3 py-2 rounded-lg transition">{t.faqs}</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative" ref={languageDropdownRef}>
                <button 
                  className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                >
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-600">{currentLanguage}</span>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
                
                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-xl z-50 max-h-[400px] overflow-y-auto">
                    {['English', '简体中文', '繁體中文', '日本語', '한국어', 'Deutsch', 'বাংলা'].map((language) => (
                      <button
                        key={language}
                        className={`block w-full text-left px-4 py-2 ${
                          currentLanguage === language 
                            ? 'bg-[#E5B06E] text-white' 
                            : 'text-gray-700 hover:bg-gray-100'
                        } transition`}
                        onClick={() => {
                          setCurrentLanguage(language);
                          setShowLanguageDropdown(false);
                        }}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition text-white">
                ce
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-5">
              <div className="flex items-center bg-gray-50 px-8 py-4 rounded-lg border border-gray-200">
                <img
                  src="/raphael.png"
                  alt="Raphael AI"
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4 flex items-baseline">
                  <span className="text-5xl font-bold text-[#FFA500]">Raphael</span>
                  <span className="text-5xl font-bold text-[#808080] ml-2">AI</span>
                </div>
              </div>
            </div>

            <h1 className="text-2xl md:text-2xl font-bold mb-4 text-gray-800">
              {t.title}
            </h1>
            <p className="text-lg text-yellow-500 mb-4 flex items-center justify-center gap-2 ">
              ✨ {t.subtitle} ✨
            </p>
            
            <div className="flex flex-wrap justify-center gap-1 mb-8">
              <span className="px-3 py-1 rounded-full bg-gray-50 text-yellow-500 text-sm">{t.free}</span>
              <span className="px-3 py-1 rounded-full bg-gray-50 text-emerald-500 text-sm">{t.poweredBy}</span>
              <span className="px-3 py-1 rounded-full bg-gray-50 text-blue-500 text-sm">{t.noLogin}</span>
              <span className="px-3 py-1 rounded-full bg-gray-50 text-purple-500 text-sm">{t.unlimited}</span>
            </div>

            <div className="bg-white p-6 mb-12 relative border-0">
              <h2 className="text-2xl font-bold mb-6 text-left text-gray-800 pl-32">{t.generator}</h2>
              
              <div className="w-full h-[560px] relative overflow-hidden bg-white border-0">
                <iframe 
                  ref={iframeRef}
                  src="https://raphaelai.org/" 
                  title="Raphael AI Image Generator"
                  className="absolute border-0"
                  style={{
                    width: "1500px",
                    height: "3000px",
                    top: "-200px",
                    left: "50%",
                    transform: "translateX(-50%) scale(0.9)",
                    transformOrigin: "top center",
                    pointerEvents: "auto" as "auto",
                    overflow: "hidden"
                  }}
                  scrolling="no"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-downloads"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allow="clipboard-write; fullscreen"
                ></iframe>
                
                {/* 覆盖iframe中红框区域的内容 */}
                <div 
                  className="absolute top-[-10px] left-0 z-50 bg-white" 
                  style={{ 
                    height: "60px",
                    width: "45%",
                    margin: "0",
                    boxShadow: "none",
                    border: "0"
                  }}
                >
                  <div className="flex items-center justify-center h-full text-gray-800 text-xl font-medium">
                    {/* <span>AI 图像生成</span> */}
                  </div>
                </div>
                
                {/* 左侧容器，覆盖iframe内容 */}
                <div 
                  className="absolute bottom-0 left-auto right-[49%] z-50 bg-white" 
                  style={{ 
                    height: "40px",
                    width: "47%",
                    margin: "0 10px 0 0",
                    boxShadow: "none",
                    border: "0"
                  }}
                >
                  {/* 可以添加自定义内容 */}
                  <div className="flex items-center justify-center h-full text-gray-600 text-sm">
                    {/* <span>Image processing by Raphael</span> */}
                  </div>
                </div>
                
                {/* 广告覆盖层 - 精确定位在底部广告区域上 */}
                <div 
                  className="absolute bottom-0 right-0 z-50 bg-white" 
                  style={{ 
                    height: "90px",
                    width: "50%",
                    margin: "0",
                    boxShadow: "none",
                    border: "0"
                  }}
                >
                  {/* 可选：添加一些自定义内容到覆盖层 */}
                  <div className="flex items-center justify-center h-full text-gray-600 text-sm">
                    {/* <span>Images powered by Raphael AI</span> */}
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-800">{t.getInspired}</h2>
            <p className="text-gray-600 text-lg mb-8">
              {t.getInspiredDesc}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-white rounded-lg overflow-hidden border-0">
                <img 
                  src="/1 (1).webp" 
                  alt="Generated image 1" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden border-0">
                <img 
                  src="/2 (1).webp" 
                  alt="Generated image 2" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden border-0">
                <img 
                  src="/3 (1).webp" 
                  alt="Generated image 3" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden border-0">
                <img 
                  src="/4 (1).webp" 
                  alt="Generated image 4" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden border-0">
                <img 
                  src="/5 (1).webp" 
                  alt="Generated image 5" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden border-0">
                <img 
                  src="/6 (1).webp" 
                  alt="Generated image 6" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden border-0">
                <img 
                  src="/7 (1).webp" 
                  alt="Generated image 7" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden border-0">
                <img 
                  src="/8 (1).webp" 
                  alt="Generated image 8" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/9 (1).webp" 
                  alt="Generated image 9" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/10.webp" 
                  alt="Generated image 10" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/11.webp" 
                  alt="Generated image 11" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/12.webp" 
                  alt="Generated image 12" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/13.webp" 
                  alt="Generated image 13" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/14.webp" 
                  alt="Generated image 14" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/15.webp" 
                  alt="Generated image 15" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/16.webp" 
                  alt="Generated image 16" 
                  className="w-full h-64 object-cover" 
                />
              </div>
            </div>

            {/* Key Features Section */}
            <div id="features" className="py-20 bg-white">
              <div className="max-w-[1280px] mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.keyFeaturesTitle}</h2>
                  <p className="text-xl text-gray-600">
                    {t.keyFeaturesDesc}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col"
                  >
                    <div className="w-16 h-16 mb-6 rounded-full border border-[#E5B06E] flex items-center justify-center">
                      <DollarSign className="w-8 h-8 text-[#E5B06E]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.zeroCost}</h3>
                    <p className="text-gray-600 text-left">
                      {t.zeroCostDesc}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col"
                  >
                    <div className="w-16 h-16 mb-6 rounded-full border border-[#E5B06E] flex items-center justify-center">
                      <Star className="w-8 h-8 text-[#E5B06E]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.stateArt}</h3>
                    <p className="text-gray-600 text-left">
                      {t.stateArtDesc}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col"
                  >
                    <div className="w-16 h-16 mb-6 rounded-full border border-[#E5B06E] flex items-center justify-center">
                      <Languages className="w-8 h-8 text-[#E5B06E]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.textUnderstanding}</h3>
                    <p className="text-gray-600 text-left">
                      {t.textUnderstandingDesc}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col"
                  >
                    <div className="w-16 h-16 mb-6 rounded-full border border-[#E5B06E] flex items-center justify-center">
                      <Zap className="w-8 h-8 text-[#E5B06E]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.lightningFast}</h3>
                    <p className="text-gray-600 text-left">
                      {t.lightningFastDesc}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col"
                  >
                    <div className="w-16 h-16 mb-6 rounded-full border border-[#E5B06E] flex items-center justify-center">
                      <Shield className="w-8 h-8 text-[#E5B06E]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.privacy}</h3>
                    <p className="text-gray-600 text-left">
                      {t.privacyDesc}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col"
                  >
                    <div className="w-16 h-16 mb-6 rounded-full border border-[#E5B06E] flex items-center justify-center">
                      <Paintbrush className="w-8 h-8 text-[#E5B06E]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.multiStyle}</h3>
                    <p className="text-gray-600 text-left">
                      {t.multiStyleDesc}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="py-20 bg-white">
              <div className="max-w-[1280px] mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-yellow-500 font-semibold mb-4 block">{t.testimonial}</span>
                  <h2 className="text-4xl font-bold mb-4 text-gray-800">{t.testimonialTitle}</h2>
                  <p className="text-xl text-gray-600 mb-16">
                    {t.testimonialDesc}
                  </p>

                  <div className="relative">
                    <div className="overflow-hidden pb-4">
                      <motion.div 
                        className="flex space-x-6 min-w-full"
                        animate={{ x: -currentTestimonial * 340 }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                      >
                        <div className="bg-white p-6 rounded-xl w-80 flex-shrink-0">
                          <div className="flex items-center mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt={t.testimonials[0].name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 text-left">
                              <h3 className="font-semibold text-gray-800">{t.testimonials[0].name}</h3>
                              <p className="text-gray-500 text-sm">{t.testimonials[0].role}</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-600 text-left">
                            {t.testimonials[0].answer}
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl w-80 flex-shrink-0">
                          <div className="flex items-center mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt={t.testimonials[1].name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 text-left">
                              <h3 className="font-semibold text-gray-800">{t.testimonials[1].name}</h3>
                              <p className="text-gray-500 text-sm">{t.testimonials[1].role}</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-600 text-left">
                            {t.testimonials[1].answer}
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl w-80 flex-shrink-0">
                          <div className="flex items-center mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt={t.testimonials[2].name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 text-left">
                              <h3 className="font-semibold text-gray-800">{t.testimonials[2].name}</h3>
                              <p className="text-gray-500 text-sm">{t.testimonials[2].role}</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-600 text-left">
                            {t.testimonials[2].answer}
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl w-80 flex-shrink-0">
                          <div className="flex items-center mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt={t.testimonials[3].name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 text-left">
                              <h3 className="font-semibold text-gray-800">{t.testimonials[3].name}</h3>
                              <p className="text-gray-500 text-sm">{t.testimonials[3].role}</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-600 text-left">
                            {t.testimonials[3].answer}
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl w-80 flex-shrink-0">
                          <div className="flex items-center mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt={t.testimonials[4].name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 text-left">
                              <h3 className="font-semibold text-gray-800">{t.testimonials[4].name}</h3>
                              <p className="text-gray-500 text-sm">{t.testimonials[4].role}</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-600 text-left">
                            {t.testimonials[4].answer}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                    <div className="flex justify-center mt-6 space-x-2">
                      {[0, 1, 2].map((i) => (
                        <button 
                          key={i} 
                          className={`w-3 h-3 rounded-full ${i === currentTestimonial ? 'bg-yellow-500' : 'bg-gray-600'}`}
                          aria-label={`Go to slide ${i + 1}`}
                          onClick={() => setCurrentTestimonial(i)}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="py-20 bg-white" id="faqs">
              <div className="max-w-[1280px] mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.2 }}
                  className="text-center mb-12"
                >
                  <span className="inline-block bg-yellow-500/20 text-yellow-500 font-semibold px-4 py-1 rounded-full mb-4">FAQ</span>
                  <h2 className="text-4xl font-bold mb-4 text-gray-800">{t.faqTitle}</h2>
                  <p className="text-gray-600 text-lg">
                    {t.faqContact}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                  {t.faqItems.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="bg-white p-6 rounded-lg"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                          <span className="text-yellow-500 text-lg font-semibold">{index + 1}</span>
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold mb-3 text-left text-gray-800">{faq.question}</h3>
                          <p className="text-gray-600 text-left">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <footer className="bg-white mt-20">
              <div className="max-w-[1280px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center mb-4">
                      <img src="/raphael.png" alt="Raphael AI" className="w-8 h-8 rounded-full" />
                      <span className="ml-2 text-xl font-bold text-gray-800">Raphael AI</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {t.footerDesc}
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                        Twitter
                      </a>
                      <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                        Discord
                      </a>
                      <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      {t.product}
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                          {t.features}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                          {t.pricing}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                          {t.api}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      {t.company}
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                          {t.about}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                          {t.blog}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                          {t.contact}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8">
                  <p className="text-gray-500 text-sm">
                    {t.copyright}
                  </p>
                </div>
              </div>
            </footer>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
