# ExtJSDemo

This is the source code for the ExtJS Demo presented during the technical talk 
of PDS in GreeceJS 11th meetup. To run this example you will need to download:

 - `ExtJS 6 SDK` - The GPL versioned SDK of ExtJS 6 that is available from 
 [here](http://cdn.sencha.com/ext/gpl/ext-6.0.0-gpl.zip)
 - `Sencha Command 6` - The command line tool used to generate and build apps 
 that is available for download from [here](https://www.sencha.com/products/extjs/cmd-download/)

## Usage
After installing Sencha Command you can `git clone` the code and build it
using: 

	cd <path/to/project>
	sencha app build [testing|production]

Although building the application is not necessary for simple changes inside
existing files, it is mandatory if new files are added to the application or
removed, as well as if theme files are modified.

If built using one of the testing/production arguments, the output will be 
generated in the corresponding subfolder of the build directory.

To use the `watch` feature of Sencha Command you can run the following command:

	cd <path/to/project>
	sencha app watch

To generate a new app using Sencha Command you can run the following command:

	sencha -sdk <path/to/sdk> generate app [-classic|-modern] <AppName> <Folder>

