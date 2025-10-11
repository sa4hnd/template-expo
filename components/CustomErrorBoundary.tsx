import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export class CustomErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    
    // You can log the error to an error reporting service here
    console.error('Custom Error Boundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleCopyError = async () => {
    const errorDetails = {
      message: this.state.error?.message || 'Unknown error',
      stack: this.state.error?.stack || 'No stack trace available',
      componentStack: this.state.errorInfo?.componentStack || 'No component stack available',
      timestamp: new Date().toISOString(),
    };

    const errorText = `Error Details:
Message: ${errorDetails.message}

Stack Trace:
${errorDetails.stack}

Component Stack:
${errorDetails.componentStack}

Timestamp: ${errorDetails.timestamp}`;

    try {
      await Clipboard.setStringAsync(errorText);
      Alert.alert('Copied!', 'Error details have been copied to clipboard');
    } catch (error) {
      Alert.alert('Error', 'Failed to copy error details');
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>🚨 Custom Error Screen</Text>
            <TouchableOpacity style={styles.copyButton} onPress={this.handleCopyError}>
              <Text style={styles.copyButtonText}>📋 Copy Error</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.content}>
            <View style={styles.errorSection}>
              <Text style={styles.errorTitle}>Error Details:</Text>
              <Text style={styles.errorMessage}>
                {this.state.error?.message || 'Unknown error occurred'}
              </Text>
            </View>

            {this.state.errorInfo && (
              <View style={styles.stackSection}>
                <Text style={styles.stackTitle}>Component Stack:</Text>
                <Text style={styles.stackText}>
                  {this.state.errorInfo.componentStack}
                </Text>
              </View>
            )}

            <TouchableOpacity style={styles.retryButton} onPress={this.handleRetry}>
              <Text style={styles.retryButtonText}>🔄 Try Again</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background
  },
  header: {
    backgroundColor: '#ff4444', // Red header
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  copyButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  copyButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  errorSection: {
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6b6b',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 20,
  },
  stackSection: {
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  stackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4ecdc4',
    marginBottom: 10,
  },
  stackText: {
    fontSize: 12,
    color: '#cccccc',
    lineHeight: 18,
    fontFamily: 'monospace',
  },
  retryButton: {
    backgroundColor: '#4ecdc4',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  retryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
