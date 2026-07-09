import { Button } from "@/components/ui/button";

export function ArticleFinalCTA() {
  return (
    <section className="border border-navy bg-navy p-6 text-ivory">
      <p className="label text-gold">Find Your Next Step</p>
      <h2 className="heading-md mt-3">START WITH THE GAP YOU NEED TO CLOSE.</h2>
      <p className="body mt-4 text-ivory/72">
        Articles can clarify an idea. A structured reading path can help you
        decide where that idea belongs in your wider development.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/start-here" variant="gold">
          Start Here
        </Button>
        <Button
          href="/books"
          variant="outline"
          className="border-ivory/30 text-ivory hover:bg-ivory hover:text-navy"
        >
          Explore the Library
        </Button>
      </div>
    </section>
  );
}
