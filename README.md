basen
------------------------------------------------

## Install
``` bash
npm install basen
```

## Usage
``` js
import basen from 'basen';

basen(1234, '01'); // => 10011010010
basen(1234, '0124567'); // => 4512
basen(1234, '0123456789'); // => 1234
basen(1234, '0123456789ABCDEF'); // => 4D2
basen(1234, 'abcdefghijklmnopqrstuvwxyz'); // => bvm
basen(1234, 'あいうえおかきくけこさしすせそ'); // => かくお
```

## License
[MIT](LICENSE)
