# crudauthwebspa
This is a small sample application that shows how to authenticate a user with Azure AD. It was created as a code sample for one of my blog posts: https://jpvelasco.com/angularjs-single-page-app-with-azure-ad-and-typescript/ 

Setup:

Before running the file on your machine, please make sure you have the following tools installed:
*TypeScript http://www.typescriptlang.org/
*http server https://www.npmjs.com/package/http-server
*Visual Studio Code https://code.visualstudio.com/

Configuration:

In order to run the application, a valid Azure AD application registration is required. You will need to register an applicaiton in Azure AD and replace the sample values with those from your configuration in app/app.ts. Please refer to the Microsoft documentation for more information on Azure AD application registration: https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-app-registration

Running:

Using the command line, navigate to the folder where the sample applicaition was cloned and issue the following command:
 http-server -S -C cert.pem -K key.pem -P https://localhost/ -p 44326

This will start the http server, you can then access the sample application by navigating to https://localhost:44326/ from a browser
You will noticed that there is a sample certificate included, this is for local debug convenience only, do not use it for anything else. Or even better, create your own certificates and use those. Also, note that your browser may not render the application because the certificate is not trusted, if that is the case then try loading the application in Firefox and setup a temporary 'ignore' rule for the certificate. As always, consider this and all sample code here, as-is with no warranty.
