"use client";

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Client-seitige Fehler (Hydration, Browser-Erweiterungen, Third-Party-Skripte, …).
 * Zeigt eine kurze Meldung und einen „Erneut versuchen“-Button.
 */
export default function LocaleError({ error, reset }: Props) {
  useEffect(() => {
    console.error("[LocaleError]", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 bg-navy text-white">
      <div className="max-w-md w-full rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
        <h1 className="text-xl font-bold text-white mb-2">
          Etwas ist schiefgelaufen
        </h1>
        <p className="text-white/80 text-sm mb-6">
          Ein unerwarteter Fehler ist aufgetreten. Bitte laden Sie die Seite neu oder versuchen Sie es in ein paar Sekunden erneut. Wenn Sie eine Werbeblocker-Erweiterung nutzen, kann das Deaktivieren für diese Seite helfen.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  );
}
