#!/bin/bash

. include.sh

confirm "Are you sure" "Y"

if [ "$(result)" == "yes" ]; then
    echo 'yes'
else
    echo 'no'
fi
