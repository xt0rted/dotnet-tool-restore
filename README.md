# .NET Core Local Tool Restore

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=xt0rted/dotnet-tool-restore)](https://dependabot.com)

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
      - uses: xt0rted/dotnet-tool-restore@v1.1.0
        with:
          add-source: https://pkgs.dev.azure.com/dnceng/public/_packaging/dotnet-tools/nuget/v3/index.json
      - run: dotnet-format --dry-run
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
