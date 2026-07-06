import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { createResourceLead } from "@/lib/leads";

const AiRoiCalculator = () => {
  const [teamSize, setTeamSize] = useState(25);
  const [avgCost, setAvgCost] = useState(95000);
  const [repetitivePercent, setRepetitivePercent] = useState(40);
  const [efficiencyGain, setEfficiencyGain] = useState(35);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [savingLead, setSavingLead] = useState(false);

  const results = useMemo(() => {
    const totalPayroll = teamSize * avgCost;
    const repetitiveCost = totalPayroll * (repetitivePercent / 100);
    const annualSavings = repetitiveCost * (efficiencyGain / 100);
    const hoursPerFte = 2080;
    const hoursSaved = Math.round(teamSize * hoursPerFte * (repetitivePercent / 100) * (efficiencyGain / 100));
    const monthlySavings = annualSavings / 12;

    return {
      annualSavings: Math.round(annualSavings),
      monthlySavings: Math.round(monthlySavings),
      hoursSaved,
      effectiveCapacity: Math.round(teamSize * (efficiencyGain / 100)),
    };
  }, [teamSize, avgCost, repetitivePercent, efficiencyGain]);

  const handleSaveResults = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!leadName.trim() || !leadEmail.trim()) {
      toast.error("Please enter your name and work email.");
      return;
    }

    setSavingLead(true);
    try {
      await createResourceLead({
        name: leadName.trim(),
        email: leadEmail.trim(),
        resource_slug: "ai-roi-calculator",
        source: "roi_calculator",
        metadata: {
          teamSize,
          avgCost,
          repetitivePercent,
          efficiencyGain,
          ...results,
        },
      });
      toast.success("Results saved. We'll follow up with a tailored assessment.");
    } catch {
      toast.message("Request noted", {
        description: "We couldn't save to the database yet, but you can still book a strategy call.",
      });
    } finally {
      setSavingLead(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">
              ROI CALCULATOR
            </p>
            <h1 className="text-display mb-6">
              Estimate your <span className="gradient-text">AI operations ROI</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto">
              Model potential savings from automating repetitive operational work with
              governed AI workflows — before you commit to a full transformation program.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-hover p-8 space-y-8">
              <div className="space-y-3">
                <Label htmlFor="team-size">Team size (FTEs)</Label>
                <Input
                  id="team-size"
                  type="number"
                  min={1}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value) || 1)}
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="avg-cost">Avg. fully loaded cost per FTE (USD)</Label>
                <Input
                  id="avg-cost"
                  type="number"
                  min={10000}
                  step={5000}
                  value={avgCost}
                  onChange={(e) => setAvgCost(Number(e.target.value) || 10000)}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label>Repetitive operational work</Label>
                  <span className="text-sm text-primary font-semibold">{repetitivePercent}%</span>
                </div>
                <Slider
                  value={[repetitivePercent]}
                  onValueChange={(v) => setRepetitivePercent(v[0])}
                  min={10}
                  max={80}
                  step={5}
                />
                <p className="text-xs text-muted-foreground">
                  Data entry, document processing, status updates, manual coordination
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label>Expected AI efficiency gain</Label>
                  <span className="text-sm text-primary font-semibold">{efficiencyGain}%</span>
                </div>
                <Slider
                  value={[efficiencyGain]}
                  onValueChange={(v) => setEfficiencyGain(v[0])}
                  min={10}
                  max={70}
                  step={5}
                />
                <p className="text-xs text-muted-foreground">
                  Conservative range for governed workflow automation in year one
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-hover p-8 bg-primary/5 border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">Estimated annual savings</p>
                <p className="text-4xl font-bold text-foreground mb-1">
                  ${results.annualSavings.toLocaleString()}
                </p>
                <p className="text-sm text-secondary">
                  ~${results.monthlySavings.toLocaleString()} / month
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card-hover p-6">
                  <p className="text-xs text-muted-foreground mb-1">Hours recovered / year</p>
                  <p className="text-2xl font-bold">{results.hoursSaved.toLocaleString()}</p>
                </div>
                <div className="card-hover p-6">
                  <p className="text-xs text-muted-foreground mb-1">Effective capacity gain</p>
                  <p className="text-2xl font-bold">+{results.effectiveCapacity} FTE equiv.</p>
                </div>
              </div>

              <div className="card-hover p-6 text-sm text-secondary leading-relaxed">
                <p className="mb-3">
                  This model estimates operational efficiency from AI-native workflow automation.
                  Actual results depend on workflow selection, data quality, and governance design.
                </p>
                <p>
                  Use this as a starting point for executive alignment — then validate with a
                  scoped production workflow assessment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="btn-primary flex-1">
                  <Link to="/#contact">Validate with an Engineering Lead</Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/executive-briefing">Executive briefing</Link>
                </Button>
              </div>

              <form onSubmit={handleSaveResults} className="card-hover p-6 space-y-4">
                <p className="text-sm font-semibold text-foreground">Email me these results</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="roi-lead-name">Name</Label>
                    <Input
                      id="roi-lead-name"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="roi-lead-email">Work email</Label>
                    <Input
                      id="roi-lead-email"
                      type="email"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <Button type="submit" variant="outline" disabled={savingLead}>
                  {savingLead ? "Saving..." : "Save & request follow-up"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiRoiCalculator;
