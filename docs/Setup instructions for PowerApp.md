**Setup Instructions for Power Platform App- Inventory Management System**
--------------------------------------------------------------------------


1.	Create Users 
You need to have a user in Azure Active directory with administrative privileges and a business user in SharePoint list.

2.	License Users 
For the Azure Active directory user can access the Power platform environment with administrator privilege and SharePoint user can access the application deployed on Power app. Also a SharePoint list should be created for storing the Product update details. This should be viewed by stakeholders.

3.	Power Platform Admin Center 
Login into the Power Platform Admin center to Import the Inventory Management System App. Once open the admin center go to click on apps tab and click on import canvas App. While importing the application user need to validate the workflow as created new and connection string with Azure SQL database as update. Also validate the SharePoint List connection as update.

4.	After successfully imported the application user can run the application to check the Product update validation.