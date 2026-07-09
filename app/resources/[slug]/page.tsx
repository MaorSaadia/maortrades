import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceDetailPage } from "@/components/resources/resource-detail-page";
import { getResourceBySlug, resources } from "@/data/resources";
import { absoluteUrl } from "@/lib/site-url";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: resource.seo.title,
    description: resource.seo.description,
    alternates: {
      canonical: absoluteUrl(`/resources/${resource.slug}`),
    },
    openGraph: {
      title: resource.seo.title,
      description: resource.seo.description,
      url: absoluteUrl(`/resources/${resource.slug}`),
      type: "article",
    },
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return <ResourceDetailPage resource={resource} />;
}
