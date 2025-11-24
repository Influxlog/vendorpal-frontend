"use client";
import React, { useState, useEffect } from "react";
import {
  Camera,
  Sparkles,
  Type,
  Globe,
  ArrowRight,
  CheckCircle,
  ShoppingBag,
  Zap,
  Layers,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Sun,
  Moon,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  darkMode: boolean;
}

interface StepItemProps {
  active: boolean;
  completed: boolean;
  icon: React.ReactNode;
  label: string;
  sub: string;
  darkMode: boolean;
}

interface ProductJourneyAnimationProps {
  darkMode: boolean;
}

// REPLACE WITH YOUR GOOGLE SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isSubmitting) {
      setIsSubmitting(true);
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        // With no-cors, we can't check response status, so we assume success if no network error
        setIsSubmitted(true);
        setEmail("");
      } catch (error) {
        console.error("Error submitting to Google Sheets:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen selection:bg-purple-500 selection:text-white overflow-x-hidden transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-slate-50 text-slate-900"
      }`}
      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
    >
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700,400,300&display=swap');
      `}</style>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
          darkMode
            ? "bg-black/80 border-white/10"
            : "bg-white/80 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode
                  ? "from-white to-zinc-400"
                  : "from-slate-900 to-slate-600"
              }`}
            >
              UniList
            </span>
          </div>

          <div
            className={`hidden md:flex items-center gap-8 text-sm font-medium ${
              darkMode ? "text-zinc-400" : "text-slate-600"
            }`}
          >
            <a
              href="#how-it-works"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-slate-900"
              }`}
            >
              How it Works
            </a>
            <a
              href="#features"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-slate-900"
              }`}
            >
              Features
            </a>
            <a
              href="#pricing"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-slate-900"
              }`}
            >
              Pricing
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "hover:bg-white/10 text-zinc-400 hover:text-white"
                  : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                darkMode
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-900"
              }`}
            >
              Login
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "text-zinc-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={darkMode ? "text-white" : "text-slate-900"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden border-b p-4 space-y-4 ${
              darkMode
                ? "bg-zinc-900 border-white/10"
                : "bg-white border-slate-200"
            }`}
          >
            <a
              href="#how-it-works"
              className={`block ${
                darkMode
                  ? "text-zinc-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              How it Works
            </a>
            <a
              href="#features"
              className={`block ${
                darkMode
                  ? "text-zinc-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Features
            </a>
            <button
              className={`w-full py-2 rounded-lg ${
                darkMode ? "bg-white/10" : "bg-slate-100"
              }`}
            >
              Login
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full blur-[120px] -z-10 transition-colors duration-300 ${
            darkMode ? "bg-purple-600/20" : "bg-purple-600/10"
          }`}
        />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium uppercase tracking-wider mb-4 animate-fade-in-up ${
              darkMode
                ? "bg-purple-500/10 border-purple-500/20 text-purple-300"
                : "bg-purple-100 border-purple-200 text-purple-700"
            }`}
          >
            <Sparkles className="w-3 h-3" />
            Join the waitlist for early access
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            One Upload. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
              Every Marketplace.
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
              darkMode ? "text-zinc-400" : "text-slate-600"
            }`}
          >
            Stop manually listing products. Upload a raw photo once. Our AI
            enhances it to studio quality, writes the copy, and syncs it to
            Amazon, Shopify, eBay, and Etsy instantly.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto relative group"
          >
            <div
              className={`absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 ${
                isSubmitted ? "hidden" : ""
              }`}
            ></div>

            {!isSubmitted ? (
              <div
                className={`relative flex p-2 border rounded-xl ring-1 shadow-2xl transition-colors duration-300 ${
                  darkMode
                    ? "bg-zinc-900 border-white/10 ring-white/5"
                    : "bg-white border-slate-200 ring-slate-100"
                }`}
              >
                <input
                  type="email"
                  placeholder="enter your email..."
                  className={`flex-1 bg-transparent border-none outline-none px-4 ${
                    darkMode
                      ? "text-white placeholder:text-zinc-500"
                      : "text-slate-900 placeholder:text-slate-400"
                  }`}
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2 ${
                    darkMode
                      ? "bg-white text-black hover:bg-zinc-200 disabled:bg-zinc-600 disabled:text-zinc-400"
                      : "bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-400"
                  }`}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}{" "}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            ) : (
              <div
                className={`relative p-4 border rounded-xl flex items-center justify-center gap-2 font-medium animate-in fade-in zoom-in ${
                  darkMode
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : "bg-green-50 border-green-200 text-green-700"
                }`}
              >
                <CheckCircle className="w-5 h-5" />
                You're on the list! We'll be in touch soon.
              </div>
            )}
            <p
              className={`mt-3 text-xs ${
                darkMode ? "text-zinc-500" : "text-slate-500"
              }`}
            >
              Limited spots available for beta. No credit card required.
            </p>
          </form>
        </div>
      </section>

      {/* THE JOURNEY ANIMATION */}
      <section
        id="how-it-works"
        className={`py-20 relative overflow-hidden transition-colors duration-300 ${
          darkMode ? "bg-black" : "bg-slate-50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Automated Journey</h2>
            <p className={darkMode ? "text-zinc-400" : "text-slate-600"}>
              From raw photo to global sales in seconds.
            </p>
          </div>

          <ProductJourneyAnimation darkMode={darkMode} />
        </div>
      </section>

      {/* Feature Grid */}
      <section
        id="features"
        className={`py-24 transition-colors duration-300 ${
          darkMode ? "bg-zinc-900/30" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              darkMode={darkMode}
              icon={<Camera className="w-6 h-6 text-pink-400" />}
              title="Studio-Grade AI"
              desc="We automatically remove backgrounds, adjust lighting, and center your product. No Photoshop needed."
            />
            <FeatureCard
              darkMode={darkMode}
              icon={<Type className="w-6 h-6 text-purple-400" />}
              title="SEO Copywriting"
              desc="Generates titles, bullet points, and descriptions optimized for each platform's specific algorithm."
            />
            <FeatureCard
              darkMode={darkMode}
              icon={<Globe className="w-6 h-6 text-blue-400" />}
              title="Omnichannel Sync"
              desc="Connect Shopify, Amazon, eBay, and Etsy. Inventory updates automatically across all channels."
            />
          </div>
        </div>
      </section>

      {/* Metrics / Trust */}
      <section
        className={`py-20 border-y transition-colors duration-300 ${
          darkMode ? "bg-black border-white/5" : "bg-slate-50 border-slate-200"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <div
              className={`text-4xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              10x
            </div>
            <div className={darkMode ? "text-zinc-500" : "text-slate-600"}>
              Faster Listing Speed
            </div>
          </div>
          <div
            className={`h-12 w-px hidden md:block ${
              darkMode ? "bg-white/10" : "bg-slate-200"
            }`}
          ></div>
          <div>
            <div
              className={`text-4xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              24/7
            </div>
            <div className={darkMode ? "text-zinc-500" : "text-slate-600"}>
              Automated Inventory Sync
            </div>
          </div>
          <div
            className={`h-12 w-px hidden md:block ${
              darkMode ? "bg-white/10" : "bg-slate-200"
            }`}
          ></div>
          <div>
            <div
              className={`text-4xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              SEO
            </div>
            <div className={darkMode ? "text-zinc-500" : "text-slate-600"}>
              Keyword Optimization
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 border-t transition-colors duration-300 ${
          darkMode
            ? "bg-black border-white/10 text-zinc-400"
            : "bg-white border-slate-200 text-slate-600"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div
              className={`w-6 h-6 rounded flex items-center justify-center ${
                darkMode ? "bg-zinc-800" : "bg-slate-100"
              }`}
            >
              <Layers
                className={`w-3 h-3 ${
                  darkMode ? "text-zinc-400" : "text-slate-600"
                }`}
              />
            </div>
            <span
              className={`font-semibold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              UniList
            </span>
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-slate-900"
              }`}
            >
              Privacy
            </a>
            <a
              href="#"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-slate-900"
              }`}
            >
              Terms
            </a>
            <a
              href="#"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-slate-900"
              }`}
            >
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <Twitter
              className={`w-5 h-5 cursor-pointer transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-slate-900"
              }`}
            />
            <Linkedin
              className={`w-5 h-5 cursor-pointer transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-slate-900"
              }`}
            />
            <Instagram
              className={`w-5 h-5 cursor-pointer transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-slate-900"
              }`}
            />
          </div>
        </div>
        <div
          className={`text-center mt-8 text-sm ${
            darkMode ? "text-zinc-600" : "text-slate-500"
          }`}
        >
          © {new Date().getFullYear()} UniList AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// --- Sub-Components ---

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  desc,
  darkMode,
}) => (
  <div
    className={`p-8 rounded-2xl border transition-all duration-300 group hover:shadow-2xl ${
      darkMode
        ? "bg-zinc-950 border-white/5 hover:border-purple-500/30 hover:shadow-purple-500/10"
        : "bg-white border-slate-200 hover:border-purple-500/30 hover:shadow-purple-500/5"
    }`}
  >
    <div
      className={`w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
        darkMode
          ? "bg-zinc-900 border-white/10"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      {icon}
    </div>
    <h3
      className={`text-xl font-bold mb-3 ${
        darkMode ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </h3>
    <p
      className={`leading-relaxed ${
        darkMode ? "text-zinc-400" : "text-slate-600"
      }`}
    >
      {desc}
    </p>
  </div>
);

// --- The Core Animation Component ---

const ProductJourneyAnimation: React.FC<ProductJourneyAnimationProps> = ({
  darkMode,
}) => {
  const [step, setStep] = useState(0);
  // 0: Upload, 1: Enhance, 2: Describe, 3: Sync

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3500); // 3.5 seconds per step
    return () => clearInterval(interval);
  }, []);

  // Helper to determine active state classes
  const isActive = (s: number) => step === s;
  const isPast = (s: number) => step > s;

  return (
    <div
      className={`w-full max-w-4xl mx-auto rounded-3xl border overflow-hidden shadow-2xl relative h-[500px] flex flex-col md:flex-row transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 border-white/10" : "bg-white border-slate-200"
      }`}
    >
      {/* Sidebar / Progress Indicator */}
      <div
        className={`w-full md:w-1/3 border-b md:border-b-0 md:border-r p-8 flex flex-row md:flex-col justify-between md:justify-center gap-4 z-10 transition-colors duration-300 ${
          darkMode
            ? "bg-black/50 border-white/5"
            : "bg-slate-50/50 border-slate-200"
        }`}
      >
        <StepItem
          active={isActive(0)}
          completed={isPast(0)}
          icon={<Camera size={20} />}
          label="1. Upload"
          sub="Raw image input"
          darkMode={darkMode}
        />
        <StepItem
          active={isActive(1)}
          completed={isPast(1)}
          icon={<Sparkles size={20} />}
          label="2. AI Enhance"
          sub="Studio quality processing"
          darkMode={darkMode}
        />
        <StepItem
          active={isActive(2)}
          completed={isPast(2)}
          icon={<Type size={20} />}
          label="3. Description"
          sub="SEO content generation"
          darkMode={darkMode}
        />
        <StepItem
          active={isActive(3)}
          completed={isPast(3)}
          icon={<Globe size={20} />}
          label="4. Multi-Sync"
          sub="Publish everywhere"
          darkMode={darkMode}
        />
      </div>

      {/* Main Stage */}
      <div
        className={`flex-1 relative flex items-center justify-center overflow-hidden transition-colors duration-300 ${
          darkMode ? "bg-grid-white/[0.02]" : "bg-grid-slate-900/[0.02]"
        }`}
      >
        {/* Background Grid Animation */}
        <div
          className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] transition-colors duration-300 ${
            darkMode
              ? "from-purple-900/20 via-black/0 to-black/0"
              : "from-purple-100/40 via-white/0 to-white/0"
          }`}
        ></div>

        {/* The Product Card */}
        <div className="relative z-10 w-64 h-80 bg-white rounded-xl shadow-2xl transition-all duration-700 transform">
          {/* Image Area */}
          <div
            className={`h-48 overflow-hidden relative rounded-t-xl flex items-center justify-center transition-colors duration-300 ${
              darkMode ? "bg-gray-100" : "bg-slate-100"
            }`}
          >
            {/* Raw Image State */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                step === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Simulated "Bad" Photo */}
              <div
                className={`w-32 h-32 rounded-lg rotate-12 flex items-center justify-center shadow-sm transition-colors duration-300 ${
                  darkMode ? "bg-gray-300" : "bg-slate-200"
                }`}
              >
                <ShoppingBag className="text-gray-400 w-16 h-16" />
              </div>
              <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay"></div>{" "}
              {/* Bad lighting */}
            </div>

            {/* Enhanced Image State */}
            <div
              className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-700 ${
                step >= 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Simulated "Good" Photo */}
              <div className="w-full h-full p-4 flex items-center justify-center">
                <ShoppingBag className="text-purple-600 w-24 h-24 drop-shadow-2xl filter" />
              </div>
              {/* Scanning Effect (Only during step 1) */}
              {step === 1 && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent w-full h-full animate-scan"></div>
              )}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 space-y-3">
            {/* Title */}
            <div
              className={`h-4 rounded w-3/4 relative overflow-hidden transition-colors duration-300 ${
                darkMode ? "bg-gray-100" : "bg-slate-100"
              }`}
            >
              {step >= 2 && (
                <div className="absolute inset-0 bg-slate-800 animate-slide-reveal"></div>
              )}
            </div>
            {/* Price */}
            <div
              className={`h-4 rounded w-1/4 relative overflow-hidden transition-colors duration-300 ${
                darkMode ? "bg-gray-100" : "bg-slate-100"
              }`}
            >
              {step >= 2 && (
                <div className="absolute inset-0 bg-green-600/80 animate-slide-reveal delay-75"></div>
              )}
            </div>
            {/* Description Lines */}
            <div className="space-y-2 pt-2">
              <div
                className={`h-2 rounded w-full relative overflow-hidden transition-colors duration-300 ${
                  darkMode ? "bg-gray-100" : "bg-slate-100"
                }`}
              >
                {step >= 2 && (
                  <div className="absolute inset-0 bg-gray-400 animate-slide-reveal delay-100"></div>
                )}
              </div>
              <div
                className={`h-2 rounded w-5/6 relative overflow-hidden transition-colors duration-300 ${
                  darkMode ? "bg-gray-100" : "bg-slate-100"
                }`}
              >
                {step >= 2 && (
                  <div className="absolute inset-0 bg-gray-400 animate-slide-reveal delay-150"></div>
                )}
              </div>
            </div>
          </div>

          {/* Sync Connectors (Step 3) */}
          {step === 3 && (
            <>
              {/* Left Top */}
              <div
                className={`absolute -left-16 -top-4 p-3 rounded-full border shadow-xl animate-bounce-in delay-0 flex items-center gap-2 transition-colors duration-300 ${
                  darkMode
                    ? "bg-black border-zinc-800"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="w-3 h-3 rounded-full bg-green-500"></div>{" "}
                <span
                  className={`text-xs font-bold ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Shopify
                </span>
              </div>
              {/* Right Top */}
              <div
                className={`absolute -right-12 top-10 p-3 rounded-full border shadow-xl animate-bounce-in delay-100 flex items-center gap-2 transition-colors duration-300 ${
                  darkMode
                    ? "bg-white text-black border-zinc-200"
                    : "bg-white text-slate-900 border-slate-200"
                }`}
              >
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>{" "}
                <span className="text-xs font-bold">Amazon</span>
              </div>
              {/* Left Bottom */}
              <div className="absolute -left-8 bottom-10 bg-blue-600 text-white p-3 rounded-full shadow-xl animate-bounce-in delay-200 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white"></div>{" "}
                <span className="text-xs font-bold">eBay</span>
              </div>
              {/* Right Middle - Jumia */}
              <div className="absolute -right-20 bottom-24 bg-orange-500 text-white p-3 rounded-full shadow-xl animate-bounce-in delay-300 flex items-center gap-2">
                <div className="flex items-center justify-center w-3 h-3 bg-black rounded-full">
                  <span className="text-[8px]">★</span>
                </div>
                <span className="text-xs font-bold">Jumia</span>
              </div>
              {/* Right Bottom - Instagram */}
              <div
                className={`absolute -right-6 -bottom-6 p-3 rounded-full border shadow-xl animate-bounce-in delay-500 flex items-center gap-2 transition-colors duration-300 ${
                  darkMode
                    ? "bg-zinc-900 border-zinc-800"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"></div>
                <span
                  className={`text-xs font-bold ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Instagram
                </span>
              </div>
            </>
          )}

          {/* Floating Badges based on step */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            {step === 1 && (
              <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse flex items-center gap-1">
                <Sparkles size={12} /> ENHANCING
              </div>
            )}
            {step === 2 && (
              <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Zap size={12} /> WRITING
              </div>
            )}
            {step === 3 && (
              <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <CheckCircle size={12} /> PUBLISHED
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StepItem: React.FC<StepItemProps> = ({
  active,
  completed,
  icon,
  label,
  sub,
  darkMode,
}) => (
  <div
    className={`flex items-center gap-4 transition-all duration-500 ${
      active ? "opacity-100 scale-105" : "opacity-40 scale-100"
    }`}
  >
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-500
        ${active ? "bg-purple-600 border-purple-400 text-white" : ""}
        ${completed ? "bg-green-500/20 border-green-500 text-green-400" : ""}
        ${
          !active && !completed
            ? darkMode
              ? "bg-zinc-800 border-white/10 text-zinc-500"
              : "bg-slate-100 border-slate-200 text-slate-400"
            : ""
        }
      `}
    >
      {completed ? <CheckCircle size={20} /> : icon}
    </div>
    <div className="hidden md:block">
      <div
        className={`font-semibold text-sm ${
          active
            ? darkMode
              ? "text-white"
              : "text-slate-900"
            : darkMode
            ? "text-zinc-400"
            : "text-slate-500"
        }`}
      >
        {label}
      </div>
      <div
        className={`text-xs ${darkMode ? "text-zinc-500" : "text-slate-500"}`}
      >
        {sub}
      </div>
    </div>
  </div>
);

export default Waitlist;
