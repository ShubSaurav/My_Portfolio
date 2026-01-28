import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award } from "lucide-react";

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  certification: {
    title: string;
    issuer: string;
    badge: string;
    description: string;
    image?: string;
    link?: string;
    date?: string;
  } | null;
}

export const CertificationModal = ({ isOpen, onClose, certification }: CertificationModalProps) => {
  if (!certification) return null;

  const isPdf = certification.image?.toLowerCase().endsWith(".pdf");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Certificate Preview */}
            <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
              {certification.image ? (
                isPdf ? (
                  <embed
                    src={`${certification.image}#toolbar=0&navpanes=0&scrollbar=0`}
                    type="application/pdf"
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="w-full h-full object-contain p-4"
                  />
                )
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <Award size={64} className="text-primary" />
                  <span className="text-muted-foreground">Certificate image coming soon</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  {certification.badge}
                </span>
                {certification.date && (
                  <span className="text-muted-foreground text-sm">{certification.date}</span>
                )}
              </div>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                {certification.title}
              </h3>
              <p className="text-primary mb-4">{certification.issuer}</p>
              <p className="text-muted-foreground mb-6">{certification.description}</p>

              {certification.link && (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  View Certificate
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
