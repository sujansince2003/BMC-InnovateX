function Dots({ className }: Readonly<{ className: string }>) {
  return <div className={`h-1.5 w-1.5 rounded-full bg-white ${className}`} />;
}

function LeftDots() {
  return (
    <div className="grid w-10 grid-cols-3 gap-x-5 gap-y-3">
      {Array.from({ length: 18 }).map((_, index) => (
        <Dots key={index} className="transition-opacity opacity-100" />
      ))}
    </div>
  );
}

function RightDots() {
  return (
    <div className="grid w-10 grid-cols-5 gap-x-6 gap-y-3">
      {Array.from({ length: 18 }).map((_, index) => (
        <Dots key={index} className="transition-opacity opacity-100" />
      ))}
    </div>
  );
}

export { LeftDots, RightDots };
