export default function Footer() {
  return (
    <footer className="bg-primary-dark text-cream/70 py-12 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-playfair font-bold text-cream mb-2">Fortis & Co.</h2>
          <p className="text-sm max-w-xs">
            Legal support built for student entrepreneurs and early-stage businesses.
          </p>
        </div>
        
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-accent-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-accent-gold transition-colors">About</a>
          <a href="#services" className="hover:text-accent-gold transition-colors">Services</a>
          <a href="#contact" className="hover:text-accent-gold transition-colors">Contact</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-cream/10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Fortis & Co. All rights reserved.</p>
        <p>Jakarta, Indonesia</p>
      </div>
    </footer>
  );
}
