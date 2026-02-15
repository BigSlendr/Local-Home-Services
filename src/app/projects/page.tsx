import { GalleryGrid } from "@/components/GalleryGrid";

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-100 to-white py-16 sm:py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">Our Work</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">See recent North Peak projects</h1>
          <p className="mt-4 max-w-2xl text-slate-600">Filter by service type, then click any project for scope details, timelines, and before/after outcomes.</p>
        </div>
      </section>
      <section className="container section-pad">
        <GalleryGrid />
      </section>
    </>
  );
}
