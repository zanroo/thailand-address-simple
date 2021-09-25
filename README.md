# Thailand Address Simple

ต้นฉบับ: [https://earthchie.github.io/jquery.Thailand.js](https://earthchie.github.io/jquery.Thailand.js/) v1.5.3.5
Demo: [https://jakkarin.github.io/thailand-address-simple](https://jakkarin.github.io/thailand-address-simple/)

## ติดตั้ง

yarn

```shell
yarn add thailand-address-simple
```

npm

```shell
npm install thailand-address-simple
```

## วิธีใช้

browser

```html
<html>
    <head>
        <!-- ... -->
        <script src="https://jakkarin.github.io/thailand-address-simple/dist/bundle.umd.js"></script>
    </head>
    <body>
        <!-- ... -->
        <script>
            const address = new ThailandAddressSimple();
            address.init().then(() => {
                address.search("สมเด็จ กาฬสินธุ์");
            });
        </script>
    </body>
</html>
```

nodejs

```typescript
import ThailandAddressSimple from "thailand-address-simple";

const address = new ThailandAddressSimple();

address.init().then(() => {
    // result
    // [
    //     {
    //         amphoe: 'สมเด็จ';
    //         district: 'สมเด็จ';
    //         province: 'กาฬสินธุ์';
    //         zipcode: '46150';
    //     },
    //     ...
    // ]
    address.search("สมเด็จ กาฬสินธุ์");
    address.searchByZipCode("46150");
    address.searchByDistrict("สมเด็จ");
    address.searchByAmphoe("สมเด็จ");
    address.searchByProvince("กาฬสินธุ์");
});
```

## License

WTFPL 2.0 http://www.wtfpl.net
Also MIT (formally)
