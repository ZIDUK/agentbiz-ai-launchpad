import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Filter, 
  Calendar, 
  Mail, 
  Phone, 
  FileText, 
  MapPin,
  Star,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

export function CandidateManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [positionFilter, setPositionFilter] = useState("all");

  const candidates = [
    {
      id: 1,
      name: "Alex Thompson",
      email: "alex.thompson@email.com", 
      phone: "+1 (555) 123-4567",
      position: "Senior AI Engineer",
      status: "Interview Scheduled",
      stage: "Technical Interview",
      experience: "5+ years",
      location: "San Francisco, CA",
      appliedDate: "2024-01-15",
      nextAction: "Technical Interview - Jan 25, 2024",
      score: 85,
      avatar: "/placeholder-avatar.jpg",
      skills: ["Python", "TensorFlow", "PyTorch", "AWS"],
      salary: "$140-160k"
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@email.com",
      phone: "+1 (555) 234-5678", 
      position: "AI Product Manager",
      status: "Technical Review",
      stage: "Portfolio Review",
      experience: "3-4 years",
      location: "Remote",
      appliedDate: "2024-01-12",
      nextAction: "Portfolio Review - Jan 22, 2024",
      score: 78,
      avatar: "/placeholder-avatar.jpg",
      skills: ["Product Strategy", "AI/ML", "Agile", "Analytics"],
      salary: "$120-150k"
    },
    {
      id: 3,
      name: "David Kim",
      email: "david.kim@email.com",
      phone: "+1 (555) 345-6789",
      position: "AI Research Scientist", 
      status: "Final Interview",
      stage: "Leadership Interview",
      experience: "PhD + 2 years",
      location: "Boston, MA",
      appliedDate: "2024-01-10",
      nextAction: "Final Interview - Jan 24, 2024",
      score: 92,
      avatar: "/placeholder-avatar.jpg",
      skills: ["Deep Learning", "Research", "Publications", "Python"],
      salary: "$150-200k"
    },
    {
      id: 4,
      name: "Lisa Chen",
      email: "lisa.chen@email.com",
      phone: "+1 (555) 456-7890",
      position: "AI Solutions Architect",
      status: "Offer Extended",
      stage: "Negotiation",
      experience: "4+ years",
      location: "New York, NY",
      appliedDate: "2024-01-08",
      nextAction: "Await Response - Due Jan 26, 2024",
      score: 88,
      avatar: "/placeholder-avatar.jpg",
      skills: ["Architecture", "Cloud", "Integration", "Leadership"],
      salary: "$130-170k"
    },
    {
      id: 5,
      name: "Robert Johnson",
      email: "robert.johnson@email.com",
      phone: "+1 (555) 567-8901",
      position: "Senior AI Engineer",
      status: "Application Review",
      stage: "Resume Screening",
      experience: "6+ years",
      location: "Seattle, WA",
      appliedDate: "2024-01-18",
      nextAction: "Initial Screening Call - Pending",
      score: 72,
      avatar: "/placeholder-avatar.jpg",
      skills: ["Machine Learning", "Scala", "Spark", "Kubernetes"],
      salary: "$140-180k"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Offer Extended": return "text-green-600 bg-green-100 border-green-300";
      case "Final Interview": return "text-purple-600 bg-purple-100 border-purple-300";
      case "Interview Scheduled": return "text-blue-600 bg-blue-100 border-blue-300";
      case "Technical Review": return "text-orange-600 bg-orange-100 border-orange-300";
      case "Application Review": return "text-gray-600 bg-gray-100 border-gray-300";
      default: return "text-gray-600 bg-gray-100 border-gray-300";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-orange-600"; 
    return "text-red-600";
  };

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || candidate.status === statusFilter;
    const matchesPosition = positionFilter === "all" || candidate.position === positionFilter;
    return matchesSearch && matchesStatus && matchesPosition;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Candidate Management</h2>
          <p className="text-muted-foreground">Manage job applications and track hiring progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          <Button className="btn-primary">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Interview
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search candidates by name, email, or position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Application Review">Application Review</SelectItem>
                <SelectItem value="Interview Scheduled">Interview Scheduled</SelectItem>
                <SelectItem value="Technical Review">Technical Review</SelectItem>
                <SelectItem value="Final Interview">Final Interview</SelectItem>
                <SelectItem value="Offer Extended">Offer Extended</SelectItem>
              </SelectContent>
            </Select>
            <Select value={positionFilter} onValueChange={setPositionFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Positions</SelectItem>
                <SelectItem value="Senior AI Engineer">Senior AI Engineer</SelectItem>
                <SelectItem value="AI Product Manager">AI Product Manager</SelectItem>
                <SelectItem value="AI Research Scientist">AI Research Scientist</SelectItem>
                <SelectItem value="AI Solutions Architect">AI Solutions Architect</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Candidates List */}
      <div className="grid gap-6">
        {filteredCandidates.map((candidate) => (
          <Card key={candidate.id} className="card-hover">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={candidate.avatar} />
                    <AvatarFallback className="text-lg">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{candidate.name}</h3>
                    <p className="text-muted-foreground">{candidate.position}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {candidate.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Applied {candidate.appliedDate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Status & Stage</p>
                    <Badge className={`${getStatusColor(candidate.status)} mb-2`}>
                      {candidate.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{candidate.stage}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Score & Experience</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className={`h-4 w-4 ${getScoreColor(candidate.score)}`} />
                      <span className={`font-semibold ${getScoreColor(candidate.score)}`}>
                        {candidate.score}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{candidate.experience}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Next Action</p>
                    <p className="text-xs text-muted-foreground">{candidate.nextAction}</p>
                    <p className="text-xs text-muted-foreground mt-1">Salary: {candidate.salary}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-green-600 border-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Advance
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-600">
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCandidates.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No candidates found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}