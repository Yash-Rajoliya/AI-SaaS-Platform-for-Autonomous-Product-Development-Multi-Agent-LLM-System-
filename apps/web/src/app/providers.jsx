import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "./query-client";
import ErrorBoundary from "../components/common/ErrorBoundary";

export default function Providers({ children }) {
  return (
    <ErrorBoundary
      onReset={() => queryClient.clear()}
      fallback={({ reset }) => (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-50 p-4">
          <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-md text-center">
            <h2 className="text-xl font-bold text-slate-800">Application Error</h2>
            <p className="mt-2 text-sm text-slate-600">
              A critical error occurred while initializing application state.
            </p>
            <button
              onClick={reset}
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Reset Application Cache
            </button>
          </div>
        </div>
      )}
    >
      <QueryClientProvider client={queryClient}>
        {children}
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </ErrorBoundary>
  );
}