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
  Building,
  DollarSign,
  TrendingUp
} from "lucide-react";

export function LeadsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");

  const leads = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@techcorp.com",
      phone: "+1 (555) 123-4567",
      company: "TechCorp Inc.",
      position: "CTO",
      service: "AI Strategy & Consultation",
      status: "hot",
      stage: "Proposal Sent",
      source: "Website Contact",
      value: "$75,000",
      probability: 80,
      lastContact: "2024-01-20",
      nextAction: "Follow-up call scheduled Jan 25",
      notes: "Very interested in AI transformation. Budget approved.",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@startupxyz.com", 
      phone: "+1 (555) 234-5678",
      company: "StartupXYZ",
      position: "Founder & CEO",
      service: "Custom AI Solutions",
      status: "warm",
      stage: "Discovery Call",
      source: "LinkedIn",
      value: "$45,000",
      probability: 60,
      lastContact: "2024-01-18",
      nextAction: "Technical requirements meeting Jan 24",
      notes: "Looking for custom ML models for their SaaS platform.",
      location: "Austin, TX"
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "e.wilson@enterprise.com",
      phone: "+1 (555) 345-6789", 
      company: "Enterprise Ltd",
      position: "VP of Technology",
      service: "AI Integration Services",
      status: "cold",
      stage: "Initial Contact",
      source: "Conference",
      value: "$120,000",
      probability: 30,
      lastContact: "2024-01-15",
      nextAction: "Send case studies and schedule demo",
      notes: "Large enterprise looking to integrate AI into existing systems.",
      location: "New York, NY"
    },
    {
      id: 4,
      name: "James Rodriguez",
      email: "j.rodriguez@innovate.co",
      phone: "+1 (555) 456-7890",
      company: "InnovateCo",
      position: "Head of Innovation",
      service: "Data Science & Analytics",
      status: "hot",
      stage: "Negotiation",
      source: "Referral",
      value: "$95,000",
      probability: 85,
      lastContact: "2024-01-22",
      nextAction: "Contract review meeting Jan 26",
      notes: "Ready to sign. Finalizing contract terms.",
      location: "Seattle, WA"
    },
    {
      id: 5,
      name: "Jennifer Kim", 
      email: "j.kim@retailplus.com",
      phone: "+1 (555) 567-8901",
      company: "RetailPlus",
      position: "Director of Operations",
      service: "AI-Powered Product Development",
      status: "warm",
      stage: "Proposal Review",
      source: "Google Ads",
      value: "$65,000",
      probability: 70,
      lastContact: "2024-01-19",
      nextAction: "Proposal presentation Jan 27",
      notes: "Interested in AI-powered personalization for e-commerce.",
      location: "Los Angeles, CA"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "hot": return "bg-red-500 text-white";
      case "warm": return "bg-yellow-500 text-white";  
      case "cold": return "bg-blue-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 75) return "text-green-600";
    if (probability >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesService = serviceFilter === "all" || lead.service === serviceFilter;
    return matchesSearch && matchesStatus && matchesService;
  });

  const totalValue = filteredLeads.reduce((sum, lead) => {
    return sum + parseInt(lead.value.replace(/[$,]/g, ''));
  }, 0);

  const avgProbability = filteredLeads.reduce((sum, lead) => sum + lead.probability, 0) / filteredLeads.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Lead Management</h2>
          <p className="text-muted-foreground">Track and manage sales opportunities</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="btn-primary">
            <Mail className="h-4 w-4 mr-2" />
            Send Campaign
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Pipeline</p>
                <p className="text-2xl font-bold">${(totalValue / 1000).toFixed(0)}K</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Probability</p>
                <p className="text-2xl font-bold">{avgProbability.toFixed(0)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Active Leads</p>
                <p className="text-2xl font-bold">{filteredLeads.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Hot Leads</p>
                <p className="text-2xl font-bold">{filteredLeads.filter(l => l.status === 'hot').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search leads by name, email, or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="hot">Hot</SelectItem>
                <SelectItem value="warm">Warm</SelectItem>
                <SelectItem value="cold">Cold</SelectItem>
              </SelectContent>
            </Select>
            <Select value={serviceFilter} onValueChange={setServiceFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="AI Strategy & Consultation">AI Strategy</SelectItem>
                <SelectItem value="Custom AI Solutions">Custom AI Solutions</SelectItem>
                <SelectItem value="AI Integration Services">AI Integration</SelectItem>
                <SelectItem value="Data Science & Analytics">Data Science</SelectItem>
                <SelectItem value="AI-Powered Product Development">AI Products</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Leads List */}
      <div className="grid gap-6">
        {filteredLeads.map((lead) => (
          <Card key={lead.id} className="card-hover">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="text-sm">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{lead.name}</h3>
                      <Badge className={`text-xs ${getStatusColor(lead.status)}`}>
                        {lead.status.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{lead.position} at {lead.company}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {lead.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Last contact: {lead.lastContact}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Service & Stage</p>
                    <p className="text-sm text-muted-foreground mb-1">{lead.service}</p>
                    <Badge variant="outline" className="text-xs">
                      {lead.stage}
                    </Badge>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Value & Probability</p>
                    <p className="text-lg font-semibold text-foreground">{lead.value}</p>
                    <p className={`text-sm font-medium ${getProbabilityColor(lead.probability)}`}>
                      {lead.probability}% likely
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Next Action</p>
                    <p className="text-sm text-muted-foreground">{lead.nextAction}</p>
                    <p className="text-xs text-muted-foreground mt-1">Source: {lead.source}</p>
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
                  <Button className="btn-primary" size="sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>

              {lead.notes && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Notes:</strong> {lead.notes}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredLeads.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No leads found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}