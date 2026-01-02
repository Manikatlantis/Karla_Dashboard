export default function Home() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Welcome</h2>
      <p className="text-neutral-300">
        This portal is a moderated, appreciation-focused space to recognize teaching, mentorship, leadership,
        and service. It does not support ratings, rankings, or negative reviews.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <a className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10" href="/wall">
          <div className="font-medium">Browse the Appreciation Wall</div>
          <div className="text-sm text-neutral-400">Read approved testimonials.</div>
        </a>
        <a className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10" href="/submit">
          <div className="font-medium">Submit Appreciation</div>
          <div className="text-sm text-neutral-400">Share a note or upload a letter (moderated).</div>
        </a>
      </div>
    </section>
  );
}
