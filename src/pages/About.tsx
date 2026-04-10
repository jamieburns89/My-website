import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:col-span-5 relative"
            >
              <div className="aspect-[3/4] relative z-10">
                <img 
                  src={`${import.meta.env.BASE_URL}images/gallery-7.png`} 
                  alt="Ethereal bride" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl z-0" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="md:col-span-7"
            >
              <h1 className="font-serif text-5xl md:text-6xl mb-8">Artistry <span className="italic text-muted-foreground">&</span> Precision</h1>
              
              <div className="space-y-6 text-lg text-muted-foreground font-serif leading-relaxed">
                <p>
                  As a former ballet dancer, Jamie built her career on the belief that artistry and precision are not competing values — they are inseparable ones. 
                </p>
                <p>
                  After establishing herself in Austin's vibrant events scene, Jamie was called to New York, where she was entrusted with building and leading the event program at the Hotel Chelsea — the beloved Manhattan landmark reborn as one of the city's most culturally significant addresses.
                </p>
                <p>
                  Today, Jamie Michelle Events operates as a luxury studio crafting celebrations that feel effortless, warm, and distinctly unique. We approach each event like a carefully choreographed performance, where every detail is intentional and every moment feels like magic.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12">
                <div>
                  <h3 className="text-xs uppercase tracking-widest mb-4">Values</h3>
                  <ul className="space-y-2 font-serif text-lg">
                    <li>Timelessness</li>
                    <li>Clarity</li>
                    <li>Organization</li>
                    <li>Fun</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest mb-4">Voice</h3>
                  <ul className="space-y-2 font-serif text-lg text-muted-foreground">
                    <li>Poetic & Romantic</li>
                    <li>Effortless</li>
                    <li>Confident</li>
                    <li>Warm</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#2B515A] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl mb-6 italic">"The intersection of beauty and meticulous planning."</h2>
        </div>
      </section>
    </Layout>
  );
}
