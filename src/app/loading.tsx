export default function Loading() {
  return (
    <div className="min-h-screen bg-foundation flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-10 h-10 rounded-full border-2 border-gold/20 border-t-gold animate-spin" />
        <p className="text-cream-muted text-xs tracking-[0.2em] uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
