# Enabling Admin Access

<!--@include: ./includes/wip.md -->

This page details how to enable administrator access on your self-hosted server.

::: danger For Advanced Users Only
1. These operations only work if you are self-hosting your own server and are **not applicable to normal users on the community server**.
2. You must have successfully launched your self-hosted server **and** logged in as the user you want to add as admin at least once before proceeding.
3. These are advanced user operations, do not attempt if you are uncomfortable with figuring out technical documents and modifying configuration files.
:::

1. Determine your `<Server Data Folder>` by referring to [Managing Server Data](/server_data).
2. Open `<Server Data Folder>\data\account.json` in a text editor which supports JSON, e.g. [Visual Studio Code](https://code.visualstudio.com/).
3. Copy the GUID of the account you want to add as administrator (marked with 'x' in the following example):

```json
{"SchemaVersion":2,"Accounts":{"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx":{"IdentityHash":
```

::: info Determining the GUID to Use
1. You may want to use the "Format Document" option in Visual Studio Code (by right-clicking in the document and choosing it) for readability.
2. Each account has a `DisplayName` property which can help determine whether it is the account you wish to add as admin. The `DisplayName` is visible in the game launcher when you login.
:::

4. Open `<Server Data Folder>\data\chat-admins.json` in your chosen JSON text editor
5. Add the GUID from step 3 into the admins array

```json
{
  "admins": [
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  ]
}
```

::: info Adding Multiple Admins
Multiple admin GUIDs can be added, separated by a comma
:::
