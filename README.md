# Vite Manifest Parser

> Node module to parse [Vite](https://vitejs.dev/) manifest files.

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/brpaz/vite-manifest-parser/CI?style=for-the-badge)](https://github.com/brpaz/vite-manifest-parser/actions/workflows/ci.yml)
![NPM](https://img.shields.io/npm/v/brpaz/vite-manifest-parser?style=for-the-badge)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)


## Install

```sh
npm i @brpaz/vite-manifest-parser --D
```

Or with yarn:

```sh
yarn add @brpaz/vite-manifest-parser --dev
```

## Usage

```js
import { ManifestParser } from 'vite-manifest-parser';

const parser = new ManifestParser('<path to manifest>');
const jsPath = parser.getScript('src/assets/main.js');
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

👤 **Bruno Paz**

* Website: [brunopaz.dev](https://brunopaz.dev)
* Github: [@brpaz](https://github.com/brpaz)
* Twitter: [@brunopaz88](https://twitter.com/brunopaz88)

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
