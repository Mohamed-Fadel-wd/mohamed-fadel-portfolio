import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { projectSlugs } from "@/data/projects";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params:{slug:string} }) {
  if (!projectSlugs.includes(params.slug)) notFound();
  return <CaseStudy slug={params.slug}/>;
}
