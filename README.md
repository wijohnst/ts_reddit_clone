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

### navigate to apps/web and install

`pnpm i @types/react-redux react-redux @reduxjs/toolkit --filter web`

### create a store

We create a store that holds our applications state, for now our store will only hold our application slice.

```jsx
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {
    application: applicationReducer,
  },
})
```

After creating our store we need to wrap our entire app component with the redux provider

```jsx
<Provider store={store}>
  <App />
</Provider>
```

### Creating a Slice

A slice is a collection of reducer logic, and actions that hold state specific to that slice. We only application for now.

### typing our state with an interface

```jsx
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}
```

### creating our reducer

```jsx
export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    updateIsTrue: (state, action: PayloadAction<boolean>) => {
      state.isTrue = action.payload
    },
  },
})
```

### exporting our actions, state, and reducer

```jsx
export const { updateIsTrue } = applicationSlice.actions
export const selectApplication = (state: RootState) => state.application.isTrue
export default applicationSlice.reducer
```

## installing Storybook

### scaffold Storybook and install its dependencies

add the following to the `.npmrc` at the root of your monorepo:

`legacy-peer-deps=true`
`node-linker=hoisted`

next, initialized storybook, and install dev dependencies
`pnpx sb init --skip-install`
`pnpm install --save-dev @storybook/cli`

### storybook-static

To ensure build caching, you'll first need to add `storybook-static` to your `.gitignore`. Then, add `storybook-static` to the outputs of your `turbo.json` build task:

```jsx
"outputs": [
"dist/**",
"storybook-static/**"
]
```

### running storybook & localhost simultaneously

when adding a `dev` script to our root folder, turbopro finds all matching scripts and runs them.

### handling 'modulenotfound error'

we need to add this to the end of our `package.json` within our apps/web `package.json`. after adding, restart vscode

```jsx
"pnpm": {
"overrides": {
"enhanced-resolve":  "5.10.0"
}}
```

### fixing ajv type-error

we need to install two dependencies:
`pnpm i schema-utils`

### running storybook & localhost:

`pnpm run start`
