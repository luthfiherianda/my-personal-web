import { useEffect, useState } from "react";

export function useTypewriter(
  text,
  { typeSpeed = 65, deleteSpeed = 45, pauseMs = 5000 } = {},
) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const delay =
      phase === "pause"
        ? pauseMs
        : phase === "deleting"
          ? deleteSpeed
          : typeSpeed;

    const timeout = setTimeout(() => {
      if (phase === "typing") {
        if (displayed.length < text.length) {
          setDisplayed(text.slice(0, displayed.length + 1));
        } else {
          setPhase("pause");
        }
      } else if (phase === "pause") {
        setPhase("deleting");
      } else if (displayed.length > 0) {
        setDisplayed(text.slice(0, displayed.length - 1));
      } else {
        setPhase("typing");
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayed, phase, text, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}
