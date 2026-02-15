import type { LucideIcon } from "lucide-react";
import { Drill, PaintRoller, Hammer, Wrench, PanelsTopLeft, Ruler, Droplets, Lightbulb, BadgeCheck, Star, Clock3, ShieldCheck } from "lucide-react";

export type Service = { title: string; slug: string; description: string; icon: LucideIcon; includes: string[]; timeline: string };
export type Testimonial = { name: string; location: string; quote: string };
export type FAQ = { question: string; answer: string };
export type Project = { id: number; title: string; category: "Painting" | "Drywall" | "Flooring" | "Remodel" | "Mounting"; image: string; caption: string; scope: string; timeframe: string; result: string };

export const trustItems = [
  { title: "Licensed & Insured", icon: BadgeCheck },
  { title: "5-Star Local Reviews", icon: Star },
  { title: "Same-Week Availability", icon: Clock3 },
  { title: "Warranty-Backed Work", icon: ShieldCheck },
];

export const services: Service[] = [
  { title: "Handyman Repairs", slug: "handyman", description: "Doors, trim, hardware fixes, and punch-list tasks done in one visit.", icon: Hammer, includes: ["Door adjustments", "Caulking & sealing", "Cabinet fixes", "Hardware replacement"], timeline: "Most jobs: 2-6 hours" },
  { title: "Interior Painting", slug: "painting", description: "Clean lines, low-odor paints, and proper prep for durable results.", icon: PaintRoller, includes: ["Wall & ceiling paint", "Trim touch-ups", "Patch + paint", "Color matching"], timeline: "Typical room: 1-2 days" },
  { title: "Drywall & Patchwork", slug: "drywall", description: "Seamless wall repairs for holes, cracks, and water-damaged sections.", icon: PanelsTopLeft, includes: ["Hole repair", "Tape & compound", "Texture blending", "Water stain cut-outs"], timeline: "Small repairs: same day" },
  { title: "Flooring Updates", slug: "flooring", description: "Laminate, vinyl plank, and trim install for refreshed living spaces.", icon: Ruler, includes: ["LVP install", "Baseboard replacement", "Transition strips", "Subfloor spot leveling"], timeline: "Small areas: 1-3 days" },
  { title: "TV & Fixture Mounting", slug: "mounting", description: "Secure mounting for TVs, shelves, mirrors, and heavy décor.", icon: Drill, includes: ["TV wall mount", "Floating shelves", "Mirror hanging", "Bracket anchoring"], timeline: "Most installs: under 3 hours" },
  { title: "Minor Remodels", slug: "remodels", description: "Kitchen and bath facelifts without full gut renovation overhead.", icon: Wrench, includes: ["Vanity swaps", "Backsplash install", "Cabinet hardware", "Cosmetic upgrades"], timeline: "Small remodels: 3-10 days" },
  { title: "Light Plumbing", slug: "plumbing", description: "Everyday plumbing fixes to keep your home functional and leak-free.", icon: Droplets, includes: ["Faucet replacement", "Toilet tune-ups", "Sink drain fixes", "Leak diagnosis"], timeline: "Service calls: same or next day" },
  { title: "Light Electrical", slug: "electrical", description: "Safe, tidy electrical updates for fixtures, switches, and outlets.", icon: Lightbulb, includes: ["Fixture replacement", "Dimmer installation", "Outlet updates", "Troubleshooting"], timeline: "Most tasks: 1-4 hours" },
];

export const testimonials: Testimonial[] = [
  { name: "Alyssa M.", location: "Tottenville", quote: "They patched and painted my living room after a leak. On time, super clean, and the wall looks brand new." },
  { name: "Frank R.", location: "Bay Ridge", quote: "North Peak handled a long punch list in one afternoon. Fair price and no nonsense." },
  { name: "Janelle T.", location: "Great Kills", quote: "Fast response, great communication, and the TV mount + shelf install came out perfect." },
];

export const faqs: FAQ[] = [
  { question: "Do you work evenings or weekends?", answer: "Yes. We offer early evening and Saturday windows for Staten Island and South Brooklyn clients." },
  { question: "How fast can you start?", answer: "For common handyman and repair jobs, we can usually schedule within the same week." },
  { question: "Do you provide material pickup?", answer: "Absolutely. We can source and pick up materials, then include receipts in your final invoice." },
  { question: "Is your work insured and guaranteed?", answer: "We are fully insured, and all labor is backed by a workmanship warranty." },
  { question: "Can I get a quote without an on-site visit?", answer: "For many jobs, yes. Send photos + details through the form and we can provide a fast preliminary quote." },
];

export const projects: Project[] = [
  { id: 1, title: "Bay Ridge Apartment Repaint", category: "Painting", image: "/projects/project-1.svg", caption: "2-bedroom refresh with trim detail.", scope: "Full repaint of walls, ceilings, and trim in occupied apartment.", timeframe: "3 days", result: "Brighter rooms, smooth finish, zero paint transfer on floors." },
  { id: 2, title: "Stapleton Drywall Repair", category: "Drywall", image: "/projects/project-2.svg", caption: "Water-damage patch and seamless blend.", scope: "Removed damaged drywall, replaced section, finished and primed.", timeframe: "1 day + dry time", result: "No visible seam lines after repaint." },
  { id: 3, title: "Dongan Hills LVP Install", category: "Flooring", image: "/projects/project-3.svg", caption: "New plank flooring in basement den.", scope: "Installed luxury vinyl plank with trim and transitions.", timeframe: "2 days", result: "Durable, easy-clean floor with warm modern look." },
  { id: 4, title: "South Brooklyn Bath Update", category: "Remodel", image: "/projects/project-4.svg", caption: "Vanity, mirror, lighting facelift.", scope: "Swapped vanity, installed mirror, updated lights and hardware.", timeframe: "4 days", result: "Fresh look without full remodel cost." },
  { id: 5, title: "Great Kills Media Wall", category: "Mounting", image: "/projects/project-5.svg", caption: "TV and floating shelf install.", scope: "Mounted 75-inch TV, concealed wiring, installed shelves.", timeframe: "1 day", result: "Clean entertainment setup with hidden cable lines." },
  { id: 6, title: "Sunset Park Accent Repaint", category: "Painting", image: "/projects/project-6.svg", caption: "Accent wall + hallway repaint.", scope: "Feature wall color change and hallway repaint.", timeframe: "2 days", result: "High-contrast accent wall with crisp cut-ins." },
  { id: 7, title: "Arrochar Ceiling Patch", category: "Drywall", image: "/projects/project-2.svg", caption: "Ceiling crack remediation.", scope: "Reinforced joint, mudded, sanded, and repainted ceiling area.", timeframe: "1 day", result: "Crack-free finish and uniform paint blend." },
  { id: 8, title: "Bensonhurst Entry Flooring", category: "Flooring", image: "/projects/project-3.svg", caption: "Entryway and corridor flooring replacement.", scope: "Replaced worn flooring and added updated base trim.", timeframe: "2 days", result: "Stronger wear resistance for high-traffic path." },
];
