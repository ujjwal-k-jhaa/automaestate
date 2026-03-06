import { useEffect } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalEmbed() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal?.("init", "30min", { origin: "https://app.cal.com" });

    window.Cal?.ns?.["30min"]?.("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { "layout": "week_view", "useSlotsViewOnSmallScreen": "true" },
      calLink: "ck-jha/30min",
    });

    window.Cal?.ns?.["30min"]?.("ui", { "hideEventTypeDetails": false, "layout": "week_view" });
  }, []);

  return (
    <div 
      style={{ width: "100%", height: "100%", overflow: "scroll" }} 
      id="my-cal-inline-30min"
    ></div>
  );
}
