import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <a href="#" className="font-heading font-bold text-3xl gradient-text">
            Shubham Saurav
          </a>

          {/* Mission Statement */}
          <p className="text-muted-foreground max-w-md">
            Passionate about building innovative solutions that bridge the gap between 
            software and hardware. Let's create something amazing together.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:shubham@example.com"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/30 w-full">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              © {currentYear} Shubham Saurav. Built with
              <Heart size={14} className="text-destructive fill-destructive" />
              using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
