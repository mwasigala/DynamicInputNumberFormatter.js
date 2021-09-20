# What is this?
Dynamic Input Number Formatter

# installation
`npm install dynamicinputnumberformatter --save`



Then ...

```
import {formatInputNumber} from 'dynamicinputnumberformatter/index.js';

formatInputNumber(id); //for one input
formatInputNumber(id1,id2); //for multiple inputs

```

# CDN
```
<script src='https://cdn.jsdelivr.net/gh/mwasigala/DynamicInputNumberFormatter.js@latest/index.min.js'></script> //minified
<script src='https://cdn.jsdelivr.net/gh/mwasigala/DynamicInputNumberFormatter.js@latest/index.js'></script>
```

# Example
``` 

    formatInputNumber('input-money'); 
    formatInputNumber('input-money','input-quantity');

```

# Note 
Input type must be text.
```
<input type='text'>
```


