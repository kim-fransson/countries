"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { RouterProvider as RACRouterProvider } from "react-aria-components";

interface RouterProviderProps {
  children: React.ReactNode;
}

function RouterProvider({ children }: RouterProviderProps) {
  const router = useRouter();

  return (
    <RACRouterProvider navigate={router.push}>
      {children}
    </RACRouterProvider>
  );
}

export default RouterProvider;
