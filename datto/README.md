# Datto Bookmarklet

## About

This bookmarklet allows multipls **Web Remote** tabs to be easily opened for devices in Datto RMM. When activated, a yellow button is added to the UI labelled **Web Remote: Control Screens** which opens a remote tab for each, selected device.

This removes the tedious task of manually clicking the **Web Remote** button and **Control Screen** option for each device. Which, let's be honest is a PITA, particularly for runup.

## Usage

![Datto web remote steps](/img/datto/datto-remote-overview.png)

The image above outlines the steps to open multiple Web Remote tabs. These steps are:

  1. Navigate to the Datto Devices list for a client.
  2. Click the Datto bookmarklet (see instructions below).
  3. Select the devices you want to Web Remote into.
  4. Click the yellow Web Remote: Control Screens button.
  5. A new Control Screen tab will open for each device.

> [!NOTE]
> Only selected devices, with a Web Remote button, will open.

## Prerequisites

Allow multiple tabs to be created when using this bookmarklet. By default, this is turned off in your browser settings.

To enable multiple tab creation:
  1. Go to browser Settings -> Security
  2. Look for the Permissions section.
  3. Locate Pop-Up blocking.
  4. Add exceptions for: `http://rmm.datto.com` and `https://rmm.datto.com`.

## Bookmarklet Creation

Steps:
  1. Create a new bookmark/favourite in your web browser.
  2. Give it a name eg. 'Datto Devices' or 'RSI Must Die'.
  3. For the URL, paste the [code from here](https://raw.githubusercontent.com/JBdesign53/bookmarklets/main/datto/bookmarklet-load.js)
  4. Refer to the Usage section above.

> [!TIP]
> It is recommended that you add the bookmark to your Bookmarks Toolbar or Favourites Toolbar for quick access. You may also need to make your Toolbar visible in your browser settings.