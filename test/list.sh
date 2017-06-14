#!/bin/bash

# set -x

. include.sh

options='
~/Projects/a
~/Projects/b
~/Projects/c
'

list "Choose a file" "$options"
echo $(result)
