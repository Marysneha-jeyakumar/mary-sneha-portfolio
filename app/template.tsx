// Re-mounts on every navigation, so the CSS entrance animation replays per page.
// Pure CSS: content is visible without waiting for JavaScript.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
