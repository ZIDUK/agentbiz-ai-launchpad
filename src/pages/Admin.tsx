import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Navigate, Routes, Route } from "react-router-dom";
import { ApplicationsManagement } from "@/components/admin/ApplicationsManagement";
import { LeadsManagement } from "@/components/admin/LeadsManagement";
import { Dashboard } from "@/components/admin/Dashboard";
import { Settings } from "@/components/admin/Settings";
import ProtectedRoute from "@/components/ProtectedRoute";

const Admin = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <ProtectedRoute>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <AdminHeader />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<Navigate to="/admin/applications" replace />} />
                <Route path="/applications" element={<ApplicationsManagement />} />
                <Route path="/leads" element={<LeadsManagement />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
};

export default Admin;