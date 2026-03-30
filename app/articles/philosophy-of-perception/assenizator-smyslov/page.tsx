import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ассенизатор смыслов | Philosophy of Perception",
  description:
    "Русскоязычные эссе о морали, искажениях восприятия, псевдоэкспертизе и внутренних перекосах, влияющих на решения, мышление и восприятие реальности.",
  keywords: [
    "Ассенизатор смыслов",
    "философские статьи",
    "искажение восприятия",
    "псевдоэксперты",
    "геополитика в соцсетях",
    "критическое мышление",
    "русскоязычные эссе",
    "Philosophy of Perception",
    "Anna K",
  ],
  openGraph: {
    title: "Ассенизатор смыслов | Philosophy of Perception",
    description:
      "Эссе о морали, искажениях восприятия, псевдоэкспертизе и мышлении как инструменте различения реальности.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ассенизатор смыслов | Philosophy of Perception",
    description:
      "Эссе о восприятии, мышлении и искажениях, влияющих на решения и реальность.",
  },
  alternates: {
    canonical: "/articles/philosophy-of-perception/assenizator-smyslov",
  },
};

export default function AssenizatorSmyslovPage() {
  return (
    <main
      style={{
        background: "#F7F5F1",
        minHeight: "100vh",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ marginBottom: "56px" }}>
          <div style={eyebrow}>Philosophy of Perception</div>

          <h1 style={h1}>Ассенизатор смыслов</h1>

          <p style={description}>
            Русскоязычные эссе о морали, внутренних перекосах,
            псевдоэкспертизе и тех невидимых конструкциях, через которые человек
            интерпретирует реальность.
          </p>
        </div>

        {/* CARDS */}
        <div style={{ display: "grid", gap: "20px" }}>

          {/* NEW ARTICLE */}

          <Link
  href="/articles/philosophy-of-perception/assenizator-smyslov/smysl-voin"
  style={{ textDecoration: "none" }}
>
  <div style={card}>
    <h2 style={title}>
      Смысл войн — или простые истины, которые мы продолжаем забывать
    </h2>

    <p style={text}>
      О природе войны, человеческом конфликте и том, почему насилие — это не решение,
      а симптом внутреннего распада и искажённого восприятия.
    </p>
  </div>
</Link>

          <Link
            href="/articles/philosophy-of-perception/assenizator-smyslov/divannye-geopolitiki"
            style={{ textDecoration: "none" }}
          >
            <div style={card}>
              <h2 style={title}>
                Диванные геополитики, блогеры будущего и цирк публичного бреда
              </h2>

              <p style={text}>
                О псевдоэкспертизе, геополитике в соцсетях, страхе быть никем и
                мышлении как единственном инструменте различения реальности.
              </p>
            </div>
          </Link>

          {/* EXISTING ARTICLE */}
          <Link
            href="/articles/philosophy-of-perception/assenizator-smyslov/spasiteli-mirov"
            style={{ textDecoration: "none" }}
          >
            <div style={card}>
              <h2 style={title}>Спасатели миров</h2>

              <p style={text}>
                О мании спасения, внутреннем перекосе и том, как желание
                «исправить мир» становится формой бегства от себя — и начинает
                искажать решения, включая бизнес и капитал.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}

/* styles */

const eyebrow = {
  fontSize: "12px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#5C5A55",
  marginBottom: "14px",
};

const h1 = {
  fontSize: "56px",
  margin: 0,
  color: "#1F1F1C",
  fontFamily: "Cormorant Garamond, serif",
  fontWeight: 300,
  lineHeight: 1.1,
};

const description = {
  marginTop: "18px",
  color: "#5C5A55",
  fontSize: "18px",
  lineHeight: 1.75,
  maxWidth: "760px",
};

const card = {
  padding: "28px",
  border: "1px solid #D8D3C8",
  borderRadius: "18px",
  background: "#FFFFFF",
  transition: "all 0.2s ease",
};

const title = {
  fontSize: "30px",
  margin: "0 0 12px 0",
  color: "#1F1F1C",
  fontFamily: "Cormorant Garamond, serif",
  fontWeight: 300,
  lineHeight: 1.2,
};

const text = {
  margin: 0,
  color: "#5C5A55",
  fontSize: "16px",
  lineHeight: 1.75,
};

const readMore = {
  marginTop: "16px",
  fontSize: "14px",
  color: "#1F1F1C",
};