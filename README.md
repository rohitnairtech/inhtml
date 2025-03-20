# inHTML

![npm](https://img.shields.io/npm/v/inhtml?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/inhtml?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/inhtml?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/inhtml?style=for-the-badge)

inHTML is a lightweight HTML templating engine written in NodeJS. It allows you to pre-render HTML templates with ease using simple placeholders and partials.

## Features

- Lightweight and fast HTML rendering
- Supports placeholders using `#{variableName}`
- Supports partial templates using `#{>partialName}`
- Optional HTML escaping to prevent XSS

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install inHTML.

```bash
npm install inhtml
```

## Usage

### Basic Example

```html
<!-- welcome.html -->
<h1>Hi, <a href="#{link}">#{name}</a></h1>
```

```javascript
const inHTML = require('inhtml');
const welcomePage = inHTML('./welcome.html');

const finalHTML = welcomePage.render({
  link: 'https://github.com/rohitnairtech',
  name: 'Rohit Nair'
});

console.log(finalHTML);
// Output: '<h1>Hi, <a href="https://github.com/rohitnairtech">Rohit Nair</a></h1>'
```

---

### Using Partials

You can reuse HTML templates using partials with `#{>partialName}`.

```html
<!-- header.html -->
<h1>Welcome, #{name}!</h1>
```

```html
<!-- layout.html -->
<div>
  #{>header}
  <p>Your profile is ready.</p>
</div>
```

```javascript
const inHTML = require('inhtml');
const layoutPage = inHTML('./layout.html', {
  partials: {
    header: '<h1>Welcome, #{name}!</h1>'
  }
});

const finalHTML = layoutPage.render({ name: 'Rohit' });
console.log(finalHTML);
// Output: '<div><h1>Welcome, Rohit!</h1><p>Your profile is ready.</p></div>'
```

---

### HTML Escaping

To prevent XSS attacks, you can enable HTML escaping.

```javascript
const inHTML = require('inhtml');
const page = inHTML('./welcome.html', { escapeHtml: true });

const finalHTML = page.render({
  name: '<script>alert("XSS")</script>',
  link: 'https://example.com'
});

console.log(finalHTML);
// Output: '<h1>Hi, <a href="https://example.com">&lt;script&gt;alert("XSS")&lt;/script&gt;</a></h1>'
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[ISC](https://www.isc.org/)

