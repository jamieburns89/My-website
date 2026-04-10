import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Decorative botanical element behind text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
           <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M50 100C50 100 30 70 30 40C30 10 50 0 50 0C50 0 70 10 70 40C70 70 50 100 50 100Z" fill="currentColor"/>
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Luxury Wedding Planning</span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-primary">
              Timeless &<br />
              <span className="italic text-secondary-foreground/80">Unique.</span><br />
              Events with<br />
              intention.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-12 font-serif italic">
              Like a beautiful keepsake box you never want to close. We craft unhurried, romantic experiences infused with classical elegance.
            </p>
            <Link href="/contact" className="bg-primary text-primary-foreground px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-colors">
              Inquire Now
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto"
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/gallery-1.png`} 
              alt="Elegant outdoor wedding ceremony" 
              className="w-full h-full object-cover shadow-xl"
            />
            {/* Delicate lace overlay on image corner */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2QxZDFjNCIvPjwvc3ZnPg==')] opacity-40 z-[-1]" />
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-secondary/10 relative">
        <div className="absolute top-0 left-0 right-0 h-4 lace-pattern opacity-5" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-10 text-accent">The Atelier</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-serif text-muted-foreground">
              "We believe that artistry and precision are not competing values — they are inseparable ones. Step into a world of dried botanicals, silk ribbons, and meticulous planning."
            </p>
            <div className="mt-12">
              <Link href="/about" className="inline-block border-b border-primary pb-1 uppercase tracking-widest text-sm hover:opacity-60 transition-opacity">
                Meet Jamie
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "gallery-3.png", title: "Full Planning", desc: "A comprehensive approach to your most important day." },
              { img: "gallery-2.png", title: "Event Design", desc: "Crafting the visual narrative and sensory details." },
              { img: "gallery-5.png", title: "Destination", desc: "Curating unforgettable experiences anywhere in the world." }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${service.img}`} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm tracking-wide">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
