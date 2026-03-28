export function ThaiStripe({ className }: { className?: string }) {
  return (
    <div className={`flex w-full ${className ?? ""}`}>
      <div className="h-2 flex-1 bg-thai-red" />
      <div className="h-2 flex-1 bg-white" />
      <div className="h-2 flex-1 bg-thai-navy" />
    </div>
  );
}
