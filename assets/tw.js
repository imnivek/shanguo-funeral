/* 善果佛化禮儀．Stitch 拼貼畫布設計系統 Tailwind 設定 */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "warm-gold": "#D4AF37",
        "gold-dark": "#A8842A",
        "gold-soft": "#E9C349",
        "calming-teal": "#2E5A56",
        "teal-deep": "#1F3F3C",
        "sunset-peach": "#F2997B",
        "peach-soft": "#F8C5AF",
        "paper-cream": "#FDFBF7",
        "paper-dim": "#F2EDE2",
        "paper-warm": "#F6EFE2",
        "ink-grey": "#33312C",
        "ink-soft": "#5C564B",
        "primary": "#735C00",
        "primary-container": "#D4AF37",
        "on-primary-container": "#554300",
        "lotus-pink": "#E9BFCB",
        "outline": "#C9BE9E",
        "outline-soft": "#E4DAC4"
      },
      fontFamily: {
        serif: ["Noto Serif TC", "serif"],
        sans: ["Noto Sans TC", "sans-serif"]
      },
      maxWidth: { container: "1180px" },
      borderRadius: { blob: "42% 58% 60% 40% / 45% 45% 55% 55%" },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(28px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        haze: { "0%,100%": { opacity: .35 }, "50%": { opacity: .7 } }
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        haze: "haze 6s ease-in-out infinite"
      }
    }
  }
};
