#!/bin/bash

if [ $# -ne 1 ]; then
  echo "Usage: generate [filename]"
  echo "  generates filename.haml from filename.md"
  exit 1
fi

ruby -e "puts File.read('memo_template.haml').gsub(/FILE_NAME/, '${1}.md')" > $1.haml

