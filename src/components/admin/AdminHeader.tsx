import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export function AdminHeader() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
          <Badge variant="secondary" className="text-xs">Live</Badge>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-500">
            3
          </Badge>
        </Button>
        
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.user_metadata?.avatar_url || "/placeholder-avatar.jpg"} />
            <AvatarFallback>
              {user?.user_metadata?.full_name?.charAt(0) || user?.email?.charAt(0) || "A"}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-foreground">
              {user?.user_metadata?.full_name || "Admin"}
            </p>
            <p className="text-xs text-muted-foreground">
              {user?.email || "admin@agentbiz.ai"}
            </p>
          </div>
        </div>
        
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}