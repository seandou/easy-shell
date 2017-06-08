#!/bin/bash

# set -x

. load-easy-shell

filelist='
~/Projects/a
~/Projects/b
~/Projects/c
'

eslist "Choose a file" "$filelist"
echo $(esret)
