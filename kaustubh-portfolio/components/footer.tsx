export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-sm flex-col items-center justify-between gap-1 font-mono text-xl text-muted sm:flex-row">
         <span>Built with <span className="text-red-500">♥</span> By</span>
         <span>kaustubh     © {new Date().getFullYear()} </span>
        
      </div>
    </footer>
  );
}