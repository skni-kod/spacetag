# SpaceTag

## About

This project is an official continuation of a
[project](https://github.com/mateuszaliyev/iss) submitted for the 2022
[NASA International Space Apps Challenge](https://www.spaceappschallenge.org/)
hackathon by
[500 International Space Station](https://2022.spaceappschallenge.org/challenges/2022-challenges/track-the-iss/teams/500-international-space-station)
— a team of four members of our Student Research Group.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

Clone the repository.

```bash
git clone https://github.com/skni-kod/spacetag.git
```

```bash
git clone git@github.com:skni-kod/spacetag.git
```

Go to the project directory.

```bash
cd spacetag
```

Install dependencies.

```bash
pnpm install
```

Generate Visual Studio Code configuration.

```bash
pnpm vscode:generate
```

Rename [`.env.example`](./.env.example) file to `.env` and replace the
placeholder values with your environment variables.

## Usage

Run the development server.

```bash
pnpm dev
```

Lint code with [ESLint](https://eslint.org/).

```bash
pnpm lint
```

Fix any existing errors.

```bash
pnpm lint --fix
```

Format code with [Prettier](https://prettier.io/).

```bash
pnpm format
```

Build application for production.

```bash
pnpm build
```

Start production server.

```bash
pnpm start
```

## Authors

### Former 500 International Space Station Team

- Konrad Bochenek ([@Kazan1520](https://github.com/Kazan1520))
- Mariusz Dąbrowski ([@marioooo0o](https://github.com/marioooo0o)) - Project
  Leader
- Mateusz Aliyev ([@mateuszaliyev](https://github.com/mateuszaliyev))
- Mateusz Herda ([@mherda64](https://github.com/mherda64))

### Current SpaceTag Team

- Adrian Kosior ([@Nefraix](https://github.com/Nefraix))
- Cyprian Rejman ([@CyprianRejman](https://github.com/CyprianRejman))
- Dawid Pindara ([@Noname04](https://github.com/Noname04))
- Mateusz Aliyev ([@mateuszaliyev](https://github.com/mateuszaliyev)) - Project
  Leader
- Michał Partyka ([@Heryin](https://github.com/Heryin))

## License

[MIT](./LICENSE)
