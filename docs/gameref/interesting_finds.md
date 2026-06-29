# Interesting Game Behaviour

This document records interesting game behaviour discovered during development and bug-fixing.

<!--@include: ../includes/spoiler_warning.md -->

## Hellfire Harry Needs At Least 2 Targets To Attack

The "Hellfire Harry" enemy has a requirement that in order for the attack execution to be considered successful in the planning phase, it needs to be able to target 2 enemies. If you space characters out enough, he just does nothing and he won't even bother shooting at just 1 enemy.

![Hellfire Harry](/img/hellfire_harry.jpg)

*[Source 1](https://discord.com/channels/1233507112081166376/1476089872279142411/1484971325452718180)*

*[Source 2](https://github.com/BostonUnlocked/BostonUnlockedServer/issues/29)*

## Empty Loot

In the "Picking up clues" mission, a successful organ harvest has about a 37% chance for no loot drop. The reason is that the organs drop table has sub-tables with different weights and if you choose the cyber sub-table, there are 0 valid drops in that table during chapter 2. As soon as you reach chapter 3 (the next mission) there are valid entries, but on this mission specifically organs is not guaranteed to give an item.

This behavior exists in the original retail server and was very likely a small-impact possible bug that existed in the original game. We're preserving it as it is original game behavior. Should it be desirable to, it would be relatively easy to patch this case but it is not very different from getting another copy of a basic cosmetic so very low-impact.

*[Source 1](https://discord.com/channels/1233507112081166376/1476089872279142411/1499407517325721662)*

*[Source 2](https://discord.com/channels/1233507112081166376/1476089872279142411/1499422070981787758)*
