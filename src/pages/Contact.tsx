import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-luxe-paper py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] mb-12 text-luxe-gold font-bold">Our Headquarters</p>
          <h1 className="text-7xl md:text-9xl mb-12 font-serif">Luxe <br /><span className="italic">Collection.</span></h1>
          
          <div className="space-y-12 mb-16">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-white border border-luxe-gold/20 flex items-center justify-center text-luxe-gold">
                <MapPin size={24} strokeWidth={1} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-bold">Physical Address</p>
                <a 
                  href="https://maps.google.com/?q=1209+Mountain+Road+Pl+NE+Ste+R,+Albuquerque,+NM+87110" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="not-italic text-lg text-luxe-ink/80 leading-relaxed hover:text-luxe-gold transition-colors"
                >
                  1209 MOUNTAIN ROAD PL NE STE R <br />
                  Albuquerque, NM 87110 <br />
                  United States
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-white border border-luxe-gold/20 flex items-center justify-center text-luxe-gold">
                <Mail size={24} strokeWidth={1} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-bold">Email Inquiries</p>
                <a href="mailto:Marconist789@gmail.com" className="text-lg text-luxe-ink/80 hover:text-luxe-gold transition-colors">Marconist789@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-white border border-luxe-gold/20 flex items-center justify-center text-luxe-gold">
                <Phone size={24} strokeWidth={1} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-bold">Concierge Line</p>
                <a href="tel:+14254772761" className="text-lg text-luxe-ink/80 hover:text-luxe-gold transition-colors">+1 (425) 477-2761</a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-white border border-luxe-gold/20 flex items-center justify-center text-luxe-gold">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-bold">WhatsApp Support</p>
                <a href="https://wa.me/14254772761" target="_blank" rel="noopener noreferrer" className="text-lg text-luxe-ink/80 hover:text-luxe-gold transition-colors">+1 (425) 477-2761</a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-white border border-luxe-gold/20 flex items-center justify-center text-luxe-gold">
                <Clock size={24} strokeWidth={1} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-bold">Boutique Hours</p>
                <div className="text-sm opacity-60 space-y-1">
                  <p>Monday – Friday: 9:00 AM – 6:00 PM (MST)</p>
                  <p>Saturday: 10:00 AM – 4:00 PM (MST)</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-video bg-luxe-beige rounded-[2rem] overflow-hidden relative shadow-inner grayscale opacity-60">
             <div className="absolute inset-0 flex items-center justify-center text-luxe-ink/20 uppercase tracking-[0.5em] text-[10px] font-bold">
                Map Preview • Albuquerque, NM
             </div>
             {/* Abstract Map UI */}
             <div className="w-full h-full bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          </div>
        </div>

        <div className="bg-white p-12 md:p-20 shadow-[-20px_20px_60px_rgba(0,0,0,0.05)] rounded-[3rem] border border-luxe-gold/10 self-start">
          <h3 className="text-4xl mb-12 text-center">Boutique <span className="text-luxe-gold">Inquiry</span></h3>
          <form className="space-y-10">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxe-ink/40">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-luxe-beige py-3 focus:border-luxe-gold outline-none transition-colors text-lg" placeholder="Enter your name" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxe-ink/40">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-luxe-beige py-3 focus:border-luxe-gold outline-none transition-colors text-lg" placeholder="name@example.com" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxe-ink/40">Phone Number</label>
              <input type="tel" className="w-full bg-transparent border-b border-luxe-beige py-3 focus:border-luxe-gold outline-none transition-colors text-lg" placeholder="+1 (123) 456-7890" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxe-ink/40">Subject</label>
              <select className="w-full bg-transparent border-b border-luxe-beige py-3 focus:border-luxe-gold outline-none transition-colors text-lg appearance-none">
                <option>General Archival Inquiry</option>
                <option>Order Curation Status</option>
                <option>Styling Consultation</option>
                <option>Legal / EIN Verification</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxe-ink/40">Your Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-luxe-beige py-3 focus:border-luxe-gold outline-none transition-colors text-lg resize-none" placeholder="Describe your request..." />
            </div>
            <div className="flex items-start space-x-4">
              <input type="checkbox" id="consent" className="mt-1 accent-luxe-gold" required />
              <label htmlFor="consent" className="text-[10px] uppercase tracking-[0.1em] text-luxe-ink/60 leading-relaxed font-bold cursor-pointer">
                I consent to receive occasional boutiques updates and structural notifications from Luxe Collection, LLC via phone or email.
              </label>
            </div>
            <button className="w-full bg-luxe-ink text-luxe-paper py-8 text-[11px] uppercase tracking-[0.4em] hover:bg-luxe-gold hover:text-white transition-all shadow-xl font-bold">
              Submit Inquiry
            </button>
          </form>
          <p className="mt-8 text-[9px] text-center uppercase tracking-widest opacity-30 leading-relaxed px-12">
            By submitting, you agree to our professional data handling policies for Luxe Collection, LLC.
          </p>
        </div>
      </div>
    </div>
  );
}
