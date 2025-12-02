# Datto Bookmarklet

## Description

This bookmarklet allows multiple **_Web Remote_** tabs to be easily opened for devices in Datto RMM. When activated, a yellow button is added to the UI labelled **_Web Remote: Control Screens_** which opens a remote tab for each, selected device.

This removes the tedious task of manually clicking the **_Web Remote_** button and **_Control Screen_** option for each client. Which, let's be honest is a PITA, particularly for runup.

## Usage

![Datto web remote steps](/img/datto/datto-remote-overview.png)

The image above outlines the steps to open multiple **_Web Remote_** tabs. These steps are:

  1. Navigate to the Datto **_Devices_** list for a client.
  2. Click your Datto bookmarklet (see instructions below).
  3. Select the devices you want to **_Web Remote_** into.
  4. Click the yellow **_Web Remote: Control Screens_** button.
  5. A new **_Control_** Screen tab will open for each device.

> [!NOTE]
> Only selected devices, with a **_Web Remote_** button, will open. (This is why Saranga's laptop _ACSL-23-03_ does not have a tab - it's offline. has no Web Remote button, and is possibly malevolent.)

## Prerequisites

Allow multiple tabs to be created when using this bookmarklet. By default, this is turned off in your browser settings.

To enable multiple tab creation:
  1. Go to browser Settings -> Security
  2. Look for the Permissions section and Pop-Up blocking.
  3. Add exceptions for: `http://rmm.datto.com` and `https://rmm.datto.com`.

![Firefox popup settings](/img/datto/datto-popup-settings-firefox.png | width=300)

<img src="/img/datto/datto-popup-settings-firefox.png" width="300">

## Bookmarklet Creation

Steps:
  1. Create a new bookmark/favourite in your web browser.
  2. Give it a name eg. **_Datto Devices_** or **_RSI Must Die_**.
  3. For the bookmark URL, copy and paste the [code from here](https://raw.githubusercontent.com/JBdesign53/bookmarklets/main/datto/bookmarklet-load.js).
  4. Refer to the **Usage** section above.

> [!TIP]
> It is recommended that you add the bookmark to your Bookmarks Toolbar or Favourites Toolbar for quick access. You may also need to make your Toolbar visible in your browser settings.