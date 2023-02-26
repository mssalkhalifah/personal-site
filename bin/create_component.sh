#!/bin/bash

echo "Script executed from: ${PWD}"

if [[ -z "$1" ]]; then
  echo "ERROR: Must provide a name"
  exit "1"
fi

echo "Creating ${1} component..."

