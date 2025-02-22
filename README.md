<!-- README copied from https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/README.md -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
	<!-- <a href="https://github.com/DWC01/dapp-sandbox-contracts">
		<img src="/images/logo.png" alt="Logo" width="419" height="128">
	</a> -->
	<h1>SparrowStarter</h1>
	<p>A development repository to streamline building and running AI agents using the SparrowStack framework.</p>
</div>

<!-- TABLE OF CONTENTS -->
<br/>
<details>
	<summary>Table of Contents</summary>
	<ol>
		<li>
			<a href="#about-the-project">About The Project</a>
			<ul>
				<li><a href="#built-with">Built With</a></li>
			</ul>
		</li>
		<li>
			<a href="#getting-started">Getting Started</a>
			<ul>
				<li><a href="#prerequisites">Prerequisites</a></li>
				<li><a href="#installation">Installation</a></li>
				<li><a href="#quick-start">Quick Start</a></li>
			</ul>
		</li>
		<li>
			<a href="#development">Development</a>
			<ul>
				<li><a href="#sparrowstack">SparrowStack</a></li>
				<li><a href="#sparrow-starter">SparrowStarter</a></li>
			</ul>
	</ol>
</details>
<br/>

## About

SparrowStarter is a development repository designed to streamline the process of building and running AI agents using the SparrowStack framework. It serves as a convenient starting point for developers, providing easy access to essential packages and tools from SparrowStack. With SparrowStarter, you can quickly set up your development environment, link local packages, and begin crafting AI solutions tailored to your specific needs.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Bun](https://bun.sh/)
- [Nx](https://nx.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Bun [Install Instructions](https://bun.sh/docs/installation)

### Installation

1.  Clone the repo

    ```sh
    git clone git@github.com:sparrowstack/sparrow-starter.git
    ```

2.  Navigate to the project directory

    ```sh
    cd sparrow-starter
    ```

3.  Setup environment variables

    Copy the `.env.template` file to `.env` and update the variables

    ```sh
    cp .env.template .env
    ```

4.  Install packages

    ```sh
    bun install
    ```

### Quick Start
1.  Start the interactive terminal to run your AI agent
    ```sh
    bun start:interactive-terminal:openai
    ```
    or
    ```sh
    bun start:interactive-terminal:anthropic
    ```

## Development

### SparrowStack
In your SparrowStack repository, run the following command to build and link the local packages:

1.  Build and link the local packages
    ```sh
    bun release:all:local
    ```

> [!NOTE]
> To unlink the local packages from the `sparrowstack` repo, run the following command (from the `sparrowstack` repo):
```sh
bun unlink:all
```

### SparrowStarter
In your SparrowStarter repository, link the local packages from the `sparrowstack` repo and install the dependencies:

1.  Link local packages from the `sparrowstack` repo

    ```sh
    // package.json

    "dependencies": {
        "@sparrowstack/sparrow": "link:@sparrowstack/sparrow",
        "@sparrowstack/interactive-terminal": "link:@sparrowstack/interactive-terminal",
        "@sparrowstack/system-prompts": "link:@sparrowstack/system-prompts",
        "@sparrowstack/tools": "link:@sparrowstack/tools"
    },
    ```

2.  Install the dependencies

    ```sh
    bun install
    ```

<p align="right">(<a href="#top">back to top</a>)</p>
