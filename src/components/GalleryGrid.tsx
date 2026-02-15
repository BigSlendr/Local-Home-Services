"use client";

import { useMemo, useState } from "react";

type Project = {
  id: number;
  title: string;
  category: "Painting" | "Drywall" | "Flooring" | "Remodel" | "Mounting";
  scope: string;
  timeframe: string;
  testimonial: string;
};

const filters = ["All", "Painting", "Drywall", "Flooring", "Remodel", "Mounting"] as const;

export function GalleryGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const visibleProjects = useMemo(
    () => (activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter, projects]
  );

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-medium ${
              activeFilter === filter ? "bg-brand-500 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="focus-ring rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm"
          >
            <div className="mb-3 h-40 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300" />
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{project.category}</p>
            <h3 className="mt-1 text-base font-semibold">{project.title}</h3>
          </button>
        ))}
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6">
            <h3 className="text-xl font-semibold">{activeProject.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{activeProject.scope}</p>
            <p className="mt-2 text-sm"><span className="font-semibold">Timeframe:</span> {activeProject.timeframe}</p>
            <p className="mt-2 rounded-lg bg-slate-100 p-3 text-sm">“{activeProject.testimonial}”</p>
            <button className="focus-ring mt-4 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white" onClick={() => setActiveProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
