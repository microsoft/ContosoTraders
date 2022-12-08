<h2>Setup Instructions for Power Platform App- Inventory Management System</h2>

This deployment guide is designed to deploy a Power app into your Power platform environment. Inventory Management App can be used for updating the product details in a fully automated way. This app created by using workflows and Adaptive card. You can export and import canvas apps by using packages. This feature allows you to export an app from one environment and import it to another. Export and import packages have the file format .zip. Here you are going to import a Canvas App named Inventory Management System into your Power platform environment and will execute some update operations.

<h3>Pre-Requisite</h3>


<h4>Azure Portal</h4>

   In Azure portal you are going to add a user with licenses PowerApps, Power Automate and Microsoft Teams Exploratory. Please follow below steps.
  
   1. Login into Azure Portal and go to Azure Active directory.
      
   ![pimg1](images/papp1.png)
      
    2. Select User on the Azure Active Directory.
   
   ![pimg2](images/papp2.png)
   
   3. Click on +New user to add a new user and select create new user.
   
   ![pimg3](images/papp3.png)
   
   4. You will navigate to New user page. Enter the user name, Name and password you an choose. After that scroll down and under Groups select a group (its not mandatory) and Roles section keep user as it is, you may add other details like usage location, job Info. After that click Create.
    
   5. Once the user added, please click on the user name which you created just now from the Active Directory Users Page.
   6. Click on Assigned Roles.
   
   ![pimg4](images/papp5.png)
   
   7. Select +Add Assignments, a side screen will open with Display Roles, search power platform administrator and select the Power platform administrator role from the list and click Add.

  ![pimg6](images/papp7.png)

Now the user is ready to access the power platform

<h4>Power platform environment</h4>
  
  1. Login into power platform environment with the same user account you have created by clicking on the below link:
      https://powerapps.microsoft.com/en-us/ 
     If its ask for Location and contact information please enter the detials.
     
     !{pimg7](images/papp8.png)
      
  
  3.  Add a business user in sharepoint list. For user details refer cloudlabs instructions.
  
      **Note: This user is going authenticate the Inventory Management Application.** 
  
  4. A sharepoint list to be created named Update Product details.
  
      **Note: This list will store the details of the Product update, the business entered through the inventory app.**
  
  5. Create an Azure SQL database connection string in the dataverse section of the power platform environment and validate it.
      
**Deployment**

  1. After login into the Power platform environment go to Power platform admin center and click on Apps and then click on Import Canvas App.
  2. After clicking on Import Canvas App, you will reach into import package details pane and validate the connection strings. While importing the application user need to validate the workflow as created new and connection string with Azure SQL database as update. Then click on the import button.
  3. It will take 5-10 minutes to complete the import operation and once it completed user can access the Inventory Management System App.
  4. CLick on the App to execute it, enter the business user credentials on it and go to update product screen and do an update of the price of any product. 
    
    
**Common errors**
  
  1. Authentication failed
  2. Connection string not listed
    
**to resolve the above errors you can choose following options**    
    
  1. Check the user connection string is available.
    
  2. If the Azure SQL database connection string not validated please create a connection string in dataverse section of the power platform.
