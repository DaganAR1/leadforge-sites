import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Calendar, 
  ChevronRight, 
  Leaf, 
  Scissors, 
  Droplets, 
  Sun,
  Instagram,
  Facebook,
  Menu,
  X,
  Star,
  Plus,
  Minus,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const CONTACT_PHONE = "(936) 404-8634";
const CONTACT_EMAIL = "elchololoko76@yahoo.com";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Expert Mowing",
      description: "Precise edging, professional cutting, and clean-up for a manicured finish every time.",
      icon: "M",
    },
    {
      title: "Landscaping",
      description: "Mulching, flower bed design, and shrub trimming to boost your curb appeal.",
      icon: "L",
    },
    {
      title: "Seasonal Cleanup",
      description: "Spring and fall leaf removal, gutter cleaning, and preparation for the next season.",
      icon: "S",
    },
    {
      title: "Irrigation Check",
      description: "System monitoring and minor repairs to keep your lawn hydrated and healthy.",
      icon: "I",
    },
  ];

  const galleryImages = [
    "https://scontent-dfw6-1.xx.fbcdn.net/v/t39.30808-6/660158538_122233818740258604_2487212784404751480_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=7jb_mf0-FmQQ7kNvwFe5Dqz&_nc_oc=Adq_olGnY_UI6mSgTcpOB8OwfF33ul4HnYw5XjnuzZHN-eyKDVUQM2_8PyX2S2CWiaQ&_nc_zt=23&se=-1&_nc_ht=scontent-dfw6-1.xx&_nc_gid=vbegXswgI_rmef9xrScmMw&_nc_ss=7a3a8&oh=00_Af2diK_2IMMN7A1uXTaKCIuvvMO_3NCNmhBkz7X6PWNUkw&oe=69EA2933",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/655394291_122232300782258604_3092346738145711274_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=rRuBhc8UeMUQ7kNvwGrX22D&_nc_oc=AdoDXVyChMLWTS8Ny-odbCigXCPhEHSsUOxO3SyVC9MxufTx4_RUYY2wabxjyeWUwzQ&_nc_zt=23&se=-1&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ESvmZ282NQ2_BuwF7UIdfw&_nc_ss=7a3a8&oh=00_Af3iRMeOAsRuMBuPTw9pIcq22ZCil6IsznKTU0SxznxbrA&oe=69EA1C7C",
    "https://scontent-dfw6-1.xx.fbcdn.net/v/t39.30808-6/659792920_122233818644258604_8600554479302441731_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=AXbic94NTLsQ7kNvwFcG8BP&_nc_oc=AdpuKh3VgspCeycz4yqfVaainJr4_AUh5Ze3FvsB49NeAZ0QqQCIrFRHa9fiRyFLWj4&_nc_zt=23&se=-1&_nc_ht=scontent-dfw6-1.xx&_nc_gid=E6M07Zclj8IMBvwPgvfLvg&_nc_ss=7a3a8&oh=00_Af1_sxwzBtCSWq6tK0TzTRLnoF3OpCpvmX1dhwxE23dJtA&oe=69EA1A8B",
    "https://scontent-dfw6-1.xx.fbcdn.net/v/t39.30808-6/660283980_122233817822258604_3893146702166338339_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=keL75qKi-g4Q7kNvwFJFAGu&_nc_oc=AdqMI4AL7rOB48ityKeh6Qi34uNa4RjpeU5mBkOPR-BhnhDLVlXU6J0Wl9ZzYGB455c&_nc_zt=23&se=-1&_nc_ht=scontent-dfw6-1.xx&_nc_gid=DVQ8Yi3qOqhJzwkL3OVifw&_nc_ss=7a3a8&oh=00_Af1TwQl1zh1bs8E9kyPdlzDYmqX0LQv3caWgK9qKw_Lk5g&oe=69EA2E63",
  ];

  const testimonials = [
    {
      name: "Maria Gonzales",
      location: "Lufkin, TX",
      text: "Soto & Son transformed my yard! They are reliable, professional, and do amazing work. Highly recommend!",
      stars: 5,
    },
    {
      name: "David Reed",
      location: "Nacogdoches, TX",
      text: "The best lawn service in the area. They never miss a week and my grass has never looked better. Professional and friendly.",
      stars: 5,
    },
    {
      name: "Jim Henderson",
      location: "Diboll, TX",
      text: "Great attention to detail. They handle everything from mowing to my flower beds. Best investment for my home.",
      stars: 5,
    },
  ];

  const faqs = [
    {
      q: "Do you offer weekly or bi-weekly services?",
      a: "Yes, we offer both weekly and bi-weekly maintenance plans depending on your lawn's needs and the current season."
    },
    {
      q: "Are estimates free?",
      a: "Absolutely. We provide free, no-obligation estimates for all our services within our service area."
    },
    {
      q: "Do you handle large commercial properties?",
      a: "Yes, we handle both residential and commercial properties of all sizes."
    },
    {
      q: "What areas do you serve?",
      a: "We proudly serve Lufkin, Nacogdoches, Diboll, and all surrounding East Texas communities."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-off-white text-text-dark font-sans selection:bg-sun-gold/30">
      {/* Navigation / Header */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 px-4 md:px-10 flex items-center justify-between ${
          scrolled ? "bg-white shadow-md border-b-3 border-primary" : "bg-white border-b-3 border-primary"
        }`}
      >
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center overflow-hidden border border-primary/20 shadow-sm">
            <img 
              src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/433672125_122093184794258604_3107316981336722257_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=ygtspQ7K_AIQ7kNvwF_9D_K&_nc_oc=AdoRFjZo6FxAB5eNu9HaMM2GBnUXwY5TGcpEjjr7s0LIlILzBng3R5_Gpn4wuD_8mpM&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_UnDh1j1m2k3mll6gKPz8w&_nc_ss=7a3a8&oh=00_Af01aVNaOhXNVbgUzwdd66_2ZeaTU4vmPjLE8ctEm7kOBA&oe=69EA02DD" 
              alt="Soto & Son Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-primary uppercase leading-tight">
            Soto & Son
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 text-[11px] font-extrabold uppercase tracking-widest text-text-light mr-8">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#plans" className="hover:text-primary transition-colors">Plans</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors text-primary border-b-2 border-primary">Contact</a>
          </div>
          <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} className="text-right hover:opacity-80 transition-opacity">
            <p className="text-[10px] uppercase tracking-wider text-text-light font-bold mb-0.5">Call for Estimates</p>
            <p className="text-base font-bold text-primary leading-none">{CONTACT_PHONE}</p>
          </a>
          <div className="text-right h-10 w-px bg-slate-200" />
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-text-light font-bold mb-0.5">Email Us</p>
            <p className="text-base font-bold text-primary leading-none text-xs">{CONTACT_EMAIL}</p>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-0 w-full bg-white z-40 border-b border-card-border p-6 flex flex-col gap-4 lg:hidden shadow-xl"
        >
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-primary uppercase tracking-tight">Services</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-primary uppercase tracking-tight">About</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-primary uppercase tracking-tight">Portfolio</a>
          <a href="#plans" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-primary uppercase tracking-tight">Plans</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-primary uppercase tracking-tight">FAQ</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-primary uppercase tracking-tight py-2 border-b border-slate-50">Contact</a>
          <div className="pt-6 mt-2 border-t border-slate-100 flex flex-col gap-4">
            <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} className="flex flex-col">
              <p className="text-xs font-bold text-text-light uppercase tracking-widest mb-1">Direct Line (Tap to Call)</p>
              <p className="text-2xl font-black text-primary">{CONTACT_PHONE}</p>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex flex-col">
              <p className="text-xs font-bold text-text-light uppercase tracking-widest mb-1">Email Us</p>
              <p className="text-sm font-bold text-primary underline underline-offset-4">{CONTACT_EMAIL}</p>
            </a>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-10 max-w-[1440px] mx-auto grid md:grid-cols-2 gap-10 items-center min-h-[70vh] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-sun-gold/10 rounded-full blur-3xl -z-10" />
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-text relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <CheckCircle size={14} className="text-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Diboll & Lufkin's Top Rated</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-[64px] font-extrabold leading-[1] mb-6 text-primary uppercase tracking-tighter drop-shadow-sm">
            Manicured <br className="hidden sm:block" /> <span className="text-transparent inline-block mt-2" style={{ WebkitTextStroke: '2px var(--color-primary)' }}>Perfection</span>
          </h1>
          <p className="text-lg text-text-light mb-8 max-w-[440px] leading-relaxed font-medium">
            Family owned and operated. We provide premium mowing, landscaping, and seasonal maintenance with the attention to detail your property deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} 
              className="px-8 py-4 bg-primary text-white rounded-[4px] text-[14px] font-black uppercase tracking-widest hover:bg-primary-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95"
            >
              Request a Quote
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-sun-gold text-text-dark rounded-[4px] text-[14px] font-black uppercase tracking-widest hover:brightness-105 transition-all flex items-center justify-center shadow-lg shadow-sun-gold/20 active:scale-95"
            >
              Our Services
            </a>
          </div>
        </motion.div>
        
        <section className="services-grid grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              className="service-card bg-white p-6 rounded-lg border border-card-border shadow-[0_4px_6px_rgba(0,0,0,0.02)] cursor-default transition-all"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black mb-4 text-lg">
                {service.icon}
              </div>
              <h3 className="text-base font-black text-primary mb-2 uppercase tracking-tight leading-none">{service.title}</h3>
              <p className="text-[13px] text-text-light leading-snug font-semibold opacity-80">
                {service.description}
              </p>
            </motion.div>
          ))}
        </section>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white border-y border-card-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 -z-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                className="rounded-2xl overflow-hidden border-8 border-white shadow-2xl relative z-10"
               >
                <img 
                  src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/658143962_122232820022258604_703911569489374474_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=loPkunF9A3sQ7kNvwED4cdy&_nc_oc=Adqa1UYw3aeGPF7jhn3N-1DngZDCpH4LqK_tJNYW8QBY-jpA0gvnR1uxay3zlnZamg8&_nc_zt=23&se=-1&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v-yU66wv1rJUelM9tS_94w&_nc_ss=7a3a8&oh=00_Af38Ykq9yJKb_bw8dxzZQQcW376X2hoIMjCJ25edBQeUTw&oe=69EA16BA" 
                  alt="Soto & Son Team" 
                  className="w-full h-[300px] md:h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-primary/80 to-transparent">
                   <p className="text-white font-black uppercase tracking-widest text-lg leading-tight">East Texas Roots</p>
                </div>
              </motion.div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sun-gold rounded-2xl -z-10 rotate-12" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10 opacity-20" />
            </div>
            <div>
              <h2 className="text-[10px] font-black text-primary uppercase tracking-[3px] mb-4 bg-primary/10 px-2 py-1 inline-block rounded">Our Commitment</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-text-dark leading-none uppercase tracking-tighter">Reliable <br /> Excellence</h3>
              <p className="text-lg text-text-light mb-6 leading-relaxed font-medium">
                As a family-owned and operated business, we treat every lawn like it’s our own. Soto & Son has been serving the local community for years, building a reputation on trust, reliability, and hard work.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  "Licensed and Insured",
                  "Consistent Weekly Care",
                  "Free Precise Estimates",
                  "Satisfaction Guaranteed"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <CheckCircle className="text-primary group-hover:text-white transition-colors" size={14} />
                    </div>
                    <span className="font-bold text-text-dark uppercase tracking-tight text-xs">{item}</span>
                  </div>
                ))}
              </div>
              <a 
                href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} 
                className="inline-block px-10 py-5 bg-primary text-white rounded-[4px] font-black uppercase tracking-[2px] text-xs hover:bg-primary-light transition-all shadow-xl shadow-primary/20 active:translate-y-px"
              >
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Gallery */}
      <section id="gallery" className="py-24 bg-bg-off-white border-b border-card-border">
         <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-[10px] font-extrabold text-primary uppercase tracking-[2px] mb-4">Our Portfolio</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-text-dark leading-tight uppercase tracking-tighter">See Our Results</h3>
              </div>
              <p className="text-text-light font-bold text-[11px] uppercase tracking-widest max-w-xs md:text-right">
                Real results from real East Texas properties we maintain every week.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {galleryImages.map((img, i) => (
                 <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square rounded-lg overflow-hidden border border-card-border shadow-sm group bg-white"
                 >
                   <img src={img} alt="Work Example" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Maintenance Plans */}
      <section id="plans" className="py-24 bg-white border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-extrabold text-primary uppercase tracking-[2px] mb-4">Maintenance Packages</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-text-dark leading-tight uppercase tracking-tighter">Worry-Free Lawn Care</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Essential", price: "Weekly", features: ["Mowing", "Edging", "Trimming", "Blowing"] },
               { title: "Premium", price: "Weekly", features: ["All Essential", "Flower Bed Care", "Shrub Trimming", "Debris Removal"] },
               { title: "Seasonal", price: "Variable", features: ["Spring Clean", "Fall Leaf Cleanup", "Irrigation Check", "Aeration"] }
             ].map((plan, i) => (
               <div key={i} className="p-10 rounded-lg border border-card-border bg-white shadow-sm flex flex-col items-center text-center">
                 <h4 className="text-xl font-black text-primary uppercase tracking-tighter mb-2">{plan.title}</h4>
                 <div className="text- sun-gold font-bold text-sm uppercase tracking-widest mb-8">{plan.price} Service</div>
                 <div className="w-12 h-1 bg-primary/10 mb-8" />
                 <ul className="space-y-4 mb-10 w-full text-center">
                   {plan.features.map((f, j) => (
                     <li key={j} className="text-xs font-extrabold text-text-light uppercase tracking-widest flex items-center justify-center gap-2">
                       <CheckCircle size={12} className="text-primary" />
                       {f}
                     </li>
                   ))}
                 </ul>
                 <a href="#contact" className="mt-auto w-full py-4 bg-primary/5 text-primary border border-primary/20 hover:bg-primary hover:text-white rounded-[4px] font-extrabold uppercase tracking-widest text-[10px] transition-all">Get Quote</a>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-bg-off-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-16">
          <h2 className="text-[10px] font-extrabold text-primary uppercase tracking-[2px] mb-4">Reviews</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-text-dark leading-tight uppercase tracking-tighter">Trusted by the Community</h3>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-lg border border-card-border relative shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} className="fill-sun-gold text-sun-gold" />)}
              </div>
              <p className="text-text-light font-medium italic mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-extrabold text-primary uppercase tracking-tight text-sm mb-1">{t.name}</p>
                <p className="text-xs text-text-light font-bold uppercase tracking-widest">{t.location}</p>
              </div>
              <div className="absolute top-8 right-8 text-slate-100 -z-10 rotate-12">
                <Leaf size={48} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ & Contact Grid */}
      <section id="faq" className="py-24 bg-white border-y border-card-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
             <h2 className="text-[10px] font-extrabold text-primary uppercase tracking-[2px] mb-4">Answers</h2>
             <h3 className="text-3xl md:text-4xl font-extrabold mb-10 text-text-dark uppercase tracking-tighter">Frequently Asked</h3>
             <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-card-border rounded-lg overflow-hidden transition-all duration-300">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-extrabold text-primary uppercase tracking-tight text-sm">{faq.q}</span>
                      {activeFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                    </button>
                    <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-text-light font-medium text-sm leading-relaxed border-t border-card-border/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
             </div>
          </div>
          
          <div id="contact" className="lg:col-span-2">
            <div className="bg-primary/5 p-10 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-extrabold text-primary uppercase tracking-tighter mb-4">Request Quote</h3>
              <p className="text-sm text-text-light font-bold uppercase tracking-widest mb-8">Send us a message and we'll get back to you with a free estimate.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-text-light mb-1.5 ml-1">Your Name</label>
                  <input type="text" className="w-full p-4 rounded-md border border-card-border bg-white text-sm font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-text-light mb-1.5 ml-1">Phone Number</label>
                  <input type="tel" className="w-full p-4 rounded-md border border-card-border bg-white text-sm font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-text-light mb-1.5 ml-1">Service Needed</label>
                  <select className="w-full p-4 rounded-md border border-card-border bg-white text-sm font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                    <option>Regular Maintenance</option>
                    <option>Landscaping Project</option>
                    <option>Seasonal Cleanup</option>
                    <option>Other Service</option>
                  </select>
                </div>
                <button className="w-full py-5 bg-primary text-white rounded-[4px] font-extrabold uppercase tracking-[2px] text-xs hover:bg-primary-light transition-all flex items-center justify-center gap-2 group mt-4">
                  Send Request
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar / Stats */}
      <div className="bg-primary py-16 px-6 md:px-10 text-white flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-6 h-full border-l border-white/20">
            {[...Array(6)].map((_, i) => <div key={i} className="border-r border-white/20" />)}
          </div>
        </div>
        <div className="stats grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-y-10 gap-x-12 relative z-10 w-full md:w-auto">
          <div className="stat-item flex flex-col items-center md:items-start">
            <span className="stat-number text-3xl sm:text-4xl font-black text-sun-gold leading-none mb-1">15+</span>
            <span className="stat-label text-[10px] font-bold uppercase opacity-80 tracking-widest text-center md:text-left">Years <br className="sm:hidden" /> Experience</span>
          </div>
          <div className="stat-item flex flex-col items-center md:items-start">
            <span className="stat-number text-3xl sm:text-4xl font-black text-sun-gold leading-none mb-1">500+</span>
            <span className="stat-label text-[10px] font-bold uppercase opacity-80 tracking-widest text-center md:text-left">Happy <br className="sm:hidden" /> Clients</span>
          </div>
          <div className="stat-item flex flex-col items-center md:items-start col-span-2 sm:col-span-1">
            <span className="stat-number text-3xl sm:text-4xl font-black text-sun-gold leading-none mb-1">100%</span>
            <span className="stat-label text-[10px] font-bold uppercase opacity-80 tracking-widest text-center md:text-left">Satisfaction</span>
          </div>
        </div>
        <div className="badge bg-white/10 px-8 py-5 rounded-2xl md:rounded-full text-xs font-bold uppercase tracking-[2px] flex flex-col sm:flex-row items-center gap-3 border border-white/10 relative z-10 w-full md:w-auto text-center">
          Available in <span className="text-sun-gold font-black tracking-normal italic text-base">Diboll, Lufkin & East Texas</span>
        </div>
      </div>

      {/* Final Minimal Footer */}
      <footer className="py-12 bg-primary px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full overflow-hidden border border-white/20">
                <img 
                  src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/433672125_122093184794258604_3107316981336722257_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=ygtspQ7K_AIQ7kNvwF_9D_K&_nc_oc=AdoRFjZo6FxAB5eNu9HaMM2GBnUXwY5TGcpEjjr7s0LIlILzBng3R5_Gpn4wuD_8mpM&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_UnDh1j1m2k3mll6gKPz8w&_nc_ss=7a3a8&oh=00_Af01aVNaOhXNVbgUzwdd66_2ZeaTU4vmPjLE8ctEm7kOBA&oe=69EA02DD" 
                  alt="Soto & Son Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-sm font-black text-white uppercase tracking-tighter leading-tight">Soto & Son</span>
            </div>
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-[3px]">
              &copy; {new Date().getFullYear()} Soto & Son Lawn Services.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
             <div className="flex gap-10 text-[10px] font-bold text-white/40 uppercase tracking-widest">
               <a href="#services" className="hover:text-sun-gold transition-colors">Services</a>
               <a href="#gallery" className="hover:text-sun-gold transition-colors">Portfolio</a>
               <a href="#contact" className="hover:text-sun-gold transition-colors">Contact</a>
             </div>
             <a href={`mailto:${CONTACT_EMAIL}`} className="text-[10px] font-bold text-white/50 hover:text-sun-gold transition-colors uppercase tracking-widest border-b border-transparent hover:border-sun-gold">{CONTACT_EMAIL}</a>
             <div className="flex gap-4">
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-sun-gold cursor-pointer transition-colors border border-white/10">
                 <Facebook size={14} />
               </div>
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-sun-gold cursor-pointer transition-colors border border-white/10">
                 <Instagram size={14} />
               </div>
             </div>
          </div>
        </div>
      </footer>

      {/* Floating Action for Mobile */}
      <a 
        href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
        className="fixed bottom-6 right-6 lg:hidden w-16 h-16 bg-sun-gold text-text-dark rounded-full shadow-2xl flex items-center justify-center z-40 border-4 border-white/20"
      >
        <Phone size={32} />
      </a>
    </div>
  );
}
