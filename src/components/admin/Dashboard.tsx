import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  UserCheck, 
  TrendingUp, 
  DollarSign, 
  Calendar,
  Phone,
  Mail,
  FileText,
  Target,
  Clock
} from "lucide-react";

export function Dashboard() {
  const stats = [
    {
      title: "Total Leads",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-500"
    },
    {
      title: "Active Candidates",
      value: "89",
      change: "+8.2%", 
      trend: "up",
      icon: UserCheck,
      color: "text-green-500"
    },
    {
      title: "Monthly Revenue",
      value: "$125K",
      change: "+23.1%",
      trend: "up", 
      icon: DollarSign,
      color: "text-purple-500"
    },
    {
      title: "Conversion Rate",
      value: "7.2%",
      change: "-2.1%",
      trend: "down",
      icon: Target,
      color: "text-orange-500"
    }
  ];

  const recentLeads = [
    { name: "Sarah Johnson", company: "TechCorp", service: "AI Strategy", status: "hot", time: "2h ago" },
    { name: "Michael Chen", company: "StartupXYZ", service: "Custom AI Solutions", status: "warm", time: "4h ago" },
    { name: "Emma Wilson", company: "Enterprise Ltd", service: "AI Integration", status: "cold", time: "1d ago" },
    { name: "James Rodriguez", company: "InnovateCo", service: "Data Analytics", status: "hot", time: "2d ago" },
  ];

  const recentApplications = [
    { name: "Alex Thompson", position: "Senior AI Engineer", stage: "Interview Scheduled", time: "1h ago" },
    { name: "Maria Garcia", position: "AI Product Manager", stage: "Technical Review", time: "3h ago" },
    { name: "David Kim", position: "AI Research Scientist", stage: "Final Interview", time: "5h ago" },
    { name: "Lisa Chen", position: "AI Solutions Architect", stage: "Offer Extended", time: "1d ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "hot": return "bg-red-500";
      case "warm": return "bg-yellow-500";  
      case "cold": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Offer Extended": return "text-green-600 bg-green-100";
      case "Final Interview": return "text-purple-600 bg-purple-100";
      case "Interview Scheduled": return "text-blue-600 bg-blue-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your business.</p>
        </div>
        <Badge className="bg-green-100 text-green-700 border-green-300">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          All Systems Operational
        </Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <IconComponent className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Recent Leads
            </CardTitle>
            <CardDescription>Latest potential clients who contacted us</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(lead.status)}`}></div>
                    <div>
                      <p className="font-medium text-foreground">{lead.name}</p>
                      <p className="text-sm text-muted-foreground">{lead.company} • {lead.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">
                      {lead.status.toUpperCase()}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{lead.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Applications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              Recent Applications
            </CardTitle>
            <CardDescription>Latest job applications and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div>
                    <p className="font-medium text-foreground">{app.name}</p>
                    <p className="text-sm text-muted-foreground">{app.position}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={`text-xs ${getStageColor(app.stage)}`}>
                      {app.stage}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{app.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Sales Pipeline</CardTitle>
            <CardDescription>Current status of sales opportunities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Qualified Leads</span>
                <span>67%</span>
              </div>
              <Progress value={67} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Proposals Sent</span>
                <span>34%</span>
              </div>
              <Progress value={34} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Negotiations</span>
                <span>12%</span>
              </div>
              <Progress value={12} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Closed Won</span>
                <span>8%</span>
              </div>
              <Progress value={8} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-3 text-left rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium text-sm">Schedule Interview</p>
                  <p className="text-xs text-muted-foreground">Book candidate meetings</p>
                </div>
              </div>
            </button>
            
            <button className="w-full p-3 text-left rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium text-sm">Send Proposal</p>
                  <p className="text-xs text-muted-foreground">Create client proposal</p>
                </div>
              </div>
            </button>
            
            <button className="w-full p-3 text-left rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium text-sm">Generate Report</p>
                  <p className="text-xs text-muted-foreground">Export analytics data</p>
                </div>
              </div>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}