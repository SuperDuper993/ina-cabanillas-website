import { BRAND, EVENTS, AWARDS, PRESS_ARTICLES } from "@/lib/constants";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: BRAND.fullName,
  alternateName: BRAND.name,
  description: BRAND.description,
  url: "https://www.inacabanillas.com",
  image: "https://static.wixstatic.com/media/c4e6cf_14bc54b26dfc45a7837d3fd895a2d242~mv2.jpg",
  jobTitle: "Foredragsholder, forfatter og gründer",
  nationality: {
    "@type": "Country",
    name: "Norway",
  },
  birthPlace: {
    "@type": "Place",
    name: "Bodø, Norge",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "BI Handelshøyskolen",
    },
    {
      "@type": "EducationalOrganization",
      name: "UC Berkeley Haas School of Business",
    },
  ],
  affiliation: {
    "@type": "Organization",
    name: "StudyBuddies",
    url: BRAND.studybuddies,
  },
  worksFor: {
    "@type": "Organization",
    name: "StudyBuddies",
    url: BRAND.studybuddies,
  },
  award: AWARDS.map((a) => `${a.name} (${a.year}) — ${a.description}`),
  knowsAbout: [
    "Gen Z",
    "ledelse",
    "tilhørighet",
    "rekruttering",
    "arbeidsliv",
    "HR",
    "inkludering",
    "mangfold",
    "studenthelse",
    "gründerskap",
    "kunstig intelligens og arbeidsliv",
    "generasjonsledelse",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Foredragsholder",
    occupationLocation: {
      "@type": "Country",
      name: "Norway",
    },
    description: "Profesjonell foredragsholder om Gen Z, tilhørighet og ledelse",
  },
  performerIn: EVENTS.map((e) => ({
    "@type": "Event",
    name: e.name,
    startDate: e.year,
    description: e.description,
    ...(e.url ? { url: e.url } : {}),
  })),
  sameAs: [
    BRAND.linkedin,
    BRAND.instagram,
    BRAND.tiktok,
  ],
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Hvordan forstå og lede Gen Z",
  author: {
    "@type": "Person",
    name: BRAND.fullName,
    url: "https://www.inacabanillas.com",
  },
  datePublished: "2025",
  inLanguage: "nb",
  isbn: "9788230369708",
  genre: "Business",
  description: "En praktisk bok om hvordan ledere kan forstå, tiltrekke og beholde Gen Z-ansatte. Med innsikt, forskning og konkrete verktøy.",
  url: BRAND.arkBook,
  offers: [
    {
      "@type": "Offer",
      url: BRAND.vippsLink,
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      url: BRAND.arkBook,
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
    },
  ],
};

const pressItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Presseomtale — Ina Cabanillas Hansen",
  description: "Artikler og medieomtale av Ina Cabanillas Hansen",
  itemListElement: PRESS_ARTICLES.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Article",
      name: article.title,
      url: article.url,
      datePublished: article.date,
      publisher: {
        "@type": "Organization",
        name: article.source,
      },
      about: {
        "@type": "Person",
        name: BRAND.fullName,
      },
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvem er Ina Cabanillas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ina Cabanillas Hansen er en Gen Z-foredragsholder, forfatter og gründer fra Bodø, Norge. Hun er kjent for å hjelpe ledere og organisasjoner med å forstå, tiltrekke og beholde unge talenter. Hun er grunnlegger av StudyBuddies og forfatter av boken «Hvordan forstå og lede Gen Z» (2025). Hun har vunnet prisen Årets unge inspirasjon (2025) og er kåret til LinkedIn Topp 200 Voices innen inkludering og mangfold.",
      },
    },
    {
      "@type": "Question",
      name: "Hva snakker Ina Cabanillas om?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ina Cabanillas Hansen holder foredrag om Gen Z og ledelse, rekruttering og medarbeiderretensjonen, tilhørighet i en teknologidrevet verden, og skreddersydde temaer tilpasset organisasjonens utfordringer. Hennes mest bookede foredrag er «Gen Z og ledelse: Hva unge faktisk trenger for å bli», der hun gir konkrete verktøy til ledere basert på forskning og egne erfaringer.",
      },
    },
    {
      "@type": "Question",
      name: "Hvordan booker man Ina Cabanillas som foredragsholder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du kan booke Ina Cabanillas Hansen som foredragsholder ved å fylle ut kontaktskjemaet på https://www.inacabanillas.com/#kontakt. Hun holder foredrag på konferanser, fagdager, kick-offer, ledermøter og HR-arrangementer. Ina holder foredrag på norsk og engelsk.",
      },
    },
    {
      "@type": "Question",
      name: "Hva er StudyBuddies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "StudyBuddies er en startup grunnlagt av Ina Cabanillas Hansen som kobler sammen studenter for å motvirke ensomhet og frafall i høyere utdanning. Plattformen hjelper studenter med å finne medstudenter å samarbeide med, noe som forbedrer både faglige resultater og psykisk helse. StudyBuddies er tilgjengelig på studybuddies.no.",
      },
    },
    {
      "@type": "Question",
      name: "Hvilke priser har Ina Cabanillas vunnet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ina Cabanillas Hansen har vunnet følgende priser: Årets unge inspirasjon (2025) — nasjonal pris for inkludering, fellesskap og studenters psykiske helse; LinkedIn Topp 200 Voices (2025) — globalt anerkjent innen inkludering og mangfold; og var nominert til Årets kvinnelige gründer i Vestland (2024).",
      },
    },
    {
      "@type": "Question",
      name: "Where can I book Ina Cabanillas as a speaker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ina Cabanillas Hansen is available for speaking engagements worldwide. She speaks in both Norwegian and English on topics including Gen Z leadership, workplace belonging, recruitment, and AI in the workplace. To book her, visit https://www.inacabanillas.com/#kontakt or reach out via LinkedIn at https://www.linkedin.com/in/ina-cabanillas/. She has spoken at Arendalsuka, SHE Conference, Katapult Future Fest, WOW-konferansen, and many corporate events.",
      },
    },
  ],
};

const speakingEventSchemas = EVENTS.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description: event.description,
  startDate: event.year,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  performer: {
    "@type": "Person",
    name: BRAND.fullName,
    url: "https://www.inacabanillas.com",
    jobTitle: "Foredragsholder",
  },
  ...(event.url ? { url: event.url } : {}),
}));

const combinedSchema = [personSchema, bookSchema, pressItemList, faqSchema, ...speakingEventSchemas];

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
    />
  );
}
