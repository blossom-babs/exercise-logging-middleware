# Logger Middleware

### This projects is bootstrapped with Typescript, eslint and prettier code formatter, and jasmine for integrations and unit testing. The starter files can be found [here](https://github.com/blossom-babs/starter-file-typescript-jasmine-eslint-prettier)

### Middleware and Logger middleware

: Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. 

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

_[source: express js documentation on middlewares](https://expressjs.com/en/guide/using-middleware.html)_

---

: Logger middleware logs the information about each HTTP request. console.log(req.url)

---

### Project structure

1. build folder
: the build folder contains compiled javascript code

2. spec folder
: the spec folder contains unit and integration tests written in [jasmine](https://jasmine.github.io/)
  1. The spec folder contains a __support__ folder
  2. The __support__ folder contains a file __jasmine.json__
  3. __jasmine.json__ file contains configuration for jasmine such as jasmine output folder

3. src folder
: the src folder is the playground for this project. It has 2 folder and an entry server file __index.ts__
  1. __controller__ folder: This folder has a single file __logger.ts__ which contains the middleware function to be used in this project.
  2. __routes__ folder: The routes folder contains a folder __apis__, which in turn contains a single file __user.ts__
  3. __user.ts__ file leverages express router to create the different endpoints to be used in this project.
  4. __index.ts__ file is the entry server file

4. tests folder
: the test folder contains unit and integration tests written in [jasmine](https://jasmine.github.io/) for the project. It contains 3 folders:
  1. __controller__: This folder contains tests written for the corresponding files in the src/controller/ folders
  2. __helpers__: jasmine uses jasmine-spec-reporter to generate better results. This folder contains a __reporters.ts__ file which contains the configurations required for jasmine to display more detailed information about the test being run, as well as some customization options
  3. __routes__: This folder contains tests written for corresponding  files in the src/controller/ folders

5. .eslintignore
: This file tells .eslint to ignore the files specified inside of it

6. .eslintrc 
: This is the configuration folder for eslint and prettier. Detailed information on this is contained [here](https://github.com/blossom-babs/starter-file-typescript-jasmine-eslint-prettier)

7. .gitignore
: This files specifies files used in the project but should not be uploaded to github. /node_modules was included in this file

8. .prettierrc
: This is the configuration file for prettier code formatter

9. package-lock.json
: This project also contains package-lock.json file. package-lock.json file is used to keep track of the exact version of every package that is installed so that this project is reproducible in the exact same way even if the packages later gets updated.

10. package.json
: As you may well know, the package.json is the heart of any node project including this one. This file hold the record of important metadata about this project. It also defines functional attributes that npm uses to install dependencies, run scripts, and identify the entry point to our package. Some scripts I have set up in this project includes:
  - build scripts
  - test scripts
  - prettier formatter
  - eslint
In this project, a pre-hook script is set up that runs eslint before you make commits and push your code to github. This enures code consistency.

11. readme.md
: This file which is what you are currently reading contains most (if not all) of the information you need to understand this project and extend it if you wish to.

12. tsconfig.json
: This project is bootstrapped using typescript, as such this file species the root files and compiler options required to compile this project