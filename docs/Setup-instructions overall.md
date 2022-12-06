**Pre-Requisite**

1. You'll need an Azure subscription with 	the Microsoft.OperationsManagement resource provider registered (steps).
2. You'll need a service principal in the owner role on the Azure subscription 	where the infrastructure is to be provisioned.
3. Git clone this repository to your machine.
4. Create the SERVICEPRINCIPAL, ENVIRONMENT, and SQL_PASSWORD github secrets 

**Deployment**
1. Run the contoso-traders-provisioning-deployment github workflow. You can do this by going to the github repo's Actions tab, selecting the workflow, 
and clicking on the Run workflow button. This will both provision the infrastructure on Azure as well as deploy the applications (APIs, UI) to the infrastructure.
3. Next, deploy the apps, by running the contoso-traders-app-deployment workflow.
