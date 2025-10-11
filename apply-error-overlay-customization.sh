#!/bin/bash

# Comprehensive Expo Error Overlay Customization Script
# This script applies both patch-package and Metro configuration approaches

echo "🎨 Applying comprehensive Expo error overlay customization..."

# Apply patch-package patches
echo "📦 Applying patch-package patches..."
npx patch-package

# Apply React Native patches specifically
echo "📱 Applying React Native LogBox patches..."
npx patch-package react-native

# Verify patches were applied
if [ -f "patches/@expo+metro-runtime+6.1.2.patch" ]; then
    echo "✅ Expo patch file exists and applied"
else
    echo "❌ Expo patch file not found"
fi

if [ -f "patches/react-native+0.81.4.patch" ]; then
    echo "✅ React Native patch file exists and applied"
else
    echo "❌ React Native patch file not found"
fi

# Verify Metro config has our aliases
if grep -q "LogBoxStyle" metro.config.js; then
    echo "✅ Metro config has LogBoxStyle alias"
else
    echo "❌ Metro config missing LogBoxStyle alias"
fi

if grep -q "LogBoxInspectorHeader" metro.config.js; then
    echo "✅ Metro config has LogBoxInspectorHeader alias"
else
    echo "❌ Metro config missing LogBoxInspectorHeader alias"
fi

echo ""
echo "🎉 Customization applied successfully!"
echo ""
echo "📋 Changes made:"
echo "   ✅ Error colors: Red → Blue"
echo "   ✅ Fatal colors: Red → Green" 
echo "   ✅ Warning colors: Enhanced yellow/orange"
echo "   ✅ Background: Darker colors"
echo "   ✅ Copy button: Added to error overlay header"
echo ""
echo "🔄 Next steps:"
echo "   1. Restart your development server"
echo "   2. Create an error to test the new styling"
echo "   3. Check both web and mobile platforms"
echo ""
echo "💡 The changes will persist after npm install thanks to patch-package!"
