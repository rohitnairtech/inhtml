# inHTML

![npm](https://img.shields.io/npm/v/inhtml?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/inhtml?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/inhtml?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/inhtml?style=for-the-badge)


inHTML is a light-weight HTML templating engine written in NodeJS. It is used to pre-render saved HTML files.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install inHTML.

```bash
npm install inhtml
```

## Usage

```HTML
<!-- CONSIDERING THAT 'welcome.html' PAGE LOOKS LIKE THIS -->
<h1>Hi, <a href="#{link}">#{name}</a></h1>
```

```javascript
const inHTML = require('inhtml');

const welcomePage = inhtml('./welcome.html');


const finalHTML = welcomePage.render({link:'https://github.com/rohitnairtech', name:'Rohit Nair'});

console.log(finalHTML); // returns 'Hi, Rohit Nair' along with the link
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[ISC](https://www.isc.org/)
