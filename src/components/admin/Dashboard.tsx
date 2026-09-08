import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getResourceLeads, type ResourceLead } from "@/lib/leads";
import { getApplications, type Application } from "@/lib/applications";
import { getCrmContacts, type CrmContact } from "@/lib/crm";
import { Link } from "react-router-dom";

type DashboardData = { leads: ResourceLead[]; applications: Application[]; contacts: CrmContact[] };
export function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState(false);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    let active = true;
    setError(false);
    Promise.all([getResourceLeads(), getApplications(), getCrmContacts()])
      .then(([leads, applications, contacts]) => { if (active) setData({ leads, applications, contacts }); })
      .catch(() => { if (active) setError(true); });
    return () => { active = false; };
  }, [reload]);
  if (error) return <div role="alert">Could not load dashboard data. <Button onClick={() => setReload(value => value + 1)}>Retry</Button></div>;
  if (!data) return <p role="status">Loading dashboard…</p>;
  const metrics = [
    { title: "Total leads", value: data.leads.length, href: "/admin/leads" },
    { title: "Pending applications", value: data.applications.filter(app => app.status === "pending").length, href: "/admin/applications" },
    { title: "Active contacts", value: data.contacts.filter(contact => !["won", "lost"].includes(contact.stage)).length, href: "/admin/crm" },
    { title: "Won contacts", value: data.contacts.filter(contact => contact.stage === "won").length, href: "/admin/crm" },
  ];
  return <div className="space-y-6">
    <h2 className="text-2xl font-bold">Dashboard</h2>
    <p className="text-muted-foreground">Current leads, applications and contacts.</p>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map(metric => <Card key={metric.title}><CardHeader><CardTitle className="text-sm"><Link to={metric.href}>{metric.title}</Link></CardTitle></CardHeader><CardContent className="text-2xl font-bold">{metric.value}</CardContent></Card>)}
    </div>
    <div className="grid lg:grid-cols-2 gap-6">
      <Card><CardHeader><CardTitle>Recent leads</CardTitle></CardHeader><CardContent>
        {data.leads.length === 0 ? <p>No leads yet.</p> : <ul className="space-y-3">{data.leads.slice(0, 5).map(lead => <li key={lead.id}><Link to="/admin/leads" className="font-medium">{lead.name}</Link><p className="text-sm text-muted-foreground">{lead.company || lead.email}</p></li>)}</ul>}
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Recent applications</CardTitle></CardHeader><CardContent>
        {data.applications.length === 0 ? <p>No applications yet.</p> : <ul className="space-y-3">{data.applications.slice(0, 5).map(app => <li key={app.id}><Link to="/admin/applications" className="font-medium">{app.name}</Link><p className="text-sm text-muted-foreground">{app.position} · {app.status}</p></li>)}</ul>}
      </CardContent></Card>
    </div>
  </div>;
}
