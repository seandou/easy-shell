# Easy Shell

Make shell more easy to use.



## Usage

### Installation

```
npm install -g easy-shell
```

### Get started

```
#!/bin/bash

. load-easy-shell

# use easy shell components
```



### Components

#### eslist

```
filelist='
~/Projects/a
~/Projects/b
~/Projects/c
'

eslist "Choose a file" "$filelist"
echo $(esret)
```



## Dependencies

- [Inquirer.js](https://github.com/sboudrias/Inquirer.js)