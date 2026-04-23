import { ChevronDown, AlertTriangle, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, ReactNode, useEffect } from "react";
import { notebooks } from "./data/notebooks";
import { NotebookCard } from "./components/NotebookCard";

const Accordion = ({ title, content }: { title: string; content: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-border/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none group bg-brand-accent/20 px-3 hover:bg-brand-accent transition-colors"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-ink">
          {title}
        </span>
        <span className={`text-sm font-bold transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="py-2">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white pb-20 font-sans bg-paper text-ink transition-colors duration-300">
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleDarkMode}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-paper border border-brand-border shadow-md hover:shadow-lg transition-all duration-300 group"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-gold group-hover:rotate-45 transition-transform" />
          ) : (
            <Moon className="w-5 h-5 text-olive group-hover:-rotate-12 transition-transform" />
          )}
        </button>
      </div>

      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-ink mb-12 overflow-hidden">
        <div className="brand mb-6 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-serif leading-tight">
              Restoration Unsealed
            </h1>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-olive mt-2">
              Research Hub for RLDS History & Theology
            </p>
          </motion.div>
        </div>
        
        <div className="scripture max-w-sm md:text-right mt-4 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-serif italic text-sm leading-relaxed text-ink/60">
              "...using the things of this world in the manner designed of God, that the places where [the saints] occupy may shine as Zion"
            </p>
            <p className="mt-1 text-xs font-bold">
              — D&C 128:8c
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Welcome/Intro Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif leading-tight">Welcome to <span className="text-gold italic">Restoration Unsealed</span></h2>
                <p className="text-lg leading-relaxed text-ink/80 text-balance">
                  This project serves as a curated gateway to the foundational texts, historical records, and theological distinctives of the Reorganized Church of Jesus Christ of Latter Day Saints and the subsequent Restoration Branches. Our mission is to provide a central digital home for the legacy of the Restoration, making the voices of the past accessible to the seekers and saints of today.
                </p>
                <p className="text-sm leading-relaxed text-ink/70">
                  In the spirit of using "the things of this world" for the building of Zion, this platform utilizes <strong>Large Language Model (LLM)</strong> technology to "unseal" thousands of pages of archives. Rather than a traditional search engine that only looks for exact words, this conversational interface allows you to navigate primary periodicals, legal documents, and personal memoirs as if you were consulting a digital index. 
                </p>
              </div>
              
              <div className="pt-2">
                <p className="text-[10px] text-ink/40 mb-2 font-bold uppercase tracking-widest">Questions or Feedback?</p>
                <a 
                  href="mailto:acrosstherestoration@gmail.com" 
                  className="text-olive font-bold hover:text-gold transition-colors text-xs tracking-wider"
                >
                  acrosstherestoration@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gold/5 -rotate-2 group-hover:rotate-0 transition-transform duration-700 rounded-sm"></div>
              <img 
                src="first_vision.png"
                alt="First Vision of the Restoration" 
                className="relative z-10 w-full h-auto rounded-sm shadow-2xl border border-brand-border grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="bg-brand-accent/40 p-6 border-l-4 border-gold relative overflow-hidden group w-full">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertTriangle className="w-12 h-12 text-gold rotate-12" />
            </div>
            <div className="flex items-start gap-4 text-left">
              <AlertTriangle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-ink/90">Discernment Recommended</p>
                <p className="text-xs leading-relaxed text-ink/70">
                  While these language models are powerful tools for organization and retrieval, they are not a substitute for the Holy Spirit or personal study. We caution users not to blindly trust the summaries generated by the interface; like any tool, it can occasionally misinterpret nuances or omit context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Hub Header */}
        <section className="research-hub mb-16 pt-12 border-t border-brand-border/30">
          <div className="hub-header mb-12">
            <h2 className="text-3xl font-serif mb-2 bg-transparent text-ink">Choose Your Area of Study</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Select a specialized research notebook to begin your inquiry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12 font-sans">
            {notebooks.map((notebook, index) => (
              <NotebookCard key={notebook.title} notebook={notebook} index={index} />
            ))}
          </div>

          {/* Seeker Guidance */}
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-serif mb-2 italic text-gold">What questions should I ask?</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Suggested starting points for your research journey</p>
          </div>

          <div className="seeker-guidance grid grid-cols-1 md:grid-cols-2 gap-8 p-1 sm:p-1 bg-brand-border/10 rounded-lg mb-20 overflow-hidden">
            <div className="bg-brand-accent/30 dark:bg-brand-accent/40 p-10 sm:p-12 border-b md:border-b-0 md:border-r border-brand-border/30 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-gold">
                <span className="text-8xl">🕊️</span>
              </div>
              <h4 className="text-xl font-serif mb-6 flex items-center gap-2 text-gold">For Christian Seekers</h4>
              <ul className="text-sm space-y-5 text-ink/80 list-disc list-inside leading-relaxed pb-8 border-b border-brand-border/20">
                <li>How do these archives describe the nature of Jesus Christ and the way of salvation?</li>
                <li>What is the "Inspired Version" of the Bible, and why was it vital to the early Saints?</li>
                <li>Did Joseph Smith teach doctrines contrary to the Bible?</li>
              </ul>
              <div className="mt-8">
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-olive mb-2">Recommended Starting Point:</p>
                <p className="text-sm"><b>The Living Faith</b> or <b>Scriptures & Doctrine</b></p>
              </div>
            </div>

            <div className="bg-brand-accent/30 dark:bg-brand-accent/40 p-10 sm:p-12 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-gold">
                <span className="text-8xl">🛡️</span>
              </div>
              <h4 className="text-xl font-serif mb-6 flex items-center gap-2 text-gold">For LDS Seekers</h4>
              <ul className="text-sm space-y-5 text-ink/80 list-disc list-inside leading-relaxed pb-8 border-b border-brand-border/20">
                <li>What evidence exists for the "lineal succession" of Joseph Smith III as the rightful heir?</li>
                <li>What was the legal outcome of the "Temple Lot Case" regarding the successor church?</li>
                <li>Where is the church today?</li>
              </ul>
              <div className="mt-8">
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-olive mb-2">Recommended Starting Points:</p>
                <p className="text-sm"><b>The Case for the Reorganization</b> or <b>The Living Faith</b></p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="bg-brand-accent/20 p-12 border border-brand-border rounded-sm mb-20 shadow-sm text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-12 flex items-center justify-center gap-3">
              <span>🛠️</span> How to Use This Library
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                {
                  step: "01",
                  title: "Open a Link",
                  desc: "Click on one of the notebooks above. (A Google account is required)."
                },
                {
                  step: "02",
                  title: "Ask a Question",
                  desc: "Use the chat box for queries like 'Summarize Oakman's views on the spiritual universe.'"
                },
                {
                  step: "03",
                  title: "Verify Citations",
                  desc: "Click AI citations to read the original source text for confirmation."
                }
              ].map((item) => (
                <div key={item.step}>
                  <span className="text-4xl font-serif text-olive mb-4 block leading-none">{item.step}</span>
                  <h4 className="text-[14px] font-bold uppercase tracking-wider mb-2">{item.title}</h4>
                  <p className="text-[#666] text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Multi-language Instructions */}
        <div className="max-w-4xl mx-auto space-y-6 mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px grow bg-brand-border"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#999]">Multi-language Support</span>
            <div className="h-px grow bg-brand-border"></div>
          </div>
          
          <Accordion 
            title="🇪🇸 Instrucciones en Español"
            content={
              <div className="p-6 bg-white dark:bg-brand-accent border border-brand-border space-y-4">
                <div className="bg-gold/10 p-4 rounded-sm border-l-4 border-gold text-xs leading-relaxed italic text-ink/70">
                  <strong>Instrucciones:</strong> Dado que los documentos están en inglés, es posible que deba usar Google Translate para escribir su pregunta. Para obtener mejores resultados, agregue: <strong>"Answer in Spanish"</strong>.
                </div>
                <p className="text-sm leading-relaxed text-ink/80">
                  Bienvenido a <strong>Restoration Unsealed</strong>. Este proyecto de código abierto es una puerta de entrada a los textos fundamentales y registros históricos de la Iglesia Reorganizada de Jesucristo de los Santos de los Últimos Días y las Ramas de la Restauración.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 border border-brand-border"><strong>El Registro Histórico (1830–1890)</strong> - Archivo de fuentes primarias.</div>
                  <div className="p-3 border border-brand-border"><strong>La Fe Viva: Creencias y Herencia</strong> - Sermones y testimonios.</div>
                  <div className="p-3 border border-brand-border"><strong>Escrituras y Doctrina</strong> - Libros Estándar y doctrina.</div>
                  <div className="p-3 border border-brand-border"><strong>El Caso de la Reorganización</strong> - Historia legal y sucesión.</div>
                </div>
              </div>
            }
          />
          
          <Accordion 
            title="🇹🇼 中文说明 (Chinese Instructions)"
            content={
              <div className="p-6 bg-white dark:bg-brand-accent border border-brand-border space-y-4">
                <div className="bg-gold/10 p-4 rounded-sm border-l-4 border-gold text-xs leading-relaxed italic text-ink/70">
                  <strong>說明：</strong> 由於原始文件為英文，您可能需要使用 Google 翻譯先將問題翻譯成英文。若要讓 AI 以中文回答，請在問題末尾加上：<strong>"Answer in Traditional Mandarin Chinese"</strong>。
                </div>
                <p className="text-sm leading-relaxed text-ink/80">
                  歡迎來到 <strong>Restoration Unsealed</strong>。這是一個開源項目，旨在收錄重組後的耶穌基督後期聖徒教會（RLDS）及其後續復興分支的基礎文本和歷史記錄。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-ink/70">
                  <div className="p-3 border border-brand-border"><strong>歷史紀錄 (1830–1890)</strong> - 主要原始資料檔案。</div>
                  <div className="p-3 border border-brand-border"><strong>活出的信仰：信仰與遺產</strong> - 證道與見證庫。</div>
                  <div className="p-3 border border-brand-border"><strong>復興聖典與教義</strong> - 標準著作與教義闡釋。</div>
                  <div className="p-3 border border-brand-border"><strong>重組教會的申辯</strong> - 法律歷史、繼承與護教。</div>
                </div>
              </div>
            }
          />
        </div>

        {/* Status/Credits Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 text-ink/70">
          <div className="p-8 border border-dashed border-brand-border rounded-sm">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-olive mb-4 flex items-center">
              <span className="mr-2">🚧</span> Work in Progress
            </h4>
            <p className="text-xs leading-relaxed">
              Please note that this is a living archive. Many volumes of the <em>Saints' Herald</em> are still being processed and added to the collection. We are continuously expanding the library as digital copies become available.
            </p>
          </div>
          <div className="p-8 border border-dashed border-brand-border rounded-sm">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-olive mb-4 flex items-center">
              <span className="mr-2">🤝</span> Credits & Acknowledgments
            </h4>
            <p className="text-xs leading-relaxed mb-4">
              The digital preservation of these materials is made possible by the hard work of various organizations.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="https://latterdaytruth.org" target="_blank" className="text-xs font-bold text-gold hover:underline">LatterDayTruth.org</a>
              <a href="http://centerplace.org" target="_blank" className="text-xs font-bold text-gold hover:underline">Centerplace.org</a>
              <a href="https://restorationbookstore.org" target="_blank" className="text-xs font-bold text-gold hover:underline">RestorationBookstore.org</a>
            </div>
          </div>
        </section>

        {/* SEO Keywords Section */}
        <section className="mb-20 text-center border-t border-brand-border pt-12">
          <p className="text-[10px] text-ink/40 uppercase tracking-widest mb-4">🔍 Searchable Keywords</p>
          <div className="text-[10px] text-ink/30 italic leading-relaxed max-w-4xl mx-auto">
            RLDS Church History, Restoration Branches, Joseph Smith III, Temple Lot Case, Community of Christ Origins, Inspired Version of the Bible, Arthur Oakman, Elbert A. Smith, Joseph Luff, Restoration Apologetics, Saints' Herald, Vision Magazine.
          </div>
          <div className="mt-8 text-sm font-serif italic text-olive">
            “Seek learning, even by study and also by faith.”
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 mt-16 flex flex-col sm:flex-row justify-between items-center text-[10px] text-ink/40 uppercase tracking-widest gap-4">
        <span>Restoration Research Digital Archive &bull; 2026</span>
      </footer>
    </div>
  );
}
