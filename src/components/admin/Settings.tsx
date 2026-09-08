import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Settings() {
  return <div className="space-y-6">
    <h2 className="text-2xl font-bold">Settings</h2>
    <Card>
      <CardHeader><CardTitle>Deployment configuration</CardTitle></CardHeader>
      <CardContent className="space-y-3 text-muted-foreground">
        <p>Authentication, storage and site configuration are managed by the deployment administrator. Editing these settings from this panel is not available yet.</p>
        <p>Backup status is not connected to this panel. Check the deployment backup records before relying on a restore point.</p>
      </CardContent>
    </Card>
  </div>;
}
