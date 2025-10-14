import AppSidebar from "../_components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "../_components/ui/sidebar";

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-accent/30">{children}</SidebarInset>
    </SidebarProvider>
  );
};

export default LayoutDashboard;
