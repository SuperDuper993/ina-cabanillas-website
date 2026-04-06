// ===== INA CABANILLAS — BRAND CONSTANTS =====

export const BRAND = {
  name: "Ina Cabanillas",
  fullName: "Ina Cabanillas Hansen",
  tagline: "Tilhørighet er konkurransefortrinnet dere mangler",
  description: "Gen Z-er, foredragsholder, forfatter og gründer. Jeg hjelper ledere med å forstå, beholde og utvikle unge talent gjennom innsikt, forskning og teknologi.",
  email: "cabanillas1401@gmail.com", // NOT displayed publicly
  vippsLink: "https://betal.vipps.no/12ku4f",
  linkedin: "https://www.linkedin.com/in/ina-cabanillas/",
  instagram: "https://www.instagram.com/ina_cabanillas/",
  tiktok: "https://www.tiktok.com/@inacabanillas",
  talerlisten: "https://www.talerlisten.no",
  studybuddies: "https://www.studybuddies.no",
  presskit: "https://www.dropbox.com/scl/fo/uvxr5h4jvl582dlwoxls4/AFD02JdPXolUvCIpFDlxFmg?rlkey=jvldxtbxl8m345vv7q6u7h169&st=y65owf19&dl=0",
  arkBook: "https://www.ark.no/produkt/boker/fagboker/hvordan-forsta-og-lede-gen-z-9788230369708",
} as const;

export const IMAGES = {
  hero: "https://static.wixstatic.com/media/c4e6cf_978f0f6e700a47e39f31373d8fe9dd4a~mv2.jpg",
  scene: "https://static.wixstatic.com/media/c4e6cf_bd071f59268f417ca2479eb1f3418a43~mv2.jpg",
  bookPortrait: "https://static.wixstatic.com/media/c4e6cf_a7f8a78450b74172a792d41f58323cc8~mv2.jpg",
  portrait: "https://static.wixstatic.com/media/c4e6cf_14bc54b26dfc45a7837d3fd895a2d242~mv2.jpg",
  video: "https://video.wixstatic.com/video/c4e6cf_13471530aee84b40bc2283246ad67926/file",
} as const;

export const LOGOS = [
  "NAV", "Politiet", "Falck", "UiO", "WOW-konferansen",
  "SHE Conference", "Arendalsuka", "Lastebilforbundet", "Debatten NRK", "BISO",
];

export const STATS = [
  { value: "1 av 3", label: "Gen Z planlegger å bytte jobb innen 6 måneder", source: "TriNet, 2025" },
  { value: "0.5-2x", label: "årslønn er kostnaden per tapt ansatt", source: "Gallup / SHRM" },
  { value: "65%", label: "av Gen Z slutter innen 12 måneder", source: "Randstad, 2025" },
];

export const TALKS = [
  {
    tag: "Mest booket",
    tagVariant: "primary" as const,
    title: "Gen Z og ledelse: Hva unge faktisk trenger for å bli",
    description: "Hvordan Gen Z tenker, jobber og motiveres. Konkrete verktøy du kan bruke med én gang.",
  },
  {
    tag: "Nytt",
    tagVariant: "soft" as const,
    title: "Tiltrekk og behold: Rekruttering som faktisk fungerer",
    description: "Hva unge faktisk ser etter i en arbeidsgiver, og hva som får dem til å bli.",
  },
  {
    tag: "Keynote",
    tagVariant: "primary" as const,
    title: "Tilhørighet i en teknologidrevet verden",
    description: "Samspillet mellom mennesker og AI, og hvorfor tilhørighet blir viktigere jo mer teknologi vi tar i bruk.",
  },
  {
    tag: "Skreddersydd",
    tagVariant: "soft" as const,
    title: "Ditt tema, Inas perspektiv",
    description: "Tilpasset foredrag basert på din organisasjons utfordringer. Ta kontakt for å diskutere.",
  },
];

export const TESTIMONIALS_TALERLISTEN = [
  {
    stars: 6,
    quote: "Traff oss midt i hjertet. Hun ga oss nye perspektiver, og knuste elegant noen seiglivede myter om Z-generasjonen. Hun klarte å bygge bro mellom generasjonene uten å peke finger.",
    highlight: "Hun klarte å bygge bro mellom generasjonene uten å peke finger.",
    author: "Eva Finseth",
    org: "IMA Norway",
    date: "Nov 2025",
  },
  {
    stars: 6,
    quote: "Meget godt foredrag, tydelig og profesjonell på scenen, og evnet å engasjere publikum. Humor, samtidig som hun turte å sette fingeren på viktige problemstillinger. Veldig mange positive tilbakemeldinger.",
    highlight: "Humor, samtidig som hun turte å sette fingeren på viktige problemstillinger.",
    author: "Hege Karina Thoresen",
    org: "Mosjøen Næringsforening",
    date: "Feb 2026",
  },
  {
    stars: 6,
    quote: "Engasjerende og levende foredrag om Gen Z. Humor, klare eksempler og energi. Publikum ble inspirert til å tenke nytt og fikk konkrete ideer. Ina var nysgjerrig, positiv og veldig fin å samarbeide med.",
    highlight: "Humor, klare eksempler og energi.",
    author: "Håkon Wåge-Lorentzen",
    org: "Ophelix Scandinavia",
    date: "Nov 2025",
  },
  {
    stars: 6,
    quote: "Communicates her knowledge, experiences and reflections in such a way that makes listening to her very enjoyable and inspirational. She speaks with enthusiasm and conviction.",
    highlight: "makes listening to her very enjoyable and inspirational.",
    author: "Mikael Heian Frølandshagen",
    org: "KANDU",
    date: "Des 2025",
  },
  {
    stars: 6,
    quote: "Munter og fin fremføring av viktige temaer. Treffer meget bra på innholdet og får lett engasjerte deltagere. Flere ble såpass engasjert at hun fikk spørsmål etter foredraget.",
    highlight: "Treffer meget bra på innholdet",
    author: "Espen Framvik",
    org: "Negotia Øst",
    date: "Okt 2025",
  },
  {
    stars: 6,
    quote: "An inspiring speaker whose message resonates and leads to concrete action. Highly recommended!",
    highlight: "An inspiring speaker whose message resonates and leads to concrete action.",
    author: "Astrid Rønning Skaugseth",
    org: "Stiftelsen Sykehusbarn",
    date: "Des 2025",
  },
  {
    stars: 6,
    quote: "Ina formidler med energi, rett fra hjertet og med en ærlighet som treffer. Hun deler raust av egne erfaringer og gir verdifull innsikt i hva det faktisk krever å bygge sine egne merkevarer og tørre å satse.",
    highlight: "formidler med energi, rett fra hjertet og med en ærlighet som treffer.",
    author: "Vilde Regine Tellnes",
    org: "Founder / TEDx Speaker",
    date: "Jun 2025",
  },
];

export const RECOMMENDATIONS_LINKEDIN = [
  {
    quote: "Jeg har holdt foredrag selv i 5 år og vært på masse konferanser, og må si dette er noe av det beste jeg har sett. Konkret. Engasjerende. Rett og slett dritbra.",
    highlight: "dette er noe av det beste jeg har sett.",
    author: "Kimiya Sajjadi",
    role: "Mangfold og inkludering",
  },
  {
    quote: "Ina tok tak i alt som sies om Gen Z, og knuste noen myter med humor og selvinnsikt. Hun mestrer alle formater: foredrag, podcast og TV.",
    highlight: "knuste noen myter med humor og selvinnsikt.",
    author: "Vigdis Austrheim",
    role: "Lederutvikler",
  },
  {
    quote: "Ina-Christine stood out in my Experiential Entrepreneurship course at UC Berkeley as an exceptionally driven and creative individual. As CEO of her team, she led them to deliver the top-rated presentation to a panel of investors.",
    highlight: "exceptionally driven and creative individual.",
    author: "Naeem Zafar",
    role: "CEO Coach, UC Berkeley Professor",
  },
  {
    quote: "Ina kombinerer ydmykhet med en vilje til å lære. Hennes evne til å validere både problemet og behovet for løsningen i markedet er imponerende. Målbevissthet og evne til å levere resultater.",
    highlight: "Målbevissthet og evne til å levere resultater.",
    author: "Nikolai Nordbotn",
    role: "Co-founder & CEO, Rockslice",
  },
  {
    quote: "Det er ikke ofte jeg møter personer med så enormt mye driv og styrke som Ina. Hun tar enhver utfordring på strak arm og finner alltid ut av ting. Hun legger alltid vekt på at alle skal føle seg inkludert, sett og hørt.",
    highlight: "alle skal føle seg inkludert, sett og hørt.",
    author: "Sara Nielsen",
    role: "Tender Engineer, Beerenberg",
  },
];

export const PRESS_ARTICLES = [
  { title: "Alder har ingen ting å si", source: "HR-magasinet", date: "Mar 2026", url: "https://www.hrmagasinet.no/gen-z-ina-cabanillas-hansen/alder-har-ingen-ting-a-si/1514220" },
  { title: "Går ut mot DNB- og NHO-topper: Jeg søkte 560 jobber", source: "kode24", date: "Jan 2026", url: "https://www.kode24.no/artikkel/gar-ut-mot-dnb-og-nho-topper-jeg-sokte-560-jobber/252821" },
  { title: "Kaller KI til rekruttering et «HR-mareritt»", source: "kode24", date: "Des 2025", url: "https://www.kode24.no/artikkel/kaller-ki-til-rekruttering-et-hr-mareritt/252094" },
  { title: "Er de late? Gen Z slår tilbake mot fordommene", source: "Dagsavisen", date: "Nov 2025", url: "https://www.dagsavisen.no/nyheter/er-de-late-gen-z-slar-tilbake-mot-fordommene/10051370" },
  { title: "Er Gen Z late og krevende? Ny bok mener svaret ligger i ledelsen", source: "Kom24", date: "Nov 2025", url: "https://www.kom24.no/arbeidsliv-bokutgivelse-gen-z/er-gen-z-late-og-krevende/871275" },
  { title: "Hvordan skal det gå når generasjon Z tar over?", source: "forskning.no", date: "Aug 2025", url: "https://www.forskning.no/arbeid-arbeidsliv-barn-og-ungdom/hvordan-skal-det-ga-nar-generasjon-z-tar-over/2541276" },
  { title: "Slik brukte Ina KI i søknaden og landet jobben", source: "NRK", date: "2025", url: "https://www.nrk.no/norge/slik-brukte-ina-ki-i-soknaden-_-og-landet-jobben-1.17719501" },
  { title: "Ina (24) følte seg uønsket: Hadde ingen å prate med", source: "Drammens Tidende", date: "Mai 2025", url: "https://www.dt.no/ina-24-folte-seg-uonsket-hadde-ingen-a-prate-med/f/5-57-2624242" },
  { title: "Viktig pris til 24-åring fra Bodø", source: "NRK Nordland", date: "Mai 2025", url: "https://www.nrk.no/nordland/viktig-pris-til-24-aring-fra-bodo-1.17401311" },
  { title: "Ina (24) ble «Årets unge inspirasjon»", source: "Lofotposten", date: "Mai 2025", url: "https://www.lofotposten.no/ina-24-ble-arets-unge-inspirasjon/s/5-29-1183113" },
  { title: "Ina følte seg ensom og var nær å droppe ut", source: "Bodø Nu", date: "2024", url: "https://www.bodonu.no/ina-21-folte-seg-ensom-og-var-nar-a-droppe-ut-sa-fant-hun-losningen-som-kan-hjelpe-tusenvis-av-andre-studenter-unner-ingen-a-sta-i-samme-situasjon/s/5-159-101495" },
  { title: "Student vant nasjonal inspirasjonspris", source: "Khrono", date: "2025", url: "https://www.khrono.no/notice/965206" },
  { title: "Ina strøk fordi hun ikke fant noen å skrive oppgave med", source: "Khrono", date: "2024", url: "https://www.khrono.no/ina-strok-fordi-hun-ikke-fant-noen-a-skrive-oppgave-med-na-vil-hun-hjelpe-andre/902461" },
];

export const PODCASTS = [
  { title: "Mangfoldsmikrofonen", episode: "Hvordan forstå og lede Gen Z?", date: "Apr 2026", url: "https://open.spotify.com/episode/13xjqN9YM4JqYgQh4TX9Pw" },
  { title: "Enda Bedre", episode: "Hva er galt med Gen Z?", date: "Apr 2026", url: "https://open.spotify.com/episode/3rZ1NOHsF761v3xDsJQWgY" },
  { title: "Teknologi og mennesker", episode: "Vi knuser 10 myter om generasjon Z", date: "Feb 2025", url: "https://open.spotify.com/episode/0lqLhI8aLvz5DursZ32Ax9" },
  { title: "Teknologi og mennesker", episode: "Live fra Arendalsuka", date: "2024", url: "https://podtail.com/en/podcast/teknologi-av-og-for-mennesker/-56-live-fra-arendalsuka-slik-rigger-du-for-fart-o/" },
];

export const EVENTS = [
  { year: "2026", name: "WOW-konferansen", description: "Talerlisten presenterer. Foredrag om Gen Z og ledelse" },
  { year: "2025", name: "Katapult Future Fest", description: "Speaker, innovasjon og sosial endring", url: "https://katapultfuturefest.com/voices/ina-cabanillas-hansen" },
  { year: "2025", name: "Arendalsuka", description: "Hovedprogrammet. Debatt og foredrag" },
  { year: "2025", name: "SHE Conference", description: "Ledelse og inkludering" },
];

export const AWARDS = [
  { year: "2025", name: "Årets unge inspirasjon", description: "Nasjonal pris for inkludering, fellesskap og studenters psykiske helse" },
  { year: "2025", name: "LinkedIn Topp 200 Voices", description: "Inkludering og mangfold, globalt" },
  { year: "2024", name: "Nominert Årets kvinnelige gründer", description: "Vestland" },
];
