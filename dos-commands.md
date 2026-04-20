# DOS Commands

|Sl.No.| Commands                     | Description                       |
|------|------------------------------|-----------------------------------|
| 01.  |netstat -a -o -n              | Check the available port          |
| 02.  |netstat -ab	                  | Available Ports |
| 03.  |taskkill /F /PID 5704         | Freeup the port number            |
| 04.  |nslookup                      | Name Server Lookup                |
| 05.  |for /F %a in ('dir /L /B') do rename %a %a | Rename current directory to lowercase |
| 06.  |del *.tmp/s                   | Clear temporary files |
| 07.  |netsh wlan set hostednetwork mode=allow ssaid=Hostpot key=12345 | Create wifi hotspot |
| 08.  |wmic bios get serialnumber    | Computer Serial No |
| 09.  |wmic bios get smbiosbiosversion | BIOS Version |
| 10.  |net localgroup Administrators | Administrators Access Test |
| 11.  |ipconfig/all                  | All IP Address |
| 12.  |hostname                      | Host Name |
| 13.  |systeminfo                    | DNS Name |
| 14.  |cls                           | Clear the command prompt screen |
| 15.  |dir                           | List files and folders in current directory |
| 16.  |dir /a                        | List all files including hidden files |
| 17.  |dir /s                        | List files in current and all subdirectories |
| 18.  |cd <folder>                   | Change to specified directory |
| 19.  |cd ..                         | Go up one directory level |
| 20.  |cd /                          | Go to the root directory |
| 21.  |md <folder>                   | Create a new directory |
| 22.  |rd <folder>                   | Remove an empty directory |
| 23.  |rd /s /q <folder>             | Remove directory and all its contents (silent) |
| 24.  |copy <src> <dest>             | Copy a file to a destination |
| 25.  |xcopy <src> <dest> /s /e      | Copy directories and subdirectories |
| 26.  |robocopy <src> <dest> /e      | Robust file/directory copy with retry support |
| 27.  |move <src> <dest>             | Move or rename a file or directory |
| 28.  |del <file>                    | Delete a file |
| 29.  |del /f /q <file>              | Force delete a file without confirmation |
| 30.  |ren <oldname> <newname>       | Rename a file or directory |
| 31.  |type <file>                   | Display contents of a text file |
| 32.  |more <file>                   | Display file contents one screen at a time |
| 33.  |echo <text>                   | Print text to the console |
| 34.  |echo %USERNAME%               | Display current logged-in user |
| 35.  |echo %COMPUTERNAME%           | Display computer name |
| 36.  |echo %PATH%                   | Display current PATH environment variable |
| 37.  |set                           | Display all environment variables |
| 38.  |set VAR=value                 | Set an environment variable (current session) |
| 39.  |setx VAR value                | Set an environment variable permanently |
| 40.  |path                          | Display or set the executable search path |
| 41.  |where <command>               | Show the full path of a command or executable |
| 42.  |which <command>               | Locate a command (Git Bash / WSL) |
| 43.  |whoami                        | Display current user name |
| 44.  |net user                      | List all user accounts on the machine |
| 45.  |net user <username>           | Show details of a specific user account |
| 46.  |net user <user> /add          | Create a new user account |
| 47.  |net user <user> /delete       | Delete a user account |
| 48.  |net localgroup                | List all local groups |
| 49.  |runas /user:<user> cmd        | Run command prompt as a different user |
| 50.  |ipconfig                      | Display IP configuration summary |
| 51.  |ipconfig /flushdns            | Clear the DNS resolver cache |
| 52.  |ipconfig /release             | Release current DHCP IP address |
| 53.  |ipconfig /renew               | Renew DHCP IP address |
| 54.  |ping <host>                   | Test network connectivity to a host |
| 55.  |ping -t <host>                | Continuously ping a host until stopped |
| 56.  |tracert <host>                | Trace the route packets take to a host |
| 57.  |pathping <host>               | Combine ping and tracert with packet loss stats |
| 58.  |netstat -an                   | Show all active connections and listening ports |
| 59.  |netstat -b                    | Show executable associated with each connection |
| 60.  |net view                      | List computers and shared resources on network |
| 61.  |arp -a                        | Display ARP cache (IP to MAC address mapping) |
| 62.  |netsh wlan show profiles      | List all saved WiFi profiles |
| 63.  |netsh wlan show profile <name> key=clear | Show WiFi password for saved network |
| 64.  |netsh int ip reset            | Reset TCP/IP stack |
| 65.  |netsh winsock reset           | Reset Winsock catalog |
| 66.  |tasklist                      | List all running processes |
| 67.  |tasklist /fi "imagename eq <name>" | Filter running processes by name |
| 68.  |taskkill /im <name> /f        | Kill a process by image name |
| 69.  |start <program>               | Launch a program or file |
| 70.  |shutdown /s /t 0              | Shut down the computer immediately |
| 71.  |shutdown /r /t 0              | Restart the computer immediately |
| 72.  |shutdown /l                   | Log off the current user |
| 73.  |shutdown /a                   | Abort a pending shutdown |
| 74.  |sfc /scannow                  | Scan and repair protected system files |
| 75.  |chkdsk C: /f /r               | Check disk for errors and repair bad sectors |
| 76.  |diskpart                      | Open disk partition management tool |
| 77.  |format <drive>: /fs:NTFS      | Format a drive with NTFS file system |
| 78.  |defrag C: /u /v               | Defragment a drive (verbose output) |
| 79.  |attrib <file>                 | Display or change file attributes (H, R, S, A) |
| 80.  |attrib +h <file>              | Hide a file |
| 81.  |attrib -h <file>              | Unhide a file |
| 82.  |fc <file1> <file2>            | Compare contents of two files |
| 83.  |find "text" <file>            | Search for a string in a file |
| 84.  |findstr /s "text" *.*         | Search string recursively in all files |
| 85.  |sort <file>                   | Sort lines of a text file alphabetically |
| 86.  |clip                          | Copy command output to clipboard |
| 87.  |<command> > file.txt          | Redirect command output to a file (overwrite) |
| 88.  |<command> >> file.txt         | Redirect command output to a file (append) |
| 89.  |<command> \| more             | Pipe output through more pager |
| 90.  |<cmd1> && <cmd2>              | Run cmd2 only if cmd1 succeeds |
| 91.  |<cmd1> \|\| <cmd2>            | Run cmd2 only if cmd1 fails |
| 92.  |wmic cpu get name             | Display CPU model name |
| 93.  |wmic memorychip get capacity  | Display RAM capacity per stick |
| 94.  |wmic diskdrive get model,size | Display disk drives and their sizes |
| 95.  |wmic os get caption           | Display Windows OS edition |
| 96.  |wmic product get name         | List all installed software |
| 97.  |msinfo32                      | Open System Information GUI |
| 98.  |dxdiag                        | Open DirectX Diagnostic tool |
| 99.  |mstsc                         | Open Remote Desktop Connection |
| 100. |eventvwr                      | Open Windows Event Viewer |
| 101. |regedit                       | Open Registry Editor |
| 102. |gpedit.msc                    | Open Local Group Policy Editor |
| 103. |services.msc                  | Open Windows Services Manager |
| 104. |devmgmt.msc                   | Open Device Manager |
| 105. |diskmgmt.msc                  | Open Disk Management |
| 106. |taskmgr                       | Open Task Manager |
| 107. |control                       | Open Control Panel |
| 108. |appwiz.cpl                    | Open Add/Remove Programs |
| 109. |ncpa.cpl                      | Open Network Connections |
| 110. |powercfg /energy              | Generate a power efficiency diagnostics report |
| 111. |powercfg /batteryreport       | Generate battery usage report (laptops) |
| 112. |net start <service>           | Start a Windows service |
| 113. |net stop <service>            | Stop a Windows service |
| 114. |sc query                      | List all services and their status |
| 115. |sc query <service>            | Show status of a specific service |
| 116. |assoc                         | Display or change file extension associations |
| 117. |ftype                         | Display or change file type open commands |
| 118. |color <attr>                  | Change command prompt text/background color |
| 119. |title <text>                  | Set the title of the command prompt window |
| 120. |mode con cols=120 lines=50    | Resize the command prompt window |
| 121. |date                          | Display or set the system date |
| 122. |time                          | Display or set the system time |
| 123. |ver                           | Display Windows version |
| 124. |help                          | Display a list of available DOS commands |
| 125. |<command> /?                  | Display help for a specific command |

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

