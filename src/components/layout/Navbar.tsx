import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-widest uppercase hover:opacity-70 transition-opacity">
          Jamie Michelle
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-[0.15em] uppercase transition-colors relative ${
                location === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
              {location === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
