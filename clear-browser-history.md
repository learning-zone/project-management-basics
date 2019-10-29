## Clear IE Browser History

```batch
@echo off
taskkill /f /t /im iexplore.exe

set DataDir=C:\Users\%USERNAME%\AppData\Local\Microsoft\Intern~1

del /q /s /f "%DataDir%"
rd /s /q "%DataDir%"

set History=C:\Users\%USERNAME%\AppData\Local\Microsoft\Windows\History

del /q /s /f "%History%"
rd /s /q "%History%"

set IETemp=C:\Users\%USERNAME%\AppData\Local\Microsoft\Windows\Tempor~1

del /q /s /f "%IETemp%"
rd /s /q "%IETemp%"

set Cookies=C:\Users\%USERNAME%\AppData\Roaming\Microsoft\Windows\Cookies

del /q /s /f "%Cookies%"
rd /s /q "%Cookies%"

C:\bin\regdelete.exe HKEY_CURRENT_USER "Software\Microsoft\Internet Explorer\TypedURLs"

rundll32.exe InetCpl.cpl,ClearMyTracksByProcess 4351

sleep 1

"%ProgramFiles%\Internet Explorer\iexplore.exe" http://10.206.14.52:5000/innovation-4.2MV2/ 
sleep 1

"%ProgramFiles%\Internet Explorer\iexplore.exe" http://10.206.16.33:8080/qcbin/start_a.jsp/

exit
```