# .NET Core Local Tool Restore

[![CI](https://github.com/xt0rted/dotnet-tool-restore/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/xt0rted/dotnet-tool-restore/actions/workflows/ci.yml)
[![CodeQL](https://github.com/xt0rted/dotnet-tool-restore/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/xt0rted/dotnet-tool-restore/actions/workflows/codeql-analysis.yml)

Restore your .NET Core 3.0+ local tools.
These are located in your `.config/dotnet-tools.json` file.

## Usage

```yml
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-dotnet@v1
        with:
          dotnet-version: 3.1.101
      - uses: xt0rted/dotnet-tool-restore@v1
      - run: dotnet-format --dry-run
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
