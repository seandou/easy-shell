# Easy Shell

Make shell more easy to use.



## Installation

```
npm install -g easy-shell
```

## Get started

```
#!/bin/bash

. load-easy-shell

# use easy shell components
```



## Components

### list

```
options='
~/Projects/a
~/Projects/b
~/Projects/c
'

list "Choose a file" "$options"
echo $(result)
```

### confirm

```
confirm "Are you sure" "Y"

if [ "$(result)" == "yes" ]; then
    echo 'yes'
else
    echo 'no'
fi
```



## Dependencies

- [Inquirer.js](https://github.com/sboudrias/Inquirer.js)

