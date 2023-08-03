# Contra Web Project

## Introduction

Contra Web built with Next.js.

## Getting Started

Before you begin, make sure you have [asdf](https://asdf-vm.com/) installed as your version manager. This project uses Node.js, and asdf will help manage the Node.js version specified in the `.tool-versions` file.

1. Clone the repository:

```bash
git clone https://github.com/your-username/contra.git
cd contra
```

2. Install the required Node.js version using asdf:

```bash
asdf install
```

3. Install project dependencies:

```bash
npm install
```

## Available Scripts

In the project directory, you can run the following scripts using `npm`:

- `dev`: Starts the development server. It uses Next.js to serve the application with hot-reloading for rapid development.

```bash
npm run dev
```

- `build`: Builds the production-ready application.

```bash
npm run build
```

- `start`: Starts the production server after building the application.

```bash
npm run start
```

- `lint`: Lints the codebase using ESLint and provides suggestions for code improvements.

```bash
npm run lint
```

- `export`: Exports the static site to the `out` directory.

```bash
npm run export
```

- `deploy`: Builds the application, exports it to the `out` directory, and then uploads it using the `thirdweb` package.

```bash
npm run deploy
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contribution

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.