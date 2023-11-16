/** @type {import('tailwindcss').Config} */
const QuillTailwindConfig = {
  content: [],
  dark: "class",
  theme: {
    fontFamily: {
      heading: [
        "Ubuntu",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      sans: [
        "'IBM Plex Sans'",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "'IBM Plex Mono'",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    lineHeight: {
      "100": "18px",
      "200": "22px",
      "300": "24px",
      "400": "28px",
      "500": "30px",
      "600": "32px",
      "700": "36px",
      "800": "48px",
      "900": "64px",
      "1000": "96px",
      "heading-hero": "var(--semantic-line-height-heading-hero)",
      "heading-h1": "var(--semantic-line-height-heading-h1)",
      "heading-h2": "var(--semantic-line-height-heading-h2)",
      "heading-h3": "var(--semantic-line-height-heading-h3)",
      "heading-h4": "var(--semantic-line-height-heading-h4)",
      "heading-h5": "var(--semantic-line-height-heading-h5)",
      "heading-h6": "var(--semantic-line-height-heading-h6)",
      "body-xl": "var(--semantic-line-height-body-xl)",
      "body-lg": "var(--semantic-line-height-body-lg)",
      "body-md": "var(--semantic-line-height-body-md)",
      "body-sm": "var(--semantic-line-height-body-sm)",
      caption: "var(--semantic-line-height-caption)",
      "code-xl": "var(--semantic-line-height-code-xl)",
      "code-lg": "var(--semantic-line-height-code-lg)",
      "code-md": "var(--semantic-line-height-code-md)",
      "code-sm": "var(--semantic-line-height-code-sm)",
      "icon-labelPaired-xl": "var(--semantic-line-height-icon-label-paired-xl)",
      "icon-labelPaired-lg": "var(--semantic-line-height-icon-label-paired-lg)",
      "icon-labelPaired-md": "var(--semantic-line-height-icon-label-paired-md)",
      "icon-labelPaired-sm": "var(--semantic-line-height-icon-label-paired-sm)",
      "icon-labelPaired-caption":
        "var(--semantic-line-height-icon-label-paired-caption)",
      "icon-standalone-2xl": "var(--semantic-line-height-icon-standalone-2xl)",
      "icon-standalone-xl": "var(--semantic-line-height-icon-standalone-xl)",
      "icon-standalone-lg": "var(--semantic-line-height-icon-standalone-lg)",
      "icon-standalone-md": "var(--semantic-line-height-icon-standalone-md)",
      "icon-standalone-sm": "var(--semantic-line-height-icon-standalone-sm)",
      auto: "normal",
    },
    borderWidth: {
      "50": "0",
      "75": "1px",
      "100": "2px",
      "200": "4px",
      "300": "8px",
      none: 0,
      xs: "1px",
      sm: "2px",
      md: "4px",
      lg: "8px",
    },
    boxShadow: {
      "50": "0 0 0 0",
      "110": "0 -1px 2px 0 rgba(0, 0, 0, 6%), 0 -1px 2px 0 rgba(0, 0, 0, 3%)",
      "120": "1px 0 2px 0 rgba(0, 0, 0, 6%), 1px 0 2px 0 rgba(0, 0, 0, 3%)",
      "130": "0 1px 2px 0 rgba(0, 0, 0, 6%), 0 1px 2px 0 rgba(0, 0, 0, 3%)",
      "140": "-1px 0 2px 0 rgba(0, 0, 0, 6%), -1px 0 2px 0 rgba(0, 0, 0, 3%)",
      "210": "0 -1px 4px 0 rgba(0, 0, 0, 8%), 0 -1px 4px 0 rgba(0, 0, 0, 4%)",
      "220": "1px 0 4px 0 rgba(0, 0, 0, 8%), 1px 0 4px 0 rgba(0, 0, 0, 4%)",
      "230": "0 1px 4px 0 rgba(0, 0, 0, 8%), 0 1px 4px 0 rgba(0, 0, 0, 4%)",
      "240": "-1px 0 4px 0 rgba(0, 0, 0, 8%), -1px 0 4px 0 rgba(0, 0, 0, 4%)",
      "310":
        "0 -4px 8px 2px rgba(0, 0, 0, 3%), 0 -4px 8px 2px rgba(0, 0, 0, 2%)",
      "320": "4px 0 8px 2px rgba(0, 0, 0, 3%), 4px 0 8px 2px rgba(0, 0, 0, 2%)",
      "330": "0 4px 8px 2px rgba(0, 0, 0, 3%), 0 4px 8px 2px rgba(0, 0, 0, 2%)",
      "340":
        "-4px 0 8px 2px rgba(0, 0, 0, 3%), -4px 0 8px 2px rgba(0, 0, 0, 2%)",
      "410":
        "0 -8px 16px 2px rgba(0, 0, 0, 4%), 0 -8px 16px 2px rgba(0, 0, 0, 2%)",
      "420":
        "8px 0 16px 2px rgba(0, 0, 0, 4%), 8px 0 16px 2px rgba(0, 0, 0, 2%)",
      "430":
        "0 8px 16px 2px rgba(0, 0, 0, 4%), 0 8px 16px 2px rgba(0, 0, 0, 2%)",
      "440":
        "-8px 0 16px 2px rgba(0, 0, 0, 4%), -8px 0 16px 2px rgba(0, 0, 0, 2%)",
      "510":
        "0 -16px 24px 4px rgba(0, 0, 0, 4%), 0 -16px 24px 4px rgba(0, 0, 0, 2%)",
      "520":
        "16px 0 24px 4px rgba(0, 0, 0, 4%), 16px 0 24px 4px rgba(0, 0, 0, 2%)",
      "530":
        "0 16px 24px 4px rgba(0, 0, 0, 4%), 0 16px 24px 4px rgba(0, 0, 0, 2%)",
      "540":
        "-16px 0 24px 4px rgba(0, 0, 0, 4%), -16px 0 24px 4px rgba(0, 0, 0, 2%)",
      "610":
        "0 -24px 48px 8px rgba(0, 0, 0, 6%), 0 -24px 48px 8px rgba(0, 0, 0, 3%)",
      "620":
        "24px 0 48px 8px rgba(0, 0, 0, 6%), 24px 0 48px 8px rgba(0, 0, 0, 3%)",
      "630":
        "0 24px 48px 8px rgba(0, 0, 0, 6%), 0 24px 48px 8px rgba(0, 0, 0, 3%)",
      "710":
        "0 -32px 64px 12px rgba(0, 0, 0, 8%), 0 -32px 64px 12px rgba(0, 0, 0, 4%)",
      "720":
        "32px 0 64px 12px rgba(0, 0, 0, 8%), 32px 0 64px 12px rgba(0, 0, 0, 4%)",
      "730":
        "0 32px 64px 12px rgba(0, 0, 0, 8%), 0 32px 64px 12px rgba(0, 0, 0, 4%)",
      "740":
        "-32px 0 64px 12px rgba(0, 0, 0, 8%), -32px 0 64px 12px rgba(0, 0, 0, 4%)",
    },
    opacity: {
      "50": "0",
      "75": "0.04",
      "100": "0.08",
      "200": "0.16",
      "300": "0.24",
      "400": "0.32",
      "500": "0.4",
      "600": "0.48",
      "700": "0.56",
      "800": "0.64",
      "900": "0.72",
      "1000": "0.8",
      "1100": "0.88",
      "1200": "0.96",
      "1300": "1",
      overlay: 0.72,
      disabled: 0.32,
    },
    fontSize: {
      "50": "12px",
      "75": "14px",
      "100": "16px",
      "200": "18px",
      "300": "20px",
      "400": "24px",
      "500": "32px",
      "600": "40px",
      "700": "48px",
      "800": "64px",
      "900": "80px",
      "1000": "28px",
      "1100": "34px",
      "heading-hero": "var(--semantic-font-size-heading-hero)",
      "heading-h1": "var(--semantic-font-size-heading-h1)",
      "heading-h2": "var(--semantic-font-size-heading-h2)",
      "heading-h3": "var(--semantic-font-size-heading-h3)",
      "heading-h4": "var(--semantic-font-size-heading-h4)",
      "heading-h5": "var(--semantic-font-size-heading-h5)",
      "heading-h6": "var(--semantic-font-size-heading-h6)",
      "body-xl": "var(--semantic-font-size-body-xl)",
      "body-lg": "var(--semantic-font-size-body-lg)",
      "body-md": "var(--semantic-font-size-body-md)",
      "body-sm": "var(--semantic-font-size-body-sm)",
      caption: "var(--semantic-font-size-caption)",
      "code-xl": "var(--semantic-font-size-code-xl)",
      "code-lg": "var(--semantic-font-size-code-lg)",
      "code-md": "var(--semantic-font-size-code-md)",
      "code-sm": "var(--semantic-font-size-code-sm)",
      "icon-labelPaired-xl": "var(--semantic-font-size-icon-label-paired-xl)",
      "icon-labelPaired-lg": "var(--semantic-font-size-icon-label-paired-lg)",
      "icon-labelPaired-md": "var(--semantic-font-size-icon-label-paired-md)",
      "icon-labelPaired-sm": "var(--semantic-font-size-icon-label-paired-sm)",
      "icon-labelPaired-caption":
        "var(--semantic-font-size-icon-label-paired-caption)",
      "icon-standalone-2xl": "var(--semantic-font-size-icon-standalone-2xl)",
      "icon-standalone-xl": "var(--semantic-font-size-icon-standalone-xl)",
      "icon-standalone-lg": "var(--semantic-font-size-icon-standalone-lg)",
      "icon-standalone-md": "var(--semantic-font-size-icon-standalone-md)",
      "icon-standalone-sm": "var(--semantic-font-size-icon-standalone-sm)",
    },
    colors: {
      background: {
        primary: {
          base: "var(--semantic-color-background-primary-base)",
          container: "var(--semantic-color-background-primary-container)",
        },
        secondary: {
          base: "var(--semantic-color-background-secondary-base)",
          container: "var(--semantic-color-background-secondary-container)",
        },
        overflow: {
          "1": {
            top: "var(--semantic-color-background-overflow-1-top)",
            right: "var(--semantic-color-background-overflow-1-right)",
            bottom: "var(--semantic-color-background-overflow-1-bottom)",
            left: "var(--semantic-color-background-overflow-1-left)",
          },
          "2": {
            top: "var(--semantic-color-background-overflow-2-top)",
            right: "var(--semantic-color-background-overflow-2-right)",
            bottom: "var(--semantic-color-background-overflow-2-bottom)",
            left: "var(--semantic-color-background-overflow-2-left)",
          },
        },
        overlay: "var(--semantic-color-background-overlay)",
        dialog: "var(--semantic-color-background-dialog)",
      },
      typography: {
        prominent: "var(--semantic-color-typography-prominent)",
        default: "var(--semantic-color-typography-default)",
        subtle: "var(--semantic-color-typography-subtle)",
        disabled: "var(--semantic-color-typography-disabled)",
        link: "var(--semantic-color-typography-link)",
      },
      status: {
        info: "var(--semantic-color-status-info)",
        success: "var(--semantic-color-status-success)",
        warning: "var(--semantic-color-status-warning)",
        danger: "var(--semantic-color-status-danger)",
      },
      gradient: {
        slate: {
          "110":
            "linear-gradient(1.93deg, rgba(255, 255, 255, 0) 1.56%, #ffffff 49.91%)",
          "120":
            "linear-gradient(88.07deg, rgba(255, 255, 255, 0) 1.63%, #ffffff 50.02%)",
          "130":
            "linear-gradient(181.93deg, rgba(255, 255, 255, 0) 1.63%, #ffffff 50.01%)",
          "140":
            "linear-gradient(271.93deg, rgba(255, 255, 255, 0) 1.63%, #ffffff 49.98%)",
          "210":
            "linear-gradient(1.93deg, rgba(246, 247, 248, 0) 1.56%, #f6f7f8 49.91%)",
          "220":
            "linear-gradient(88.07deg, rgba(246, 247, 248, 0) 1.63%, #f6f7f8 50.02%)",
          "230":
            "linear-gradient(181.93deg, rgba(246, 247, 248, 0) 1.63%, #f6f7f8 50.01%)",
          "240":
            "linear-gradient(271.93deg, rgba(246, 247, 248, 0) 1.63%, #f6f7f8 49.98%)",
          "310":
            "linear-gradient(1.93deg, rgba(17, 20, 27, 0) 1.56%, #11141b 49.91%)",
          "320":
            "linear-gradient(88.07deg, rgba(17, 20, 27, 0) 1.63%, #11141b 50.02%)",
          "330":
            "linear-gradient(181.93deg, rgba(17, 20, 27, 0) 1.63%, #11141b 50.01%)",
          "340":
            "linear-gradient(271.93deg, rgba(17, 20, 27, 0) 1.63%, #11141b 49.98%)",
          "410":
            "linear-gradient(1.93deg, rgba(24, 28, 37, 0) 1.56%, #181c25 49.91%)",
          "420":
            "linear-gradient(88.07deg, rgba(24, 28, 37, 0) 1.63%, #181c25 50.02%)",
          "430":
            "linear-gradient(181.93deg, rgba(24, 28, 37, 0) 1.63%, #181c25 50.01%)",
          "440":
            "linear-gradient(271.93deg, rgba(24, 28, 37, 0) 1.63%, #181c25 49.98%)",
        },
      },
      opacity: {
        white: {
          "75": "rgba(255, 255, 255, 0.04)",
          "100": "rgba(255, 255, 255, 0.08)",
          "200": "rgba(255, 255, 255, 0.16)",
          "300": "rgba(255, 255, 255, 0.24)",
          "400": "rgba(255, 255, 255, 0.48)",
          "500": "rgba(255, 255, 255, 0.56)",
          "600": "rgba(255, 255, 255, 0.72)",
          "700": "rgba(255, 255, 255, 0.8)",
          "800": "rgba(255, 255, 255, 0.88)",
        },
        black: {
          "75": "rgba(0, 0, 0, 0.04)",
          "100": "rgba(0, 0, 0, 0.08)",
          "200": "rgba(0, 0, 0, 0.16)",
          "300": "rgba(0, 0, 0, 0.24)",
          "400": "rgba(0, 0, 0, 0.48)",
          "500": "rgba(0, 0, 0, 0.56)",
          "600": "rgba(0, 0, 0, 0.72)",
          "700": "rgba(0, 0, 0, 0.8)",
          "800": "rgba(0, 0, 0, 0.88)",
        },
        red: {
          "100": "rgba(230, 25, 14, 0.08)",
          "200": "rgba(230, 25, 14, 0.16)",
          "300": "rgba(230, 25, 14, 0.24)",
          "400": "rgba(230, 25, 14, 0.48)",
          "500": "rgba(230, 25, 14, 0.56)",
          "600": "rgba(230, 25, 14, 0.72)",
          "700": "rgba(230, 25, 14, 0.8)",
          "800": "rgba(230, 25, 14, 0.88)",
        },
        orange: {
          "100": "rgba(245, 95, 10, 0.08)",
          "200": "rgba(245, 95, 10, 0.16)",
          "300": "rgba(245, 95, 10, 0.24)",
          "400": "rgba(245, 95, 10, 0.48)",
          "500": "rgba(245, 95, 10, 0.56)",
          "600": "rgba(245, 95, 10, 0.72)",
          "700": "rgba(245, 95, 10, 0.8)",
          "800": "rgba(245, 95, 10, 0.88)",
        },
        yellow: {
          "100": "rgba(255, 156, 19, 0.08)",
          "200": "rgba(255, 156, 19, 0.16)",
          "300": "rgba(255, 156, 19, 0.24)",
          "400": "rgba(255, 156, 19, 0.48)",
          "500": "rgba(255, 156, 19, 0.56)",
          "600": "rgba(255, 156, 19, 0.72)",
          "700": "rgba(255, 156, 19, 0.8)",
          "800": "rgba(255, 156, 19, 0.88)",
        },
        mustard: {
          "100": "rgba(247, 198, 11, 0.08)",
          "200": "rgba(247, 198, 11, 0.16)",
          "300": "rgba(247, 198, 11, 0.24)",
          "400": "rgba(247, 198, 11, 0.48)",
          "500": "rgba(247, 198, 11, 0.56)",
          "600": "rgba(247, 198, 11, 0.72)",
          "700": "rgba(247, 198, 11, 0.8)",
          "800": "rgba(247, 198, 11, 0.88)",
        },
        olive: {
          "100": "rgba(224, 218, 2, 0.08)",
          "200": "rgba(224, 218, 2, 0.16)",
          "300": "rgba(224, 218, 2, 0.24)",
          "400": "rgba(224, 218, 2, 0.48)",
          "500": "rgba(224, 218, 2, 0.56)",
          "600": "rgba(224, 218, 2, 0.72)",
          "700": "rgba(224, 218, 2, 0.8)",
          "800": "rgba(224, 218, 2, 0.88)",
        },
        green: {
          "100": "rgba(0, 136, 50, 0.08)",
          "200": "rgba(0, 136, 50, 0.16)",
          "300": "rgba(0, 136, 50, 0.24)",
          "400": "rgba(0, 136, 50, 0.48)",
          "500": "rgba(0, 136, 50, 0.56)",
          "600": "rgba(0, 136, 50, 0.72)",
          "700": "rgba(0, 136, 50, 0.8)",
          "800": "rgba(0, 136, 50, 0.88)",
        },
        emerald: {
          "100": "rgba(0, 195, 144, 0.08)",
          "200": "rgba(0, 195, 144, 0.16)",
          "300": "rgba(0, 195, 144, 0.24)",
          "400": "rgba(0, 195, 144, 0.48)",
          "500": "rgba(0, 195, 144, 0.56)",
          "600": "rgba(0, 195, 144, 0.72)",
          "700": "rgba(0, 195, 144, 0.8)",
          "800": "rgba(0, 195, 144, 0.88)",
        },
        tiffany: {
          "100": "rgba(23, 234, 189, 0.08)",
          "200": "rgba(23, 234, 189, 0.16)",
          "300": "rgba(23, 234, 189, 0.24)",
          "400": "rgba(23, 234, 189, 0.48)",
          "500": "rgba(23, 234, 189, 0.56)",
          "600": "rgba(23, 234, 189, 0.72)",
          "700": "rgba(23, 234, 189, 0.8)",
          "800": "rgba(23, 234, 189, 0.88)",
        },
        teal: {
          "100": "rgba(0, 204, 204, 0.08)",
          "200": "rgba(0, 204, 204, 0.16)",
          "300": "rgba(0, 204, 204, 0.24)",
          "400": "rgba(0, 204, 204, 0.48)",
          "500": "rgba(0, 204, 204, 0.56)",
          "600": "rgba(0, 204, 204, 0.72)",
          "700": "rgba(0, 204, 204, 0.8)",
          "800": "rgba(0, 204, 204, 0.88)",
        },
        seawater: {
          "100": "rgba(10, 160, 176, 0.08)",
          "200": "rgba(10, 160, 176, 0.16)",
          "300": "rgba(10, 160, 176, 0.24)",
          "400": "rgba(10, 160, 176, 0.48)",
          "500": "rgba(10, 160, 176, 0.56)",
          "600": "rgba(10, 160, 176, 0.72)",
          "700": "rgba(10, 160, 176, 0.8)",
          "800": "rgba(10, 160, 176, 0.88)",
        },
        blue: {
          "100": "rgba(44, 154, 255, 0.08)",
          "200": "rgba(44, 154, 255, 0.16)",
          "300": "rgba(44, 154, 255, 0.24)",
          "400": "rgba(44, 154, 255, 0.48)",
          "500": "rgba(44, 154, 255, 0.56)",
          "600": "rgba(44, 154, 255, 0.72)",
          "700": "rgba(44, 154, 255, 0.8)",
          "800": "rgba(44, 154, 255, 0.88)",
        },
        sapphire: {
          "100": "rgba(12, 40, 247, 0.08)",
          "200": "rgba(12, 40, 247, 0.16)",
          "300": "rgba(12, 40, 247, 0.24)",
          "400": "rgba(12, 40, 247, 0.48)",
          "500": "rgba(12, 40, 247, 0.56)",
          "600": "rgba(12, 40, 247, 0.72)",
          "700": "rgba(12, 40, 247, 0.8)",
          "800": "rgba(12, 40, 247, 0.88)",
        },
        blueberry: {
          "100": "rgba(73, 2, 224, 0.08)",
          "200": "rgba(73, 2, 224, 0.16)",
          "300": "rgba(73, 2, 224, 0.24)",
          "400": "rgba(73, 2, 224, 0.48)",
          "500": "rgba(73, 2, 224, 0.56)",
          "600": "rgba(73, 2, 224, 0.72)",
          "700": "rgba(73, 2, 224, 0.8)",
          "800": "rgba(73, 2, 224, 0.88)",
        },
        grape: {
          "100": "rgba(127, 13, 207, 0.08)",
          "200": "rgba(127, 13, 207, 0.16)",
          "300": "rgba(127, 13, 207, 0.24)",
          "400": "rgba(127, 13, 207, 0.48)",
          "500": "rgba(127, 13, 207, 0.56)",
          "600": "rgba(127, 13, 207, 0.72)",
          "700": "rgba(127, 13, 207, 0.8)",
          "800": "rgba(127, 13, 207, 0.88)",
        },
        magenta: {
          "100": "rgba(203, 13, 247, 0.08)",
          "200": "rgba(203, 13, 247, 0.16)",
          "300": "rgba(203, 13, 247, 0.24)",
          "400": "rgba(203, 13, 247, 0.48)",
          "500": "rgba(203, 13, 247, 0.56)",
          "600": "rgba(203, 13, 247, 0.72)",
          "700": "rgba(203, 13, 247, 0.8)",
          "800": "rgba(203, 13, 247, 0.88)",
        },
        cherry: {
          "100": "rgba(222, 0, 64, 0.08)",
          "200": "rgba(222, 0, 64, 0.16)",
          "300": "rgba(222, 0, 64, 0.24)",
          "400": "rgba(222, 0, 64, 0.48)",
          "500": "rgba(222, 0, 64, 0.56)",
          "600": "rgba(222, 0, 64, 0.72)",
          "700": "rgba(222, 0, 64, 0.8)",
          "800": "rgba(222, 0, 64, 0.88)",
        },
        coral: {
          "100": "rgba(255, 68, 79, 0.08)",
          "200": "rgba(255, 68, 79, 0.16)",
          "300": "rgba(255, 68, 79, 0.24)",
          "400": "rgba(255, 68, 79, 0.48)",
          "500": "rgba(255, 68, 79, 0.56)",
          "600": "rgba(255, 68, 79, 0.72)",
          "700": "rgba(255, 68, 79, 0.8)",
          "800": "rgba(255, 68, 79, 0.88)",
        },
        slate: {
          "100": "rgba(65, 70, 82, 0.08)",
          "200": "rgba(65, 70, 82, 0.16)",
          "300": "rgba(65, 70, 82, 0.24)",
          "400": "rgba(65, 70, 82, 0.32)",
          "500": "rgba(65, 70, 82, 0.4)",
          "600": "rgba(65, 70, 82, 0.48)",
          "700": "rgba(65, 70, 82, 0.56)",
          "800": "rgba(65, 70, 82, 0.64)",
        },
        overflow: {
          "100": "rgba(255, 255, 255, 0)",
          "200": "rgba(246, 247, 248, 0)",
          "300": "rgba(24, 28, 37, 0)",
          "400": "rgba(17, 20, 27, 0)",
        },
      },
      solid: {
        red: {
          "100": "#ffe6e6",
          "200": "#ffbfbf",
          "300": "#ff9999",
          "400": "#ff7373",
          "500": "#ff4d4d",
          "600": "#f92e26",
          "700": "#e6190e",
          "800": "#db0800",
          "900": "#c40000",
          "1000": "#a60000",
          "1100": "#880000",
          "1200": "#6a0000",
          "1300": "#4d0000",
        },
        orange: {
          "100": "#feefe7",
          "200": "#fdd7c2",
          "300": "#fbbf9d",
          "400": "#faa778",
          "500": "#f88f54",
          "600": "#f7772f",
          "700": "#f55f0a",
          "800": "#d85409",
          "900": "#bc4908",
          "1000": "#9f3e07",
          "1100": "#833305",
          "1200": "#662804",
          "1300": "#4a1d03",
        },
        yellow: {
          "100": "#fff7e6",
          "200": "#ffeabf",
          "300": "#ffdd99",
          "400": "#ffce73",
          "500": "#ffbe4d",
          "600": "#ffae26",
          "700": "#ff9c13",
          "800": "#e18d00",
          "900": "#c47d00",
          "1000": "#a66c00",
          "1100": "#885a00",
          "1200": "#6a4800",
          "1300": "#4d3500",
        },
        mustard: {
          "100": "#fef9e7",
          "200": "#fdf1c2",
          "300": "#fce89d",
          "400": "#fbe079",
          "500": "#f9d754",
          "600": "#f8cf30",
          "700": "#f7c60b",
          "800": "#daaf0a",
          "900": "#bd9808",
          "1000": "#a18107",
          "1100": "#846a06",
          "1200": "#675305",
          "1300": "#4a3b03",
        },
        olive: {
          "100": "#fcfbe6",
          "200": "#f7f6c0",
          "300": "#f3f09a",
          "400": "#eeeb74",
          "500": "#e9e54e",
          "600": "#e5e028",
          "700": "#e0da02",
          "800": "#c6c102",
          "900": "#aca702",
          "1000": "#928e01",
          "1100": "#787401",
          "1200": "#5d5b01",
          "1300": "#434101",
        },
        green: {
          "100": "#e6fae9",
          "200": "#bfefc8",
          "300": "#99e2a8",
          "400": "#73d089",
          "500": "#4dbc6b",
          "600": "#26a44e",
          "700": "#008832",
          "800": "#00822a",
          "900": "#007a22",
          "1000": "#006f1b",
          "1100": "#006114",
          "1200": "#00500f",
          "1300": "#003d0a",
        },
        emerald: {
          "100": "#e6fff9",
          "200": "#bfffed",
          "300": "#99ffdf",
          "400": "#73f9cf",
          "500": "#4decbc",
          "600": "#26daa7",
          "700": "#00c390",
          "800": "#00bb86",
          "900": "#00ae7a",
          "1000": "#009e6d",
          "1100": "#00885d",
          "1200": "#006a4c",
          "1300": "#004d39",
        },
        tiffany: {
          "100": "#e8fdf8",
          "200": "#c5faef",
          "300": "#a2f7e5",
          "400": "#7ff3db",
          "500": "#5df0d1",
          "600": "#3aedc7",
          "700": "#17eabd",
          "800": "#14cfa7",
          "900": "#12b391",
          "1000": "#0f987b",
          "1100": "#0c7d65",
          "1200": "#0a624f",
          "1300": "#074639",
        },
        teal: {
          "100": "#e6fafa",
          "200": "#bff2f2",
          "300": "#99ebeb",
          "400": "#73e3e3",
          "500": "#4ddbdb",
          "600": "#26d4d4",
          "700": "#00cccc",
          "800": "#00b4b4",
          "900": "#009c9c",
          "1000": "#008585",
          "1100": "#006d6d",
          "1200": "#005555",
          "1300": "#003d3d",
        },
        seawater: {
          "100": "#e7f6f7",
          "200": "#c2e7eb",
          "300": "#9dd9df",
          "400": "#78cbd4",
          "500": "#54bdc8",
          "600": "#2faebc",
          "700": "#0aa0b0",
          "800": "#098d9c",
          "900": "#087b87",
          "1000": "#076872",
          "1100": "#05555e",
          "1200": "#044349",
          "1300": "#033035",
        },
        blue: {
          "100": "#e6f5ff",
          "200": "#bfe7ff",
          "300": "#99d8ff",
          "400": "#73c9ff",
          "500": "#53b9ff",
          "600": "#3daaff",
          "700": "#2c9aff",
          "800": "#1789e1",
          "900": "#0777c4",
          "1000": "#0066a6",
          "1100": "#005488",
          "1200": "#00426a",
          "1300": "#00304d",
        },
        sapphire: {
          "100": "#e7eafe",
          "200": "#c2c9fd",
          "300": "#9ea9fc",
          "400": "#7989fb",
          "500": "#5569f9",
          "600": "#3148f8",
          "700": "#0c28f7",
          "800": "#0b23da",
          "900": "#091fbd",
          "1000": "#081aa1",
          "1100": "#061584",
          "1200": "#051167",
          "1300": "#040c4a",
        },
        blueberry: {
          "100": "#ede6fc",
          "200": "#d2c0f7",
          "300": "#b69af3",
          "400": "#9b74ee",
          "500": "#804ee9",
          "600": "#6428e5",
          "700": "#4902e0",
          "800": "#4102c6",
          "900": "#3802ac",
          "1000": "#2f0192",
          "1100": "#270178",
          "1200": "#1e015d",
          "1300": "#160143",
        },
        grape: {
          "100": "#f2e7fa",
          "200": "#dfc3f3",
          "300": "#cc9eec",
          "400": "#b97ae5",
          "500": "#a556dd",
          "600": "#9231d6",
          "700": "#7f0dcf",
          "800": "#700cb7",
          "900": "#610a9f",
          "1000": "#530987",
          "1100": "#44076e",
          "1200": "#350556",
          "1300": "#26043e",
        },
        magenta: {
          "100": "#fae7fe",
          "200": "#f2c3fd",
          "300": "#ea9efc",
          "400": "#e27afb",
          "500": "#db56f9",
          "600": "#d331f8",
          "700": "#cb0df7",
          "800": "#b30cda",
          "900": "#9c0abd",
          "1000": "#8409a1",
          "1100": "#6c0784",
          "1200": "#550567",
          "1300": "#3d044a",
        },
        cherry: {
          "100": "#ffe6e7",
          "200": "#ffbfc6",
          "300": "#ff99a6",
          "400": "#ff7389",
          "500": "#ff4d6e",
          "600": "#f32656",
          "700": "#de0040",
          "800": "#d40032",
          "900": "#c40025",
          "1000": "#a6001a",
          "1100": "#880011",
          "1200": "#6a000a",
          "1300": "#4d0005",
        },
        coral: {
          "100": "#ffe6e6",
          "200": "#ffbfc2",
          "300": "#ff9ba3",
          "400": "#ff7e88",
          "500": "#ff6671",
          "600": "#ff535e",
          "700": "#ff444f",
          "800": "#e12e3a",
          "900": "#c41c28",
          "1000": "#a60e19",
          "1100": "#88030d",
          "1200": "#6a0004",
          "1300": "#4d0000",
        },
        slate: {
          "50": "#ffffff",
          "75": "#f6f7f8",
          "100": "#ebecef",
          "200": "#ced0d6",
          "300": "#b1b4bc",
          "400": "#9498a2",
          "500": "#787d88",
          "600": "#5c616d",
          "700": "#414652",
          "800": "#383d4a",
          "900": "#303541",
          "1000": "#282c38",
          "1100": "#20242f",
          "1200": "#181c25",
          "1300": "#11141b",
          "1400": "#000000",
        },
      },
    },
    spacing: {
      "50": "0",
      "75": "1px",
      "100": "2px",
      "200": "4px",
      "300": "6px",
      "400": "8px",
      "500": "10px",
      "600": "12px",
      "700": "14px",
      "800": "16px",
      "900": "18px",
      "1000": "20px",
      "1100": "22px",
      "1200": "24px",
      "1300": "26px",
      "1400": "28px",
      "1500": "30px",
      "1600": "32px",
      "1700": "34px",
      "1800": "36px",
      "1900": "38px",
      "2000": "40px",
      "2100": "42px",
      "2200": "44px",
      "2300": "46px",
      "2400": "48px",
      "2500": "50px",
      "2600": "52px",
      "2700": "54px",
      "2800": "56px",
      "2900": "58px",
      "3000": "60px",
      "3100": "62px",
      "3200": "64px",
      "3300": "66px",
      "3400": "68px",
      "3500": "70px",
      "3600": "72px",
      "3700": "74px",
      "3800": "76px",
      "3900": "78px",
      "4000": "80px",
      "4100": "82px",
      "4200": "84px",
      "4300": "86px",
      "4400": "88px",
      "4500": "90px",
      "4600": "92px",
      "4700": "94px",
      "4800": "96px",
      "4900": "98px",
      "5000": "100px",
      "general-none": "var(--semantic-spacing-general-none)",
      "general-3xs": "var(--semantic-spacing-general-3xs)",
      "general-2xs": "var(--semantic-spacing-general-2xs)",
      "general-xs": "var(--semantic-spacing-general-xs)",
      "general-sm": "var(--semantic-spacing-general-sm)",
      "general-md": "var(--semantic-spacing-general-md)",
      "general-lg": "var(--semantic-spacing-general-lg)",
      "general-xl": "var(--semantic-spacing-general-xl)",
      "general-2xl": "var(--semantic-spacing-general-2xl)",
      "general-3xl": "var(--semantic-spacing-general-3xl)",
      "general-4xl": "var(--semantic-spacing-general-4xl)",
      "general-5xl": "var(--semantic-spacing-general-5xl)",
      "gap-none": "var(--semantic-spacing-gap-none)",
      "gap-2xs": "var(--semantic-spacing-gap-2xs)",
      "gap-xs": "var(--semantic-spacing-gap-xs)",
      "gap-sm": "var(--semantic-spacing-gap-sm)",
      "gap-md": "var(--semantic-spacing-gap-md)",
      "gap-lg": "var(--semantic-spacing-gap-lg)",
      "gap-xl": "var(--semantic-spacing-gap-xl)",
      "gap-2xl": "var(--semantic-spacing-gap-2xl)",
      "gap-3xl": "var(--semantic-spacing-gap-3xl)",
      "gap-4xl": "var(--semantic-spacing-gap-4xl)",
      "paragraphSpacing-heading-hero":
        "var(--semantic-paragraph-spacing-heading-hero)",
      "paragraphSpacing-heading-h1":
        "var(--semantic-paragraph-spacing-heading-h1)",
      "paragraphSpacing-heading-h2":
        "var(--semantic-paragraph-spacing-heading-h2)",
      "paragraphSpacing-heading-h3":
        "var(--semantic-paragraph-spacing-heading-h3)",
      "paragraphSpacing-heading-h4":
        "var(--semantic-paragraph-spacing-heading-h4)",
      "paragraphSpacing-heading-h5":
        "var(--semantic-paragraph-spacing-heading-h5)",
      "paragraphSpacing-heading-h6":
        "var(--semantic-paragraph-spacing-heading-h6)",
      "paragraphSpacing-body-xl": "var(--semantic-paragraph-spacing-body-xl)",
      "paragraphSpacing-body-lg": "var(--semantic-paragraph-spacing-body-lg)",
      "paragraphSpacing-body-md": "var(--semantic-paragraph-spacing-body-md)",
      "paragraphSpacing-body-sm": "var(--semantic-paragraph-spacing-body-sm)",
      "paragraphSpacing-caption": "var(--semantic-paragraph-spacing-caption)",
      "paragraphSpacing-code-xl": "var(--semantic-paragraph-spacing-code-xl)",
      "paragraphSpacing-code-lg": "var(--semantic-paragraph-spacing-code-lg)",
      "paragraphSpacing-code-md": "var(--semantic-paragraph-spacing-code-md)",
      "paragraphSpacing-code-sm": "var(--semantic-paragraph-spacing-code-sm)",
      "paragraphSpacing-50": "12px",
      "paragraphSpacing-75": "14px",
      "paragraphSpacing-100": "16px",
      "paragraphSpacing-200": "18px",
      "paragraphSpacing-300": "20px",
      "paragraphSpacing-400": "24px",
      "paragraphSpacing-500": "32px",
      "paragraphSpacing-600": "40px",
      "paragraphSpacing-700": "48px",
      "paragraphSpacing-800": "64px",
      "paragraphSpacing-900": "80px",
      "paragraphSpacing-1000": "28px",
      "paragraphSpacing-1100": "34px",
    },
    borderRadius: {
      "50": "0px",
      "100": "2px",
      "200": "4px",
      "300": "6px",
      "400": "8px",
      "500": "10px",
      "600": "12px",
      "700": "14px",
      "800": "16px",
      "900": "18px",
      "1000": "20px",
      "1100": "22px",
      "1200": "24px",
      "1300": "26px",
      "1400": "28px",
      "1500": "30px",
      "1600": "32px",
      "1700": "34px",
      "1800": "36px",
      "1900": "38px",
      "2000": "40px",
      "2100": "42px",
      "2200": "44px",
      "2300": "46px",
      "2400": "48px",
      "2500": "50px",
      "2600": "52px",
      "2700": "54px",
      "2800": "56px",
      "2900": "58px",
      "3000": "60px",
      "3100": "62px",
      "3200": "64px",
      "3300": "66px",
      "3400": "68px",
      "3500": "70px",
      "3600": "72px",
      "3700": "74px",
      "3800": "76px",
      "3900": "78px",
      "4000": "80px",
      "4100": "82px",
      "4200": "84px",
      "4300": "86px",
      "4400": "88px",
      "4500": "90px",
      "4600": "92px",
      "4700": "94px",
      "4800": "96px",
      "4900": "98px",
      "5000": "100px",
      none: "var(--semantic-border-radius-none)",
      xs: "var(--semantic-border-radius-xs)",
      sm: "var(--semantic-border-radius-sm)",
      md: "var(--semantic-border-radius-md)",
      lg: "var(--semantic-border-radius-lg)",
      xl: "var(--semantic-border-radius-xl)",
      "2xl": "var(--semantic-border-radius-2xl)",
      pill: "var(--semantic-border-radius-pill)",
    },
    fontWeight: {
      light: "300",
      regular: "400",
      bold: "700",
      italic: "Italic",
      boldItalic: "700 italic",
    },
    extend: {},
  },
};

module.exports = QuillTailwindConfig;
