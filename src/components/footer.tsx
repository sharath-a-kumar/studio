export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Sharath Kumar A. Built with Next.js, Tailwind & Three.js.</p>
      </div>
    </footer>
  );
}
