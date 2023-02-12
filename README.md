# Typescript Reddit Clone

## Monorepo

This project is a monorepo handled by [Turbopack](https://turbo.build/). This means that all dependent local packages share the same `node_modules` folder, which exists in the `root` (top-most) directory of the project.

This project uses [pnpm](https://pnpm.io/) as a package manager.

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
