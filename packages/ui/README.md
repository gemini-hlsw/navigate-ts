# Navigate website

Website developed using [React](https://reactjs.org/) + Typescript.

This tool will be used to configure the telescope and its subsystems to point and track a celestial object during an observation. Navigate is a web application with a single centralized server that communicates with the different real-time control systems of the telescope. It also will communicate with other apps in the Gemini Program Platform (GPP) ecosystem, such as Observe and Chronicle.

## Launch on local development

Make sure you have installed [NodeJS](https://nodejs.org/en/) and [ni](https://github.com/antfu/ni) in your machine.

We are now using FontAwesome Pro which requires a license. To build the app locally request a TOKEN
from the admins and you need to setup an env variable containing it like

```bash
export FONTAWESOME_NPM_AUTH_TOKEN=...
```

- Install dependencies

  ```bash
  ni
  ```

- Run the web app
  ```bash
  nr dev
  ```

## Test modules

Some project modules can be tested using vitest

- Run vitest
  ```bash
  nlx vitest
  ```

## Navigate backend

To connect to the Navigate backend [this repository](https://github.com/gemini-hlsw/navigate-server) should be cloned and run. The project was developed using Scala, then a proper Scala and sbt installation should be provided.

In the repository directory run

```bash
sbt
```

In sbt compile everything using

```bash
compile
```

Once compiled, to run the server

```
navigate_web_server/reStart
```

## Publishing

In order to publish the project as static assets, run:

```bash
pnpm build
pnpm publish --access public
```

The project is automatically published by [Github actions](./.github/workflows/node.js.yml) when a new tag is pushed. Two packages are published:

- https://npmjs.com/package/navigate-ui
- `edu.gemini:navigate-ui` on Sonatype. This is an empty package that contains the static assets in the `META-INF/resources/navigate-ui` resource directory. It is used by the backend to serve the static assets.
