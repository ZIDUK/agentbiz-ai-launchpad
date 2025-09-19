import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  UserCheck, 
  DollarSign, 
  Target,
  Calendar,
  Globe,
  Smartphone,
  Monitor,
  Eye,
  MousePointer,
  ArrowUpRight
} from "lucide-react";

export function Analytics() {
  const metrics = [
    {
      title: "Website Visitors",
      value: "24,567",
      change: "+15.2%",
      trend: "up",
      icon: Eye,
      period: "This month"
    },
    {
      title: "Conversion Rate", 
      value: "3.8%",
      change: "+0.5%",
      trend: "up",
      icon: Target,
      period: "This month"
    },
    {
      title: "Lead Generation",
      value: "1,247", 
      change: "+23.1%",
      trend: "up",
      icon: Users,
      period: "This month"
    },
    {
      title: "Revenue Growth",
      value: "$125K",
      change: "+18.7%",
      trend: "up", 
      icon: DollarSign,
      period: "This month"
    }
  ];

  const trafficSources = [
    { source: "Organic Search", visits: 8945, percentage: 36.4, change: "+12%" },
    { source: "Direct", visits: 6234, percentage: 25.4, change: "+8%" },
    { source: "LinkedIn", visits: 4123, percentage: 16.8, change: "+25%" },
    { source: "Google Ads", visits: 2890, percentage: 11.8, change: "+15%" },
    { source: "Referrals", visits: 1567, percentage: 6.4, change: "+5%" },
    { source: "Other", visits: 808, percentage: 3.2, change: "-2%" }
  ];

  const conversionFunnel = [
    { stage: "Website Visitors", count: 24567, percentage: 100, color: "bg-blue-500" },
    { stage: "Page Views", count: 18420, percentage: 75, color: "bg-indigo-500" },
    { stage: "Contact Form Views", count: 4913, percentage: 20, color: "bg-purple-500" },
    { stage: "Form Submissions", count: 1247, percentage: 5.1, color: "bg-pink-500" },
    { stage: "Qualified Leads", count: 623, percentage: 2.5, color: "bg-red-500" },
    { stage: "Proposals Sent", count: 187, percentage: 0.8, color: "bg-orange-500" },
    { stage: "Deals Closed", count: 45, percentage: 0.2, color: "bg-green-500" }
  ];

  const topPages = [
    { page: "/", title: "Homepage", views: 12456, bounce: "45%", avgTime: "2:34" },
    { page: "/#solutions", title: "AI Solutions", views: 8234, bounce: "38%", avgTime: "3:12" },
    { page: "/#career", title: "Career Page", views: 4567, bounce: "52%", avgTime: "4:05" },
    { page: "/#contact", title: "Contact", views: 3456, bounce: "25%", avgTime: "1:45" },
    { page: "/#workflow", title: "Our Workflow", views: 2134, bounce: "42%", avgTime: "2:55" }
  ];

  const deviceStats = [
    { device: "Desktop", percentage: 58.2, count: 14306, icon: Monitor },
    { device: "Mobile", percentage: 32.8, count: 8058, icon: Smartphone },
    { device: "Tablet", percentage: 9.0, count: 2203, icon: Smartphone }
  ];

  const candidateMetrics = [
    { position: "Senior AI Engineer", applications: 45, qualified: 12, hired: 2, conversion: "4.4%" },
    { position: "AI Product Manager", applications: 38, qualified: 15, hired: 1, conversion: "2.6%" },
    { position: "AI Research Scientist", applications: 29, qualified: 8, hired: 1, conversion: "3.4%" },
    { position: "AI Solutions Architect", applications: 33, qualified: 11, hired: 0, conversion: "0%" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Comprehensive business metrics and insights</p>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-green-100 text-green-700">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Live Data
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index} className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <IconComponent className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                  <p className={`text-xs ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} {metric.period}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Traffic Sources
            </CardTitle>
            <CardDescription>Where your visitors are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{source.source}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{source.visits.toLocaleString()}</span>
                        <span className={`text-xs ${source.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {source.change}
                        </span>
                      </div>
                    </div>
                    <Progress value={source.percentage} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conversion Funnel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Conversion Funnel
            </CardTitle>
            <CardDescription>User journey through your website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {conversionFunnel.map((stage, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{stage.stage}</span>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-foreground">{stage.count.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground ml-2">({stage.percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${stage.color}`}
                      style={{ width: `${stage.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MousePointer className="h-5 w-5 text-primary" />
              Top Performing Pages
            </CardTitle>
            <CardDescription>Most visited pages and their performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div>
                    <p className="font-medium text-foreground">{page.title}</p>
                    <p className="text-xs text-muted-foreground">{page.page}</p>
                  </div>
                  <div className="text-right text-sm">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-semibold">{page.views.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">views</p>
                      </div>
                      <div>
                        <p className="font-semibold">{page.bounce}</p>
                        <p className="text-xs text-muted-foreground">bounce</p>
                      </div>
                      <div>
                        <p className="font-semibold">{page.avgTime}</p>
                        <p className="text-xs text-muted-foreground">avg time</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Candidate Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              Hiring Analytics
            </CardTitle>
            <CardDescription>Job posting performance and conversion rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {candidateMetrics.map((metric, index) => (
                <div key={index} className="p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-foreground">{metric.position}</p>
                    <Badge variant="outline" className="text-xs">
                      {metric.conversion}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Applications</p>
                      <p className="font-semibold">{metric.applications}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Qualified</p>
                      <p className="font-semibold">{metric.qualified}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Hired</p>
                      <p className="font-semibold">{metric.hired}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}