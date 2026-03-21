# Managing Server Data

This section explains how to manage all your server data. The latter includes your saves and server logs.

## Server Data Folder

The server persists state under the server data directory which can be either:

* If the data directory already exists in the server's installation directory:

    >`server/data/`

* If the data directory does not exist in the server's installation directory, it will be saved in:

    >`%LOCALAPPDATA%/ShadowrunLocalService`

::: info
If you connect to someone else's server, the above location on that server is where your saves will be stored.
:::

## Backing up server progress/state

To backup all server progress, stop the server and copy the server data folder to where you want to back it up

## Restoring server progress/state

To restore server progress, stop the server and copy the server data folder from your backup into the server's corresponding data directory. After starting up the server again, you will regain the progress stored.

## Resetting server progress/state

To reset all server progress, stop the server and delete the server data folder:

```powershell
Remove-Item -Recurse -Force <Server Data Folder>
```

Where `<Server Data Folder>` is the appropriate location mentioned in [Server Data Folder](/server-data#server-data-folder)
