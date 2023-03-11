import React from "react";
import Counter from "./components/ErrorBoundary/Counter";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Counter />
        <Counter />
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}
