import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(
    error
  ) {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(
    error,
    errorInfo
  ) {
    console.error(
      "ErrorBoundary:",
      error,
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-lg border border-red-200 bg-red-50 p-6">
          <h2 className="mb-2 text-lg font-semibold text-red-700">
            Something went wrong
          </h2>

          <pre className="overflow-auto text-sm text-red-600">
            {this.state.error?.message}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;