# Datto Bookmarklet

## About

This bookmarklet allows Web Remote (browser tabs) to be quickly opened for multiple devices in Datto RMM. This removes the need to click the Web Remote button and Control Screen option for each device.

It adds a new yellow button to the UI labelled 'Web Remote: Control Screens'. This bookmarklet can be clicked (activated) from the Datto Devices screen.

## Steps

![Datto web remote steps](/img/datto/datto-remote-overview.png)

The image above shows the steps to open multiple web remote tabs. These steps are:

## Prerequisites

Allow multiple tabs to be created when using this bookmarklet. By default, this is turned off in your browser.

To enable this:
  1. Go to your browser Settings -> Security
  2. Look for a Permissions section.
  3. Locate Pop-Up blocking.
  4. Add exceptions for: `http://rmm.datto.com` and `https://rmm.datto.com`.

## Bookmarklet Creation

Steps:
  1. Create a new bookmark/favourite in your web browser.
  2. Give it a name eg. 'Datto Devices'.
  3. For the URL, paste the [code from here](https://raw.githubusercontent.com/JBdesign53/bookmarklets/main/datto/bookmarklet-load.js)

It is recommended that you add the bookmark to your Bookmarks Toolbar or Favourites Toolbar for quick access. You may also need to make your toolbar visible in your browser settings.

## Usage

From the Datto Devices screen:
  1. Click the Datto bookmarklet.
  2. Select multiple devices from the checkboxes in the left column.
  3. Click the 'Web Remote: Control Screens' button.
  4. A tab will open for each selected device.

Note that only selected devices which have a Web Remote button will open in a new tab.