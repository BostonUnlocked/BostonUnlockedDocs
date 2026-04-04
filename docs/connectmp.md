# Connect to Another Server

::: danger Check your Connections
Make sure you trust whom you are connecting to!
:::

<!--@include: ./includes/supported_game_client.md -->

1. Download [the patching program](https://raw.githubusercontent.com/BostonUnlocked/BostonUnlockedServer/refs/heads/main/clientsetup/patch_embedded_configs.exe)
2. Run it by double-clicking on `patch_embedded_configs.exe`
3. It will open a file browser asking you to point to the resources.assets file in the installation folder for the game. Select the resources.assets file and click on "Open" to proceed.

::: info
The `resources.assets` file should be located here:

`<GameRoot>\Shadowrun_Data\resources.assets`

where `<GameRoot>` refers to where you installed the game
:::

<!--@include: ./includes/python_patching.md -->

4. After the previous step, in the command line window it will ask for a host, simply enter the IP of the server you want to connect to and then press the `ENTER` key to proceed.
5. Once done, simply launch the game normally and have fun!

<!--@include: ./includes/reminder_dlc_chat.md -->

<!--@include: ./includes/server_status.md -->

<!--@include: ./includes/non_steam_login.md -->
