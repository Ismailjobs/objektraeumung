/**
 * Vorlage für neue Ratgeber-Artikel.
 * Diese Datei NICHT in registry.ts eintragen – nur kopieren und anpassen.
 *
 * 1. Datei duplizieren → `{slug}.tsx`
 * 2. Komponente umbenennen
 * 3. In `data/ratgeber/registry.ts` registrieren
 */
import {
  RatgeberArticleBody,
  RatgeberCallout,
  RatgeberCta,
  RatgeberH2,
  RatgeberH3,
  RatgeberLead,
  RatgeberLi,
  RatgeberOl,
  RatgeberP,
  RatgeberUl,
} from "@/components/ratgeber/RatgeberArticleBody";

export function VorlageArtikelContent() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Kurze Einleitung (Lead): Das wichtigste Ergebnis oder die Kernfrage des Artikels in 1–2 Sätzen.
      </RatgeberLead>

      <RatgeberH2 id="abschnitt-1">Erster Hauptabschnitt</RatgeberH2>
      <RatgeberP>
        Fließtext mit Mehrwert für den Leser. Konkrete Begriffe, lokale Bezüge (Wien, Bezirke) und
        Fixpreis/Wertausgleich wo passend einbauen.
      </RatgeberP>

      <RatgeberH3 id="unterabschnitt">Unterabschnitt</RatgeberH3>
      <RatgeberUl>
        <RatgeberLi>Punkt eins mit klarem Nutzen</RatgeberLi>
        <RatgeberLi>Punkt zwei</RatgeberLi>
        <RatgeberLi>Punkt drei</RatgeberLi>
      </RatgeberUl>

      <RatgeberCallout>
        <strong>Tipp:</strong> Wichtige Information hervorheben – z. B. kostenlose Besichtigung oder
        MA-48-Anbindung in Wien.
      </RatgeberCallout>

      <RatgeberH2 id="ablauf">Typischer Ablauf</RatgeberH2>
      <RatgeberOl>
        <RatgeberLi>Kostenlose Besichtigung anfragen</RatgeberLi>
        <RatgeberLi>Verbindliches Fixpreis-Angebot erhalten</RatgeberLi>
        <RatgeberLi>Räumung und besenreine Übergabe</RatgeberLi>
      </RatgeberOl>

      <RatgeberCta />
    </RatgeberArticleBody>
  );
}
