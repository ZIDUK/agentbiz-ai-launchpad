import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { 
  Settings as SettingsIcon,
  Bell,
  Mail,
  Shield,
  Database,
  Globe,
  Users,
  Palette,
  Save,
  Key,
  AlertCircle
} from "lucide-react";

export function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Settings</h2>
          <p className="text-muted-foreground">Manage your application preferences and configurations</p>
        </div>
        <Badge className="bg-orange-100 text-orange-700">
          <AlertCircle className="w-3 h-3 mr-1" />
          Some changes require restart
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* General Settings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5 text-primary" />
              General Settings
            </CardTitle>
            <CardDescription>Basic application and company information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" defaultValue="AgentBiz" />
              </div>
              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input id="website" defaultValue="https://agentbiz.ai" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="description">Company Description</Label>
              <Textarea 
                id="description" 
                defaultValue="We are your strategic partner in AI adoption. We design, build, and deploy custom artificial intelligence agents."
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Contact Email</Label>
                <Input id="email" type="email" defaultValue="hello@agentbiz.ai" />
              </div>
              <div>
                <Label htmlFor="phone">Contact Phone</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Business Address</Label>
              <Input id="address" defaultValue="123 AI Street, San Francisco, CA 94105" />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline">
              <Database className="h-4 w-4 mr-2" />
              Backup Database
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Export Leads
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Export Candidates
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Key className="h-4 w-4 mr-2" />
              Regenerate API Keys
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notification Preferences
            </CardTitle>
            <CardDescription>Configure how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="new-leads">New Lead Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified when new leads submit forms</p>
                </div>
                <Switch id="new-leads" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="new-applications">Job Applications</Label>
                  <p className="text-sm text-muted-foreground">Alerts for new job applications</p>
                </div>
                <Switch id="new-applications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weekly-reports">Weekly Reports</Label>
                  <p className="text-sm text-muted-foreground">Automated weekly analytics summary</p>
                </div>
                <Switch id="weekly-reports" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="system-alerts">System Alerts</Label>
                  <p className="text-sm text-muted-foreground">Important system notifications</p>
                </div>
                <Switch id="system-alerts" defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Security & Privacy
            </CardTitle>
            <CardDescription>Manage security and access controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                </div>
                <Button size="sm" variant="outline">Enable</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-logout">Auto Logout</Label>
                  <p className="text-sm text-muted-foreground">Automatically log out after inactivity</p>
                </div>
                <Switch id="auto-logout" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="session-timeout">Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">Timeout duration for inactive sessions</p>
                </div>
                <select className="px-3 py-1 border border-border rounded text-sm">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>4 hours</option>
                  <option>8 hours</option>
                </select>
              </div>
              
              <div>
                <Label>Password Requirements</Label>
                <div className="mt-2 text-sm text-muted-foreground space-y-1">
                  <p>• Minimum 8 characters</p>
                  <p>• Include uppercase and lowercase</p>
                  <p>• Include numbers and symbols</p>
                  <p>• Must not be a common password</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API & Integrations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              API & Integrations
            </CardTitle>
            <CardDescription>Manage external services and API access</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label>Calendly Integration</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className="bg-green-100 text-green-700">Connected</Badge>
                  <Button size="sm" variant="outline">Configure</Button>
                </div>
              </div>
              
              <div>
                <Label>Email Service (SMTP)</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className="bg-green-100 text-green-700">Active</Badge>
                  <Button size="sm" variant="outline">Configure</Button>
                </div>
              </div>
              
              <div>
                <Label>Analytics Tracking</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className="bg-gray-100 text-gray-700">Not Connected</Badge>
                  <Button size="sm" variant="outline">Setup</Button>
                </div>
              </div>
              
              <div>
                <Label>CRM Integration</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className="bg-gray-100 text-gray-700">Not Connected</Badge>
                  <Button size="sm" variant="outline">Setup</Button>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Label>API Access Token</Label>
              <div className="flex gap-2 mt-1">
                <Input value="sk_live_*********************xyz" readOnly />
                <Button size="sm" variant="outline">Copy</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              System Information
            </CardTitle>
            <CardDescription>Current system status and information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Version</p>
                <p className="font-semibold">v2.1.4</p>
              </div>
              <div>
                <p className="text-muted-foreground">Environment</p>
                <p className="font-semibold">Production</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last Updated</p>
                <p className="font-semibold">Jan 20, 2024</p>
              </div>
              <div>
                <p className="text-muted-foreground">Uptime</p>
                <p className="font-semibold">99.9%</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <Label>Storage Usage</Label>
                <span className="text-sm text-muted-foreground">2.4 GB / 10 GB</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '24%' }}></div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Label>Recent Backups</Label>
              <div className="mt-2 space-y-1 text-sm">
                <p className="flex justify-between">
                  <span>Daily Backup</span>
                  <span className="text-muted-foreground">Jan 22, 03:00 AM</span>
                </p>
                <p className="flex justify-between">
                  <span>Weekly Backup</span>
                  <span className="text-muted-foreground">Jan 21, 02:00 AM</span>
                </p>
                <p className="flex justify-between">
                  <span>Monthly Backup</span>
                  <span className="text-muted-foreground">Jan 1, 01:00 AM</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="btn-primary">
          <Save className="h-4 w-4 mr-2" />
          Save All Changes
        </Button>
      </div>
    </div>
  );
}