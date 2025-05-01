export function ConnectedChain() {
  return (
    <svg viewBox="0 0 45 90" fillOpacity={0} strokeWidth={3}>
      <path d="M7 5 l10 0 q5 0 5 5 l0 20" />
      <path d="M22 60 l0 20 q0 5 -5 5 l-15 0" />
      <path d="M12 45 l0 -20 q0 -5 5 -5 l10 0 q5 0 5 5 l0 20" />
      <path d="M32 45 l0 20 q0 5 -5 5 l-10 0 q-5 0 -5 -5 l0 -20" />
    </svg>
  );
}

export function BrokenChain() {
  return (
    <svg viewBox="0 0 45 90" fillOpacity={0} strokeWidth={3}>
      <path d="M7 5 l10 0 q5 0 5 5 l0 20" />
      <path d="M22 60 l0 20 q0 5 -5 5 l-15 0" />
      <path d="M12 40 l0 -15 q0 -5 5 -5 l10 0 q5 0 5 5 l0 15" />
      <path d="M32 50 l0 15 q0 5 -5 5 l-10 0 q-5 0 -5 -5 l0 -15" />
      <path d="M5 40 l-5 -5" />
      <path d="M5 50 l-5 5" />
      <path d="M39 40 l5 -5" />
      <path d="M39 50 l5 5" />
    </svg>
  );
}
