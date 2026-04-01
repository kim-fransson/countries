import React from "react";

import FlagCardSkeleton from "./FlagCardSkeleton";
import skeletonStyles from "./FlagCardSkeletonGrid.module.css";
import gridStyles from "./FlagCardListView.module.css";

function FlagCardSkeletonGrid() {
  return (
    <>
      <div className={skeletonStyles.controls}>
        <div className={skeletonStyles.searchPlaceholder} />
        <div className={skeletonStyles.dropdownPlaceholder} />
      </div>
      <div className={gridStyles.grid} aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <FlagCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
}

export default FlagCardSkeletonGrid;
