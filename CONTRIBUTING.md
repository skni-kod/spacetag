# Contributing to SpaceTag

Thank you for taking the time to contribute!

The following is a set of guidelines for contributing to SpaceTag project, which
is hosted in the
[Studenckie Koło Naukowe Informatyków "KOD" Organization](https://github.com/skni-kod)
on GitHub. These are mostly guidelines, not rules. Use your best judgment, and
feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the
[SpaceTag Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are
expected to uphold this code.

## Possible Ways of Contributing

### Reporting Bugs

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/).
Before creating bug reports, please **perform a
[cursory search](https://github.com/skni-kod/spacetag/issues?q=is%3Aissue)** to
see if the problem has already been reported. If it has and the issue is still
open, add a comment to the existing issue instead of opening a new one. When you
are creating a bug report, please include as many details as possible. Fill out
[the required template](.github/ISSUE_TEMPLATE/bug_report.md), the information
it asks for helps us resolve issues faster.

> **Note**: If you find a **Closed** issue that seems like it is the same thing
> that you're experiencing, open a new issue and include a link to the original
> issue or reference it with `#issue_number` in the body of your new one.

Explain the problem and include additional details to help maintainers reproduce
the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as
  possible.
- **Provide specific examples to demonstrate the steps**. Include links to files
  or GitHub projects, or copy/pasteable snippets, which you use in those
  examples. If you're providing snippets in the issue, use
  [Markdown code blocks](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).
- **Describe the behavior you observed after following the steps** and point out
  what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the
  described steps and clearly demonstrate the problem.
- **If the problem wasn't triggered by a specific action**, describe what you
  were doing before the problem happened and share more information using the
  guidelines below.

Provide more context by answering these questions:

- **Did the problem start happening recently** or was this always a problem?
- **Can you reliably reproduce the issue?** If not, provide details about how
  often the problem happens and under which conditions it normally happens.

### Suggesting Enhancements

Enhancement suggestions are tracked as
[GitHub issues](https://guides.github.com/features/issues/). Before creating
enhancement suggestions, please **perform a
[cursory search](https://github.com/skni-kod/spacetag/issues?q=+label%3Aenhancement+)**
to see if the enhancement has already been suggested. If it has, add a comment
to the existing issue instead of opening a new one. When you are creating an
enhancement suggestion, please include as many details as possible. Fill in
[the template](.github/ISSUE_TEMPLATE/feature_request.md), including the steps
that you imagine you would take if the feature you're requesting existed:

- **Use a clear and descriptive title** for the issue to identify the
  suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many
  details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable
  snippets which you use in those examples, as
  [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to
  see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps
  or point out the part of the project which the suggestion is related to.
- **Explain why this enhancement would be useful** to most users.
- **List some other websites or applications where this enhancement exists.**
- **Specify the name and version of the OS you're using.**

### Contributing Code

#### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

The process described here has several goals:

- Maintain SpaceTag's quality.
- Fix problems that are important to users.
- Engage the community in working toward the best possible SpaceTag.
- Enable a sustainable system for SpaceTag's maintainers to review
  contributions.

Please follow these steps to have your contribution considered by the
maintainers, adhering to the [styleguides](#styleguides):

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) this
   repository to your own GitHub account and then
   [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
   it to your local device (or clone the repository initially if you are a
   project member).

2. Create a new branch.

3. Install dependencies.

   ```bash
   pnpm install
   ```

4. Start developing and watch for code changes.

   ```bash
   pnpm dev
   ```

5. Check the formatting of your code.

   ```bash
   pnpm lint
   ```

6. Fix any existing errors.

   ```bash
   pnpm lint --fix
   ```

7. Build the code

   ```bash
   pnpm build
   ```

8. Start production server to check everything is working properly.

   ```bash
   pnpm start
   ```

9. Commit your changes.

10. Push the new branch up to the remote.

11. Open a pull request.

While the prerequisites above must be satisfied prior to having your pull
request reviewed, the reviewer(s) may ask you to complete additional design
work, tests, or other changes before your pull request can be ultimately
accepted.

## Styleguides

All comments, issues, pull requests titles and descriptions, code review
comments, commit messages, code comments, license, readme and all documentation
**must be written in English**. Documentation can be translated to a different
language if necessary.

### Code

All of the code is linted with [ESLint](https://eslint.org/) and formatted with
[Prettier](https://prettier.io/).

#### Naming

- Use `camelCase`:

  - when naming JavaScript / TypeScript functions.
  - when naming JavaScript / TypeScript object keys.
  - when naming **local** JavaScript / TypeScript constants and variables.
  - when naming React hooks.

- Use `CONSTANT_CASE` / `MACRO_CASE` / `SCREAMING_SNAKE_CASE` / `UPPER_CASE`:

  - when naming environment variables.
  - when naming GitHub specific documentation files.
  - when naming **global** JavaScript / TypeScript constants.

- Use `dash-case` / `hyphen-case` / `kebab-case` / `lisp-case` / `spinal-case`:

  - in `className` and `id` attributes.
  - in HTML, CSS and SCSS languages.
  - when naming a folder or a file, unless the file requires different naming
    convention.
  - when naming a new git branch.

- Use `PascalCase`:

  - when naming a `class`, an `interface` or a `type` in TypeScript.
  - when naming React components.

#### Components

- Use functional components with arrow function syntax.

  ❌ **INCORRECT**

  ```ts
  export type ExampleProps = {
    message: string;
  };

  export class Example extends React.Component<ExampleProps> {
    render() {
      return <h1>{this.props.message}</h1>;
    }
  }
  ```

  ❌ **INCORRECT**

  ```ts
  export type ExampleProps = {
    message: string;
  };

  export function Example({ message }: ExampleProps) {
    return <h1>{message}</h1>;
  }
  ```

  ✔️ **CORRECT**

  ```ts
  export type ExampleProps = {
    message: string;
  };

  export const Example = ({ message }: ExampleProps) => {
    return <h1>{message}</h1>;
  };
  ```

#### Imports

- Prefer absolute path `import` unless it makes more sense to use relative
  paths.

  ❌ **INCORRECT**

  ```ts
  import { Button } from "../../components/button";
  import type { CardType } from "./types";
  ```

  ✔️ **CORRECT**

  ```ts
  import { Button } from "@/components/button";
  import type { CardType } from "./types";
  ```

- Prefer named `export` unless default `export` is required.

  ❌ **INCORRECT**

  ```ts
  const Component = (props: ComponentProps) => <div></div>;

  export default Component;
  ```

  ✔️ **CORRECT**

  ```ts
  export const Component = (props: ComponentProps) => <div></div>;
  ```

  ✔️ **CORRECT**

  ```ts
  import { Homepage } from "@/home";

  export default Homepage;
  ```

#### Types

- Prefer `type` over `interface whenever possible.

  ❌ **INCORRECT**

  ```ts
  interface ExampleProps {
    children: ReactNode;
    title: string;
  }
  ```

  ✔️ **CORRECT**

  ```ts
  type ExampleProps = {
    children: ReactNode;
    title: string;
  };
  ```

### Git

- Start branch names, commit messages and pull request titles with applicable
  type.

  - `build` - when making changes affecting build system or external
    dependencies
  - `chore` - when changing code that doesn't affect production
  - `docs` - when writing documentation
  - `feat` - when adding a new feature
  - `fix` - when fixing a bug
  - `perf` - when improving performance
  - `refactor` - when changing production code
  - `style` - when improving the format / structure of the code
  - `test` - when adding tests

### Git Branch Names

- Follow the format below when naming a branch.

  ```
  <branch-type>/<branch-name>
  ```

  Examples:

  ```
  chore/issue-templates
  feat/button-component
  fix/homepage-overflow
  ```

### Git Commit Messages

- Adhere to
  [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
  specification **when committing to the `main` branch**.

  ❌ **INCORRECT**

  ```
  add feature
  ```

  ✔️ **CORRECT**

  ```
  feat: add feature
  ```

- Use the present tense.

  ❌ **INCORRECT**

  ```
  feat: added feature
  ```

  ✔️ **CORRECT**

  ```
  feat: add feature
  ```

- Use the imperative mood.

  ❌ **INCORRECT**

  ```
  fix: changes feature
  ```

  ✔️ **CORRECT**

  ```
  fix: change feature
  ```

- Reference pull requests liberally after the first line of **merge commit
  message**.

  ❌ **INCORRECT**

  ```
  perf: use `priority` on images detected as LCP
  ```

  ✔️ **CORRECT**

  ```
  perf: use `priority` on images detected as LCP (#47)
  ```

- Limit the first line to 72 characters or less.

## Attribution

These contribution guidelines are inspired by Atom's awesome
[CONTRIBUTING.md](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)
file.
