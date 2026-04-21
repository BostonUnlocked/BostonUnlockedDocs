# Interesting Game Behaviour

This document records interesting game behaviour discovered during development and bug-fixing.

<!--@include: ../includes/spoiler_warning.md -->

## Hellfire Harry Needs At Least 2 Targets To Attack

The "Hellfire Harry" enemy has a requirement that in order for the attack execution to be considered successful in the planning phase, it needs to be able to target 2 enemies. If you space characters out enough, he just does nothing and he won't even bother shooting at just 1 enemy.

![Hellfire Harry](/img/hellfire_harry.jpg)

*[Source 1](https://discord.com/channels/1233507112081166376/1476089872279142411/1484971325452718180)*

*[Source 2](https://github.com/BostonUnlocked/BostonUnlockedServer/issues/29)*
