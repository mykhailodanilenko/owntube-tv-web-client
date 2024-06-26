import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { Appearance, ColorSchemeName } from "react-native";
import { readFromAsyncStorage, writeToAsyncStorage } from "../utils";

const ColorSchemeContext = createContext<{ scheme: ColorSchemeName | null; toggleScheme?: () => void }>({
  scheme: null,
});

export const ColorSchemeContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedColorScheme, setSelectedColorScheme] = useState<ColorSchemeName | null>(null);

  useEffect(() => {
    if (!selectedColorScheme) {
      const deviceScheme = Appearance.getColorScheme();

      readFromAsyncStorage("colorScheme").then((scheme: ColorSchemeName) => {
        setSelectedColorScheme(scheme || deviceScheme || "light");
      });

      return;
    }

    writeToAsyncStorage("colorScheme", selectedColorScheme);
  }, [selectedColorScheme]);

  const toggleScheme = () => setSelectedColorScheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ColorSchemeContext.Provider value={{ scheme: selectedColorScheme, toggleScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorSchemeContext = () => useContext(ColorSchemeContext);
