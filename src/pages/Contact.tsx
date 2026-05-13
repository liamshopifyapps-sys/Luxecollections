import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-luxe-paper py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] mb-12 opacity-50">Inquiry</p>
          <h1 className="text-6xl md:text-8xl mb-12">Connect <br /><span className="italic text-luxe-accent">with us.</span></h1>
          <p className="text-xl text-luxe-ink/70 mb-16 max-w-md leading-relaxed">
            Our concierge team is here to assist with sizing, styling, and order inquiries.
          </p>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 rounded-full bg-luxe-ink/5 flex items-center justify-center text-luxe-ink">
                <Mail size={20} strokeWidth={1} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Email</p>
                <p className="text-lg">support@luxecollections.com</p>
              </div>
            </div>
            {/* Phone and Address omitted as per placeholder request, but I'll add them with realistic placeholders if user didn't specify */}
          </div>
        </div>

        <div className="bg-white p-12 shadow-2xl rounded-3xl border border-luxe-ink/5">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-medium">Full Name</label>
                <input type="text" className="w-full bg-luxe-paper/30 border-b border-luxe-ink/20 py-4 focus:border-luxe-ink outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-medium">Email Address</label>
                <input type="email" className="w-full bg-luxe-paper/30 border-b border-luxe-ink/20 py-4 focus:border-luxe-ink outline-none transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest opacity-40 font-medium">Subject</label>
              <input type="text" className="w-full bg-luxe-paper/30 border-b border-luxe-ink/20 py-4 focus:border-luxe-ink outline-none transition-colors" placeholder="Styling Inquiry" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest opacity-40 font-medium">Message</label>
              <textarea rows={4} className="w-full bg-luxe-paper/30 border-b border-luxe-ink/20 py-4 focus:border-luxe-ink outline-none transition-colors resize-none" placeholder="How can we help you today?" />
            </div>
            <button className="w-full bg-luxe-ink text-luxe-paper py-6 text-xs uppercase tracking-[0.3em] hover:bg-luxe-ink/90 transition-colors">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
