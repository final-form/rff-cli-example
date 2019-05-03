# rff-cli-example

This package is an example of how [🏁 React Final Form](https://github.com/final-form/react-final-form#-react-final-form) can be used to maintain form data in a CLI app using [Ink](https://github.com/vadimdemedes/ink) and [Pastel](https://github.com/vadimdemedes/pastel), by [@vadimdemedes](https://github.com/vadimdemedes).

The app simulates a project scaffolding CLI app, like what happens when you run `npm init`.

## Features

- Text inputs
- Select inputs
- Multi-Select inputs
- Sync validation – Some of the fields are required, and others must conform to a certain structure.
- Async validation – it will check to see if the package name you have selected is available on NPM.

The main purpose is to demonstrate a proof of concept, but you are welcome to copy and reuse the `TextInput`, `SelectInput`, and `MultiSelect` input components as you wish.

## Run it

```bash
$ npx rff-cli-example
```

<p align="center"><img src="https://raw.githubusercontent.com/final-form/rff-cli-example/master/demo.gif"/></p>
