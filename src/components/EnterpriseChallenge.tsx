import { enterpriseChallenges } from "@/data/site-content";

const EnterpriseChallenge = () => {
  return (
    <section id="challenge" className="section bg-card">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">
            THE ENTERPRISE CHALLENGE
          </p>
          <h2 className="text-headline mb-6">
            AI adoption is no longer the question.{" "}
            <span className="gradient-text">Operational transformation is.</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Most organizations are already experimenting with AI. The challenge is moving
            beyond pilots and productivity tools into core business execution.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 gap-4">
          {enterpriseChallenges.map((challenge) => (
            <li
              key={challenge}
              className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-5"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="text-secondary leading-relaxed">{challenge}.</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EnterpriseChallenge;
