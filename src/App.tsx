import React from 'react';
import { motion } from 'framer-motion';
import { Brush, Code2, Palette, Sparkles, Download, ChevronRight, Globe, ChevronDown, Image, Shuffle, DollarSign, Star, Languages, Zap, Shield, Paintbrush, Check } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[rgb(33,26,20)] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[rgb(33,26,20)]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

            <div className="bg-[rgb(33,26,20)] rounded-xl p-6 pl-4 mb-12 relative">
              <h2 className="text-4xl font-bold mb-8 text-left text-[rgb(237,234,222)]" style={{ marginLeft: '-30px' }}>AI Image Generator</h2>
              <div className="absolute right-6 bottom-[calc(100%-56px)]">
                <button className="text-gray-400 hover:text-white bg-[rgb(48,38,30)] p-2 rounded-full flex items-center justify-center">
                  <Image className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                  </div>
                  <div className="relative w-full mx-auto" style={{ maxWidth: "1000px" }}>
                    <label className="absolute top-2 left-4 text-sm text-gray-400">Description prompt</label>
                    <textarea
                      placeholder="What do you want to see?"
                      className="w-full h-40 bg-[rgb(48,38,30)] rounded-lg p-4 pt-8 text-white placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 rounded-lg bg-[rgb(33,26,20)] text-gray-400 hover:bg-[#333333] transition">
                    Square Aspect
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-[rgb(33,26,20)] text-gray-400 hover:bg-[#333333] transition">
                    No Style
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-[rgb(33,26,20)] text-gray-400 hover:bg-[#333333] transition">
                    No Color
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-[rgb(33,26,20)] text-gray-400 hover:bg-[#333333] transition">
                    No Lighting
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-[rgb(33,26,20)] text-gray-400 hover:bg-[#333333] transition">
                    No Composition
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="form-checkbox bg-[rgb(33,26,20)] rounded border-gray-600" />
                      <span className="text-gray-400">Negative Prompt</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="form-checkbox bg-[rgb(33,26,20)] rounded border-gray-600" />
                      <span className="text-gray-400">High Quality</span>
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-[rgb(33,26,20)] text-gray-400 hover:bg-[#333333] transition">
                      Clear
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-[rgb(33,26,20)] text-gray-400 hover:bg-[#333333] transition flex items-center gap-2">
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
            <p className="text-gray-400 text-lg mb-16">
              Get inspired by what others are creating with Raphael
            </p>

            {/* Key Features Section */}
            <div className="py-20 bg-[rgb(33,26,20)]">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-4">Key Features of Raphael</h2>
                <p className="text-xl text-gray-400 mb-16">
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
                    <p className="text-gray-400">
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
                    <p className="text-gray-400">
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
                    <p className="text-gray-400">
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
                    <p className="text-gray-400">
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
                    <p className="text-gray-400">
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
                    <p className="text-gray-400">
                      Create images across various artistic styles, from photorealistic to anime, oil paintings to digital art.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Trusted by Millions Section */}
            <div className="py-20 bg-[rgb(33,26,20)]">
              <div className="max-w-7xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-yellow-500 font-semibold mb-4 block">Impact</span>
                  <h2 className="text-4xl font-bold mb-4">Trusted by Millions</h2>
                  <p className="text-xl text-gray-400 mb-16">
                    Join the world's largest free AI Image Generator community
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <h3 className="text-[#E5B06E] text-6xl font-bold mb-2">3M+</h3>
                      <p className="text-gray-400 text-lg mb-1">Active Users</p>
                      <p className="text-gray-500">Monthly Active Users</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-center"
                    >
                      <h3 className="text-[#E5B06E] text-6xl font-bold mb-2">1,530</h3>
                      <p className="text-gray-400 text-lg mb-1">Images Created</p>
                      <p className="text-gray-500">Images Generated per Minute</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-center"
                    >
                      <h3 className="text-[#E5B06E] text-6xl font-bold mb-2">4.9</h3>
                      <p className="text-gray-400 text-lg mb-1">User Rating</p>
                      <p className="text-gray-500">Average Image Quality Score</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20 bg-[rgb(33,26,20)]">
              <div className="max-w-7xl mx-auto text-center">
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

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[rgb(33,26,20)] p-6 rounded-xl"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="Robert Wilson"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="ml-4 text-left">
                          <h3 className="font-semibold">Robert Wilson</h3>
                          <p className="text-gray-400 text-sm">UX Designer at FlowAI</p>
                        </div>
                      </div>
                      <div className="flex text-yellow-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-left">
                        "FLUX.1 Dev model in Raphael AI Image produces the most consistent quality results I've seen. It's my go-to tool for generating images."
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-[rgb(33,26,20)] p-6 rounded-xl"
                    >
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
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-[rgb(33,26,20)] p-6 rounded-xl"
                    >
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
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="py-20 bg-[rgb(33,26,20)]">
              <div className="max-w-7xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-yellow-500 font-semibold mb-4 block">Pricing</span>
                  <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                  <p className="text-xl text-gray-400 mb-16">
                    Start creating amazing AI-generated images today - no credit card required
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[rgb(33,26,20)] p-8 rounded-xl border border-white/10"
                    >
                      <h3 className="text-2xl font-bold mb-2">Free</h3>
                      <p className="text-gray-400 mb-6">Perfect for everyone</p>
                      <div className="flex items-baseline justify-center mb-6">
                        <span className="text-5xl font-bold">$0</span>
                        <span className="text-gray-400 ml-2">/forever</span>
                      </div>
                      <ul className="space-y-4 mb-8 text-left">
                        <li className="flex items-center">
                          <Check className="w-5 h-5 text-yellow-500 mr-3" />
                          <span>Unlimited image generations</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="w-5 h-5 text-yellow-500 mr-3" />
                          <span>High-quality output</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="w-5 h-5 text-yellow-500 mr-3" />
                          <span>Multiple art styles</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="w-5 h-5 text-yellow-500 mr-3" />
                          <span>Commercial usage rights</span>
                        </li>
                      </ul>
                      <button className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 text-white hover:opacity-90 transition">
                        Start Creating
                      </button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 p-8 rounded-xl border border-yellow-500/20"
                    >
                      <h3 className="text-2xl font-bold mb-2">Pro</h3>
                      <p className="text-gray-400 mb-6">Coming soon</p>
                      <div className="flex items-baseline justify-center mb-6">
                        <span className="text-5xl font-bold">TBA</span>
                      </div>
                      <ul className="space-y-4 mb-8 text-left">
                        <li className="flex items-center">
                          <Check className="w-5 h-5 text-yellow-500 mr-3" />
                          <span>Everything in Free</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="w-5 h-5 text-yellow-500 mr-3" />
                          <span>Priority generation</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="w-5 h-5 text-yellow-500 mr-3" />
                          <span>Advanced customization</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="w-5 h-5 text-yellow-500 mr-3" />
                          <span>Early access to new features</span>
                        </li>
                      </ul>
                      <button className="w-full py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition cursor-not-allowed" disabled>
                        Coming Soon
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <footer className="bg-[rgb(33,26,20)] border-t border-white/10 mt-20">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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