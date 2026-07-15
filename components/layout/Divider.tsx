export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-px relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />
    </div>
  );
}
