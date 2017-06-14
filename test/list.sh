#!/bin/bash

. include.sh

options='
~/Projects/a
~/Projects/b
~/Projects/c
'

list "Choose a file" "$options"
echo $(result)
