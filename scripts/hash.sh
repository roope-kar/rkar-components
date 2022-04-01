#!/bin/bash

function main {
    local files=("$@")
    for file in "${files[@]}"; do
        extension="${file##*.}"
        name="${file%.*}"
        cp $file $name.$(get_hash $file 10).$extension
    done
}

function get_hash {
    local file=$1
    local limit="${2:-10}"
    echo $(git hash-object $file | cut -b 1-$limit)
}

main $@
