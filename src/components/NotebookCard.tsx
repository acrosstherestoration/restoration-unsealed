import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";
import { Notebook } from "../data/notebooks";

interface NotebookCardProps {
  notebook: Notebook;
  index: number;
}

export const NotebookCard: FC<NotebookCardProps> = ({ notebook, index }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      href={notebook.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-brand-accent/30 dark:bg-brand-accent border border-brand-border shadow-[4px_4px_0px_#E8E4D9] dark:shadow-[4px_4px_0px_var(--color-brand-border)] hover:shadow-[6px_6px_0px_#A68942] dark:hover:shadow-[6px_6px_0px_var(--color-gold)] hover:border-gold transition-all duration-200 p-8 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-3xl">{notebook.icon}</div>
        {notebook.category && (
          <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-border/20 text-olive px-2 py-1 rounded">
            {notebook.category}
          </span>
        )}
      </div>
      <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">
        {notebook.title}
      </h3>
      <p className="text-sm leading-relaxed text-ink/70 mb-8 flex-grow">
        {notebook.description}
      </p>
      <div className="text-[10px] font-bold uppercase tracking-widest text-gold mt-auto flex items-center">
        Begin Research{" "}
        <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
          <ExternalLink size={14} />
        </span>
      </div>
    </motion.a>
  );
};
