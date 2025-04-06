import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Brush, Code2, Palette, Sparkles, Download, ChevronRight, Globe, ChevronDown, Image, Shuffle, DollarSign, Star, Languages, Zap, Shield, Paintbrush, Check, X } from 'lucide-react';

// 添加多语言内容
const translations = {
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
        comment: '"As a solo game dev, Raphael AI Image Generator is invaluable. The speed and quality of asset generation are unmatched, and being free means I can focus my budget elsewhere."'
      },
      {
        name: 'Emily Parker',
        role: 'Content Creator on YouTube',
        comment: '"I create thumbnails daily using Raphael AI Image Generator. The text understanding is incredible - it captures exactly what I need, and the no-registration policy makes it super convenient."'
      },
      {
        name: 'Robert Wilson',
        role: 'UI/UX Designer at TechFlow',
        comment: '"The FLUX.1-Dev model in Raphael AI Image Generator produces the most consistent and high-quality results I\'ve seen. It\'s become our go-to tool for generating mockup images."'
      },
      {
        name: 'Jennifer Adams',
        role: 'E-commerce Business Owner',
        comment: '"Running an online store requires constant image creation. Raphael\'s free AI Image Generator helps me create professional product photos instantly. It\'s literally saving my business thousands."'
      },
      {
        name: 'Michael Anderson',
        role: 'Digital Artist at ArtStation',
        comment: '"Raphael\'s AI Image Generator is a game-changer. The FLUX.1-Dev model produces incredibly detailed images that I use as concept art. The fact that it\'s completely free is mind-blowing!"'
      }
    ]
  },
  '简体中文': {
    features: '特点',
    faqs: '常见问题',
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
        comment: '"作为一名独立游戏开发者，Raphael AI图像生成器价值连城。资源生成的速度和质量无与伦比，而且免费使用让我能够将预算用在其他地方。"'
      },
      {
        name: '艾米丽·帕克',
        role: 'YouTube内容创作者',
        comment: '"我每天都使用Raphael AI图像生成器创建缩略图。它对文本的理解能力令人难以置信——能精确捕捉我所需要的内容，而且无需注册的政策使它非常便捷。"'
      },
      {
        name: '罗伯特·威尔逊',
        role: 'TechFlow的UI/UX设计师',
        comment: '"Raphael AI图像生成器中的FLUX.1-Dev模型产生了我所见过的最一致和高质量的结果。它已经成为我们生成模型图像的首选工具。"'
      },
      {
        name: '詹妮弗·亚当斯',
        role: '电子商务企业主',
        comment: '"经营在线商店需要持续创建图像。Raphael的免费AI图像生成器帮助我即时创建专业的产品照片。它实实在在地为我的企业节省了数千元成本。"'
      },
      {
        name: '迈克尔·安德森',
        role: 'ArtStation的数字艺术家',
        comment: '"Raphael的AI图像生成器是一个改变游戏规则的工具。FLUX.1-Dev模型生成的细节丰富的图像，我将其用作概念艺术。它完全免费的事实令人难以置信！"'
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
    'हिन्दी',
    'العربية',
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
            iframeWindow.scrollTo(0, 530);
            
            try {
              iframeWindow.addEventListener('scroll', (e) => {
                e.preventDefault();
                e.stopPropagation();
                iframeWindow.scrollTo(0, 530);
                return false;
              }, true);
              
              // 尝试注入CSS来隐藏广告区域
              const iframeDocument = iframeRef.current.contentDocument || iframeWindow.document;
              if (iframeDocument) {
                const style = iframeDocument.createElement('style');
                style.textContent = `
                  /* 隐藏底部广告区域 */
                  div[style*="position: absolute"][style*="bottom"],
                  div[style*="position:absolute"][style*="bottom"],
                  .ad-container,
                  .advertisement,
                  div[id*="ad-container"],
                  div[class*="ad-container"],
                  div[class*="adsbygoogle"],
                  iframe[id*="google_ads"],
                  div[id*="banner"],
                  div[class*="banner"],
                  div[style*="border: 1px solid red"],
                  div[style*="border:1px solid red"] {
                    display: none !important;
                    visibility: hidden !important;
                    opacity: 0 !important;
                    pointer-events: none !important;
                    height: 0 !important;
                    width: 0 !important;
                    max-height: 0 !important;
                    max-width: 0 !important;
                    overflow: hidden !important;
                  }
                `;
                iframeDocument.head.appendChild(style);
              }
            } catch (e) {
              console.log("无法添加滚动事件监听器或注入CSS，这是正常的跨域限制");
            }
          }
        } catch (e) {
          console.log("无法访问iframe内容，这是正常的跨域限制");
        }
      }
    };
    
    const intervalId = setInterval(resetIframePosition, 100);
    
    const handleIframeLoad = () => {
      setTimeout(() => resetIframePosition(), 100);
      setTimeout(() => resetIframePosition(), 300);
      setTimeout(() => resetIframePosition(), 500);
      setTimeout(() => resetIframePosition(), 1000);
    };
    
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }
    
    return () => {
      clearInterval(intervalId);
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
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
                    {languages.map((language) => (
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
                            {t.testimonials[0].comment}
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
                            {t.testimonials[1].comment}
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
                            {t.testimonials[2].comment}
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
                            {t.testimonials[3].comment}
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
                            {t.testimonials[4].comment}
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