import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headingcolour:"#FFFFFF",
        button: "#FF9F0D",  
        Herobackground:'#fffffff', 
        Heroellips:"#FFFFFF",
        footercolour:"#4F4F4F",
        background: "rgba(13, 13, 13, 1)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
