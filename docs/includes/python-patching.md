::: info Linux and Windows 7 patching
To patch the game on Linux and Windows 7, the underlying python script would need to be used instead of the patch tool executable:

1. Install [Python 3](https://www.python.org/)
2. Follow [the steps here](https://note.nkmk.me/en/python-pip-install-requirements/#install-packages-with-pip-and-requirementstxt) to install the requirements.txt in the `./tools/` folder
3. From terminal/CMD, run

```sh
python.exe ./tools/path_embedded_configs.py --asset "C:\Program Files (x86)\Steam\steamapps\common\ShadowrunChronicles\Shadowrun_Data\resources.assets" patch --host 127.0.0.1
```

4. Alternatively, if you run

```sh
 python.exe ./tools/path_embedded_configs.py
 ```

 It should ask you the path for resources.assets and the IP separately
:::

::: info

* 127.0.0.1 is the IP for localhost. Use this to play via your local server specifically. If you are connecting to a multiplayer server, this should be the public IP or hostname of the server as mentioned in [Host Multiplayer Online](/installmp) and [Connect to Another Server](/connectmp)
* The tool creates a backup next to the asset (by default `resources.assets.bak`).

:::

::: warning

* `--asset` is a global flag, so it must come **before** `patch`/`restore`.

:::
