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

    announce(message, "polite");
  }, [count]);
}

export default useFilterAnnouncement;
