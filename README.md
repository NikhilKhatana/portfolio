## Instructions

### Setup

```shell
git clone https://github.com/nikhilkhatana/nikhilkhatana.github.io

cd nikhilkhatana.github.io

```

If you use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) (optional) -

```shell
nvm install
nvm use
```

Or -

```shell
fnm install
fnm use
```

Install and run -

```shell
yarn
yarn start
```

### How to use

- Open `public/index.html` and replace -

`<title>John Smith</title>` with `<title>Your Name</title>`.

- Open `src/portfolio.js` and make changes.

### Deployment

- Go to `package.json` file and replace -

`"homepage": "https://nikhilkhatana.github.io"`


with `"homepage": "https://yourusername.github.io"`.

- Push the changes.

- Build and deploy -

```shell
yarn build
yarn deploy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
