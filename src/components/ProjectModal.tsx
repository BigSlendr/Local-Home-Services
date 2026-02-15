"use client";

import Image from "next/image";
import { X } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-4 sm:p-6">
        <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 text-slate-600 hover:bg-slate-100 focus-ring" aria-label="Close modal">
          <X size={18} />
        </button>
        <div className="overflow-hidden rounded-xl">
          <Image src={project.image} width={1200} height={700} alt={project.title} className="h-56 w-full object-cover" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-slate-900">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{project.caption}</p>
        <div className="mt-4 space-y-3 text-sm text-slate-700">
          <p><span className="font-semibold">Scope:</span> {project.scope}</p>
          <p><span className="font-semibold">Timeframe:</span> {project.timeframe}</p>
          <p><span className="font-semibold">Result:</span> {project.result}</p>
        </div>
      </div>
    </div>
  );
}
