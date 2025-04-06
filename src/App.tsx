import React from 'react';
import { motion } from 'framer-motion';
import { Brush, Code2, Palette, Sparkles, Download, ChevronRight, Globe, ChevronDown, Image, Shuffle, DollarSign, Star, Languages, Zap, Shield, Paintbrush, Check } from 'lucide-react';

function App() {
  const [prompt, setPrompt] = React.useState('');
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  
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

  return (
    <div className="min-h-screen bg-[rgb(33,26,20)] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[rgb(33,26,20)]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <img src="/logo.webp" alt="Raphael AI" className="w-8 h-8 rounded-full" />
                <span className="ml-2 text-xl font-bold text-[rgb(204,144,92)]">Raphael AI</span>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <a href="#features" className="text-[rgb(163,152,143)] hover:bg-[#E5B06E] hover:text-white px-3 py-2 rounded-lg transition">Features</a>
                <a href="#faqs" className="text-[rgb(163,152,143)] hover:bg-[#E5B06E] hover:text-white px-3 py-2 rounded-lg transition">FAQs</a>
                <a href="#pricing" className="text-[rgb(163,152,143)] hover:bg-[#E5B06E] hover:text-white px-3 py-2 rounded-lg transition">Pricing</a>
                <a href="#expand" className="text-[rgb(163,152,143)] hover:bg-[#E5B06E] hover:text-white px-3 py-2 rounded-lg transition">Expand Image</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                <Globe className="w-4 h-4 text-[rgb(160,148,140)]" />
                <span className="text-[rgb(160,148,140)]">English</span>
                <ChevronDown className="w-4 h-4 text-[rgb(160,148,140)]" />
              </button>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition">
                ce
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Section */}
            <div className="flex items-center justify-center mb-5">
              <div className="flex items-center bg-[rgb(33,26,20)] px-8 py-4 rounded-lg border border-white/10">
                <img
                  src="/logo.webp"
                  alt="Raphael AI"
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4 flex items-baseline">
                  <span className="text-5xl font-bold text-[#FFA500]">Raphael</span>
                  <span className="text-5xl font-bold text-[#808080] ml-2">AI</span>
                </div>
              </div>
            </div>

            <h1 className="text-2xl md:text-2xl font-bold mb-4 text-[rgb(216,214,202)]">
              Create stunning AI-generated images in seconds
            </h1>
            <p className="text-lg text-yellow-500 mb-4 flex items-center justify-center gap-2 ">
              ✨ World's First Unlimited Free AI Image Generator ✨
            </p>
            
            <div className="flex flex-wrap justify-center gap-1 mb-8">
              <span className="px-3 py-1 rounded-full bg-[rgb(33,26,20)] text-yellow-500 text-sm">100% Free</span>
              <span className="px-3 py-1 rounded-full bg-[rgb(33,26,20)] text-emerald-500 text-sm">Powered by Flux.1 Dev</span>
              <span className="px-3 py-1 rounded-full bg-[rgb(33,26,20)] text-blue-500 text-sm">No Login Required</span>
              <span className="px-3 py-1 rounded-full bg-[rgb(33,26,20)] text-purple-500 text-sm">Unlimited Generations</span>
            </div>

            <div className="bg-[rgb(33,26,20)] rounded-xl p-6 mb-12 relative">
              <h2 className="text-4xl font-bold mb-8 text-left text-[rgb(237,234,222)] pl-0">AI Image Generator</h2>
              <div className="absolute right-6 bottom-[calc(100%-56px)]">
                <button className="text-gray-400 hover:text-white bg-[rgb(48,38,30)] p-2 rounded-full flex items-center justify-center">
                  <Image className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                  </div>
                  <div className="relative w-full mx-auto">
                    <label className="absolute top-2 left-4 text-sm text-gray-400">Description prompt</label>
                    <textarea
                      placeholder="What do you want to see?"
                      className="w-full h-48 bg-[rgb(48,38,30)] rounded-lg p-4 pt-8 text-white text-xl placeholder:text-[rgb(117,106,98)] placeholder:text-xl focus:outline-none"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <div className="flex gap-3">
                    <button 
                      className="px-4 py-2 rounded-lg bg-[rgb(33,26,20)] text-gray-400 hover:bg-[#333333] transition"
                      onClick={handleClear}
                    >
                      Clear
                    </button>
                    <button 
                      className="px-4 py-2 rounded-lg bg-[rgb(33,26,20)] text-gray-400 hover:bg-[#333333] transition flex items-center gap-2"
                      onClick={handleRandom}
                    >
                      <Shuffle className="w-4 h-4" /> Random
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 text-white hover:opacity-90 transition">
                      Generate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4">Get Inspired</h2>
            <p className="text-gray-400 text-lg mb-8">
              Get inspired by what others are creating with Raphael
            </p>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/1 (1).webp" 
                  alt="Generated image 1" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/2 (1).webp" 
                  alt="Generated image 2" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/3 (1).webp" 
                  alt="Generated image 3" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/4 (1).webp" 
                  alt="Generated image 4" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/5 (1).webp" 
                  alt="Generated image 5" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/6 (1).webp" 
                  alt="Generated image 6" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/7 (1).webp" 
                  alt="Generated image 7" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/8 (1).webp" 
                  alt="Generated image 8" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/9 (1).webp" 
                  alt="Generated image 9" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/10.webp" 
                  alt="Generated image 10" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/11.webp" 
                  alt="Generated image 11" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/12.webp" 
                  alt="Generated image 12" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/13.webp" 
                  alt="Generated image 13" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/14.webp" 
                  alt="Generated image 14" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/15.webp" 
                  alt="Generated image 15" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="bg-[rgb(48,38,30)] rounded-lg overflow-hidden">
                <img 
                  src="/16.webp" 
                  alt="Generated image 16" 
                  className="w-full h-64 object-cover" 
                />
              </div>
            </div>

            {/* Key Features Section */}
            <div className="py-20 bg-[rgb(33,26,20)]">
              <div className="max-w-[1280px] mx-auto">
                <h2 className="text-4xl font-bold mb-4">Key Features of Raphael</h2>
                <p className="text-xl text-gray-400 mb-16 text-left">
                  Experience the next generation of AI image generation - powerful, free, and privacy-focused.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                      <DollarSign className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Zero-Cost Creation</h3>
                    <p className="text-gray-400 text-left">
                      The world's first completely free AI image generator with no usage limits or registration requirements.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                      <Star className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">State-of-the-Art Quality</h3>
                    <p className="text-gray-400 text-left">
                      Powered by FLUX.1-Dev model, delivering photorealistic images with exceptional detail and artistic style control.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                      <Languages className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Advanced Text Understanding</h3>
                    <p className="text-gray-400 text-left">
                      Superior text-to-image capabilities with accurate interpretation of complex prompts and text overlay features.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Lightning-Fast Generation</h3>
                    <p className="text-gray-400 text-left">
                      Optimized inference pipeline ensuring rapid image generation without compromising quality.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Enhanced Privacy Protection</h3>
                    <p className="text-gray-400 text-left">
                      Zero data retention policy - your prompts and generated images are never stored on our servers.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                      <Paintbrush className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Multi-Style Support</h3>
                    <p className="text-gray-400 text-left">
                      Create images across various artistic styles, from photorealistic to anime, oil paintings to digital art.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20 bg-[rgb(33,26,20)]">
              <div className="max-w-[1280px] mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-yellow-500 font-semibold mb-4 block">Testimonial</span>
                  <h2 className="text-4xl font-bold mb-4">What Users Say About Raphael AI</h2>
                  <p className="text-xl text-gray-400 mb-16">
                    Hear from creators and professionals who use our AI Image Generator daily.
                  </p>

                  <div className="relative">
                    <div className="overflow-hidden pb-4">
                      <motion.div 
                        className="flex space-x-6 min-w-full"
                        animate={{ x: -currentTestimonial * 340 }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                      >
                        {/* David Thompson */}
                        <div className="bg-[rgb(33,26,20)] p-6 rounded-xl w-80 flex-shrink-0">
                          <div className="flex items-center mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="David Thompson"
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 text-left">
                              <h3 className="font-semibold">David Thompson</h3>
                              <p className="text-gray-400 text-sm">Independent Game Developer</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-300 text-left">
                            "As a solo game dev, Raphael AI Image Generator is invaluable. The speed and quality of asset generation are unmatched, and being free means I can focus my budget elsewhere."
                          </p>
                        </div>

                        {/* Emily Parker */}
                        <div className="bg-[rgb(33,26,20)] p-6 rounded-xl w-80 flex-shrink-0">
                          <div className="flex items-center mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="Emily Parker"
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 text-left">
                              <h3 className="font-semibold">Emily Parker</h3>
                              <p className="text-gray-400 text-sm">Content Creator on YouTube</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-300 text-left">
                            "I create thumbnails daily using Raphael AI Image Generator. The text understanding is incredible - it captures exactly what I need, and the no-registration policy makes it super convenient."
                          </p>
                        </div>

                        {/* Robert Wilson */}
                        <div className="bg-[rgb(33,26,20)] p-6 rounded-xl w-80 flex-shrink-0">
                          <div className="flex items-center mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="Robert Wilson"
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 text-left">
                              <h3 className="font-semibold">Robert Wilson</h3>
                              <p className="text-gray-400 text-sm">UI/UX Designer at TechFlow</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-300 text-left">
                            "The FLUX.1-Dev model in Raphael AI Image Generator produces the most consistent and high-quality results I've seen. It's become our go-to tool for generating mockup images."
                          </p>
                        </div>

                        {/* Jennifer Adams */}
                        <div className="bg-[rgb(33,26,20)] p-6 rounded-xl w-80 flex-shrink-0">
                          <div className="flex items-center mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="Jennifer Adams"
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 text-left">
                              <h3 className="font-semibold">Jennifer Adams</h3>
                              <p className="text-gray-400 text-sm">E-commerce Business Owner</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-300 text-left">
                            "Running an online store requires constant image creation. Raphael's free AI Image Generator helps me create professional product photos instantly. It's literally saving my business thousands."
                          </p>
                        </div>

                        {/* Michael Anderson */}
                        <div className="bg-[rgb(33,26,20)] p-6 rounded-xl w-80 flex-shrink-0">
                          <div className="flex items-center mb-4">
                            <img
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="Michael Anderson"
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 text-left">
                              <h3 className="font-semibold">Michael Anderson</h3>
                              <p className="text-gray-400 text-sm">Digital Artist at ArtStation</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-300 text-left">
                            "Raphael's AI Image Generator is a game-changer. The FLUX.1-Dev model produces incredibly detailed images that I use as concept art. The fact that it's completely free is mind-blowing!"
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

            {/* FAQ Section */}
            <div className="py-20 bg-[rgb(33,26,20)]" id="faqs">
              <div className="max-w-[1280px] mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <span className="inline-block bg-yellow-500/20 text-yellow-500 font-semibold px-4 py-1 rounded-full mb-4">FAQ</span>
                  <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                  <p className="text-gray-400 text-lg">
                    Have another question? Contact us at support@raphael.app
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">1</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">What is Raphael AI and how does it work?</h3>
                        <p className="text-gray-400 text-left">
                          Raphael AI is the world's first completely free, unlimited AI image generator powered by the FLUX.1-Dev model. It allows you to create high-quality images from text descriptions without any registration or usage limits.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">2</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">Is Raphael AI really free to use?</h3>
                        <p className="text-gray-400 text-left">
                          Yes, Raphael AI is completely free to use! We are committed to being the world's largest and most powerful free AI Image Generator. There are no hidden fees, no credit card required, and no usage limits.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">3</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">What makes Raphael AI different from other AI image generators?</h3>
                        <p className="text-gray-400 text-left">
                          Raphael AI is the only platform offering unlimited free access to the powerful FLUX.1-Dev model. We provide superior image quality, fast generation speed, and complete privacy protection, all without any cost or registration requirements.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">4</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">Do I need to create an account to use Raphael AI?</h3>
                        <p className="text-gray-400 text-left">
                          No, you don't need to create an account or register. Simply visit raphael.app and start generating images immediately. We believe in making AI accessible to everyone without barriers.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">5</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">What types of images can I create with Raphael AI?</h3>
                        <p className="text-gray-400 text-left">
                          You can create a wide variety of images including photorealistic scenes, artistic illustrations, digital art, anime-style images, and more. The FLUX.1-Dev model excels at understanding complex prompts and generating diverse visual styles.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">6</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">How does Raphael AI protect my privacy?</h3>
                        <p className="text-gray-400 text-left">
                          We take privacy seriously. We don't store your prompts or generated images on our servers, and we don't require any personal information. Your creations remain completely private and are deleted after generation.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">7</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">What is the FLUX.1-Dev model?</h3>
                        <p className="text-gray-400 text-left">
                          FLUX.1-Dev is a state-of-the-art AI model known for its exceptional image quality, prompt accuracy, and style versatility. It's typically expensive to use, but Raphael makes it freely available to everyone.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">8</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">Are there any limitations to using Raphael AI?</h3>
                        <p className="text-gray-400 text-left">
                          While Raphael AI is free and unlimited, we maintain standard content guidelines to ensure appropriate use. The platform is designed for web use currently, with mobile apps planned for the future.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">9</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">Can I use the generated images commercially?</h3>
                        <p className="text-gray-400 text-left">
                          Yes, you own the rights to the images you generate with Raphael AI. You can use them for both personal and commercial purposes, making it perfect for creators and businesses alike.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">10</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">Is Raphael AI available on mobile devices?</h3>
                        <p className="text-gray-400 text-left">
                          Currently, Raphael AI is available through our website at raphael.app, which works great on mobile browsers. We're actively developing dedicated mobile apps to provide an even better experience soon.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">11</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">How can I provide feedback or report issues?</h3>
                        <p className="text-gray-400 text-left">
                          We welcome your feedback! You can reach our support team at support@raphael.app. Your input helps us improve and maintain the best free AI image generation service.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="bg-[rgb(33,26,20)] p-6 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-yellow-500 text-lg font-semibold">12</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold mb-3 text-left">What's next for Raphael AI?</h3>
                        <p className="text-gray-400 text-left">
                          We're constantly improving our service with regular updates to the AI model and user interface. Future plans include mobile apps and additional creative features, while maintaining our commitment to being completely free.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="bg-[rgb(33,26,20)] border-t border-white/10 mt-20">
              <div className="max-w-[1280px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center mb-4">
                      <img src="/logo.webp" alt="Raphael AI" className="w-8 h-8 rounded-full" />
                      <span className="ml-2 text-xl font-bold">Raphael AI</span>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Create stunning AI-generated images in seconds with the world's first unlimited free AI Image Generator.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-white transition">
                        Twitter
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition">
                        Discord
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition">
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      Product
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                          Features
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                          API
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      Company
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm">
                    © 2024 Raphael AI. All rights reserved.
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