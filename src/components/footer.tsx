export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Sharath Kumar A. All rights reserved.</p>
      </div>
    </footer>
  );
}
