import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Mail, Building2, FileText, Calendar } from "lucide-react";
import { subscribeToResourceLeads, type ResourceLead } from "@/lib/leads";

const sourceLabels: Record<ResourceLead["source"], string> = {
  resource_download: "Resource download",
  roi_calculator: "ROI calculator",
  insight_newsletter: "Insights",
};

export function LeadsManagement() {
  const [leads, setLeads] = useState<ResourceLead[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sourceFilter, setSourceFilter] = useState("all");

  useEffect(() => {
    const unsubscribe = subscribeToResourceLeads((data) => {
      setLeads(data);
    });
    return () => unsubscribe();
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.company || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.resource_slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSource = sourceFilter === "all" || lead.source === sourceFilter;
    return matchesSearch && matchesSource;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Resource Leads</h2>
          <p className="text-muted-foreground">
            Downloads and ROI calculator captures from the marketing site
          </p>
        </div>
        <Badge className="bg-blue-100 text-blue-700 border-blue-300">
          {leads.length} leads
        </Badge>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, company, or resource..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All sources</SelectItem>
                <SelectItem value="resource_download">Resource download</SelectItem>
                <SelectItem value="roi_calculator">ROI calculator</SelectItem>
                <SelectItem value="insight_newsletter">Insights</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {filteredLeads.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center text-muted-foreground">
            {leads.length === 0
              ? "No leads yet. Ensure the resource_leads table is created in Supabase (see supabase/migrations/001_resource_leads.sql)."
              : "No leads match your filters."}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredLeads.map((lead) => (
            <Card key={lead.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-foreground">{lead.name}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${lead.email}`} className="hover:text-primary">
                          {lead.email}
                        </a>
                      </span>
                      {lead.company && (
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {lead.company}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {lead.resource_slug}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {lead.created_at.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline">{sourceLabels[lead.source]}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
