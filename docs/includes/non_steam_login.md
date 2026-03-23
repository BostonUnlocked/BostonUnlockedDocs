## Non-Steam Login

This section covers additional steps for non-Steam setup and login.

::: warning Follow these Instructions after completing the Steps above
These steps are in addition to the other steps detailed above, do not skip straight to this section.
:::

::: danger Non-Steam Players Only
Do not follow this section if you own the game on Steam and are launching it normally via Steam. Insisting on doing so will prevent the game's normal Steam login and you will lose access to the characters on your Steam profile until you restore Steam login.
:::

::: warning Restoring Steam Login
If you accidentally followed this section and can't Steam login to the game anymore or wish to switch back to your Steam profile from a non-Steam profile:

1. Delete `LauncherConfig.xml` in the root of your game installation folder (where `shadowrun.exe` is located).
2. You can now Steam login normally and recover access to the characters on your Steam profile.
:::

### Enable non-Steam Login

1. Download [LauncherConfig.xml](https://raw.githubusercontent.com/BostonUnlocked/BostonUnlockedServer/refs/heads/main/clientsetup/LauncherConfig.xml) from the official repository.
2. Place `LauncherConfig.xml` in the root of your game installation folder (where `Shadowrun.exe` is located).

::: info
`Shadowrun.exe` is located in the root of your game installation folder:

`<GameRoot>\Shadowrun.exe`

where `<GameRoot>` refers to where you installed the game.
:::

::: info
This step can be done with Steam game client files to create an alternate non-Steam profile if you wish but while this is enabled you will not have access to your Steam profile characters. See the warnings at the start of this section for more information.
:::

### Non-Steam Account Creation and Login

If you are attempting to login without having a Steam instance running:

1. Ensure you enabled non-Steam Login as per the instructions above.
2. Enter an email address and password to create a non-Steam account.
3. When the launcher asks you for a game key, enter "SRO-GAME-KEY".
![Launcher Game Key Screen](/img/launcher_game_key.jpg)
4. You can now login using the credentials you created in the previous steps.

::: danger No password recovery
Non-Steam account passwords **cannot** be reset and email addresses are **not** verified. If you forget your password, you will be **permanently locked out of your account**. Please choose and record your login credentials carefully!
:::
