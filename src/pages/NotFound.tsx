
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      {/* Background gradient blobs */}
      <div className="gradient-blob bg-blue-400 w-[300px] h-[300px] -left-20 top-1/3"></div>
      <div className="gradient-blob bg-purple-500 w-[250px] h-[250px] right-0 top-1/4"></div>
      <div className="blur-overlay"></div>
      
      <div className="text-center px-4 glass-card rounded-lg p-10 max-w-md mx-auto">
        <h1 className="text-6xl font-bold font-display mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild className="rounded-full">
          <a href="/">
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
