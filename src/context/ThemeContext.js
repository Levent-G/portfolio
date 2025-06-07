// src/ThemeContext.js
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: "#4f46e5", // Indigo / mor tonları (modern, soft)
    secondaryColor: "#f59e0b", // Amber / sarı vurgu
    backgroundColor: "#f9fafb", // Çok açık gri / beyaz arka plan
    primaryTextColor: "#111827", // Koyu gri / neredeyse siyah yazı
    secondaryTextColor: "#6b7280", // Orta gri yazı
    accentColor: "#3b82f6", // Mavi vurgu renkleri için
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
