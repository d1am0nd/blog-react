import * as React from 'react';
import styled from 'styled-components';
import {color1, color2} from '../misc/styles';

const ErrorContainer = styled.div`
  padding: 20px;
  margin: 20px 0;
  border: 1px solid ${color2};
  border-radius: 4px;
  background-color: #fdf2f2;
  color: ${color1};
`;

const ErrorTitle = styled.h2`
  color: ${color2};
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
`;

const ErrorDetails = styled.details`
  margin-top: 10px;
  font-size: 12px;
  color: #666;
`;

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{error: Error | null; resetError: () => void}>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return (
        <ErrorContainer>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </ErrorMessage>
          <button onClick={this.resetError} style={{
            padding: '8px 16px',
            backgroundColor: color1,
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Try again
          </button>
          <ErrorDetails>
            <summary>Error details</summary>
            <pre>{this.state.error?.message}</pre>
          </ErrorDetails>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;