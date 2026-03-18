// Import the Locale type so dictionary access stays type-safe.
import type { Locale } from "@/lib/i18n";

// Translation dictionaries for German and English.
// All visible homepage, navigation, and footer text used so far
// is stored here so sections can render by locale.
export const dictionaries = {
  de: {
    nav: {
      services: "Leistungen",
      projects: "Projekte",
      blog: "Blog",
      about: "Über uns",
      contact: "Kontakt",
      requestQuote: "Angebot anfragen",
      menu: "Menü",
    },

    footer: {
      description:
        "Renovierung, Einrichtung und Raumverbesserung mit einem praktischen und professionellen Ansatz.",
      navigation: "Navigation",
      contact: "Kontakt",
      area: "Berlin und Umgebung",
      rights: "Alle Rechte vorbehalten.",
    },

    home: {
      // Hero section
      heroTag: "Renovierung & Einrichtung",
      heroTitle:
        "Saubere, verlässliche Räume mit Klarheit und Qualität gestaltet.",
      heroText:
        "Wir unterstützen Privat- und Geschäftskunden bei Renovierung, Einrichtung und Raumverbesserung mit einem strukturierten und professionellen Ansatz.",
      ctaPrimary: "Angebot anfragen",
      ctaSecondary: "Projekte ansehen",

      // Services overview section
      servicesTag: "Leistungen",
      servicesTitle: "Wobei wir Kundinnen und Kunden unterstützen",
      servicesText:
        "Unsere Leistungen sind darauf ausgelegt, Privat- und Geschäftskunden bei praktischer und hochwertiger Raumverbesserung zu unterstützen.",
      servicesItems: [
        {
          title: "Renovierung",
          description:
            "Funktionale und ästhetische Renovierungslösungen für Wohn- und Geschäftsräume.",
        },
        {
          title: "Einrichtung",
          description:
            "Durchdachte Einrichtungslösungen für mehr Komfort, Nutzung und Wirkung im Raum.",
        },
        {
          title: "Innenraum-Upgrades",
          description:
            "Gezielte Verbesserungen, die bestehende Räume sauberer, stärker und hochwertiger wirken lassen.",
        },
        {
          title: "Gewerbeprojekte",
          description:
            "Strukturierte Umsetzung für Unternehmen, die verlässliche Raumverbesserung und Unterstützung bei der Einrichtung benötigen.",
        },
      ],

      // Projects preview section
      projectsTag: "Projekte",
      projectsTitle: "Ausgewählte Arbeiten und sichtbare Veränderungen",
      projectsText:
        "Entdecken Sie eine Vorschau auf abgeschlossene Arbeiten, Renovierungsergebnisse und Vorher-Nachher-Veränderungen, die unseren Anspruch an Qualität und Umsetzung zeigen.",
      projectsCta: "Alle Projekte ansehen",
      projectsItems: [
        {
          title: "Wohnraum-Renovierung",
          description:
            "Eine moderne Aufwertung mit Fokus auf Komfort, Funktion und bessere Raumnutzung.",
          image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Vorher-Nachher-Veränderung",
          description:
            "Ein visueller Vergleich, der zeigt, wie gezielte Verbesserungen einen Raum deutlich verändern können.",
          image:
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Gewerbliche Aufwertung",
          description:
            "Ein strukturiertes Projekt zur Verbesserung von Präsentation, Nutzung und professioneller Wirkung.",
          image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        },
      ],

      // Process section
      processTag: "Ablauf",
      processTitle: "Wie der Prozess funktioniert",
      processText:
        "Ein klarer Ablauf hilft Kundinnen und Kunden zu verstehen, was sie erwartet, und sorgt dafür, dass jedes Projekt von Anfang bis Ende strukturierter verläuft.",
      processSteps: [
        {
          number: "01",
          title: "Anfrage senden",
          description:
            "Teilen Sie uns mit, worum es in Ihrem Raum geht, welche Anforderungen Sie haben und welche Verbesserung Sie erreichen möchten.",
        },
        {
          number: "02",
          title: "Beratung und Einschätzung",
          description:
            "Wir prüfen den Umfang, besprechen die passende Richtung und geben eine klare Einschätzung zum nächsten Schritt.",
        },
        {
          number: "03",
          title: "Planung und Umsetzung",
          description:
            "Sobald alles abgestimmt ist, wird die Arbeit strukturiert geplant und professionell umgesetzt.",
        },
        {
          number: "04",
          title: "Fertigstellung und Nachbetreuung",
          description:
            "Wir schließen die Arbeit mit Blick fürs Detail ab und stellen sicher, dass das Ergebnis den Erwartungen entspricht.",
        },
      ],

      // Final CTA section
      finalCtaTag: "Jetzt starten",
      finalCtaTitle: "Bereit, Ihren Raum zu verbessern?",
      finalCtaText:
        "Teilen Sie uns Ihr Projekt, Ihre Ziele und die gewünschte Unterstützung mit. Wir helfen Ihnen beim nächsten klaren Schritt.",
      finalCtaPrimary: "Angebot anfragen",
      finalCtaSecondary: "Kontakt",
    },
    pages: {
      services: {
        pageTag: "Leistungen",
        pageTitle:
          "Praktische Leistungen für sauberere, stärkere und bessere Räume",
        pageText:
          "Wir unterstützen Privat- und Geschäftskunden bei Renovierung, Einrichtung und gezielter Raumverbesserung mit Klarheit, Struktur und Fokus auf praktische Ergebnisse.",
        itemTag: "Leistung",
        ctaTag: "Lassen Sie uns sprechen",
        ctaTitle: "Benötigen Sie Hilfe bei der Wahl der richtigen Leistung?",
        ctaText:
          "Teilen Sie uns mit, welche Verbesserung Sie planen, und wir helfen Ihnen beim praktischsten nächsten Schritt.",
      },
      projects: {
        pageTag: "Projekte",
        pageTitle: "Ausgewählte Projekte und sichtbare Veränderungen",
        pageText:
          "Entdecken Sie eine Auswahl an Wohn-, Gewerbe- und Vorher-Nachher-Arbeiten, die unseren Anspruch an Qualität, Klarheit und Umsetzung zeigen.",
        extraItemTitle: "Innenraum-Auffrischung",
        extraItemDescription:
          "Gezielte Innenraumverbesserungen, die einen bestehenden Raum hochwertiger und funktionaler wirken lassen.",
        compareTag: "Vorher & Nachher",
        compareTitle: "Visuelle Veränderung macht den Unterschied",
        compareText:
          "Manche Projekte versteht man am besten durch die sichtbare Veränderung. Dieser Bereich kann später Vorher-Nachher-Slider, Raumvergleiche oder gebündelte Fallbeispiele enthalten.",
        beforeLabel: "Vorher",
        afterLabel: "Nachher",
        ctaTag: "Projekt starten",
        ctaTitle: "Möchten Sie einen Raum verbessern?",
        ctaText:
          "Teilen Sie uns mit, was Sie planen, und wir helfen Ihnen beim nächsten Schritt mit einem klaren und praktischen Ansatz.",
      },
      about: {
        pageTag: "Über uns",
        pageTitle: "Ein praktischer Ansatz für bessere Räume",
        pageText:
          "Wir unterstützen Privat- und Geschäftskunden bei Renovierung, Einrichtung und Raumverbesserung mit klarer Kommunikation, strukturierter Umsetzung und starkem Fokus auf Qualität.",
        sectionOneTitle: "Was wir tun",
        sectionOneText:
          "Unsere Arbeit konzentriert sich darauf, Räume funktionaler, hochwertiger und besser auf die Bedürfnisse der Menschen auszurichten, die sie nutzen. Ob Renovierung, Einrichtung oder gezielte Innenraumverbesserung – wir möchten praktische Ergebnisse mit einem professionellen Ablauf liefern.",
        sectionTwoTitle: "Mit wem wir arbeiten",
        sectionTwoText:
          "Wir arbeiten sowohl mit Privat- als auch mit Geschäftskunden. Manche Projekte erfordern gestalterische Verbesserung und Komfort, andere verlangen Struktur, Verlässlichkeit und professionelle Wirkung für kundennahe oder betriebliche Räume.",
        principlesTag: "Grundprinzipien",
        principles: [
          {
            title: "Klarheit",
            description:
              "Wir sind überzeugt, dass Kundinnen und Kunden den Prozess, den Umfang und den nächsten Schritt in jeder Phase verstehen sollten.",
          },
          {
            title: "Qualität",
            description:
              "Jede Verbesserung sollte bewusst, praktisch und hochwertig umgesetzt wirken.",
          },
          {
            title: "Verlässlichkeit",
            description:
              "Ein professioneller Service lebt von Beständigkeit, Kommunikation und strukturierter Umsetzung.",
          },
        ],
        ctaTag: "Lassen Sie uns sprechen",
        ctaTitle: "Suchen Sie den richtigen Partner für Ihren Raum?",
        ctaText:
          "Teilen Sie uns mit, was Sie verbessern möchten, und wir helfen Ihnen mit einer klaren und praktischen Richtung weiter.",
      },
      contact: {
        pageTag: "Kontakt",
        pageTitle: "Sprechen wir über Ihr Projekt",
        pageText:
          "Teilen Sie uns mit, welche Art von Raum Sie verbessern möchten, welche Unterstützung Sie benötigen und wie wir Ihnen beim nächsten Schritt helfen können.",
        directTag: "Direkter Kontakt",
        emailLabel: "E-Mail",
        phoneLabel: "Telefon",
        areaLabel: "Einsatzgebiet",
        areaText: "Berlin und Umgebung",
        formTag: "Anfrageformular",
        nameLabel: "Vollständiger Name",
        namePlaceholder: "Ihr Name",
        serviceLabel: "Benötigte Leistung",
        servicePlaceholder: "Leistung auswählen",
        messageLabel: "Projektdetails",
        messagePlaceholder: "Erzählen Sie uns etwas über Ihr Projekt",
        submit: "Anfrage senden",
      },
      // Blog page content
      blog: {
        pageTag: "Blog",
        pageTitle: "Einblicke, Ideen und Projektdenken",
        pageText:
          "Ein Bereich für hilfreiche Artikel, Renovierungshinweise, Einrichtungsideen und projektbezogene Einblicke, die Kundinnen und Kunden beim klareren Denken unterstützen.",
        readMore: "Mehr lesen",
        posts: [
          {
            title: "Wie man ein Renovierungsprojekt klarer plant",
            excerpt:
              "Ein praktischer Einstieg, um Erwartungen, Umfang und Entscheidungen vor dem Projekt besser zu strukturieren.",
          },
          {
            title:
              "Vorher und Nachher: warum der visuelle Vergleich wichtig ist",
            excerpt:
              "Veränderung wird leichter verständlich, wenn die Verbesserung klar und mit Kontext gezeigt wird.",
          },
          {
            title:
              "Einrichtungsentscheidungen, die Komfort und Wirkung verbessern",
            excerpt:
              "Gut geplante Einrichtung kann verändern, wie ein Raum wirkt, funktioniert und im Alltag erlebt wird.",
          },
        ],
      },
    },
  },

  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      requestQuote: "Request Quote",
      menu: "Menu",
    },

    footer: {
      description:
        "Renovation, furnishing, and space improvement with a practical and professional approach.",
      navigation: "Navigation",
      contact: "Contact",
      area: "Berlin and surrounding areas",
      rights: "All rights reserved.",
    },

    home: {
      // Hero section
      heroTag: "Renovation & Furnishing Services",
      heroTitle: "Clean, reliable spaces built with clarity and quality.",
      heroText:
        "We help private and business clients with renovation, furnishing, and space improvement through a structured and professional process.",
      ctaPrimary: "Request Quote",
      ctaSecondary: "View Projects",

      // Services overview section
      servicesTag: "Services",
      servicesTitle: "What we help clients with",
      servicesText:
        "Our services are designed to support both private and business clients with practical, high-quality space transformation.",
      servicesItems: [
        {
          title: "Renovation",
          description:
            "Functional and aesthetic renovation solutions for residential and commercial spaces.",
        },
        {
          title: "Furnishing",
          description:
            "Thoughtful furnishing support to improve comfort, usability, and presentation.",
        },
        {
          title: "Interior Upgrades",
          description:
            "Targeted improvements that make existing spaces feel cleaner, stronger, and more refined.",
        },
        {
          title: "Commercial Projects",
          description:
            "Structured execution for businesses that need reliable space improvement and setup support.",
        },
      ],

      // Projects preview section
      projectsTag: "Projects",
      projectsTitle: "Selected work and visual transformations",
      projectsText:
        "Explore a preview of completed work, renovation outcomes, and before-and-after transformations that reflect our approach to quality and execution.",
      projectsCta: "View All Projects",
      projectsItems: [
        {
          title: "Residential Renovation",
          description:
            "A clean, modern upgrade focused on comfort, function, and better use of space.",
          image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Before & After Transformation",
          description:
            "A visual comparison showing how targeted improvements can completely change a room.",
          image:
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Commercial Space Upgrade",
          description:
            "A structured improvement project designed for presentation, usability, and client-facing quality.",
          image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        },
      ],

      // Process section
      processTag: "Process",
      processTitle: "How the process works",
      processText:
        "A clear process helps clients understand what to expect and keeps every project more organized from start to finish.",
      processSteps: [
        {
          number: "01",
          title: "Send your request",
          description:
            "Tell us about your space, your needs, and the kind of improvement you want to make.",
        },
        {
          number: "02",
          title: "Consultation and estimate",
          description:
            "We review the scope, discuss the right direction, and provide a clear next-step estimate.",
        },
        {
          number: "03",
          title: "Planning and execution",
          description:
            "Once aligned, the work is organized and carried out with a structured, professional approach.",
        },
        {
          number: "04",
          title: "Delivery and follow-up",
          description:
            "We complete the work with attention to detail and make sure the final result meets expectations.",
        },
      ],

      // Final CTA section
      finalCtaTag: "Get Started",
      finalCtaTitle: "Ready to improve your space?",
      finalCtaText:
        "Tell us about your project, your goals, and the kind of support you need. We will help you take the next clear step.",
      finalCtaPrimary: "Request Quote",
      finalCtaSecondary: "Contact Us",
    },
    pages: {
      services: {
        pageTag: "Services",
        pageTitle:
          "Practical services for cleaner, stronger, and better spaces",
        pageText:
          "We support private and business clients with renovation, furnishing, and space improvement through clarity, structure, and practical results.",
        itemTag: "Service",
        ctaTag: "Let’s Discuss",
        ctaTitle: "Need help choosing the right service?",
        ctaText:
          "Tell us what kind of improvement you have in mind, and we can help you identify the most practical next step.",
      },

      projects: {
        pageTag: "Projects",
        pageTitle: "Selected projects and visual transformations",
        pageText:
          "Explore a selection of residential, commercial, and before-and-after work that reflects our approach to quality, clarity, and execution.",
        extraItemTitle: "Interior Refresh",
        extraItemDescription:
          "Focused interior improvements that make an existing space feel more refined and functional.",
        compareTag: "Before & After",
        compareTitle: "Visual comparison matters",
        compareText:
          "Some projects are best understood through transformation. This section can later hold before-and-after sliders, side-by-side room comparisons, or grouped renovation case studies.",
        beforeLabel: "Before",
        afterLabel: "After",
        ctaTag: "Start Your Project",
        ctaTitle: "Have a space you want to improve?",
        ctaText:
          "Tell us what you have in mind and we can help shape the next step with a clear and practical approach.",
      },
      about: {
        pageTag: "About",
        pageTitle: "A practical approach to better spaces",
        pageText:
          "We support private and business clients with renovation, furnishing, and space improvement through clear communication, structured execution, and a strong focus on quality.",
        sectionOneTitle: "What we do",
        sectionOneText:
          "Our work is centered around making spaces more functional, more refined, and better aligned with the needs of the people who use them. Whether the goal is renovation, furnishing, or targeted interior improvement, we aim to deliver practical results with a professional process.",
        sectionTwoTitle: "Who we work with",
        sectionTwoText:
          "We work with both private and business clients. Some projects require aesthetic improvement and comfort, while others demand structure, reliability, and presentation quality for client-facing or operational spaces.",
        principlesTag: "Core Principles",
        principles: [
          {
            title: "Clarity",
            description:
              "We believe clients should understand the process, the scope, and the next step at every stage.",
          },
          {
            title: "Quality",
            description:
              "Every improvement should feel intentional, practical, and well executed.",
          },
          {
            title: "Reliability",
            description:
              "A professional service depends on consistency, communication, and structured delivery.",
          },
        ],
        ctaTag: "Let’s Talk",
        ctaTitle: "Looking for the right partner for your space?",
        ctaText:
          "Tell us what you want to improve, and we can help you move forward with a clear and practical direction.",
      },
      contact: {
        pageTag: "Contact",
        pageTitle: "Let’s talk about your project",
        pageText:
          "Tell us what kind of space you want to improve, what support you need, and how we can help you take the next step.",
        directTag: "Direct Contact",
        emailLabel: "Email",
        phoneLabel: "Phone",
        areaLabel: "Service Area",
        areaText: "Berlin and surrounding areas",
        formTag: "Request Form",
        nameLabel: "Full Name",
        namePlaceholder: "Your name",
        serviceLabel: "Service Needed",
        servicePlaceholder: "Choose a service",
        messageLabel: "Project Details",
        messagePlaceholder: "Tell us about your project",
        submit: "Send Request",
      },
      // Blog page content
      blog: {
        pageTag: "Blog",
        pageTitle: "Insights, ideas, and project thinking",
        pageText:
          "A space for useful articles, renovation guidance, furnishing ideas, and project-related insights that help clients think more clearly.",
        readMore: "Read more",
        posts: [
          {
            title: "How to plan a renovation project more clearly",
            excerpt:
              "A practical starting point for organizing expectations, scope, and decision-making before work begins.",
          },
          {
            title: "Before and after: why visual comparison matters",
            excerpt:
              "Transformation is easier to understand when the improvement is shown clearly and with context.",
          },
          {
            title:
              "Furnishing choices that improve both comfort and presentation",
            excerpt:
              "Well-planned furnishing can change how a space feels, functions, and is experienced every day.",
          },
        ],
      },
    },
  },
} as const;

// Returns the correct dictionary for the active locale.
export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
