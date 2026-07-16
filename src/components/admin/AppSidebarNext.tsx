"use client";

import {
  Settings as SettingsIcon,
  Home,
  Briefcase,
  Users,
  Kanban,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "CRM", url: "/admin/crm", icon: Kanban },
  { title: "Hojas de vida", url: "/admin/applications", icon: Briefcase },
  { title: "Leads", url: "/admin/leads", icon: Users },
  { title: "Dashboard", url: "/admin/dashboard", icon: Home },
  { title: "Settings", url: "/admin/settings", icon: SettingsIcon },
];

export function AppSidebarNext() {
  const { state } = useSidebar();
  const pathname = usePathname();
  const collapsed = state === "collapsed";

  const isActive = (item: (typeof items)[0]) => {
    if (!pathname) return false;
    if (item.url === "/admin/dashboard") {
      return pathname === item.url;
    }
    return pathname.startsWith(item.url);
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2">
            <span className="text-lg font-bold">
              Agent<span className="gradient-text">Biz</span>
            </span>
            {!collapsed && (
              <span className="text-xs text-muted-foreground ml-2">Admin</span>
            )}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const IconComponent = item.icon;
                const active = isActive(item);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                          active
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted/50 text-foreground"
                        }`}
                      >
                        <IconComponent className="h-4 w-4 flex-shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors hover:bg-muted/50 text-muted-foreground"
                  >
                    <Home className="h-4 w-4 flex-shrink-0" />
                    {!collapsed && <span>Back to Site</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
