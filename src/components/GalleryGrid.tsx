"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { cn } from "@/lib/cn";
import { ProjectModal } from "@/components/ProjectModal";

const filters = ["All", "Painting", "Drywall", "Flooring", "Remodel", "Mounting"] as const;

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const visible = useMemo(() => (activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)), [activeFilter]);
  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium focus-ring",
              activeFilter === filter ? "border-amber-500 bg-amber-500 text-slate-950" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
            )}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <button key={project.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm" onClick={() => setSelectedId(project.id)}>
            <Image src={project.image} alt={project.title} width={800} height={500} className="h-44 w-full object-cover" />
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">{project.category}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{project.caption}</p>
            </div>
          </button>
        ))}
      </div>
      {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedId(null)} /> : null}
    </>
  );
}
