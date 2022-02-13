## LINUX Commands

|Sl.No.| Commands       | Description                       |
|------|----------------|-----------------------------------|
| 01.  |appenToFile		|                                   |
| 02.  |cat 			|                                   |
| 03.  |checksum 		|                                   |
| 04.  |chgrp			|                                   |
| 05.  |chmod			|                                   |
| 06.  |chown			|                                   |
| 07.  |copyFromLocal	|                                   |
| 08.  |copyToLocal		|                                   |
| 09.  |count			|                                   |
| 10.  |cp				|                                   |
| 11.  |createSnapshot	|                                   |
| 12.  |deleteSnapshot	|                                   |
| 13.  |df				|                                   |
| 14.  |du				|                                   |
| 15.  |expunge			|                                   |
| 16.  |find			|                                   |
| 17.  |get				|                                   |
| 18.  |getfacl			|                                   |
| 19.  |getfattr		|                                   |
| 20.  |getmerge		|                                   |
| 21.  |mkdir			|                                   |
| 22.  |moveFromLocal	|                                   |
| 23.  |moveToLocal		|                                   |
| 24.  |mv				|                                   |
| 25.  |nohup			| Nohup is very helpful when you have to execute a shell script or command that take a long time to finish. Nohup stands for no hang up. |
| 26.  |put				|                                    |
| 27.  |renameSnapshot	|                                    |
| 28.  |rm				|                                    |
| 29.  |rmdir			|                                    |
| 30.  |setfacl			|                                    |
| 31.  |setfattr		|                                    |
| 32.  |setrep		    |                                    |
| 33.  |stat			|                                    |
| 34.  |tail			|                                    |
| 35.  |test			|                                    |
| 36.  |text			|                                    |
| 37.  |touchz			|                                    |
| 38.  |usage			|                                    |

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### DOS Commands

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

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### List of Basic SSH Commands

|Sl.No.| Commands    | Description                                      |
|------|-------------|--------------------------------------------------|
| 01.  |ls	         |Show directory contents (list the names of files).|
| 02.  |ls -a        |List all files in a directory|
| 03.  |ls -h        |List files along with file sizes|
| 04.  |ls *.html    |list all files ending in .html|
| 05.  |cd	         |Change directory (e.g. cd /var/www will put you in the www directory)|
| 06.  |cd ~         |Go to the home folder|
| 07.  |cd /         |Go to the root directory|
| 08.  |cd -         |Go to the previous directory|
| 09.  |cd ..        |Move up one directory|
| 10.  |mkdir	     |Create a new folder (e.g. mkdir myfoldername)|
| 11.  |touch	     |Create a new file.|
| 12.  |rm	         |Delete a file (e.g. rm filename.html)|
| 13.  |rmdir        |Delete a folder (e.g. rmdir foldername)|
| 14.  |cat	         |Show the contents of a file (e.g. cat filename.html)|
| 15.  |pwd	         |Show current directory (full path to where you are right now).|
| 16.  |cp	         |Copy a file (e.g. cp index.html /mydirectory/index.html)|
| 17.  |mv	         |Move a file (e.g. mv index.html /mydirectory/index.html)|
| 18.  |grep	     |Search for a string (e.g. grep "word" index.html). Searches for “word” in the index.html file|
| 19.  |find	     |Search files and directories.|
| 20.  |vi/nano	     |Text editors.|
| 21.  |history	     |Show last 50 used commands.|
| 22.  |clear	     |Clear the terminal screen.|
| 23.  |tar	         |Create & Unpack compressed archives.|
| 24.  |wget	     |Download files and store them in your current directory (e.g. wget https://website.com/filename.ext)|
| 25.  |du	         |Get file size.|
| 26.  |vim          |Open or create a file with the Vim text editor (e.g. vim filename.html).|
| 28.  |nano         |Open or create a file with the nano text editor (e.g. nano filename.html)|
| 29.  |zip          |Compress a folder (e.g. zip -r folder.zip folder). Takes “folder” and compresses it as a file called “folder.zip”|
| 30.  |unzip        |Decompresses a folder (e.g. unzip folder.zip)
| 31.  |chmod        |Change a file’s permissions (e.g. chmod 604 folder). Use this Unix permissions calculator to determine which chmod command you should be using|
| 32.  |netstat      |Display network connections|
| 33.  |free-m       |Display your machine’s current memory usage|
| 34.  |exit         |Exit the remote server and return to your local machine SSH Keys|
| 35.  |cat filename.txt        | cat the contents of filename.txt to your screen|
| 36.  |tail                    |like cat, but only reads the end of the file|
| 37.  |tail /var/log/messages      |see the last 20 (by default) lines of /var/log/message|s|
| 38.  |tail -f /var/log/messages   |watch the file continuously, while it's being updat|ed|
| 39.  |tail -200 /var/log/messages |print the last 200 lines of the file to the screen|
| 40.  |more                        |like cat, but opens the file one screen at a time rather than all at once|
| 41.  |more /etc/userdomains       |browse through the userdomains file.|
| 42.  |pico                        |friendly, easy to use file editor|
| 43.  |pico /home/burst/public_html/index.html | edit the index page for the user's website.|
| 44.  |vi                          |another editor, tons of features|
| 45.  |vi /home/burst/public_html/index.html | edit the index page for the user's website.|
| 46.  |grep root /etc/passwd | shows all matches of root in /etc/passwd|
| 47.  |grep -v root /etc/passwd | shows all lines that do not match root|
| 48.  |touch /home/burst/public_html/404.html | create an empty file called 404.html in the directory /home/burst/public_html/|
| 49.  |ln | create's "links" between files and directories|
| 50.  |ln -s /home/username/tmp/webalizer webstats | Now you can display http://www.yourdomain.com/webstats to show your webalizer stats online. You can delete the symlink (webstats) and it will not delete the original stats on the server.|
| 51.  |rm filename.txt | deletes filename.txt, will more than likely ask if you really want to delete it|
| 52.  |rm -f filename.txt | deletes filename.txt, will not ask for confirmation before deleting.|
| 53.  |rm -rf tmp/ | recursively deletes the directory tmp, and all files in it, including subdirectories.|
| 54.  |last | shows who logged in and when|
| 55.  |last -20 | shows only the last 20 logins|
| 56.  |last -20 -a | shows last 20 logins, with the hostname in the last field|
| 57.  |w | shows who is currently logged in and where they are logged in from.|
| 58.  |netstat | shows all current network connections.|
| 59.  |netstat -an | shows all connections to the server, the source and destination ips and ports.|
| 60.  |netstat -rn | shows routing table for all ips bound to the server.|
| 61.  |top | shows live system processes in a nice table, memory information, uptime and other useful info.|
| 62.  |ps | ps is short for process status, which is similar to the top command. It's used to show currently running processes and their PID.|
| 63.  |ps U username | shows processes for a certain user|
| 64.  |ps aux | shows all system processes|
| 65.  |ps aux --forest | shows all system processes like the above but organizes in a hierarchy that's very useful!|
| 66.  |file | attempts to guess what type of file a file is by looking at it's content.|
| 67.  |file * | prints out a list of all files/directories in a directory|
| 68.  |du | shows disk usage.|
| 69.  |du -sh | shows a summary, in human-readble form, of total disk space used in the current directory, including subdirectories.|
| 70.  |du -sh * | same thing, but for each file and directory. helpful when finding large files taking up space.|
| 71.  |wc | word count|
| 72.  |wc -l filename.txt | tells how many lines are in filename.txt|
| 73.  |cp filename filename.backup | copies filename to filename.backup|
| 74.  |cp -a /home/burst/new_design/* /home/burst/public_html/ | copies all files, retaining permissions form one directory to another.|
| 75.  |find * -type d|xargs -i cp --verbose php.ini {} | copies your php.ini file into all directories recursively.|
| 76.  |kill | terminate a system process|
| 77.  |kill -9 PID EG | kill -9 431|
| 78.  |kill PID EG | kill 10550|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
