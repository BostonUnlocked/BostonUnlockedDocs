# Host Multiplayer Online

::: danger For Advanced Users Only
Hosting a multiplayer server is best done if you know how to host servers already and how to secure your system and networks
:::

::: danger Do not host from Personal Computer
We do not recommend hosting a multiplayer server from your personal computer due to potential security issues  (see Note 3 below for details)
:::

1. Install the server as described in [Play Single Player Offline](/installsp)
2. Take the local server you've built and run with the start local server script, then copy the full folder from:

`\server\src\Shadowrun.LocalService.Host\bin\Release`

To the machine you want to host it on.
3. Update these files:

`Release\Resources\config\config.xml`
`Release\Resources\config\LauncherConfig.xml`

Replace all instances of `127.0.0.1` with the reachable public IP/hostname of your server.

::: info Notes

1. If you're hosting on a LAN for local play, this can be a local IP 192.168.x.x
2. If you want to play with other people over the Internet, it needs to be the public IP or a hostname that resolves to the public IP of your server.
3. If you are hosting your own multiplayer server, you will need to port forward all 3 of the ports mentioned in step 4 of [Play Single Player Offline](/installsp). **This can cause security risks as one of them is port 80**

:::

<!--@include: ./includes/server_status.md -->

<!--@include: ./includes/reminder_updateserver.md -->
