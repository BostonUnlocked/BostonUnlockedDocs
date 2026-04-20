# Features and Limitations

<!--@include: ./includes/server_is_wip.md -->

## Features

This list covers the server's main features:

1. Login to the game - Steam and non-Steam (cross-play between both account types is also supported)
2. Server hosting options:
    1. [Play Single Player Offline](/installsp)
    2. [Host Multiplayer Online](/installmp) **with important caveats detailed on the linked page**
    3. [Connect to Another Server](/connectmp)
3. All game features - NPC AI, shops, main and side quests, pets, server announcements, multiplayer features (chat, friends, groups, hub live presence)
4. DLC support - see [Enabling DLC](/enabling_dlc) - **this includes all DLC, even previously restricted backer rewards so everyone can experience all of the content officially released**
5. Convenience features (new to BostonUnlocked):

* [Global Chat Commands](/commands_player) and [Admin Global Chat Commands](/commands_admin) which introduce convenient server management and bug reporting features.
* All players have 6 character slots without needing to buy any DLC.
* You can respec your character via the `/resetskills` [Global Chat Command](/commands_player). This undoes skill selections and refunds karma without losing story progress, allowing you to modify your character build. On the community server, every character gets 1 free respec but the next respec is only available after 28 days  (self-hosting grants admins unlimited respecs).
* A server status page can be accessed by opening the server's IP in a browser (HTTP-only for now). It includes a mission status indicator and party grouping to find players:
![Server Status Page](/img/server_status_page.png)

## Limitations

As the server is a Work-In-Progress (WIP), it has the following limitations (more may have gone unnoticed):

1. The save progression might have issues. The main story progression works but there are some bugs around hub transitions/the matrix that may require game restarts.
2. While shop functionality works, there may be some paths where rewards picked up in-game or from quest progress or shops will just be dropped or lost.
3. When spending nuyen or karma, there may be cases where you are double charged/not charged/etc so balanced progression may be affected.
4. Although we try our best to avoid this (and have successfully achieved it so far), future updates may cause past saves to not work, forcing a restart.

## Known Differences from Original Game

BostonUnlocked aims to match the original game's behaviour as closely as possible. There are some minor situations where that is not possible:

1. [DLC granted items do not have blue "new item" star](https://github.com/BostonUnlocked/BostonUnlockedServer/issues/15#issuecomment-4157318184) - In the original Game, a new character had default starting items with no blue "new item" star icons next to them but items granted by Deluxe Edition (or other sources) did receive a blue "new item" star icon. In BostonUnlocked, no blue star icon is visible for any items granted by coupon codes. This behaviour has not been implemented as with the current architecture, fixing this would require significant rewrites just for this feature. It requires not granting the items until the first login for the character (a deferred granting rather than immediate availability at coupon redemption).
![DLC Blue "New Item" Star](/img/dlc_blue_item_star.png)
2. [Global Chat Commands](/commands_player) and [Admin Global Chat Commands](/commands_admin) are new features which enable convenient server management and bug reporting.
3. [All players have 6 character slots](https://github.com/BostonUnlocked/BostonUnlockedServer/issues/7) - Previously, the base game had a limited number of slots that could be increased with DLC purchases. All players now have a 6 slots available without needing to activate any DLC (slots cannot be purchased separately as BostonUnlocked is not a commercial product).
4. A server status page can be accessed by opening the server's IP in a browser (HTTP-only for now):
![Server Status Page](/img/server_status_page.png)

**Note:** Current open bugs (if any) can be found on [GitHub Issues](https://github.com/BostonUnlocked/BostonUnlockedServer/issues).
