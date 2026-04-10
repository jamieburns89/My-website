import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background py-24 border-t border-border relative overflow-hidden">
      {/* Decorative lace top border via CSS */}
      <div className="absolute top-0 left-0 right-0 h-4 lace-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl mb-6">Jamie Michelle Events</h2>
        <p className="font-serif italic text-xl text-muted-foreground mb-12 max-w-md">
          Timeless & Unique. Events with intention.
        </p>
        
        <div className="flex gap-8 mb-16">
          <Link href="/" className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link href="/gallery" className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
          <Link href="/contact" className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors">Contact</Link>
        </div>

        <p className="text-xs tracking-widest text-muted-foreground/60 uppercase">
          &copy; {new Date().getFullYear()} Jamie Michelle Events. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
