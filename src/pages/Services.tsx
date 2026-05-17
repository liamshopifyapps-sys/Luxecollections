import { motion } from "motion/react";
import { Sparkles, ShoppingBag, ShieldCheck, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Signature Apparel Collections",
      icon: <ShoppingBag className="w-8 h-8" strokeWidth={1} />,
      description: "Our core archive of elevated essentials, designed for architectural precision and timeless wear within the modern USA landscape."
    },
    {
      title: "Seasonal Archival Releases",
      icon: <Sparkles className="w-8 h-8" strokeWidth={1} />,
      description: "Exclusive seasonal collections that explore temporary architectural concepts in fashion, available for limited archival windows."
    },
    {
      title: "Luxury Accessory Curation",
      icon: <ShieldCheck className="w-8 h-8" strokeWidth={1} />,
      description: "Hand-selected accessories that harmonize with our core silhouettes, providing the necessary finishing details to your aesthetic blueprint."
    },
    {
      title: "Professional Concierge Support",
      icon: <Clock className="w-8 h-8" strokeWidth={1} />,
      description: "Dedicated assistance for sizing, styling, and order management, ensuring a seamless luxury experience from our Albuquerque studio to you."
    }
  ];

  return (
    <div className="bg-luxe-paper py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.5em] mb-12 opacity-50 text-luxe-gold font-bold">Professional Boutique Services</p>
        <h1 className="text-6xl md:text-9xl mb-24 italic">Refined <br /> <span className="text-luxe-gold">Capabilities.</span></h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-12 rounded-[4rem] border border-luxe-beige shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-20 h-20 rounded-full bg-luxe-paper flex items-center justify-center text-luxe-gold mb-10 group-hover:bg-luxe-gold group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-4xl mb-8 font-serif leading-tight">{service.title}</h3>
              <p className="text-xl text-luxe-ink/60 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-24 bg-luxe-ink text-luxe-paper rounded-[5rem] flex flex-col items-center text-center">
           <div className="w-20 h-[1px] bg-luxe-gold mb-12"></div>
           <h2 className="text-5xl md:text-7xl mb-10 font-light italic">Experience the <br /> <span className="text-luxe-gold">Gold Standard.</span></h2>
           <p className="text-luxe-paper/40 mb-16 max-w-2xl text-xl font-light leading-relaxed">
             From Albuquerque to the global stage, Luxe Collection, LLC provides a professional, secure, and stylish shopping environment tailored to your architectural fashion needs.
           </p>
           <a href="/collections" className="bg-luxe-gold text-white px-16 py-6 text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-luxe-ink transition-all font-bold">
              Explore The Archive
           </a>
        </div>
      </div>
    </div>
  );
}
