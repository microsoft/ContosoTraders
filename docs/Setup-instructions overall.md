**Pre-Requisite**

1. You'll need an Azure subscription with 	the Microsoft.OperationsManagement resource provider registered (steps).
2. You'll need a service principal in the owner role on the Azure subscription 	where the infrastructure is to be provisioned.
3. Git clone this repository to your machine.
4. Create the SERVICEPRINCIPAL, ENVIRONMENT, and SQL_PASSWORD github secrets 

**Deployment**
1. Run the contoso-traders-provisioning-deployment github workflow. You can do this by going to the github repo's Actions tab, selecting the workflow, 
and clicking on the Run workflow button. This will both provision the infrastructure on Azure as well as deploy the applications (APIs, UI) to the infrastructure.
2. Next, deploy the apps, by running the contoso-traders-app-deployment workflow.
3. Check the resource groups, databases, App services been created and deployed.
4. Check the We app deployed through the url https://www.contosotraders.com/

**Power App**

  Pre-Requisite
1.	Azure Portal Login into Azure Portal and go to Azure Active directory. Add a user named contoso.approver@contosotraderslabs.onmicrosoft.com having licenses of Power apps, Power automate and Microsoft Teams Exploratory.
2.	Power platform environment Login into power platform environment with your trial or organization account by clicking on the below link: https://powerapps.microsoft.com/en-us/
3.	Add a business user in sharepoint list. For user details refer cloudlabs instructions. Note: This user is going authenticate the Inventory Management Application.
4.	A sharepoint list to be created named Update Product details. Note: This list will store the details of the Product update, the business entered through the inventory app.
5.	Create an Azure SQL database connection string in the dataverse section of the power platform environment.

  Deployment

1.	After login into the Power platform environment go to Power platform admin center and click on Apps and then click on Import Canvas App.
2.	After clicking on Import Canvas App, you will reach into import package details pane and validate the connection strings. While importing the application user need to validate the workflow as created new and connection string with Azure SQL database as update. Then click on the import button.
3.	It will take 5-10 minutes to complete the import operation and once it completed user can access the Inventory Management System App.
4.	CLick on the App to execute it, enter the business user credentials on it and go to update product screen and do an update of the price of any product. To achieve this you can go through this link: https://github.com/seenakhan/ContosoTraders/blob/main/demo-scripts/LOW%20CODE%20DEVELOPMENT/HIGH%20LEVEL%20SCENARIO%20WALKTHROUGH.md
5.	You can successfully run the application.


**Use Cases**

Following are the use cases we can apply

1. Cloud-Native-App-Architecture            : https://github.com/microsoft/ContosoTraders/tree/main/demo-scripts/Cloud-Native-App-Architecture
2. DevSecOps                                : https://github.com/microsoft/ContosoTraders/tree/main/demo-scripts/DevSecOps
3. Intelligent-Apps-with-Azure-AI-Services  : https://github.com/microsoft/ContosoTraders/tree/main/demo-scripts/Intelligent-Apps-with-Azure-AI-Services
4. LOW CODE DEVELOPMENT                     : https://github.com/microsoft/ContosoTraders/tree/main/demo-scripts/LOW%20CODE%20DEVELOPMENT
5. Autoscaling-Cloud-Native-Apps-Azure      : https://github.com/microsoft/ContosoTraders/tree/main/demo-scripts/Autoscaling-Cloud-Native-Apps-Azure

**Clean Up**

1. Delete all the resource groups created through the workflow execution
2. Delete the Dataverse connections, Power Automate flow and Inventory Management App from the Power Platform environment.
3. Delete the sharepoint lists if needed.

**Troubleshoot**

  Common errors
1.	Authentication failed
2.	Connection string not listed

  How to troubleshoot
  
1.	Check the user connection string is available, if not please go to the prerequisite section step 1.
2.	If the Azure SQL database connection string not validated please create a connection string in dataverse section of the power platform.

**Request Support**

You can raise an issue to report any bug or any feature request on the github repo Contoso Traders.
                                
                                
                                




