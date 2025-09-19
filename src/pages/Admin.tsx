import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "@/components/admin/Dashboard";
import { CandidateManagement } from "@/components/admin/CandidateManagement";
import { LeadsManagement } from "@/components/admin/LeadsManagement";
import { Analytics } from "@/components/admin/Analytics";
import { Settings } from "@/components/admin/Settings";

const Admin = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/candidates" element={<CandidateManagement />} />
              <Route path="/leads" element={<LeadsManagement />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Admin;