export default function AboutBackgroundDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div
        className="sticky top-0 h-screen w-full opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#43becc 1px, transparent 1px), linear-gradient(90deg, #43becc 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
