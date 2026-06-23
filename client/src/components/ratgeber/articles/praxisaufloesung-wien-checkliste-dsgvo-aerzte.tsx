import { Link } from "@/i18n/navigation";
import {
  RatgeberArticleBody,
  RatgeberCta,
  RatgeberH2,
  RatgeberH3,
  RatgeberLead,
  RatgeberLi,
  RatgeberP,
  RatgeberUl,
} from "@/components/ratgeber/RatgeberArticleBody";

const linkClass = "text-accent hover:underline font-medium";

export function PraxisaufloesungWienChecklisteDsgvoAerzteArticle() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Eine Praxisauflösung in Wien ist weitaus komplexer als eine gewöhnliche Haushaltsauflösung. Neben
        der logistischen Herausforderung von schweren Medizintechniken spielen sensible Patientendaten,
        strenge DSGVO-Vorschriften und behördliche Auflagen der Stadt Wien eine zentrale Rolle.
      </RatgeberLead>

      <RatgeberP>
        Damit die Übergabe an den Vermieter oder die Hausverwaltung absolut planbar und stressfrei bleibt,
        hat Objekträumung Wien für Sie diesen kompakten Leitfaden inklusive einer strukturierten Checkliste
        erstellt.
      </RatgeberP>

      <RatgeberH2 id="vier-schritte">Die 4 wichtigsten Schritte bei einer Praxisauflösung</RatgeberH2>

      <RatgeberH3 id="schritt-1">Schritt 1: Bestandsaufnahme &amp; Behörden-Check</RatgeberH3>
      <RatgeberP>
        Bevor der erste Karton gepackt wird, muss eine lückenlose Erfassung aller Räumlichkeiten,
        Nebenräume und Lagerflächen erfolgen.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Inventarliste erstellen:</strong> Dokumentieren Sie alle Großgeräte, Möbelstücke und
          Verbrauchsmaterialien.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Terminabsprache:</strong> Stimmen Sie die Fristen für die Rückgabe frühzeitig mit der
          Hausverwaltung oder dem Eigentümer ab.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Parkverbote einplanen:</strong> Für den Abtransport in den engen Wiener Bezirken ist oft
          eine Halteverbotszone notwendig. Diese muss rechtzeitig bei der zuständigen MA 46 beantragt
          werden.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH3 id="schritt-2">Schritt 2: Sensibler Datenschutz &amp; Aktenvernichtung (DSGVO)</RatgeberH3>
      <RatgeberP>
        Patientendaten unterliegen strengsten gesetzlichen Schutzfristen. Eine unsachgemäße Entsorgung kann
        zu massiven rechtlichen Konsequenzen führen.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Papierakten sicher trennen:</strong> Patientengeschichten dürfen niemals im normalen
          Papiermüll landen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Datenträger &amp; Server:</strong> Festplatten, Praxis-PCs und medizinische Speichermedien
          müssen unwiderruflich gelöscht oder physisch zerstört werden.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Vernichtungsnachweis:</strong> Als zertifizierter Fachpartner garantieren wir eine
          DSGVO-konforme Aktenvernichtung und stellen Ihnen ein offizielles Vernichtungsprotokoll aus.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH3 id="schritt-3">Schritt 3: Demontage von Medizingeräten &amp; Sperrmüll</RatgeberH3>
      <RatgeberP>
        Medizinische Geräte, Laborausstattungen und fest eingebaute Praxiseinrichtungen erfordern
        handwerkliches Know-how bei der Demontage.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Verwertbare Geräte identifizieren:</strong> Gut erhaltene Medizintechnik kann im Rahmen
          unserer Wertanrechnung Ihren Gesamtpreis direkt senken.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Fachgerechte Entsorgung:</strong> Defekte Altgeräte, Chemikalien oder medizinischer
          Sperrmüll müssen nach den strengen Richtlinien der Wiener Abfallwirtschaft (MA 48) entsorgt
          werden.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Sanitär- und Rückbauarbeiten:</strong> Oft müssen Praxen im „Urzustand“ übergeben werden.
          Wir übernehmen die fachgerechte Demontage von Trennwänden, Bodenbelägen und Sanitäranlagen.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH3 id="schritt-4">Schritt 4: Besenreine Räumung &amp; Übergabe</RatgeberH3>
      <RatgeberP>Der finale Schritt sichert die problemlose Rückgabe Ihrer Kaution.</RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Logistik koordinieren:</strong> Tragewege, Aufzugnutzung und Stellplätze für die
          Räumungsfahrzeuge müssen optimal getaktet sein.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Besenreine Reinigung:</strong> Alle Räume werden makellos gekehrt übergeben.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Fotoprotokoll &amp; Schlüsselübergabe:</strong> Wir dokumentieren den Zustand der
          Räumlichkeiten direkt bei der Übergabe für Ihre Sicherheit.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2 id="kosten">Praxisauflösung in Wien: Kosten &amp; Fixpreis-Garantie</RatgeberH2>
      <RatgeberP>
        Bei Objekträumung gibt es keine versteckten Kosten oder böse Überraschungen nach der Arbeit. Unser
        Ablauf ist transparent und fair kalkuliert:
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Erstbesichtigung:</strong> 100 % kostenlos &amp; unverbindlich — kein finanzielles Risiko
        </RatgeberLi>
        <RatgeberLi>
          <strong>Preiskalkulation:</strong> Verbindlicher Fixpreis inklusive aller Deponiegebühren —
          absolute Planungssicherheit
        </RatgeberLi>
        <RatgeberLi>
          <strong>Wertausgleich:</strong> Anrechnung von verwertbarem Inventar und Möbeln — Reduzierung der
          Gesamtkosten
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Ob eine kleine Facharztpraxis im 1. Bezirk oder ein großes Diagnosezentrum — wir stimmen uns direkt
        mit Hausverwaltungen, Vermietern und Ihren internen Teams ab.
      </RatgeberP>

      <RatgeberP className="text-sm text-navy/70 border-t border-navy/10 pt-6 mt-8">
        Weiterführend:{" "}
        <Link href="/services/firmenaufloesung" className={linkClass}>
          Firmenauflösung
        </Link>
        {" · "}
        <Link href="/ratgeber/bueroaufloesung-wien-dsgvo-aktenvernichtung" className={linkClass}>
          Büroauflösung DSGVO
        </Link>
        {" · "}
        <Link href="/ratgeber/geschaeftslokal-raeumung-rueckbau-wien" className={linkClass}>
          Geschäftslokal Rückbau
        </Link>
        {" · "}
        <Link href="/ratgeber/halteverbot-entruempelung-wien-ma-46" className={linkClass}>
          Halteverbot MA 46
        </Link>
        {" · "}
        <Link href="/ratgeber/ma-48-mistplatz-wien-entsorgungs-guide-2026" className={linkClass}>
          MA 48 Entsorgungs-Guide
        </Link>
        {" · "}
        <Link href="/ratgeber/schwerlastentsorgung-wien-grosslasten" className={linkClass}>
          Schwerlastentsorgung
        </Link>
        {" · "}
        <Link href="/services/moebel-wertanrechnung" className={linkClass}>
          Wertanrechnung
        </Link>
        {" · "}
        <Link href="/prices" className={linkClass}>
          Preise
        </Link>
      </RatgeberP>

      <RatgeberH2 id="faq">Häufig gestellte Fragen (FAQ)</RatgeberH2>

      <RatgeberH3 id="faq-dsgvo">
        Müssen Patientenakten bei einer Praxisauflösung zwingend DSGVO-konform vernichtet werden?
      </RatgeberH3>
      <RatgeberP>
        Ja. Patientendaten sind besonders schützenswerte Daten. Wir garantieren eine zertifizierte
        Vernichtung nach den aktuellen Datenschutzrichtlinien und händigen Ihnen den gesetzlich geforderten
        Vernichtungsnachweis aus.
      </RatgeberP>

      <RatgeberH3 id="faq-wertanrechnung">
        Wie funktioniert die Wertanrechnung bei medizinischem Inventar?
      </RatgeberH3>
      <RatgeberP>
        Bei unserer kostenlosen Besichtigung bewerten wir funktionstüchtige Möbel, Büromöbel oder verwertbare
        Einrichtungsgegenstände. Der ermittelte Wert wird direkt von den Räumungskosten abgezogen, sodass
        sich Ihr Fixpreis deutlich verringert.
      </RatgeberP>

      <RatgeberP>
        Sie stehen vor einer Praxisauflösung in Wien? Kontaktieren Sie das Team von Objekträumung noch heute
        für ein kostenloses Angebot oder senden Sie uns Fotos der Räumlichkeiten direkt für eine schnelle
        Ersteinschätzung. Erreichen Sie uns auch telefonisch oder per WhatsApp über die Kontaktdaten auf
        unserer Website.
      </RatgeberP>

      <RatgeberCta
        title="Jetzt kostenloses Angebot für Ihre Praxisauflösung anfordern!"
        text="DSGVO-konforme Aktenvernichtung, Medizingeräte-Demontage und besenreine Übergabe — Fixpreis ohne versteckte Kosten in ganz Wien."
        href="/#contact"
        label="Jetzt Angebot anfragen"
      />
    </RatgeberArticleBody>
  );
}
