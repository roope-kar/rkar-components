#!/bin/bash

function main {
    local files=("$@")
    echo $(brotli --quality=11 $files)
}

main $@
