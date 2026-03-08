import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const variantImages = {
  "Apex Grey": "/src/assets/images/models/apex-grey.jpeg",
  "Slipstream Blue": "/src/assets/images/models/slipstream-blue.jpg",
  "Dux Deluxe": "/src/assets/images/models/dux dulex.png",
  "Rocker Red": "/src/assets/images/models/rocker red.png",
  "British Racing Green": "/src/assets/images/models/britsh racing green.png",
  "Mr Clean (Chrome)": "/src/assets/images/models/mr clean.png"
};

export default function Booking() {
  const [selectedVariant, setSelectedVariant] = useState("Mr Clean (Chrome)");
  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    city: '',
    pincode: '',
    test_ride_date: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const { error: insertError } = await supabase
      .from('bookings')
      .insert([{
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        pincode: formData.pincode,
        model_variant: selectedVariant,
        test_ride_date: formData.test_ride_date,
        message: formData.message || null,
      }]);

    setIsSubmitting(false);

    if (insertError) {
      setError(insertError.message);
      return;
    }

    setIsBooked(true);
    setFormData({ full_name: '', email: '', phone: '', city: '', pincode: '', test_ride_date: '', message: '' });
    setTimeout(() => {
      setIsBooked(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-brand-black w-full flex flex-col md:flex-row pt-24 pb-12 overflow-x-hidden relative">
      
      {/* Booking Confirmation Modal (Blurred Background Overlay) */}
      <AnimatePresence>
        {isBooked && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-brand-black/60"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brand-charcoal p-10 rounded-2xl border border-brand-silver/20 flex flex-col items-center text-center max-w-sm shadow-2xl"
            >
              <CheckCircle className="w-16 h-16 text-brand-gold mb-6" />
              <h3 className="text-2xl font-cinzel text-white mb-2 uppercase">Order Booked</h3>
              <p className="text-brand-silver font-sans text-sm">
                Thank you! Your test ride for the {selectedVariant} Continental GT 650 has been booked. A dealer will contact you shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LEFT SIDE - Motorcycle Showcase */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative"
      >
        <div className="absolute inset-0 bg-brand-charcoal clip-diagonal opacity-30 -z-10" />
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-cinzel text-white uppercase tracking-wider mb-4">
          Book Your
        </h1>
        <h2 className="text-2xl md:text-3xl text-brand-gold font-sans font-light tracking-[0.2em] uppercase mb-12">
          CONTINENTAL GT 650
        </h2>
        
        <div className="w-full relative group flex justify-center items-center">
          <div className="absolute -inset-4 bg-brand-red/10 blur-[100px] rounded-full group-hover:bg-brand-red/30 transition-all duration-1000" />
          
          {/* Dynamic Image based on selection */}
          <AnimatePresence mode="wait">
            <motion.img 
              key={selectedVariant}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              src={variantImages[selectedVariant]} 
              alt={`Royal Enfield Continental GT 650 - ${selectedVariant}`}
              className="w-full max-w-2xl h-auto object-contain relative z-10 hover:scale-[1.02] transition-transform duration-700"
            />
          </AnimatePresence>
        </div>
      </motion.div>

      {/* RIGHT SIDE - Booking Form */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex items-center justify-center bg-brand-charcoal/30 border-l border-white/5"
      >
        <div className="w-full max-w-lg">
          {error && (
            <div className="mb-4 p-3 bg-red-900/30 border border-red-500/40 text-red-300 text-sm font-sans rounded">
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleBooking}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-silver font-sans">Full Name</label>
                <input required type="text" name="full_name" value={formData.full_name} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors font-sans" placeholder="Rahul Sharma" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-silver font-sans">Email Address</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors font-sans" placeholder="rahul@example.in" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-silver font-sans">Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors font-sans" placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-silver font-sans">City & Pincode</label>
                <div className="flex gap-4">
                  <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-2/3 bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors font-sans" placeholder="Mumbai" />
                  <input required type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="w-1/3 bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors font-sans" placeholder="400001" maxLength="6" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-brand-silver font-sans">Select Model Variant</label>
              <select 
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value)}
                className="w-full bg-brand-charcoal border border-white/20 p-3 text-white focus:outline-none focus:border-brand-gold transition-colors font-sans appearance-none cursor-pointer"
              >
                <option value="Mr Clean (Chrome)">Mr Clean (Chrome)</option>
                <option value="British Racing Green">British Racing Green</option>
                <option value="Rocker Red">Rocker Red</option>
                <option value="Dux Deluxe">Dux Deluxe</option>
                <option value="Apex Grey">Apex Grey</option>
                <option value="Slipstream Blue">Slipstream Blue</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-brand-silver font-sans">Preferred Test Ride Date</label>
              <input required type="date" name="test_ride_date" value={formData.test_ride_date} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-brand-gold transition-colors font-sans [color-scheme:dark]" />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-brand-silver font-sans">Message</label>
              <textarea rows="4" name="message" value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors font-sans resize-none" placeholder="Any specific requirements..."></textarea>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <button type="submit" disabled={isSubmitting} className="flex-1 bg-brand-red text-white py-4 px-8 font-sans uppercase tracking-[0.2em] text-sm font-bold flex items-center justify-center gap-3 hover:bg-red-800 transition-colors group disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Booking...' : 'Book Test Ride'}
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
              <button type="button" className="flex-1 bg-transparent border border-white/20 text-white py-4 px-8 font-sans uppercase tracking-[0.2em] text-sm font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-colors">
                Contact Dealer
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
