import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/advisory", label: "Advisory" },
  { href: "/decision-architecture", label: "Decision Architecture" },
  { href: "/intellectual-architecture", label: "Intellectual Architecture" },
  { href: "/my-story", label: "My Story" },
  { href: "/publications", label: "Publications" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header
      style={{
        width: "100%",
        borderBottom: "1px solid var(--border)",
        background: "rgba(12,12,14,0.86)",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" className="h-font" style={{ fontSize: "18px" }}>
          Anna P. Kovalerskaya
        </Link>

        <nav
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-outline" style={{ fontSize: "13px" }}>
          Request a Private Consultation →
        </Link>
      </div>
    </header>
  );
}