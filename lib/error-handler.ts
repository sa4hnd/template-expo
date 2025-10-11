// Custom error handler to override Expo's error overlay
// Only run on React Native (not web)
if (typeof require !== 'undefined') {
  try {
    const { ErrorUtils } = require('react-native');
    
    // Disable Expo's error overlay by overriding the global error handler
    const originalErrorHandler = ErrorUtils.getGlobalHandler();

    ErrorUtils.setGlobalHandler((error, isFatal) => {
      // Log the error to console
      console.error('🚨 Custom Error Handler:', error);
      console.error('🚨 Error Stack:', error.stack);
      
      // Don't call the original handler to prevent Expo's overlay
      // This will prevent the red error screen from showing
    });

    // Handle unhandled promise rejections
    if (typeof global !== 'undefined') {
      global.onunhandledrejection = (event) => {
        console.error('🚨 Unhandled Promise Rejection:', event.reason);
        // Prevent the default behavior
        event.preventDefault();
      };
    }
  } catch (error) {
    // ErrorUtils not available (probably on web)
    console.log('ErrorUtils not available, skipping custom error handler');
  }
}

export {};
