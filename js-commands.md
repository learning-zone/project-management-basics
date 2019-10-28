## JavaScript COMMANDS


### NODEJS COMMANDS

|Sl.No.| Commands                   | Description                       |
|------|----------------------------|-----------------------------------|
| 01. |npm install node@8.10.0      | Install node specific version |
| 02. |npm init 					| Creates package.json |
| 03. |npm install                  |                      |
| 04. |bower install                |                      |
| 05. |npm install -g gulp          |                      |
| 06. |npm install -g bower         |                      |
| 07. |npm install -g http-server   |                      |
| 08. |npm install -g grunt-cli     |                      |
| 09. |http-server					| Start NodeJs Server  |
| 10. |npm install -S express       |                      |
| 11. |npm install -S body-parser   |                      |
| 12. |npm start                    |                      |
| 13. |gulp develop 				|	 Server Start      |
| 14. |gulp help 					| gulp Help            |
| 15. |gulp build					| Clean and minification into single file |
| 16. |gulp serve                   |                         |
| 17. |gulp watch 					|                         |
| 18. |gulp test:tdd				|	 Unit Testing         |
| 19. |gem install sass             |                         |
| 20. |sass -?						| Help                    |
| 21. |sass --update var_styles.scss|                         |
| 22. |sass --watch dir:dir         | Watch for changes       |
| 23. |npm install -g webpack 		| Istall webpack globally |
| 24. |webpack 						| Run                     |
| 25. |npm -l 						| Display full usage info |
| 26. |ruby -v                      |  Ruby Version           |
| 27. |node -v                      |  Node Version           |
| 28. |npm -v						|  Node Package Manager Version |
| 29. |tsc -v 						|  TypeScript Version     |
| 30. |git version                  |  Git Version            |
| 31. |webpack -v					|  Webpack Version        |
| 32. |npm install mongoose         |                         |
| 33. |npm config rm proxy          |                         |
| 34. |npm config rm https-proxy    |                         |
| 35. |npm config list              |                         |
| 36. |npm install firebase angularfire2 --save               | 
| 37. |npm install git+https://github.com/angular/angularfire2.git|
| 38. |npm install firebase angularfire2@next --save              |
| 39. |npm uninstall -g angular-cli |                             |
| 40. |npm cache clean              |                             |
| 41. |npm install -g typescript    |                             |
| 42. |npm install --save rxjs@5.5.2|   Reactive Extensions Library for JavaScript |
| 43. |npm install express-session  |                              |
| 44. |node app                     |    Run app.js file on node server |
| 45. |npm install -g jshint        |                              |
| 46. |npm install express --save   |    Install express into local project |
| 47. |npm install cors --save		|   Cross Origin Resource Sharing --> It allows open api to accessibale by other domains |
| 48. |npm install body-parser --save |                      |
| 49. |npm install underscore --save  |                      |
| 50. |npm remove underscore --save   |                      |
| 51. |npm install ws --save		  |	   Install WebSocket |
| 52. |npm install socket.io --save   |  Used for creating websocket when browser doestn't support websocket |
| 53. |npm install -g mocha			  | JavaScript Unit Testing framework |
| 54. |mocha						  |	   To run mocha test |
| 55. |npm install nock --save-dev    |  Use to create mock server for testing |
| 56. |npm install rewire --save-dev  |  Use for Injecting dependencies |
| 57. |npm install sinon --save-dev	  | Use to create mock object for test |
| 58. |npm install -g istanbul		  | JavaScript test coverage tool |
| 59. |istanbul cover _mocha		  |	   Run istanbul report |
| 60. |npm install supertest --save-dev|                       |
| 61. |npm install cheerio --save-dev  |                       |
| 62. |npm install grunt-contib-jshint --save-dev|
| 63. |npm install grunt-contrib-less --save-dev|
| 64. |grunt css 					   | Convert ".less" file into corresponding ".css" files |
| 65. |npm install grunt-autoprefixer --save-dev|	 Add code for browser dependencies in css |
| 66. |npm install grunt-browserify --save-dev  | Create bundle.js combining all files together |
| 67. |npm install grunt-contrib-watch --save-dev|
| 68. |grunt watch                               |
| 69. |ng add @angular/material                  |

  

### Angular COMMANDS



|Sl.No.| Commands               | Description                       |
|------|------------------------|-----------------------------------|
| 01. |npm install -g @angular/cli |                                   |
| 02. |ng new project-name		    | Create an Angular project with Angular CLI |
| 03. |ng serve --open              |                                            |
| 04. |ng test						| Running unit tests |
| 05. |ng e2e 						| Running end-to-end tests with protractor framwork|
| 06. |ng generate					| Generate Angular components |
| 07. |ng lint						| prints out linting errors |
| 08. |ng build				        | The build artifacts will be stored in the dist/ directory. |
| 09. |ng build --prod				| This will build the project in the dist directory |
| 10. |ng build --dev				|                                                   |
| 11. |ng get/ng set			    | Set a value in the Angular CLI configuration |
| 12. |ng doc						| Opens a browser window with the keyword as search in Angular documentation. |
| 13. |ng eject					| ejects your app and output the proper webpack configuration and scripts |
| 14. |ng xi18n					| Extracts i18n messages from the templates. |
| 15. |ng test --watch=false --code-coverage		| Generate Code Coverage Reports |
| 16. |npm install firebase angularfire2 --save     |                  |
| 17. |npm install @angular/platform-browser-dynamic| bootstrap module |
| 18. |npm install angular-in-memory-web-api --save | Install In-memory-web-api |
| 19. |npm install @angular/elements | Angular elements                |
| 20. |npm install -g now			  | Opensource server               | 
| 21. |npm install -g tsun			  | REPL - TypeScript Upgraded Node |
| 22. |npm install moment --save-dev |                                 |
| 23. |npm run                       |                                 |
| 24. |npm run-script                |                                 |
| 25. |ng add @angular/material      |                                 |
| 26. |ng add @angular/cdk           |                                 |
| 27. |ng add @angular/animations    |                                 |
| 28. |npm install --save hammerjs   |                                 |


### Angular Generate COMMANDS



|Sl.No.| Commands                               | 
|------|----------------------------------------|
|  01. |ng new [ app-name ] --routing           |
|  02. |ng generate component [ component-name ]|
|  03. |ng generate module [ module-name ]      |
|  04. |ng generate class [ class-name ]        |
|  05. |ng generate directive [ directive-name ]|
|  06. |ng generate interface [ interface-name ]|
|  07. |ng generate pipe [ pipe-name ]|
|  08. |ng generate serviceWorker [ serviceWorker-name ]|
|  09. |ng generate application [ application-name ]|
|  10. |ng generate enum [ enum-name ]|
|  11. |ng generate guard [ guard-name ]|
|  12. |ng generate service [ service-name ]|
|  13. |ng generate universal [ universal-name ]|
|  14. |ng generate appShell [ appShell-name ]|
|  15. |ng generate library [ library-name ]|
|  16. |ng generate component [ component-name ] --inline-template --inline-style --module app [ Generate initial test file ]|


### WEBPACK COMMANDS


|Sl.No.| Commands                     | Description                       |
|------|------------------------------|-----------------------------------|
|  0.  |npm init                      |                                   |
|  0.  |npm install -g webpack        |                                   |
|  0.  |npm install webpack --save-dev|                                   |
|  0.  |npm install jquery --save-dev |                                   |
|  0.  |npm install                   |                                   |
|  0.  |webpack main.js ./bundle.js   | Entry_point  compiled file_name   |
|  0.  |webpack                       |                                   |
|  0.  |webpack -w                    | watch                             |
|  0.  |npm install babel-loader babel-core --save-dev|                   |
|  0.  |npm install babel-preset-es2015 babel-preset-react --save-dev     |
|  0.  |npm install style-loader css-loader --save-dev    | Load css using webpack |
|  0.  |npm install sass-loader node-sass --save-dev      | running sass using webpack |
|  0.  |npm install url-loader file-loader --save-dev	  | Load images using webpack |
|  0.  |npm install webpack-dev-server --save-dev		  | Load project in server using webpack |