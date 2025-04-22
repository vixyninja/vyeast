#!/bin/bash

TARGET_DIR=${1:-"./src/components/ui"}
OUTPUT_FILE="$TARGET_DIR/index.ts"

rm -f "$OUTPUT_FILE"

for file in "$TARGET_DIR"/*.ts "$TARGET_DIR"/*.tsx; do
  filename=$(basename "$file")
  name="${filename%.*}"

  if [[ "$filename" != "index.ts" && "$filename" != _* ]]; then
    echo "export * from './$name';" >>"$OUTPUT_FILE"
  fi
done
