# Typescript Reddit Clone

## Monorepo

This project is a monorepo handled by [Turbopack](https://turbo.build/). This means that all dependent local packages share the same `node_modules` folder, which exists in the `root` (top-most) directory of the project.

This project uses [pnpm](https://pnpm.io/) as a package manager.

### Initial Installation

After cloning the repo run:

```bash
pnpm install
```

### Installing a Package

To install a new third-party package, run the following from `root`:

```bash
 pnpm add <package> --filter <workspace>
```

`<workspace>` is the name of the local project where that dependency should be installed. For global packages omit the `--filter` flag.

Consider the following file structure:

```txt
root
├─ apps
│  ├─ web
├─ packages
│  ├─ tsconfig
│  └─ shared-utils
```

To install `react` in the `web` workspace we would run the following from the root directory:

```bash
pnpm add react --filter web
```

To uninstall:

```bash
pnpm uninstall <package> --filter <workspace>
```

### Workspaces

This project has 2 top-level workspace directories:

1. `./apps`
2. `./packages`

`Apps` contains workspaces for the front end and backend applications. `Packages` contains workspaces for packages used by either an app or another package. These top-level directories are specified in the `pnpm-workspace.yaml` config file.

## Running Applications in Development Mode

The core applications in the `apps` workspace all have a `dev` script as defined in their individual `package.json` files. From `root` run:

```bash
pnpm run dev
```

This command will run the `dev` command for each individual application in the known workspaces. Workspaces without an explicitly named `dev` command will be skipped. You can start the front end and backend dev environments with a single command.

### Running an individual application in Development Mode

Navigate to an individual application and run:

```bash
pnpm run dev
```

## Front End Application Styling

The `web` workspace, which houses the projects front end application uses SASS as a CSS pre-compiler. Style sheets should be post-fixed with a `.scss` file extension. `create-react-app` handles SCSS out-of-the-box so a loader is not necessary.

# Front-End / Client

## React Redux-Toolkit

We have organized our Redux state management using the "slices" concept, which allows us to easily manage different parts of the application's state. Additionally, we are using the "ducks" methodology to organize our Redux code.

### creating custom hooks

We used `useDispatch` + `useSelector` to create custom hooks `useAppDispatch` + `useAppSelector` that are typed to make sure we interact with our redux store in a type safe way.

## Storybook

We are using JSDocs to document our components. Within this project, all component props should be commented with JSDocs.

As for functions, we are documenting all params, including their name and type. Lastly you should write a brief description on what the function does

## Svgr / working with SVG icons within our src/assets folder

When working with SVG icons in React, we can use the svgr package to convert them into reusable React components. This not only optimizes the SVG but also allows the browser to render the icon as a react component.

In order to import our SVGs as React components, we uuse the ReactComponent import syntax. For example, `import { ReactComponent as Icon-Name } from '...'`

To streamline the process of converting SVG icons to React components, we've included a script in our package.json file: `"build:svgs": "svgr --icon --out-dir src/assets"`. Running this script each time we add a new icon to our assets folder ensures that we don't forget to convert it and that we're always up-to-date with the latest icons in our application.

=======

# Back-End / API

We are using Express, popular Node.js framework.

### changing type to module for es6 modules

Rather than relying on `require()` to import our dependencies, we can use ES6 modules to enable straightforward imports, similar to React.
