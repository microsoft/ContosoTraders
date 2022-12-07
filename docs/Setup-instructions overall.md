<html><h1> Setup instructions of Web App deployment and Power App Deployment </h1></html>

**Key Takeaway**
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Following are the key take aways for anyone having basic knowledge in Azure as well as Power platform.

1. By executing Github workflows you can easily deploy a web application in Azure containerized instance.
2. By executing an inventory management app in Power platform, user can easily update the details of the product and take the approval from their stakeholders in an automated way.

**Following tasks we are going to do**
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Deploy the ContosoTraders Web application on Azure Containerized instance by running workflows from github.
2. By using Power platform canvas app named Inventory Management System App you will update a product price detail and take an approval from the stakeholders in a fully automated way.

**Before you begin with the first task**
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Make sure your Azure subscription registered with Microsoft.Operationsmanagement resource provider.
    1. To check that go to subscriptions, Select the subuscription you want to view.
    2. On the left menu, under settings pane, Select Resource providers.
    3. You can search
Let us deploy the ContosoTraders Web app. Before you begin, need to follow the below steps to configure the Azure portal environment to deploy the Web App into a containerized instance. 

1. Login into Azure portal with your trial or organization account.
2. We are using Bicep scripts in the workflows, 
3. Go to Subscriptions, Select the subscription you want to register with the resource provider.
4. Under settings tab, select the resource provider to see the list of resource providers.
5. Please Select Microsoft.OperationsManagement as resource provider and then click on Register.
6. Wait for completing the registration.
7. After the Resource provider is registered go to the Subscription and select my permission under settings, then click on "Go to subscription access control (IAM)"
8. Click on Role Assignments to see the list of users and their roles.
9. If the desired user account is not having owner role please assign the user as owner role.
10. Go to Azure Active Directory select App registrations under Manage section then click on New Registration.
11. At the Name section provide Contoso Traders, under Supported account types select the first option (Accounts in this organizational directory only (Default Directory only - Single tenant))
12.  After selecting web and add the URI as www.contosotraders.com under Redirect URI section, click on register.
13.  Now you have created the service principal in the owner role on Azure Subscription.
14. Go to Github repository named ContosoTraders, click on Code and Select HTTPS and copy the url, then open Git Bash.
15. Change the current working directory to the location where you want the cloned directory.
16. Type git clone, and then paste the URL you copied earlier.
17. After copying, it will look like this: $ git clone https://github.com/YOUR-USERNAME/ContosoTraders.
18. Press Enter and your local clone will be created.
19. On the github repository, go to the Settings tab > Secrets > Actions then by clicking on New Repository Secret, you can create these necessary secrets: SERVICEPRINCIPAL, ENVIRONMENT, and SQL_PASSWORD  

**Deployment**
1. Go to ContosoTraders repository, under Actions tab select the workflow named contoso-traders-provisioning-deployment and click on Run workflow button.
2. This will both provision the infrastructure on Azure as well as deploy the applications (APIs, UI) to the infrastructure.
2. Next, deploy the apps, by running the contoso-traders-app-deployment workflow.
3. Check the resource groups, databases, App services been created and deployed.
4. Check the Web app deployed through the url https://www.contosotraders.com/

**Power App**

  Pre-Requisite
1.	Login into Azure Portal and go to Azure Active directory. Add a user named contoso.approver@contosotraderslabs.onmicrosoft.com having licenses of Power apps, Power automate and Microsoft Teams Exploratory.
2.	Power platform environment Login into power platform environment with your trial or organization account by clicking on the below link: https://powerapps.microsoft.com/en-us/
3.	Add a business user in sharepoint list. For user details refer cloudlabs instructions. Note: This user is going authenticate the Inventory Management Application.
4.	A sharepoint list to be created named Update Product details. Note: This list will store the details of the Product update, the business entered through the inventory app.
5.	Create an Azure SQL database connection string in the dataverse section of the power platform environment.

  Deployment

1.	After login into the Power platform environment go to Power platform admin center and click on Apps and then click on Import Canvas App.
2.	After clicking on Import Canvas App, you will reach into import package details pane and validate the connection strings. While importing the application user need to validate the workflow as created new and connection string with Azure SQL database as update. Then click on the import button.
3.	It will take 5-10 minutes to complete the import operation and once it completed user can access the Inventory Management System App.
4.	CLick on the App to execute it, enter the business user credentials on it and go to update product screen and do an update of the price of any product.
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
                                
                                
                                




