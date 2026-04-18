import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Scissors, 
  Sparkles, 
  Star, 
  Menu, 
  X, 
  ChevronRight,
  Instagram,
  Facebook
} from 'lucide-react';
import { useState } from 'react';

const PHOTOS = {
  hero: "https://late-meadow-df15.daganraye123.workers.dev?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fphoto%3Fmaxwidth%3D1200%26photo_reference%3DAU_ZVEHITK4oXZmi390y3s4h4sHb6ioXrxecTnoVwwCnlo8rpTSv7m6PjuFRkkeKM04GdVj7Cm7ErIU_v-FSsWuSeC-WLWnF1JqfOArO7504OVjTzpbFdI227pFY-ChYq-tSZsWrDl8M2i2pl441dh7kkBvGHgxAtILsyuhfiWBEntuw48IbhU6kymIKFkux32rdK5R6nSpu9yvohUDpi_eRYWp0idETzbeB8Blt3ViCxgtYX_l9-HsClCCLbbF9BIPMVBSl7eSbzWaw0Gu3TxrMdtzjLHkJ2y6K_7UhyKlNXcHcE4P8ZyUxi7xG50lCfHD5hmvpkIqoyLls1IG3nmla3UcyqZlSzWFyHs8PWMq-cNsBzQpvs7KHGxQvyoxhBukb8NA40xR2Ouwk-O6LSuAEP0soPQHQQTEmcjmoxRnGxGorwQ_gl8NjiyD-Rs11oQ%26key%3DAIzaSyD0dkcgpuRIulbVk9YC7oBbsKKMZ6-XSQ8",
  interior: "https://late-meadow-df15.daganraye123.workers.dev?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fphoto%3Fmaxwidth%3D1200%26photo_reference%3DAU_ZVEGLclX1r6G1ronGKIZz0m5lbUIeWVUZlLnyJIgi7ZNVXdkDSoIoaZNSabDX85H2Xw5Qxu3vLefwEY1XXOPssw-FvGXrh2pPOg697ReMeQWYr3p_PFUpdSh-DzlgPIVFYR2s20-OAUIZrscozrnlICN2cNsjzRePaU_wulR_alNQwAywOFkBm9fdD4nGciuey-Oo5VZz4lxfvlCT1aVB_mT3hRxHNTm80-rGcPgQWZL9mDVy429H1x73XMt_QBO6Hw_jbZRvxjG_PE2oNiO0dSEJMCDCUVtd9Coqs92HFSGxOmwDLRRMMNVQqvfRvbERamQ01gSH-AoiFZzeSW4Fgto7-6c-kzt8G33curyCW5rMh_xbqSmoBvsqb9RYeRpXMDAn-5hs6C1h3APx8pht2cviZ_l2nxZWCzG8VDVASvrmjLH6%26key%3DAIzaSyD0dkcgpuRIulbVk9YC7oBbsKKMZ6-XSQ8",
  exterior: "https://late-meadow-df15.daganraye123.workers.dev?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fphoto%3Fmaxwidth%3D1200%26photo_reference%3DAU_ZVEEj7YpIl4xRv24-LPixbGOcJlmYSfXwjSS0AvpMXy_3Fxh2wdVTLXW6zMgF1UiwnrNUOibl2j0IDB7MCyTGFv_rq7JJDVzBPrLTIU7bd_ZdcIrp_7hIgc-IkR4N8wajfbrFzvMPCtq0cHaavKY30SXIRbgufkhkjmRaNo_ORKqa7japBbCE_roXdmS76uLJyg9bCRhZJI6wWE1Q1KBePhdw4YpSA9NSX_JTI4ngUS_2qAuulHsY5NdBNJRkglV24qgXttdfH9n9KHNH0RD5MeeyWrjjoVjMKfdDjpiA-xVSbR73gUuKrhYAsruKaHCXILvsiktg4DYT1HjEHe7Vbs29fX3pdUk6TaQbMDegWOXQuIWuXlG6jxSK_WdaNCgy6GWylbmN6spUUjhlnKgAWYThHHIEI-9K3fm38I9DGTqZxvKZ%26key%3DAIzaSyD0dkcgpuRIulbVk9YC7oBbsKKMZ6-XSQ8",
  photo4: "https://late-meadow-df15.daganraye123.workers.dev?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fphoto%3Fmaxwidth%3D1200%26photo_reference%3DAU_ZVEFT8PaaQa7AhYScuDTmMSETeqaMEaN014EEelKIziT56Be33IW-sdDRsfQ9zNRaiyAVNfKucYMUzvByrnFYRY-vV26afUIKOXgyidrs26QoTttZitwDWeEN_wH2Ny8aatZZZXaaBfAXqRSN_QUlyCSn-fxWxPFNhlvtkLoiihDV0WYmzGI5nc9-Uobj6nSBgeXUhZshTYKWL930PNRILsfoM_m2eUgqjCons6-FMxfIrMXoJTmCQ1i1peH7hKGwlXwBt2h9N5kNdh2_f-PjKr_UZMvJZIhpKW9cFg-NEiYShN2uZ1AD18LZMQlYo1LLAX7Sc7wxZHyfvJyWdgN3ME37iCU9fTVVueVMBeWh88vUETaDGAZz2AnS3lMlv8NEUGPtHr77L9n7fEMCjHpJyF5oGlt6d2crEH-tf_icgNn-KQ%26key%3DAIzaSyD0dkcgpuRIulbVk9YC7oBbsKKMZ6-XSQ8",
  photo5: "https://late-meadow-df15.daganraye123.workers.dev?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fphoto%3Fmaxwidth%3D1200%26photo_reference%3DAU_ZVEEuxkYLd5FB6DPBBgICNGasnFNz6g1LdWt442yxDss7ESHRh_xv2NFWiycAQ8UpSWbDORJJ6ZmGHQlKwVmT6gq8gt-TIsVmzmDFCJwlpnG9M2lzbgRvPy5P6TDwqD9-NloI55LjsjezznenNs3ug8dXg7j9JYzlx0TR1nE3gh9LSW3WDSR7p-VoYQtsXOP4zJH7PrQq2TTDEs-mBubzTnm0aDP_rk0dZ8OouyGgntTjaFRGedmpIJj5S1JQYZYvdUl0df3TzTQykTmzjOimACp5mTWOyPRii2h1CHBWpDp5tJ63tKaSuV2o5bvbMDbvCrWaL0evSa8801kM5GNwURiPhn4KIGyVfaTWGbb8G6qZjFQmzReaFManySgTZqbU5wImU_B6EgbQbzBHsCE-3YnCjnixZgI1GhPbVfzzsIo%26key%3DAIzaSyD0dkcgpuRIulbVk9YC7oBbsKKMZ6-XSQ8",
  photo6: "https://late-meadow-df15.daganraye123.workers.dev?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fphoto%3Fmaxwidth%3D1200%26photo_reference%3DAU_ZVEElYefNfOeJqxVXdbbL2sr5UVXzF3di6CP0p3CsZtevAu5_ioSXmSibZCh3fjZMemhx_S1lBdMPGHJigNyTbqx7gYSL3ZWdX8iFSUrHNduZfkncy0rKIefBYMf7kKQvWI-br05e6bqNzLo2RUfvH-yOn5elnDL8F5a9HUXaTc2lcoA0CD0yTFZ8MKsmc7IkchO4V2Buw8yb_K9m0i1gSB1Bd96fMnDPc0XzqppR_e3QJ-zFg4t5s-bbrW4mp9w7ohCE6XwbMfER8vy2NzsvFAZaOSNglehnF3RQUPxKf4c0raLR_Awh2Z6vt__shYbZE3ct4OShRQCRlnXJqoP-51PzS4aJtbo9Q7YVXhkMLPLzVQbo2iyF258XwVNLnxS5FBEO77x0CU3cfJH25PA9Ze1T6WiVB7gyMpGBey-F0wQjXA%26key%3DAIzaSyD0dkcgpuRIulbVk9YC7oBbsKKMZ6-XSQ8"
};

const SERVICES = [
  { name: "Men's Haircuts", description: "Precision cutting for the modern man.", icon: <Scissors className="w-5 h-5" /> },
  { name: "Hair Coloring", description: "Rich, vibrant dyes and perms with professional care.", icon: <Sparkles className="w-5 h-5" /> },
  { name: "Nail Spa", description: "Pampering treatments for hands and feet.", icon: <Star className="w-5 h-5" /> },
  { name: "Styling & Blowouts", description: "Perfect looks for any occasion.", icon: <Sparkles className="w-5 h-5" /> }
];

const TESTIMONIALS = [
  {
    name: "Caliwood Detail",
    text: "Great spot for men's haircuts and kids! We've been coming here for a long time and highly recommend it.",
    stars: 5
  },
  {
    name: "Dulce Dragon",
    text: "I wouldn't trust my hair with anyone else. Always gives good advice on how to keep it healthy with top brand products.",
    stars: 5
  },
  {
    name: "me me",
    text: "Luz did a great job. She was really nice, and I doubt you'll find a better price. Definitely worth it.",
    stars: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-brand-accent/20">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-bg/80 backdrop-blur-lg border-b border-brand-accent/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="serif text-2xl font-semibold tracking-tight text-brand-accent">Luz Beauty Salon</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-xs font-bold hover:text-brand-accent transition-colors uppercase tracking-[0.2em]">About</a>
            <a href="#services" className="text-xs font-bold hover:text-brand-accent transition-colors uppercase tracking-[0.2em]">Services</a>
            <a href="#gallery" className="text-xs font-bold hover:text-brand-accent transition-colors uppercase tracking-[0.2em]">Gallery</a>
            <a href="#contact" className="text-xs font-bold hover:text-brand-accent transition-colors uppercase tracking-[0.2em]">Contact</a>
            <a href="tel:4692226153" className="px-6 py-2.5 bg-brand-accent text-white rounded-full text-xs font-bold uppercase tracking-[0.1em] hover:bg-brand-accent/90 transition-all shadow-md">
              Book Visit
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-brand-accent">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute w-full bg-brand-bg border-b border-brand-accent/10 px-6 py-10 space-y-6"
          >
            <a href="#about" className="block text-sm font-bold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="block text-sm font-bold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#gallery" className="block text-sm font-bold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#contact" className="block text-sm font-bold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="tel:4692226153" className="block w-full text-center py-4 bg-brand-accent text-white rounded-xl font-bold uppercase tracking-widest">Book Appointment</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <img 
            src={PHOTOS.hero}
            alt="Luz Beauty Salon Experience"
            className="w-full h-full object-cover filter brightness-[0.9] saturate-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/80 via-brand-bg/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="pill-tag">Experience Timeless Beauty</span>
            <h1 className="serif text-6xl md:text-8xl font-light mb-8 leading-[1.05] text-brand-text">
              Artistry <br />
              <span className="italic text-brand-accent">in every cut.</span>
            </h1>
            <p className="text-lg text-slate-700 mb-10 leading-relaxed max-w-md">
              Denton's most trusted sanctuary for premium hair transformations, expert coloring, and luxury nail care. Discover your signature look with Luz.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:4692226153" className="btn-primary flex items-center gap-2 group">
                Reserve Appointment <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>
            
            <div className="flex gap-10 mt-16">
              <div className="space-y-1">
                <div className="flex text-brand-accent-light">
                   {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">4.8 Google Excellence</p>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl serif text-brand-accent italic">"Simply the best"</span>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">- Verified Client</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-brand-bg px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden aspect-[4/5] relative z-10 shadow-2xl shadow-brand-accent/10"
            >
              <img src={PHOTOS.exterior} alt="Luz Beauty Salon Denton" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent-light/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-accent/10 rounded-full blur-3xl -z-10" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="pill-tag">Our History</span>
            <h2 className="serif text-5xl md:text-6xl leading-tight text-brand-text">A local tradition of <span className="italic">personalized care</span>.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              For years, Luz has been the heart of hair care in Denton. Our salon is more than just a place for a haircut—it's where quality meets warmth. We combine premium professional products with personalized advice to ensure your hair stays healthy and beautiful long after you leave our chair.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-4 border-t border-brand-accent/10">
              <div className="space-y-2">
                <span className="serif text-4xl text-brand-accent italic">10+</span>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 leading-relaxed">Years of <br /> Denton Community</p>
              </div>
              <div className="space-y-2">
                <span className="serif text-4xl text-brand-accent italic">100%</span>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 leading-relaxed">Focus on <br /> Hair Health</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-40 bg-brand-muted/30 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-6">
            <span className="pill-tag">Expert Artistry</span>
            <h2 className="serif text-5xl md:text-7xl">Our Specialties</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {SERVICES.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-service group hover:-translate-y-2 transition-all"
              >
                <div className="w-14 h-14 bg-brand-accent/5 rounded-2xl flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="serif text-2xl mb-4 text-brand-text">{item.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-40 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-end mb-20">
            <div className="space-y-6">
              <span className="pill-tag">Inside the Studio</span>
              <h2 className="serif text-5xl md:text-7xl">A sanctuary <span className="italic">for transformation</span>.</h2>
            </div>
            <p className="text-lg text-slate-500 leading-relaxed max-w-sm">
              Our studio is designed to be your home away from home. Clean, modern, and filled with natural light.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5 space-y-6">
               <img src={PHOTOS.interior} className="rounded-[2.5rem] w-full h-[500px] object-cover shadow-xl" referrerPolicy="no-referrer" alt="Main workspace" />
               <img src={PHOTOS.photo4} className="rounded-[2.5rem] w-full h-[300px] object-cover shadow-xl" referrerPolicy="no-referrer" alt="Products" />
            </div>
            <div className="col-span-12 md:col-span-7 space-y-6 pt-0 md:pt-20">
               <img src={PHOTOS.photo5} className="rounded-[2.5rem] w-full h-[400px] object-cover shadow-xl" referrerPolicy="no-referrer" alt="Comfort" />
               <div className="grid grid-cols-2 gap-6">
                  <img src={PHOTOS.photo6} className="rounded-[2.5rem] w-full h-[340px] object-cover shadow-xl" referrerPolicy="no-referrer" alt="Detail" />
                  <div className="bg-brand-accent rounded-[2.5rem] p-10 flex flex-col justify-between text-white shadow-xl">
                     <Scissors className="w-10 h-10 opacity-30" />
                     <p className="serif text-3xl font-light italic leading-tight">Mastering hair health with top brand products.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-40 bg-brand-bg relative px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="pill-tag">Reviews</span>
          <h2 className="serif text-5xl md:text-[5.5rem] mb-20 tracking-tight leading-[0.9]">Word from the <span className="italic text-brand-accent underline underline-offset-[12px] decoration-1 decoration-brand-accent/20">community</span>.</h2>
          
          <div className="grid md:grid-cols-3 gap-16 text-left">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex gap-1 text-brand-accent-light">
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-2xl serif leading-relaxed text-slate-800 italic">"{t.text}"</p>
                <div className="pt-8 border-t border-brand-accent/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-tighter opacity-40">Local Resident</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section id="contact" className="py-24 md:py-40 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-20">
          <div className="md:col-span-7 space-y-16">
            <div className="space-y-6">
              <span className="pill-tag">Visit the Salon</span>
              <h2 className="serif text-6xl md:text-8xl leading-none">Find your <br /> <span className="italic text-brand-accent">glow</span> today.</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
               <div className="space-y-10">
                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-brand-bg rounded-2xl text-brand-accent"><MapPin /></div>
                     <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Location</span>
                        <p className="text-xl font-medium tracking-tight">326 E McKinney St #101,<br />Denton, TX 76201</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-brand-bg rounded-2xl text-brand-accent"><Phone /></div>
                     <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Direct Call</span>
                        <a href="tel:4692226153" className="text-xl font-medium tracking-tight hover:text-brand-accent transition-colors">(469) 222-6153</a>
                     </div>
                  </div>
               </div>
               
               <div className="relative group">
                  <div className="absolute inset-0 bg-brand-accent/5 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                  <div className="relative bg-white border border-brand-accent/10 p-10 rounded-[2.5rem] shadow-xl">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6 block">Our Hours</span>
                      <div className="space-y-4 text-sm font-medium">
                         <div className="flex justify-between border-b border-slate-50 pb-2"><span>WED - FRI</span> <span className="text-brand-accent">10:00 - 19:00</span></div>
                         <div className="flex justify-between border-b border-slate-50 pb-2"><span>SATURDAY</span> <span className="text-brand-accent">09:00 - 19:00</span></div>
                         <div className="flex justify-between border-b border-slate-50 pb-2"><span>SUNDAY</span> <span className="text-brand-accent">12:00 - 18:00</span></div>
                         <div className="flex justify-between text-slate-300"><span>MON - TUE</span> <span>Closed</span></div>
                      </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-brand-muted/30 p-12 md:p-16 rounded-[3.5rem] space-y-8 flex flex-col justify-center">
             <h3 className="serif text-4xl">Ready to book?</h3>
             <p className="text-slate-600 leading-relaxed text-lg">We can't wait to see you. For the best availability, we recommend booking a few days in advance.</p>
             <a href="tel:4692226153" className="btn-primary text-center flex items-center justify-center gap-3">
               Call to Schedule <Phone className="w-5 h-5" />
             </a>
             <div className="flex justify-center gap-8 pt-6">
                <a href="#" className="p-4 bg-white rounded-full text-slate-400 hover:text-brand-accent transition-all shadow-sm"><Instagram /></a>
                <a href="#" className="p-4 bg-white rounded-full text-slate-400 hover:text-brand-accent transition-all shadow-sm"><Facebook /></a>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-brand-bg border-t border-brand-accent/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="serif text-2xl text-brand-accent font-bold">Luz Beauty Salon</div>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest opacity-40">
             <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
             <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
             <a href="#gallery" className="hover:opacity-100 transition-opacity">Gallery</a>
             <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
          <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em]">&copy; 2026 LUZ SALON DENTON.</div>
        </div>
      </footer>
    </div>
  );
}

