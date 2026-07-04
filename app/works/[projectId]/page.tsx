import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { WorkDetail } from "@/components/sections/WorkDetail";
import { getWorkById, works } from "@/lib/works";

type WorkPageProps = {
  params: Promise<{ projectId: string }>;
};

export function generateStaticParams() {
  return works.map((work) => ({ projectId: work.id }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const work = getWorkById(projectId);

  if (!work) {
    return { title: "Work — YNS" };
  }

  return {
    title: `${work.title} — YNS`,
    description: work.summary,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { projectId } = await params;
  const work = getWorkById(projectId);

  if (!work) {
    notFound();
  }

  return (
    <main>
      <WorkDetail work={work} />
      <Footer />
    </main>
  );
}
