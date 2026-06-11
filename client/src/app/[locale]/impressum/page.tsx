export const dynamic = "force-static";

import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ContactSection } from "@/components/ContactSection";
import { PageStructuredData } from "@/components/PageStructuredData";
import { buildSimpleContentPageGraph, canonicalToAbsolute } from "@/lib/schema";
import { EMAIL, PHONE_DISPLAY, SITE_URL } from "@/lib/constants";

export function generateMetadata() {
  return {
    title: "Impressum | Objekträumung",
    description: "Impressum und Datenschutzerklaerung von SWIFT e.U.",
  };
}

type Props = { params: { locale: string } };

export default async function ImpressumPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const tNav = await getTranslations({ locale: params.locale, namespace: "nav" });
  const impressumMetaDescription = "Impressum und Datenschutzerklaerung von SWIFT e.U.";
  const impressumCrumb = "Impressum";

  return (
    <div className="min-h-screen bg-white">
      <PageStructuredData
        graph={buildSimpleContentPageGraph({
          path: "/impressum",
          name: "Impressum | Objekträumung",
          description: impressumMetaDescription,
          breadcrumbs: [
            { name: tNav("home"), item: SITE_URL },
            { name: impressumCrumb, item: canonicalToAbsolute("/impressum") },
          ],
        })}
      />
      <header className="relative bg-navy text-white pt-10 pb-14 md:pt-14 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,107,0,0.06)_100%)]" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Rechtliche Hinweise
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Impressum & Datenschutzerklaerung
          </h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20 space-y-16">
        <section id="impressum" className="rounded-2xl border border-navy/10 bg-slate-50/80 p-6 md:p-10">
          <h2 className="text-xl font-bold text-navy mb-6">IMPRESSUM</h2>
          <p className="text-navy/90 mb-6">
            Angaben gemaess § 5 ECG, § 14 UGB und sonstigen einschlaegigen Rechtsvorschriften
          </p>
          <dl className="grid gap-4 sm:gap-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Firmenname</dt>
              <dd className="text-navy font-medium">SWIFT e.U.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Firmenbuchnummer</dt>
              <dd className="text-navy">FN 588440d</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Sitz / Geschaeftsanschrift</dt>
              <dd className="text-navy">Lore-Kutschera-Weg 14/3/13, 1120 Wien, Oesterreich</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">E-Mail</dt>
              <dd>
                <a href={`mailto:${EMAIL}`} className="text-accent hover:underline font-medium">{EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Telefon</dt>
              <dd className="text-navy">{PHONE_DISPLAY}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Website</dt>
              <dd className="text-navy">
                <a href="https://www.objektraeumung.at" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  www.objektraeumung.at
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Aufsichtsbehoerde / Gewerbebehoerde</dt>
              <dd className="text-navy">Magistratisches Bezirksamt des 12. Bezirkes / Magistrat der Stadt Wien</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Kammerzugehoerigkeit</dt>
              <dd className="text-navy">Wirtschaftskammer Wien</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Sparte / Gewerbe</dt>
              <dd className="text-navy">
                Gueterbefoerderung mit Kraftfahrzeugen oder Kraftfahrzeugen mit Anhaengern, deren hoechst
                zulaessiges Gesamtgewicht insgesamt 3.500 kg nicht uebersteigt; Entruempler - Raeumung
                durch Entfernung wertlosen Gutes; Zusammenbau von Moebelbausaetzen
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Anwendbare Rechtsvorschriften</dt>
              <dd className="text-navy">
                Gewerbeordnung, abrufbar unter{" "}
                <a href="https://www.ris.bka.gv.at" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  www.ris.bka.gv.at
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Verantwortlich fuer den Inhalt</dt>
              <dd className="text-navy">SWIFT e.U., Lore-Kutschera-Weg 14/3/13, 1120 Wien, Oesterreich</dd>
            </div>
          </dl>
        </section>

        <section id="disclaimer" className="rounded-2xl border border-navy/10 bg-slate-50/80 p-6 md:p-10">
          <h2 className="text-xl font-bold text-navy mb-6">ALLGEMEINER DISCLAIMER</h2>
          <div className="space-y-4 text-navy">
            <p>Fuer die Vollstaendigkeit, Richtigkeit und Aktualitaet der Inhalte dieser Website wird keine Haftung uebernommen. Dies gilt insbesondere fuer Fehler redaktioneller oder technischer Art, Auslassungen sowie fuer die Richtigkeit von Eintragungen.</p>
            <p>Wir sind fuer eigene Inhalte auf dieser Website nach den allgemeinen gesetzlichen Bestimmungen verantwortlich. Von diesen eigenen Inhalten sind Verweise auf Inhalte anderer Anbieter zu unterscheiden. Diese Verweise, insbesondere Hyperlinks, dienen lediglich der Information.</p>
            <p>Fuer Inhalte fremder Websites, auf die direkt oder indirekt verwiesen wird, uebernehmen wir keine Haftung. Fuer den Inhalt verlinkter Seiten ist ausschliesslich der jeweilige Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung wurden die fremden Inhalte nach bestem Wissen geprueft. Rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar.</p>
            <p>Eine laufende Kontrolle verlinkter Seiten ohne konkreten Anlass ist nicht zumutbar. Sollten uns Rechtsverletzungen bekannt werden, werden entsprechende Links umgehend entfernt.</p>
            <p>Wir machen uns die Inhalte verlinkter Seiten nicht zu eigen. Diese Erklaerung gilt fuer alle Links und Verweise auf dieser Website.</p>
          </div>
        </section>

        <section id="datenschutz" className="rounded-2xl border border-navy/10 bg-slate-50/80 p-6 md:p-10">
          <h2 className="text-xl font-bold text-navy mb-6">DATENSCHUTZERKLAERUNG</h2>
          <div className="space-y-6 text-navy">
            <div className="space-y-2">
              <h3 className="font-semibold">1. Datenschutz auf einen Blick</h3>
              <p className="font-medium">Allgemeine Hinweise</p>
              <p>Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschliesslich auf Grundlage der gesetzlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO), des oesterreichischen Datenschutzgesetzes (DSG), des Telekommunikationsgesetzes (TKG) sowie des Telekommunikation-Telemedien-Datenschutz-Gesetzes, soweit anwendbar.</p>
              <p>Diese Datenschutzerklaerung informiert Sie darueber, welche personenbezogenen Daten beim Besuch unserer Website www.objektraeumung.at und bei der Kontaktaufnahme mit uns verarbeitet werden.</p>
              <p>Personenbezogene Daten sind alle Informationen, mit denen Sie persoenlich identifiziert werden koennen, zum Beispiel Name, Adresse, Telefonnummer, E-Mail-Adresse oder IP-Adresse.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">2. Verantwortlicher</h3>
              <p>Verantwortlich fuer die Datenverarbeitung auf dieser Website ist: SWIFT e.U., Lore-Kutschera-Weg 14/3/13, 1120 Wien, Oesterreich. E-Mail: office@objektraeumung.at. Telefon: {PHONE_DISPLAY}.</p>
              <p>Verantwortlicher ist jene natuerliche oder juristische Person, die allein oder gemeinsam mit anderen ueber die Zwecke und Mittel der Verarbeitung personenbezogener Daten entscheidet.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">3. Welche Daten wir verarbeiten</h3>
              <p>Beim Besuch unserer Website koennen insbesondere folgende Daten verarbeitet werden: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite bzw. Datei, uebertragene Datenmenge, Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners sowie Angaben, die Sie uns ueber Kontaktformulare, E-Mail, Telefon oder WhatsApp freiwillig uebermitteln.</p>
              <p>Diese Daten werden verarbeitet, um die Website technisch bereitzustellen, die Sicherheit der Website zu gewaehrleisten, Anfragen zu bearbeiten und unsere Leistungen anbieten zu koennen.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">4. Hosting bei IONOS</h3>
              <p>Unsere Website wird bei IONOS gehostet. Beim Besuch unserer Website verarbeitet der Hosting-Anbieter technische Zugriffsdaten (Server-Logfiles). Dazu koennen insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, verwendeter Browser, Betriebssystem, Referrer-URL und aufgerufene Seiten gehoeren.</p>
              <p>Die Verarbeitung erfolgt zur sicheren und technisch fehlerfreien Bereitstellung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Soweit IONOS Daten in unserem Auftrag verarbeitet, erfolgt dies auf Grundlage eines Vertrags ueber Auftragsverarbeitung gemaess Art. 28 DSGVO.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">5. Kontaktaufnahme per Formular, E-Mail oder Telefon</h3>
              <p>Wenn Sie uns kontaktieren, verarbeiten wir jene Daten, die Sie uns freiwillig mitteilen (z.B. Name, E-Mail-Adresse, Telefonnummer, Adresse/Einsatzort, gewuenschte Leistung, Nachricht).</p>
              <p>Rechtsgrundlagen: Art. 6 Abs. 1 lit. b DSGVO (Vertrag/vorvertragliche Massnahmen), Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse), Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">6. Kontaktaufnahme ueber WhatsApp</h3>
              <p>Bei Nutzung von WhatsApp koennen Telefonnummer, Profilname, Nachrichteninhalt und ggf. Fotos/Dokumente verarbeitet werden. WhatsApp ist ein Dienst der WhatsApp Ireland Limited bzw. Meta-Unternehmensgruppe. Auf deren Datenverarbeitung haben wir keinen vollstaendigen Einfluss.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">7. Cookies</h3>
              <p>Unsere Website kann Cookies verwenden. Technisch notwendige Cookies basieren auf Art. 6 Abs. 1 lit. f DSGVO. Nicht notwendige Cookies/Tracking werden nur mit ausdruecklicher Einwilligung gemaess Art. 6 Abs. 1 lit. a DSGVO verwendet.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">8. Kontaktformular auf der Website</h3>
              <p>Die Formularnutzung umfasst Anfragen zu Leistungen wie Raeumung, Entruempelung, Entsorgung, Aufloesung, Reinigung oder Besichtigung. Daten werden zur Bearbeitung der Anfrage und fuer Anschlussfragen gespeichert.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">9. Kunden- und Vertragsdaten</h3>
              <p>Wir verarbeiten personenbezogene Daten, soweit dies zur Angebotserstellung, Auftragsabwicklung, Rechnungslegung, Kommunikation und Erfuellung gesetzlicher Pflichten erforderlich ist. Rechtsgrundlagen: Art. 6 Abs. 1 lit. b und lit. c DSGVO.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">10. Speicherdauer</h3>
              <p>Wir speichern personenbezogene Daten nur so lange, wie es fuer den Zweck erforderlich ist. Gesetzliche Aufbewahrungspflichten bleiben unberuehrt (in Oesterreich insbesondere bis zu sieben Jahre).</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">11. SSL- bzw. TLS-Verschluesselung</h3>
              <p>Diese Website nutzt SSL/TLS zur verschluesselten Uebertragung vertraulicher Inhalte.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">12. Google-Bewertungen und externe Links</h3>
              <p>Bei externen Links verlassen Sie unsere Website; fuer die dortige Datenverarbeitung ist der jeweilige Anbieter verantwortlich.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">13. Keine Nutzung von WordPress</h3>
              <p>Diese Website ist kein Produkt von WordPress. WordPress-spezifische Datenverarbeitungen, Kommentar-Funktionen oder Plugins werden nicht beschrieben.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">14. Keine pauschale Nutzung von Analyse- und Marketingdiensten</h3>
              <p>Aktuell werden in dieser Erklaerung keine Dienste wie Google Analytics, Google Ads, Facebook Pixel, YouTube-Plugins, Google Maps oder OpenStreetMap beschrieben. Bei kuenftiger Nutzung muss diese Erklaerung vorab angepasst werden.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">15. Ihre Rechte</h3>
              <p>Sie haben insbesondere die Rechte auf Auskunft, Berichtigung, Loeschung, Einschraenkung, Datenuebertragbarkeit, Widerspruch sowie Widerruf einer Einwilligung. Bei Verstoessen koennen Sie Beschwerde bei der Aufsichtsbehoerde einbringen.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">16. Zustaendige Datenschutzaufsichtsbehoerde</h3>
              <p>Oesterreichische Datenschutzbehoerde, Barichgasse 40-42, 1030 Wien, Oesterreich.</p>
              <p>E-Mail: dsb@dsb.gv.at, Website: www.dsb.gv.at</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">17. Widerruf einer Einwilligung</h3>
              <p>Wenn eine Datenverarbeitung auf Ihrer Einwilligung beruht, koennen Sie diese jederzeit mit Wirkung fuer die Zukunft widerrufen. Laut Dokument: office@swiftumzug.at</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">18. Widerspruch gegen Verarbeitung auf Grundlage berechtigter Interessen</h3>
              <p>Sie koennen jederzeit Widerspruch gegen Verarbeitungen gemaess Art. 6 Abs. 1 lit. f DSGVO einlegen, sofern Gruende aus Ihrer besonderen Situation vorliegen.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">19. Datensicherheit</h3>
              <p>Wir setzen technische und organisatorische Massnahmen zum Schutz personenbezogener Daten ein. Dennoch kann die Datenuebertragung im Internet Sicherheitsluecken aufweisen.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">20. Aktualitaet dieser Datenschutzerklaerung</h3>
              <p>Diese Datenschutzerklaerung ist aktuell gueltig. Anpassungen bleiben bei Aenderungen der Website, eingesetzten Dienste oder gesetzlichen Anforderungen vorbehalten.</p>
            </div>
          </div>
        </section>
      </article>

      <ContactSection />
    </div>
  );
}
