<!-- README copied from https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/README.md -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
	<!-- <a href="https://github.com/DWC01/dapp-sandbox-contracts">
		<img src="/images/logo.png" alt="Logo" width="419" height="128">
	</a> -->
	<h1>SparrowStarter</h1>
	<p>SparrowStarter is the official starter template for building AI agents with the Sparrow framework.</p>
</div>
<br />

## About
SparrowStarter is the official starter template for building AI agents with the Sparrow framework. This repository includes [example implementations](./src/examples) demonstrating how to configure Sparrow Agents with different models, system prompts, tool calling, and structured outputs. You can also spin up agents locally using the SparrowStack [interactive terminal](./src/interactiveTerminal).


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

    Copy the `.env.template` file to `.env`

    ```sh
    cp .env.template .env
    ```

    Update the `.env` file with your own values for use with different APIs and AI Providers.
    ```sh
    # .env
    LOG_LEVEL=INFO

    # Providers
    OPENAI_API_KEY=
    ANTHROPIC_API_KEY=
    GOOGLE_GENERATIVE_AI_API_KEY=

    #Services
    OPEN_WEATHER_MAP_API_KEY=
    ```

4.  Install packages

    ```sh
    bun install
    ```

### Running Your First AI Agent

#### Example Implementations
Navigate to the [src/examples](./src/examples) directory where you will find examples of how to configure Sparrow Agents with different models, system prompts, tool calling, and structured outputs.

To run an example file locally simply run `bun src/examples/path/to/example.ts`.

Example:
```sh
bun src/examples/toolCalling/script/openai.ts
```

You can also run each example file in the SparrowStack interactive terminal:
```sh
bun src/examples/toolCalling/interactiveTerminal/openai.ts
```

#### Example Agent
This [example agent](./src/interactiveTerminal) demonstrates a realistic Sparrow agent setup. It uses system prompts and equips the agent with multiple tools to leverage. Treat this as a sandbox for experimenting with different models, prompts, and tool integrations.

To start this example agent, run the following command:
```sh
bun start:interactive-terminal
```

## Development

### SparrowStack
Clone and setup the [SparrowStack](https://github.com/sparrowstack/sparrowstack) repo. From the `sparrowstack` repo, build and link the local packages:

1.  Build and link the local packages
    ```sh
    bun setup:dev
    ```

### SparrowStarter
In your SparrowStarter repository, link the local packages from the `sparrowstack` repo:

1.  Link local packages from the `package.json`:

    ```sh
    // package.json
    "dependencies": {
        "@sparrowstack/community": "link:@sparrowstack/community",
        "@sparrowstack/interactive-terminal": "link:@sparrowstack/interactive-terminal",
        "@sparrowstack/sparrow": "link:@sparrowstack/sparrow",
    }
    ```

2.  Install the dependencies

    ```sh
    bun install
    ```

<p align="right">(<a href="#top">back to top</a>)</p>
