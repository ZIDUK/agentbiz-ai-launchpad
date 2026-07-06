import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  Building2,
  Download,
  GripVertical,
  Mail,
  Plus,
  Search,
  UserPlus,
} from "lucide-react";
import {
  createCrmContact,
  CRM_STAGES,
  exportCrmContactsCsv,
  getCrmContacts,
  subscribeToCrmContacts,
  updateCrmContactStage,
  type CrmContact,
  type CrmContactType,
  type CrmStage,
} from "@/lib/crm";
import { CrmContactDetail } from "@/components/admin/CrmContactDetail";

function ContactCard({
  contact,
  onOpen,
  onDragStart,
}: {
  contact: CrmContact;
  onOpen: () => void;
  onDragStart: () => void;
}) {
  const stageMeta = CRM_STAGES.find((s) => s.id === contact.stage);

  return (
    <Card
      draggable
      onDragStart={onDragStart}
      className="cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
      onClick={onOpen}
    >
      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="font-semibold text-foreground truncate">{contact.name}</p>
            <p className="text-xs text-muted-foreground truncate">{contact.email}</p>
          </div>
          <GripVertical className="h-4 w-4 text-muted-foreground shrink-0" />
        </div>
        {contact.company && (
          <p className="text-xs text-secondary flex items-center gap-1 truncate">
            <Building2 className="h-3 w-3" />
            {contact.company}
          </p>
        )}
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-[10px]">
            {contact.contact_type}
          </Badge>
          {contact.priority === "high" && (
            <Badge className="text-[10px] bg-red-100 text-red-700 border-red-200">high</Badge>
          )}
          {stageMeta && (
            <Badge variant="outline" className={`text-[10px] ${stageMeta.color}`}>
              {stageMeta.label}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function CrmManagement() {
  const [contacts, setContacts] = useState<CrmContact[]>([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | CrmContactType>("all");
  const [selectedContact, setSelectedContact] = useState<CrmContact | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [newContactOpen, setNewContactOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToCrmContacts(setContacts);
    return () => unsubscribe();
  }, []);

  const filtered = useMemo(() => {
    return contacts.filter((contact) => {
      const q = search.toLowerCase();
      const matchesSearch =
        contact.name.toLowerCase().includes(q) ||
        contact.email.toLowerCase().includes(q) ||
        (contact.company || "").toLowerCase().includes(q);
      const matchesType = typeFilter === "all" || contact.contact_type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [contacts, search, typeFilter]);

  const prospects = filtered.filter((c) => c.contact_type !== "candidate");
  const candidates = filtered.filter((c) => c.contact_type === "candidate");

  const openContact = (contact: CrmContact) => {
    setSelectedContact(contact);
    setDetailOpen(true);
  };

  const handleDropOnStage = async (stage: CrmStage) => {
    if (!draggingId) return;
    const contact = contacts.find((c) => c.id === draggingId);
    if (!contact || contact.stage === stage) {
      setDraggingId(null);
      return;
    }

    try {
      await updateCrmContactStage(contact.id, stage, contact.stage);
      toast.success(`Moved to ${stage}`);
    } catch {
      toast.error("Could not move contact");
    } finally {
      setDraggingId(null);
    }
  };

  const handleCreateContact = async () => {
    if (!newName.trim() || !newEmail.trim()) {
      toast.error("Name and email are required");
      return;
    }

    setCreating(true);
    try {
      await createCrmContact({
        name: newName.trim(),
        email: newEmail.trim(),
        company: newCompany.trim() || undefined,
      });
      toast.success("Contact created");
      setNewContactOpen(false);
      setNewName("");
      setNewEmail("");
      setNewCompany("");
    } catch {
      toast.error("Could not create contact. Email may already exist.");
    } finally {
      setCreating(false);
    }
  };

  const pipelineStages = CRM_STAGES.filter((s) => s.id !== "lost");

  const renderPipeline = (list: CrmContact[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 overflow-x-auto pb-2">
      {pipelineStages.map((stage) => {
        const columnContacts = list.filter((c) => c.stage === stage.id);
        return (
          <div
            key={stage.id}
            className="min-w-[220px] rounded-xl bg-muted/40 border border-border p-3"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => void handleDropOnStage(stage.id)}
          >
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline" className={stage.color}>
                {stage.label}
              </Badge>
              <span className="text-xs text-muted-foreground">{columnContacts.length}</span>
            </div>
            <div className="space-y-2 min-h-[120px]">
              {columnContacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  onOpen={() => openContact(contact)}
                  onDragStart={() => setDraggingId(contact.id)}
                />
              ))}
            </div>
          </div>
        );
      })}
      <div
        className="min-w-[220px] rounded-xl bg-muted/20 border border-dashed border-border p-3"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => void handleDropOnStage("lost")}
      >
        <Badge variant="outline" className="bg-slate-100 text-slate-600 border-slate-200 mb-3">
          Lost
        </Badge>
        <div className="space-y-2 min-h-[120px]">
          {list
            .filter((c) => c.stage === "lost")
            .map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onOpen={() => openContact(contact)}
                onDragStart={() => setDraggingId(contact.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );

  const renderTable = (list: CrmContact[]) => (
    <div className="rounded-xl border border-border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-muted/50">
          <tr>
            <th className="text-left p-3 font-medium">Name</th>
            <th className="text-left p-3 font-medium">Email</th>
            <th className="text-left p-3 font-medium hidden md:table-cell">Company</th>
            <th className="text-left p-3 font-medium">Stage</th>
            <th className="text-left p-3 font-medium hidden lg:table-cell">Type</th>
            <th className="text-left p-3 font-medium hidden lg:table-cell">Last activity</th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 ? (
            <tr>
              <td colSpan={6} className="p-8 text-center text-muted-foreground">
                No contacts yet. Run migration 003_internal_crm.sql or add a contact.
              </td>
            </tr>
          ) : (
            list.map((contact) => {
              const stageMeta = CRM_STAGES.find((s) => s.id === contact.stage);
              return (
                <tr
                  key={contact.id}
                  className="border-t border-border hover:bg-muted/30 cursor-pointer"
                  onClick={() => openContact(contact)}
                >
                  <td className="p-3 font-medium">{contact.name}</td>
                  <td className="p-3 text-muted-foreground">{contact.email}</td>
                  <td className="p-3 hidden md:table-cell">{contact.company || "—"}</td>
                  <td className="p-3">
                    {stageMeta && (
                      <Badge variant="outline" className={stageMeta.color}>
                        {stageMeta.label}
                      </Badge>
                    )}
                  </td>
                  <td className="p-3 hidden lg:table-cell capitalize">{contact.contact_type}</td>
                  <td className="p-3 hidden lg:table-cell text-muted-foreground">
                    {contact.last_activity_at.toLocaleDateString()}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );

  const stats = {
    total: contacts.length,
    new: contacts.filter((c) => c.stage === "new").length,
    active: contacts.filter((c) => !["won", "lost"].includes(c.stage)).length,
    won: contacts.filter((c) => c.stage === "won").length,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">CRM</h2>
          <p className="text-muted-foreground">
            Internal pipeline — auto-syncs from leads, contact form, and careers
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Dialog open={newContactOpen} onOpenChange={setNewContactOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="btn-primary">
                <UserPlus className="h-4 w-4 mr-2" />
                Add contact
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New contact</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Company (optional)</Label>
                  <Input value={newCompany} onChange={(e) => setNewCompany(e.target.value)} />
                </div>
                <Button
                  className="w-full btn-primary"
                  onClick={() => void handleCreateContact()}
                  disabled={creating}
                >
                  {creating ? "Creating..." : "Create contact"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            variant="outline"
            size="sm"
            onClick={() => exportCrmContactsCsv(filtered)}
            disabled={filtered.length === 0}
          >
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total contacts", value: stats.total },
          { label: "New", value: stats.new },
          { label: "Active pipeline", value: stats.active },
          { label: "Won", value: stats.won },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-4 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Search contacts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={typeFilter} onValueChange={(v) => setTypeFilter(v as typeof typeFilter)}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              <SelectItem value="prospect">Prospects</SelectItem>
              <SelectItem value="candidate">Candidates</SelectItem>
              <SelectItem value="customer">Customers</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Tabs defaultValue="pipeline">
        <TabsList>
          <TabsTrigger value="pipeline">Sales pipeline</TabsTrigger>
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="table">All contacts</TabsTrigger>
        </TabsList>
        <TabsContent value="pipeline" className="mt-4">
          {prospects.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center text-muted-foreground">
                <Mail className="h-8 w-8 mx-auto mb-3 opacity-50" />
                No prospects yet. Leads from the site will appear here automatically.
              </CardContent>
            </Card>
          ) : (
            renderPipeline(prospects)
          )}
        </TabsContent>
        <TabsContent value="candidates" className="mt-4">
          {candidates.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center text-muted-foreground">
                <Plus className="h-8 w-8 mx-auto mb-3 opacity-50" />
                No candidates yet. CV submissions sync here from /careers.
              </CardContent>
            </Card>
          ) : (
            renderTable(candidates)
          )}
        </TabsContent>
        <TabsContent value="table" className="mt-4">
          {renderTable(filtered)}
        </TabsContent>
      </Tabs>

      <CrmContactDetail
        contact={selectedContact}
        open={detailOpen}
        onOpenChange={setDetailOpen}
        onUpdated={async () => {
          const data = await getCrmContacts();
          setContacts(data);
          if (selectedContact) {
            setSelectedContact(data.find((c) => c.id === selectedContact.id) || null);
          }
        }}
      />
    </div>
  );
}
