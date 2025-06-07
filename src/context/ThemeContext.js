// src/ThemeContext.js
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

 
  // const [theme, setTheme] = useState({
  //   primaryColor: "#8B5CF6",       // Pastel mor - zarif ve davetkar
  //   secondaryColor: "#F472B6",     // Pastel pembe - yumuşak ve modern vurgu
  //   backgroundColor: "#FFF7ED",    // Çok açık krem - sıcak ve ferah arka plan
  //   primaryTextColor: "#4338CA",   // Koyu mavi-mor - okunaklı ve şık
  //   secondaryTextColor: "#9CA3AF", // Gri-mavi - yumuşak metinler için
  //   accentColor: "#FBBF24",        // Pastel sarı - enerjik ama soft vurgu
  // });
  
  // const [theme, setTheme] = useState({
  //   primaryColor: "#2563EB",       // Canlı kobalt mavisi - profesyonel ve modern
  //   secondaryColor: "#10B981",     // Zümrüt yeşili - dengeli ve rahatlatıcı vurgu
  //   backgroundColor: "#F3F4F6",    // Çok açık gri - nötr ve temiz arka plan
  //   primaryTextColor: "#1F2937",   // Koyu füme - yüksek okunabilirlik için
  //   secondaryTextColor: "#6B7280", // Orta gri - yumuşak metinler için
  //   accentColor: "#F59E0B",        // Turuncu-altın - dikkat çekici ama sıcak vurgu
  // });

  // const [theme, setTheme] = useState({
  //   primaryColor: "#3B82F6",       // Canlı safir mavisi, ferah ve dikkat çekici
  //   secondaryColor: "#10B981",     // Soft zümrüt yeşili, huzur ve doğallık hissi
  //   backgroundColor: "#F9FAFB",    // Neredeyse beyaz, hafif buzlu ton
  //   primaryTextColor: "#111827",   // Koyu gece mavisi (neredeyse siyah)
  //   secondaryTextColor: "#6B7280", // Soft gri-mavi, yumuşak kontrast
  //   accentColor: "#F97316",        // Turuncu vurgu, enerjik ve sıcak
  // });
  // const [theme, setTheme] = useState({
  //   primaryColor: "#4f46e5", // Indigo / mor tonları (modern, soft)
  //   secondaryColor: "#f59e0b", // Amber / sarı vurgu
  //   backgroundColor: "#f9fafb", // Çok açık gri / beyaz arka plan
  //   primaryTextColor: "#111827", // Koyu gri / neredeyse siyah yazı
  //   secondaryTextColor: "#6b7280", // Orta gri yazı
  //   accentColor: "#3b82f6", // Mavi vurgu renkleri için
  // });

  const [theme, setTheme] = useState({
    primaryColor: "#5C6AC4",       // Soğuk mavi-mor arası (modern, sakin)
    secondaryColor: "#F59E0B",     // Sıcak amber sarı (enerjik vurgu)
    backgroundColor: "#F3F4F6",    // Açık gri, nötr ve temiz arka plan
    primaryTextColor: "#1F2937",   // Koyu mavi-gri (göz yormayan siyah alternatifi)
    secondaryTextColor: "#4B5563", // Orta gri ton, okunabilir ve yumuşak
    accentColor: "#2563EB",        // Canlı safir mavisi vurgu
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
