import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { legalSiteConfig } from "@/config/legal";

export type LegalSection = { title: string; paragraphs: React.ReactNode[]; bullets?: string[] };
export function legalMetadata(title: string, description: string): Metadata { const paths: Record<string,string>={"Privacy Policy":"privacy","Terms of Use and Sale":"terms","Refund Policy":"refund-policy","Trading and Educational Disclaimer":"disclaimer","Cookie Policy":"cookie-policy","Accessibility Statement":"accessibility"}; return { title, description, alternates: { canonical: `/${paths[title]}` } }; }

export function LegalPage({ eyebrow = "LEGAL", title, introduction, sections }: { eyebrow?: string; title: string; introduction: string; sections: LegalSection[] }) {
  return <Section><Container><article className="mx-auto max-w-4xl"><header className="border-b border-border pb-10"><Eyebrow>{eyebrow}</Eyebrow><h1 className="display-lg mt-4 text-navy">{title}</h1>{legalSiteConfig.effectiveDate ? <p className="label mt-5 text-muted-foreground">Effective date: {legalSiteConfig.effectiveDate}</p> : null}<p className="body-lg mt-6 max-w-3xl text-muted-foreground">{introduction}</p><p className="body-sm mt-4 border-l border-gold pl-4 text-muted-foreground">This draft reflects the current MaorTrades implementation and requires professional legal review before public launch.</p></header><div className="article-body mt-12">{sections.map((section) => <section key={section.title} className="mt-12 first:mt-0"><h2>{section.title}</h2>{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}</section>)}</div><footer className="mt-14 border-t border-border pt-8"><p className="body-sm text-muted-foreground">Related information: <Link className="text-navy underline underline-offset-4" href="/cookie-policy">Cookie Policy</Link>, <Link className="text-navy underline underline-offset-4" href="/disclaimer">Trading Disclaimer</Link>, and <Link className="text-navy underline underline-offset-4" href="/contact">Contact</Link>.</p></footer></article></Container></Section>;
}
