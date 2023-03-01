<div align="center">
  <h1>📦 use-is-on-screen</h1>

  <p><strong>useIsOnScreen is a React Hook</strong> to check when the component is mounted.</p>

<!-- prettier-ignore-start -->
[![build][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![downloads][downloads-badge]][npmtrends]
<!-- prettier-ignore-end -->

</div>

---

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Motivation](#motivation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Bugs and Sugestions](#bugs-and-sugestions)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Motivation

- Check when a element is in the viewport
- Use React ref's to get the specific element

## Usage

To start using the `use-is-on-screen` in your project, first install in your project:

`yarn add use-is-on-screen` or `npm install use-is-on-screen`

<details open>
<summary><strong>Avoid set state when unmounted component:</strong></summary>

```jsx
import useIsOnscreen from './hooks/use-is-on-screen';

function App() {
  const [isFirstOnscreen, firstElementRef] = useIsOnscreen();
  const [isSecondOnscreen, secondElementRef] = useIsOnscreen();

  return (
    <>
      <header>
        First box visible: {isFirstOnscreen ? 'YES' : 'NO'}
        <br />
        Second box visible: {isSecondOnscreen ? 'YES' : 'NO'}
      </header>
      <div className="wrapper">
        <div ref={firstElementRef} className="first box" />
        <div ref={secondElementRef} className="second box" />
      </div>
    </>
  );
}
```

</details>

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Bugs and Sugestions

Report bugs or do suggestions using the [issues](https://github.com/helderberto/use-is-on-screen/issues).

## License

[MIT License](LICENSE) © [helderberto](https://helderberto.com)

<!-- prettier-ignore-start -->
[version-badge]: https://img.shields.io/npm/v/use-is-on-screen.svg?style=flat-square
[package]: https://www.npmjs.com/package/use-is-on-screen
[downloads-badge]: https://img.shields.io/npm/dm/use-is-on-screen.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/use-is-on-screen
[license-badge]: https://img.shields.io/npm/l/use-is-on-screen.svg?style=flat-square
[license]: https://github.com/helderberto/use-is-on-screen/blob/master/LICENSE
[build]: https://github.com/helderberto/use-is-on-screen/actions
[build-badge]: https://github.com/helderberto/use-is-on-screen/actions/workflows/ci.yml/badge.svg
<!-- prettier-ignore-end -->
