export default function ContactParticleFieldBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#43becc 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
