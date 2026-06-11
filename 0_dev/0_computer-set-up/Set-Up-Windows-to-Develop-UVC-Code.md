# Set Up Your Computer (Windows) to Develop UVC Code

## Add Collaborators on GitHub

1.  Navigate to the UVC repository on GitHub.

2.  Click on **Settings** (the gear icon in the top horizontal menu).

3.  On the left sidebar, click **Collaborators and teams** (under the "Access" section).

4.  Click the green **Add people** button.

5.  Enter their **GitHub usernames** and select the "role" as **Write** if they're only going to be editing the site code. Select "admin" if they will be one of the UVC project directors.

6.  Each person should then get a notification that they need to accept.

## Install Visual Studio Code

Download and install [Visual Studio Code](https://code.visualstudio.com/) (VSC), a free online text editing program.

Once you have VSC open, click View > Terminal to open the terminal.

You will need the terminal for everything that follows.

Everything in gray below is a command you enter in the terminal. In each case, copy and paste the entire command, even if it's split over two lines.

## Install Git on Windows

### Option A: Download the Git Installer (Recommended)

1.  Visit <https://git-scm.com/downloads/win> and download the standalone installer for your system (64-bit for most modern PCs).

2.  Run the installer. The default options are fine for most users — just click through each screen. A few settings to note:
    -   **Default editor**: Select "Use Visual Studio Code as Git's default editor" if prompted.
    -   **PATH environment**: Choose "Git from the command line and also from 3rd-party software" (this is the default and what you want).
    -   **Line endings**: Choose "Checkout Windows-style, commit Unix-style line endings" (the default).

3.  Once installed, close and reopen VS Code (so the terminal picks up the new PATH), then verify in the terminal:

```
git --version
```

### Option B: Install Git via winget (Windows Package Manager)

If you have Windows 10 (1709+) or Windows 11, you can install Git from the terminal directly:

```
winget install --id Git.Git -e --source winget
```

Close and reopen VS Code after installation, then verify:

```
git --version
```

## Log into GitHub via Visual Studio Code

1.  Open VS Code.

2.  Click the person/account icon in the bottom-left of the sidebar.

3.  Click **Sign in with GitHub**.

4.  Your browser will open — log into GitHub and authorize VS Code.

5.  You'll be redirected back to VS Code automatically.

## Add Visual Interface for Git

*Note:* This is a graphical interface for Git. It's optional and doesn't hurt anything to have on your computer.

Git GUI is bundled with the Git for Windows installer by default, so you should already have it. To verify, you can search for "Git GUI" in the Windows Start menu.

If for some reason it's not installed, you can reinstall Git from <https://git-scm.com/downloads/win> and make sure the "Git GUI Here" option is checked during setup.

## Copy UVC Directory into a GitHub Directory in Your Home Directory and Set Up the Branches

For reference, UVC main repo: <https://github.com/undiscipliningvc/undiscipliningvc>

In the VS Code terminal, run:

```
git clone https://github.com/undiscipliningvc/undiscipliningvc.git
```

Open the UVC folder in VSC (File > Open Folder, then navigate to the cloned `undiscipliningvc` folder).

Then run the following commands in the terminal:

```
git checkout dev
```

```
git checkout stage
```

```
git checkout master
```

```
git checkout dev
```

## Copy VSC Settings

1.  Open VSC.

2.  Press `Ctrl+Shift+P` to open the Command Palette.

3.  Type and select **"Open User Settings (JSON)"**.

4.  Erase whatever is there.

5.  Copy in the contents of `VSC-settings.txt`, save and close.

## Copy VSC Extension List

1.  Place `VSC-extensions.list` in your UVC directory.

2.  Open VS Code.

3.  Press `Ctrl+Shift+P` to open the Command Palette.

4.  The `code` command should already be available in PATH on Windows after a standard VS Code installation. If not, type and select **"Shell Command: Install 'code' command in PATH"**.

5.  Open the terminal via VSC and run:

```
Get-Content VSC-extensions.list | ForEach-Object { code --install-extension $_ }
```

*Note:* The command above is for **PowerShell**, which is the default terminal in VS Code on Windows. If you're using **Command Prompt** instead, use this command:

```
for /F %i in (VSC-extensions.list) do code --install-extension %i
```
