# Connect to Another Server

::: danger
Make sure you trust whom you are connecting to!
:::

<!--@include: ./includes/supported-game-client.md -->

1. Download the patching program from [the official repository location](https://raw.githubusercontent.com/BostonUnlocked/BostonUnlockedServer/refs/heads/main/clientsetup/patch_embedded_configs.exe)

2. Run it by double-clicking on `patch_embedded_configs.exe`
3. It will open a file browser asking you to point to the resources.assets file in the installation folder for the game. Select the resources.assets file and click on "Open" to proceeed.

::: info
The `resources.assets` file should be located here:

`<GameRoot>\Shadowrun_Data\resources.assets`

where `<GameRoot>` refers to where you installed the game
:::

<!--@include: ./includes/python-patching.md -->

4. After the previous step, in the command line window it will ask for a host, simply enter the IP of the server you want to connect to and press the `ENTER` key.
5. Once done, simply launch the game normally and enjoy!

<!--@include: ./includes/non-steam-login.md -->
