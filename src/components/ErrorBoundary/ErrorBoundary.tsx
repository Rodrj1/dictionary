import { Component } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  { children: JSX.Element },
  ErrorBoundaryState
> {
  constructor(props: { children: JSX.Element }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <br />
          <h2>
            Oops seems either the word does not exist or the API is down.
            Refresh the page so the searcher works again.
          </h2>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
