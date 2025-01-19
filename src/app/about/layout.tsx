export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section>
        {/* Shared layout elements, like a header */}
        {children}
      </section>
    );
  }
  