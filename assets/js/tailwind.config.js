/* AFKOR tasarim sistemi - Tailwind CDN config (cdn scriptinden SONRA yuklenir) */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#eff4ff", "on-primary": "#ffffff", "on-error-container": "#93000a",
        "on-tertiary": "#ffffff", "on-secondary-fixed-variant": "#783200", "secondary-fixed-dim": "#ffb690",
        "surface-variant": "#d3e4fe", "on-primary-fixed": "#111c2d", "surface-bright": "#f8f9ff",
        "surface-container-high": "#dce9ff", "outline-variant": "#c5c6cd", "inverse-on-surface": "#eaf1ff",
        "primary-fixed-dim": "#bcc7de", "surface-container-lowest": "#ffffff", "on-secondary-container": "#5c2400",
        "on-secondary-fixed": "#341100", "inverse-surface": "#213145", "on-primary-fixed-variant": "#3c475a",
        "surface-tint": "#545f73", "surface-container-highest": "#d3e4fe", "on-secondary": "#ffffff",
        "on-primary-container": "#8590a6", "primary-fixed": "#d8e3fb", "on-error": "#ffffff",
        "primary-container": "#1e293b", "on-surface": "#0b1c30", "secondary": "#9d4300",
        "on-tertiary-fixed-variant": "#3f465c", "error-container": "#ffdad6", "surface": "#f8f9ff",
        "secondary-container": "#fd761a", "tertiary-fixed": "#dae2fd", "on-tertiary-container": "#888fa7",
        "on-surface-variant": "#45474c", "inverse-primary": "#bcc7de", "surface-dim": "#cbdbf5",
        "surface-container": "#e5eeff", "tertiary-container": "#20283c", "outline": "#75777d",
        "tertiary-fixed-dim": "#bec6e0", "on-background": "#0b1c30", "background": "#f8f9ff",
        "error": "#ba1a1a", "on-tertiary-fixed": "#131b2e", "primary": "#091426", "tertiary": "#0b1426",
        "secondary-fixed": "#ffdbca"
      },
      borderRadius: { DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem" },
      spacing: { gutter: "24px", "stack-sm": "8px", "margin-desktop": "64px", "margin-mobile": "16px",
        "stack-lg": "32px", "stack-md": "16px", unit: "4px" },
      fontFamily: { "headline-lg": ["Inter"], "headline-xl": ["Inter"], "headline-lg-mobile": ["Inter"],
        "label-sm": ["Inter"], "label-md": ["Inter"], "headline-md": ["Inter"], "body-lg": ["Inter"], "body-md": ["Inter"] },
      fontSize: {
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }],
        "label-md": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      }
    }
  }
};
