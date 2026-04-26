import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Menu, X, ChevronRight,
  Thermometer, Home, Building2, Wrench, Wind,
  ShieldCheck, CheckCircle2, ArrowRight, Sun, Snowflake, Star
} from 'lucide-react';
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efecto para cambiar el estilo de la barra de navegación al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Complete Package",
      description: "Maximize efficiency with our all-in-one bundle: wall wrap, wall batts, and ceiling insulation.",
      icon: <Star className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Ceiling Insulation",
      description: "Keep the heat out in summer and lock it in during winter. Essential for any home's thermal defense.",
      icon: <Home className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Wall Insulation",
      description: "Regulate internal temperatures and significantly reduce external noise pollution for a quieter home.",
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Underfloor Insulation",
      description: "Prevent cold drafts from penetrating through the floor during winter, especially for raised homes.",
      icon: <Snowflake className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Wall Wrap Installation",
      description: "Expert installation and repair of wall wraps for new houses, existing properties, and sheds.",
      icon: <Building2 className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Roof Sarking",
      description: "Protect your roof cavity from dust, moisture, and extreme external temperatures.",
      icon: <Sun className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Acoustic Insulation",
      description: "Specialized soundproofing solutions to minimize noise transfer between rooms or from the outside.",
      icon: <Wind className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Insulation Removal (Vacuum)",
      description: "Safe and clean vacuum removal of old, loose, or contaminated insulation from your property.",
      icon: <Wrench className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Garage & Shed Insulation",
      description: "Transform your garage or shed into a comfortable, climate-controlled usable space all year round.",
      icon: <Thermometer className="w-8 h-8 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: "John D.",
      location: "Richmond",
      text: "Incredible difference! We had our roof cavity cleaned and re-insulated. The house feels so much warmer this winter, and the team was super professional and left everything spotless.",
      rating: 5
    },
    {
      name: "Sarah M.",
      location: "Brunswick",
      text: "Highly recommend Pinto Insulation. They came out quickly for a quote, explained everything clearly, and the installation of our wall insulation was done in a day. Noticeable noise reduction too!",
      rating: 5
    },
    {
      name: "David T.",
      location: "South Yarra",
      text: "Great communication from start to finish. They removed our old, damaged insulation and replaced it with high-quality batts. The boys were polite, on time, and the price was very competitive.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-500 selection:text-white">

      {/* Top Bar */}
      <div className="hidden md:flex bg-slate-900 text-slate-300 py-2 px-8 justify-between items-center text-sm">
        <div className="flex space-x-6">
          <a href="mailto:pintoinsulation@gmail.com" className="flex items-center hover:text-orange-400 transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            pintoinsulation@gmail.com
          </a>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Melbourne, VIC, Australia
          </span>
        </div>
        <div className="flex items-center font-semibold text-orange-500">
          <Phone className="w-4 h-4 mr-2" />
          +61 424 795 492
        </div>
      </div>

      {/* Promo Banner */}
      <div className="bg-orange-500 text-white py-2.5 px-4 flex items-center justify-center gap-3 text-sm font-semibold">
        <span className="bg-white text-orange-500 text-xs font-black px-2 py-0.5 rounded-full uppercase tracking-wide">Limited Offer</span>
        <span>Get <strong>$100 AUD OFF</strong> your first insulation purchase — call us today to claim!</span>
        <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hidden sm:inline-block bg-white text-orange-500 text-xs font-bold px-3 py-1 rounded-full hover:bg-orange-50 transition-colors">
          Claim Now →
        </a>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'} px-6 md:px-12 flex justify-between items-center`}>
        <div className="flex items-center">
          <img src="/logo.png" alt="Pinto Insulation" className="h-24 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
          <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">About Us</a>
          <a href="#video" className="hover:text-orange-500 transition-colors">Video</a>
          <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
          <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full shadow-md shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 font-semibold">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col space-y-6 text-xl font-semibold text-slate-800 h-screen">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">About Us</a>
          <a href="#video" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Video</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Services</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Reviews</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Contact</a>
          <button className="bg-orange-500 text-white px-6 py-4 rounded-xl mt-4 w-full shadow-lg text-center">
            Get a Free Quote
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-40 px-6 md:px-12 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-400 via-slate-900 to-slate-900"></div>
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-white to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3 pr-0 md:pr-10">
            <div className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wider">
              Expert Insulation in Melbourne
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              <span className="text-orange-500">Expert</span> Insulation for Homes & Businesses.
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We provide comprehensive solutions and support to improve your property's energy efficiency, reduce costs, and ensure year-round comfort.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center group">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center">
                View Our Services
              </button>
            </div>
          </div>

          <div className="hidden md:flex w-full md:w-1/3 justify-end relative mt-16 md:mt-0">
            <div className="relative w-72 h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-repeat"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-5 shadow-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle2 className="text-green-500 w-5 h-5 mr-2" />
                  <span className="font-bold text-slate-900">Energy Savings</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[85%]"></div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Up to 40% reduction in bills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 border border-slate-100">
          <div className="text-center">
            <div className="text-4xl font-black text-slate-900 mb-2">120<span className="text-orange-500">+</span></div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Completed Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-slate-900 mb-2">100<span className="text-orange-500">+</span></div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Repairs Done</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-slate-900 mb-2">10<span className="text-orange-500">+</span></div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-slate-900 mb-2">100<span className="text-orange-500">%</span></div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Satisfied Clients</div>
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Enhance Your Energy Efficiency Today
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Good insulation is an investment that pays for itself. We specialize in creating perfect thermal barriers that transform how your property retains the ideal climate.
            </p>

            <div className="bg-orange-50/80 border-l-4 border-orange-500 p-5 mb-8 rounded-r-xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-2" />
                Better Prices Than Big Hardware Stores
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Searching for <strong>bunnings insulation</strong>? We directly compete with their retail prices. Whether you are looking for high-quality <strong>roof insulation</strong>, <strong>ceiling insulation</strong>, <strong>wall insulation</strong>, or premium <strong>insulation batts</strong>, we supply and install everything for less. Forget making weekend trips for <strong>foam insulation</strong>, <strong>insulation foam</strong>, <strong>sound insulation</strong>, or even <strong>insulation tape</strong>—our expert team handles the entire process at wholesale-direct pricing that beats standard retail quotes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Snowflake className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Floors & Underfloor</h4>
                  <p className="text-slate-600 mt-1">Especially in raised homes, prevents cold from penetrating through the floor during winter.</p>
                </div>
              </div>

              <div className="flex bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    <Sun className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Roofs & Ceilings</h4>
                  <p className="text-slate-600 mt-1">Prevents oppressive heat from entering in summer and heating from escaping during cold months.</p>
                </div>
              </div>

              <div className="flex bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Internal & External Walls</h4>
                  <p className="text-slate-600 mt-1">Regulates internal room temperature and significantly reduces external noise pollution.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square rounded-full bg-orange-500/10 absolute -inset-4 blur-3xl -z-10"></div>
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
              <img
                src="/eco-friendly.png"
                alt="Eco-friendly insulation cross-section"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 z-20 bg-white px-6 py-4 rounded-xl shadow-xl">
                <p className="font-bold text-slate-900">Eco-Friendly Materials</p>
                <p className="text-sm text-slate-500">Certified by Australian Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">Expert Insulation Solutions</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((servicio, index) => (
              <div key={index} className="group bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {servicio.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">{servicio.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {servicio.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-orange-500 transition-colors uppercase tracking-wide">
                  Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section id="video" className="py-16 px-6 md:px-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-xs">See Us In Action</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2 mb-3">Our Installation Process</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              See our team in action — clean, precise, and professional insulation installations from start to finish.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-900">
            <video
              controls
              preload="metadata"
              className="w-full aspect-video object-cover"
            >
              <source src="/promo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md shadow-orange-500/20 transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#services"
              onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="flex items-center bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-6 py-3 rounded-full font-semibold text-sm transition-all"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery Carousel */}
      <section id="gallery" className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Recent Projects</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">Our Best Work</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
              Take a look at some of the pristine residential and commercial insulation jobs we've just completed around Melbourne.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              effect="fade"
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="w-full aspect-video md:aspect-[21/9] bg-slate-900"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                <SwiperSlide key={num}>
                  <div className="w-full h-full relative group">
                    <img
                      src={`/gallery/work-${num}.jpg`}
                      alt={`Pinto Insulation recent installation work ${num}`}
                      className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section id="reviews" className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Customer Feedback</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">Real Reviews from Locals</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6 flex-grow">"{review.text}"</p>
                <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-slate-500">{review.location}, VIC</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-repeat"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to improve your home's climate?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Get in touch today for expert advice and a no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:+61424795492" className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-500/25 transition-all w-full sm:w-auto justify-center">
              <Phone className="w-5 h-5 mr-3" />
              Call: 0424 795 492
            </a>
            <a href="mailto:pintoinsulation@gmail.com" className="flex items-center bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto justify-center">
              <Mail className="w-5 h-5 mr-3" />
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <div className="mb-6">
              <img src="/logo.png" alt="Pinto Insulation" className="h-20 w-auto brightness-0 invert" />
            </div>
            <p className="mb-6 leading-relaxed text-sm">
              Comprehensive insulation solutions for residential and commercial properties in Melbourne. We optimize your property's temperature and efficiency.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-orange-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Home</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> About Us</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Services</a></li>
              <li><a href="#reviews" className="hover:text-orange-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Reviews</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Melbourne, VIC, Australia</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>+61 424 795 492</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>pintoinsulation@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pinto Insulation. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* Call Button */}
        <a
          href="tel:+61424795492"
          className="flex items-center gap-3 group"
          aria-label="Call us"
        >
          <div className="bg-white text-slate-800 text-sm font-medium px-4 py-2 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-slate-100">
            📞 Call us now
          </div>
          <div className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 bg-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 fill-white">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
          </div>
        </a>

        {/* SMS Button */}
        <a
          href="sms:+61424795492?body=Hi!%20I%20would%20like%20to%20know%20how%20I%20can%20get%20insulation%20installed%20in%20my%20home."
          className="flex items-center gap-3 group"
          aria-label="Send SMS"
        >
          <div className="bg-white text-slate-800 text-sm font-medium px-4 py-2 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-slate-100">
            📱 Send us a text message
          </div>
          <div className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 fill-white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            </svg>
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/61424795492?text=Hi!%20I%20would%20like%20to%20know%20how%20I%20can%20get%20insulation%20installed%20in%20my%20home."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
          aria-label="Chat on WhatsApp"
        >
          <div className="bg-white text-slate-800 text-sm font-medium px-4 py-2 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-slate-100">
            💬 Chat with us on WhatsApp
          </div>
          <div
            className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: '#25D366' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.738 5.476 2.027 7.782L0 32l8.455-2.007A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.538a13.5 13.5 0 0 1-6.89-1.889l-.494-.293-5.017 1.191 1.214-4.898-.32-.504A13.461 13.461 0 0 1 2.462 16C2.462 8.968 8.968 2.462 16 2.462S29.538 8.968 29.538 16 23.032 29.538 16 29.538zm7.406-10.042c-.406-.203-2.4-1.184-2.772-1.319-.372-.135-.643-.203-.913.203-.27.406-1.048 1.319-1.285 1.59-.237.27-.474.304-.88.101-.406-.203-1.714-.632-3.263-2.013-1.206-1.075-2.02-2.403-2.257-2.809-.237-.406-.025-.625.178-.827.183-.181.406-.474.61-.71.203-.237.27-.406.406-.677.135-.27.067-.507-.034-.71-.101-.203-.913-2.2-1.25-3.012-.329-.791-.663-.684-.913-.696l-.778-.013c-.27 0-.71.101-1.082.507-.372.406-1.42 1.387-1.42 3.382s1.454 3.923 1.657 4.194c.203.27 2.862 4.372 6.934 6.131.969.418 1.724.668 2.313.856.972.309 1.857.265 2.557.161.78-.116 2.4-.981 2.738-1.929.338-.947.338-1.76.237-1.929-.101-.169-.372-.27-.778-.474z"/>
            </svg>
          </div>
        </a>

      </div>

    </div>
  );
}
