import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <p className="font-mono text-primary">404</p>
      <h1 className="text-2xl font-medium text-foreground">Page not found</h1>
      <Link to="/" className="font-mono text-sm text-muted-foreground underline hover:text-primary">
        Back to home
      </Link>
    </div>
  );
}
