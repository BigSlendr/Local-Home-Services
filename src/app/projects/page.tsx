import { GalleryGrid } from "@/components/GalleryGrid";
import { projects } from "@/data/content";

export default function ProjectsPage() {
  return (
    <div className="container section-pad">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-3 max-w-2xl text-slate-700">Browse recent project types and tap any card for details on scope, timeframe, and homeowner feedback.</p>
      <div className="mt-8">
        <GalleryGrid projects={[...projects]} />
      </div>
    </div>
  );
}
