# Developer Guide

This document details developer documentation for BostonUnlocked.

::: danger For Developers Only
This advanced document is for developers only.
:::

## Prerequisites

Install the prerequisites as per [step 0 of this guide](installsp.html#_0-install-prerequisites).

## Tools

[Visual Studio Code](https://code.visualstudio.com/) or [Visual Studio](https://visualstudio.microsoft.com/) are supported.

## Architecture

### Overview

BostonUnlocked runs as a single C# local service and persists [server data](/server_data) on the host system as a [SQLite database](https://sqlite.org/index.html).

### Base code path

The server code is located in `\server\src`.

The Visual Studio Solution file to load the code is located at `\server\src\Shadowrun.LocalService.sln`

### Slash Commands

All slash commands are stored in:
`\server\src\Shadowrun.LocalService.Core\Protocols\PhotonProxyTcpStub.Operations.cs`

All functions implementing `IChatCommand` are slash commands.
