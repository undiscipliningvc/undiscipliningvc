# Set Up Your Computer (Mac) to Develop UVC Code

## Add Collaborators on GitHub

1.  Navigate to the UVC repository on GitHub.

2.  Click on **Settings** (the gear icon in the top horizontal menu).

3.  On the left sidebar, click **Collaborators and teams** (under the \"Access\" section).

4.  Click the green **Add people** button.

5.  Enter their **GitHub usernames** and select the "role" as **Write** if they're only going to be editing the site code. Select **Admin** if they will be one of the UVC project directors.

6.  Each person should then get a notification that they need to accept.

## Install Visual Studio Code

Download and install [Visual Studio Code](https://code.visualstudio.com/) (VSC), a free online text editing program.

Once you have VSC open, click View \> Terminal to open the terminal

You will need the terminal for everything that follows

Everything in gray below is a command you enter in the terminal. Each case, copy and paste the entire command, even if it's split over two lines.

## Install Git via Brew on MacOS

brew install git \[if doesn't work, then steps that follow\]

/bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"

On your Mac, click the Apple in upper left, then "About this Mac" and then determine if you have a Mac Intel or Silicon. Choose the appropriate set of sub-instructions below.

### A. For Mac Intel

echo \>\> \~/.bash\_profile

echo \'eval \"\$(/usr/local/bin/brew shellenv)\"\' \>\> \~/.bash\_profile

eval \"\$(/usr/local/bin/brew shellenv)\"

Note: Most new Macs (even Intel ones running newer macOS) have switched from Bash to Zsh as the default. If you run the code above and brew still doesn\'t work, you might need to run the same commands but replace .bash\_profile with .zprofile

### B. For Mac Silicon (M1/M2/M3)

echo \>\> \~/.zprofile

echo \'eval \"\$(/opt/homebrew/bin/brew shellenv)\"\' \>\> \~/.zprofile

eval \"\$(/opt/homebrew/bin/brew shellenv)\"

### Everyone again:

brew \--version

brew install git

## Install Port MacOS

sudo port install git \[if doesn't work, then steps that follow\]

xcode-select \--install

visit <https://www.macports.org/install.php> and choose correct pkg installer, then run it

export PATH=\"/opt/local/bin:/opt/local/sbin:\$PATH\"

port version

sudo port -v selfupdate

sudo port install git

## Log into Github via Visual Studio Code

1.  Open VS Code

2.  Click the person/account icon in the bottom-left of the sidebar

3.  Click Sign in with GitHub

4.  Your browser will open --- log into GitHub and authorize VS Code

5.  You\'ll be redirected back to VS Code automatically

## Add visual interface for git

*Note:* I'm not sure why we installed this intially, but we did so run this line of of code. Regardless, it's just a graphical interface for git so doesn't hurt anything to have on your computer.

brew install git-gui

## Copy UVC directory into a GitHub directory in your home directory and set up the branches

For reference, UVC main repo: https://github.com/undiscipliningvc/undiscipliningvc

git clone <https://github.com/undiscipliningvc/undiscipliningvc.git>

open UVC folder in VSC

git checkout dev

git checkout stage

git checkout master

git checkout dev

## Copy VSC Settings

Open VSC

Cmd+Shft+P

Tyep and select "Open User Settings (JSON)"

Erase whatever is there

Copy in contents of VSC-settings.txt, save and close

## Copy VSC Extension List

Place VSC-extensions.list in your UVC directory

Open VS Code

Press Cmd + Shift + P to open the Command Palette

Type and select \"Shell Command: Install \'code\' command in PATH\"

Open the terminal via VSC

cat VSC-extensions.list \| xargs -L 1 code \--install-extension
