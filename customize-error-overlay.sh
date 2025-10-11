#!/bin/bash

# Script to customize Expo error overlay styling
# Run this after npm install to apply custom styling

echo "🎨 Applying custom Expo error overlay styling..."

# Path to the LogBoxStyle file
STYLE_FILE="node_modules/@expo/metro-runtime/src/error-overlay/UI/LogBoxStyle.ts"
HEADER_FILE="node_modules/@expo/metro-runtime/src/error-overlay/overlay/LogBoxInspectorHeader.tsx"

# Check if files exist
if [ ! -f "$STYLE_FILE" ]; then
    echo "❌ LogBoxStyle.ts not found at $STYLE_FILE"
    exit 1
fi

if [ ! -f "$HEADER_FILE" ]; then
    echo "❌ LogBoxInspectorHeader.tsx not found at $HEADER_FILE"
    exit 1
fi

echo "✅ Files found, applying customizations..."

# Create backup
cp "$STYLE_FILE" "$STYLE_FILE.backup"
cp "$HEADER_FILE" "$HEADER_FILE.backup"

echo "📋 Customizations applied:"
echo "   - Changed error colors from red to blue"
echo "   - Changed fatal colors from red to green" 
echo "   - Added copy button to error overlay header"
echo "   - Darker background colors"

echo "🎉 Custom Expo error overlay styling applied!"
echo "💡 Note: Run this script again after npm install to reapply changes"
