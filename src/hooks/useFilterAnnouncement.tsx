import React from "react";
import { announce } from "@react-aria/live-announcer";

function useFilterAnnouncement(count: number): void {
  const isInitialRender = React.useRef(true);

  React.useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const message =
      count === 0
        ? "No countries found"
        : count === 1
          ? "1 country found"
          : `${count} countries found`;

    // Delay so the announcement doesn't interrupt
    // the screen reader announcing search input changes.
    const timeoutId = window.setTimeout(() => {
      announce(message, "polite");
    }, 500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [count]);
}

export default useFilterAnnouncement;
