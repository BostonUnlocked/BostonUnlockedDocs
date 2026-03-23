# Play Single Player Offline

## 0. Install prerequisites

1. Your system must be running Windows 10+ and have PowerShell enabled (the latter should already be on by default for standard Windows installations)
    ::: warning About Windows 7 and Linux patching
    While we have patching steps for Windows 7 and Linux in this guide, the preferred platform remains Windows 10+ due to the various dependencies involved
    :::
2. Install [Git](https://git-scm.com/install/windows) and add it to PATH when it asks you to during setup
3. Install **Shadowrun Chronicles: Boston Lockdown**

<!--@include: ./includes/supported-game-client.md -->

::: danger Check the Path used in Commands
**Note:** In this guide, the game's installation path is assumed to be `"C:\Program Files (x86)\Steam\steamapps\common\ShadowrunChronicles"`.

If you installed the game elsewhere, replace the path in the commands where this path is used with the one of where you installed the game
:::

::: danger Do not install into Restricted Folders
Do NOT install the game in a restricted folder like `"C:\Program Files"` or `"C:\Windows"` otherwise patching will fail. The default Steam installation directory works without issues. If you are not using a Steam installation, install the game in a normal unprivileged folder such as in your Documents folder.
:::

4. Install [.NET Framework 4.8 Developer Pack](<https://dotnet.microsoft.com/en-us/download/dotnet-framework/net48>) (needed for `MSBuild.exe` used by the C# service)

## 1. Clone the server repository

1. Open a PowerShell window in the folder where you wish to install the server - this can be done by SHIFT+Right clicking in the folder from Windows Explorer and choosing "Open PowerShell Window here" or from the Windows Explorer menu "File->Open Windows PowerShell" within the folder.
2. From PowerShell run the commands below

```powershell
git clone https://github.com/BostonUnlocked/BostonUnlockedServer
cd BostonUnlockedServer
```

## 2. Extract required game resources

The local server needs a few DLLs, static-data JSON, and StreamingAssets copied out of your game installation.

Run:

```powershell
powershell -ExecutionPolicy Bypass -File .\extractresourcesfrominstallation.ps1 -GameRoot "C:\Program Files (x86)\Steam\steamapps\common\ShadowrunChronicles" -InstallPythonDeps
```

This writes into:

* `server/src/Dependencies/` (DLLs)
* `server/static-data/` (JSON)
* `server/StreamingAssets/` (copied folder)

::: info
If you move/reinstall the game, re-run the extractor.
:::

## 3. Patch the client to point at your server

The game client reads its endpoint hostnames from:

* `<GameRoot>\Shadowrun_Data\resources.assets`

The patch tool executable is located below, you can run it by double clicking it or via command line. We will use the latter method in the next step:

* `clientsetup/patch_embedded_configs.exe`

### Patch for fully local single player server (127.0.0.1)

Run the following command:

```powershell
.\clientsetup\patch_embedded_configs.exe --asset "C:\Program Files (x86)\Steam\steamapps\common\ShadowrunChronicles\Shadowrun_Data\resources.assets" patch --host 127.0.0.1
```

<!--@include: ./includes/python-patching.md -->

### Restore to connect to the normal/online servers again

If you patched to `127.0.0.1` and want to revert back to the original server URL in the game files, run:

```powershell
.\clientsetup\patch_embedded_configs.exe --asset "C:\Program Files (x86)\Steam\steamapps\common\ShadowrunChronicles\Shadowrun_Data\resources.assets" restore
```

::: warning

* `--asset` is a global flag, so it must come **before** `patch`/`restore`.
:::

::: info
To access the patching tool help, run:

```powershell
.\clientsetup\patch_embedded_configs.exe --help
.\clientsetup\patch_embedded_configs.exe patch --help
```

**The same options work with the Python script version mentioned in the Linux/Windows 7 patching instructions**

:::

## 4. Run the local server

Start the server (this builds the C# host and launches it):

```powershell
powershell -ExecutionPolicy Bypass -File .\server\start_localserver.ps1
```

Defaults ports:

* HTTP bind host: `0.0.0.0`
* HTTP port: `80`
* APlay port: `5055`
* Photon port: `4530`

::: info
If port 80 fails to bind, run your PowerShell terminal as Administrator.
:::

## 5. Run the game and connect to the server

Start the game normally, connect to the server as you would normally and play!

<!--@include: ./includes/non-steam-login.md -->
