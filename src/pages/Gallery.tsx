import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    { src: "gallery-1.png", alt: "Outdoor ceremony", aspect: "aspect-[3/4]" },
    { src: "gallery-6.png", alt: "Reception tent", aspect: "aspect-[16/9]", span: "md:col-span-2" },
    { src: "gallery-3.png", alt: "Bridal bouquet", aspect: "aspect-[4/3]" },
    { src: "gallery-8.png", alt: "Wedding cake", aspect: "aspect-[3/4]" },
    { src: "gallery-5.png", alt: "Calligraphy invitations", aspect: "aspect-[3/4]" },
    { src: "gallery-4.png", alt: "Dancing", aspect: "aspect-[16/9]", span: "md:col-span-2" },
    { src: "gallery-2.png", alt: "Table setting", aspect: "aspect-[3/4]" },
    { src: "gallery-9.png", alt: "Atelier", aspect: "aspect-[16/9]", span: "md:col-span-2" },
    { src: "gallery-7.png", alt: "Bride portrait", aspect: "aspect-[3/4]" },
  ];

  return (
    <Layout>
      <section className="pt-20 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Gallery</h1>
          <p className="text-muted-foreground font-serif italic text-xl max-w-2xl mx-auto px-6">
            A curated visual showcase of events built with intention.
          </p>
        </motion.div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className={`relative overflow-hidden group ${img.span || ""}`}
              >
                <div className={`${img.aspect} w-full bg-secondary/20`}>
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${img.src}`}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
