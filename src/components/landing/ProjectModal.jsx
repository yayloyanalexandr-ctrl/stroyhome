import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, BedDouble, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [planIndex, setPlanIndex] = useState(0);

  if (!project) return null;

  const prev = () => setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () => setImgIndex((i) => (i + 1) % project.images.length);
  const planPrev = () => setPlanIndex((i) => (i - 1 + project.plans.length) % project.plans.length);
  const planNext = () => setPlanIndex((i) => (i + 1) % project.plans.length);

  const scrollToContacts = () => {
    onClose();
    setTimeout(() => {
      document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative bg-card rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Image gallery */}
          <div className="relative h-56 sm:h-72 overflow-hidden bg-muted">
            <img
              src={project.images[imgIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              {project.tag}
            </Badge>
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === imgIndex ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">{project.title}</h2>
            <p className="text-muted-foreground mb-5 leading-relaxed">{project.desc}</p>

            <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-primary" />
                <span>{project.area}</span>
              </div>
              <div className="flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-primary" />
                <span>{project.rooms}</span>
              </div>
            </div>

            {/* Floor plans */}
            {project.plans && project.plans.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Планировка</h3>
                <div className="relative rounded-xl overflow-hidden bg-white border border-border">
                  <img
                    src={project.plans[planIndex]}
                    alt={`Планировка ${planIndex + 1}`}
                    className="w-full object-contain max-h-72"
                  />
                  {project.plans.length > 1 && (
                    <>
                      <button
                        onClick={planPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={planNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {project.plans.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setPlanIndex(i)}
                            className={`w-2 h-2 rounded-full transition-colors ${i === planIndex ? 'bg-primary' : 'bg-primary/30'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">{project.price}</span>
              <Button onClick={scrollToContacts} className="bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Заказать проект
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}