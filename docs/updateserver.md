# Update Self-hosted Server

::: info
These steps are not needed if you are connecting to another server. They are only needed when someone is running their own server.
:::

As the server regularly receives bugfixes and improvements, if you are self-hosting it (e.g. [playing offline single player](/installsp) or [hosting your own multiplayer server](/installmp)), please make sure to update it regularly by following the steps below.

1. Stop the running server instance (from command line, pressing CTRL and C together should stop it).
2. Back up your [server data folder](/server_data) as a precaution.
3. In the folder where you [cloned the server code](/installsp.html#_1-clone-the-server-repository), from PowerShell run the commands below.

```powershell
cd BostonUnlockedServer
git pull
```

::: info
The first command above (`cd BostonUnlockedServer`) is only required if you are in the folder above it in PowerShell when running it.
:::

4. [Start the server normally](/installsp#_4-run-the-local-server) and check if it is working and your server data is working correctly.
5. If your updated server is working correctly, you can delete the backup from step 2 and continue playing normally.

::: warning If the server is not working correctly after the update

1. First, try rerunning the [full server installation](/installsp) (and [multiplayer configuration if applicable](/installmp)) then restore your server data backup to it and try again.
2. If it still does not work after the previous step, please [report a bug](/reportbugs) and rollback to the older version you were using by stopping the server, running the command below and trying again.

``` powershell
git reset --keep HEAD@{1}
```

:::
