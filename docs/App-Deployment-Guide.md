<html><h1> Contos Traders - Deployment Guide </h1></html>


This deployment  guide is designed to help you deploy Contoso Traders application in your Azure environment. Contoso Trader is a micro-services-based application, leveraging various Azure services including Azure Kubernetes Service, App Services, Cosmos DB, SQL Database and many more. 
While it’s possible to deploy overall solution using Azure Portal, CLI, PowerShell, ARM Templates, we will be using a combination of GitHub Actions and bicep templates to automate the provisioning of overall solution. 

This will deploy all components defined in architecture  – https://github.com/microsoft/ContosoTraders/blob/main/docs/architecture/contoso-traders-enhancements.drawio.png

<html><h3>Pre-Requisites</h3></html>

You will need following before we start with deployment. 
1.	An Azure Subscription with Owner rights. If you don't have an Azure subscription, create a free account before you begin.(https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
2.	A GitHub Account. You can create a free account here https://github.com/

<h2>Preparing your Azure Subscription</h2>

**Register Required Resource Providers**

You will need to register required resource providers on your Azure subscription to your subscription to use the required Azure services.   
1.	Login to Azure Portal by visiting https://portal.azure.com and sign-in with an account having Owner privileges. 
2.	Navigate to Subscription > Resource Providers
3.	Find following resource provider and click register.    
	1. Microsoft.Operationsmanagement
	2. Microsoft.Cdn
	
      ![img1](images/Dapp2.png)
      
      
      ![img2](images/cdnregister.png)
      
     
	This will take few minutes to complete. 

**Create an Azure Service Principal**

GitHub Actions will need to authenticate with your Azure account in order to deploy the application. We will be using an Azure AD Service Principal for allowing GitHub Actions to deploy the resources in Azure. 
 An Azure service principal is an identity created for use with applications, hosted services, and automated tools to access Azure resources. This access is restricted by the roles assigned to the service principal, giving you control over which resources can be accessed and at which level
Let’s create an Azure Service Principal and assign required permissions. 

1.	Sign in to your Azure Account through the Azure portal.
2.	Select Azure Active Directory.
3.	Select App registrations.
4.	Select New registration.
5.	Provide following values and click Register
	1. Name:  “ContosoTraders-GitHubActions”
	2. Supported Account Type: Select the first option - Accounts in the organizational directory only(Default Directory-Single Tenant)
	3. Redirect URI: Select Web and enter the url : https://www.contosotraders.com or your domain url you can enter.

     ![img3](images/appreg.png)

Once the app is registered, please make a note of it’s Application ID,  Secret and Tenant ID.

1.	Find your newly created application in Azure AD > App Registration
2.	Make a note of Application ID & Tenant ID
     
     ![img4](images/APPIDCTenantID.png)
     
3.	Navigate to Secrets and create a new secret.
	1. Name: ContosoTrader-Secret-GitHubActions
	2. Validity – 1 Year
4.	Make a note of the secret value. Please keep it in a safe location until next step. This value can not be retrieved once you navigate away from this page. 

Now, we will assign Owner rights to this SPN on Azure subscription. 
1.	In Azure Portal, Navigate to Subscriptions and Select your subscription
2.	Click on Access Control (IAM) and Click Add Role Assignment

     ![img5](images/Accesscontrol.png)
     
3.	Select Owner as role and find the newly created SPN
	
     ![img6](images/addrolespn.png)
4.	Click Review+Assign 

Your subscription is now ready for deployment. 

**Accept Responsible AI Terms**

In Contoso Traders, we are using Azure Cognitive Service to facilitate the search by image functionality. Before you can use Azure AI services, you must accept the terms for Responsible AI usage. 
In order to accept the terms, you will need to manually provision a Cognitive Service Resource using Azure Portal, with which you will be able to accept the terms. 
It is recommended to create this temporary in a separate resource group, so that you can delete the resource group once the terms are accepted. 
1. Select the following link to create a Computer Vision resource:

	[Computer vision](https://portal.azure.com/#create/Microsoft.CognitiveServicesComputerVision)
	
2. On the Create page, provide the following information:
	
**Project details Description**

    1. Subscription		:Select one of your available Azure subscriptions.
    2. Resource group	:Create new > Cognitive-Temp
    3. Region		:The location of your cognitive service instance.
    4. Name			:A descriptive name for your cognitive services resource. For example, MyTempCognitiveServicesResource1.
    5. Pricing tier		:Free or Standard S0.
    6. Scroll down and check the box for reviewing and acknowledging all the terms above.
	
3. Click Review & Create
4. After Validating click Create

Once the provisioning is completed, you can delete the resource group “Cognitive-Temp” as terms are accepted for your subscription now. 

<h2>Preparing your GitHub Account</h2>

In this step, you will form the original ContosoTraders GitHub repository to your GitHub Account and prepare for deployment. 
Fork the Contoso Traders Repo

1.	Login to GitHub by visiting https://github.com
2.	Open https://github.com/microsoft/ContosoTraders and Click on Fork
	
	![img7](images/Repofork.png)

3.	You should now a clone of this repository in your GitHub Account, with https://github.com/YOURUSERNAME/ContosoTraders. 
4.	You will be using this repository for deployment. Since it exists in your GitHub Account, you will be able to make changes to the contents as well, including source code. 


**Create Secrets in GitHub**

GitHub Secrets are encrypted and allow you to store sensitive information, such as access tokens, in your repository. In our scenario, we will be using GitHub Secrets to store the Azure authentication credentials and other secrets. 
These secretes will be used by GitHub Action Workflows during deployment and CI/CD process.  We will be creating following three secrets

   * ENVIRONMENT: Pre-fix for resource naming, URLs etc. You can give any value, such as yournametraders
   * SERVICEPRINCIPAL: Azure Service Principal credentials for GitHub Action workflow to authenticate with Azure
   * SQL_PASSWORD: New Password for SQL DB to be created as part of deployment. 
	
**Let’s get started**

1. Login to GitHub and navigate to your fork of Contoso traders repository. https://github.com/YOURUSERNAME/ContosoTraders.
2. Under your repository name, click on the "Settings" tab.
	
	![img8](images/settingsgithub.png)
	
3. In the left sidebar, click Secrets and select actions.
	
	![img9](images/githubsett.png)

4. On the right bar, click on "Add a new secret"
5. Create the following secret for Azure SPN. 
	1. Secret Name: SERVICEPRINCIPAL
	2. Value: Please replace the values with your App ID created earlier.
	
	{
	
  		"clientId": "zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz",
		
  		"clientSecret": "your-client-secret",
		
  		"tenantId": "zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz",
		
  		"subscriptionId": "zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz"
		
	}
	
	3. Click Add Secret
	
	![img10](images/addserviceprniciopagithub.png)

9.	Create the following secret for ENVIRONMENT.  This is a prefix for your environment and all resources are provisioned with this pre-fix to avoid conflict with public resource names in Azure. 

	1. Secret Name: ENVIRONMENT
	2. Value      : Add any combination of characters not exceeding 6 and dont take below 3
		
	 ![img15](images/envwork.png)
	

10.	Create the following secret for SQL Password.  
	1. Secret Name: SQL_PASSWORD
	2. Value	   : Add any combination of alphanumeric characters of minimum 12
	
	
	![img12](images/sqlsecretgit.png)


Your GitHub repository is now ready for deployment. 


<h2>Deploying the Contoso Traders Application</h2>


You are now ready to start deployment of application to your Azure account. We will be using GitHub Action workflows for this deployment. 
We will be using following workflows as part of deployment.  You can review workflow code by navigating to .github/workflows directory in your repository. 
•	contoso-traders-provisioning-deployment: 

Let’s get started. 

1. Login to GitHub and navigate to your fork of Contoso traders repository. https://github.com/YOURUSERNAME/ContosoTraders
2. Navigate to Actions and Accept enabling the workflows
		
	![img13](images/workflowenable.png)
	
	
3. In the workflow list, select the “contoso-traders-provisioning-deployment” workflow.
	
4. Click on Run Workflow and run the workflow with main branch. 
	
	![img14](images/workflowrun1.png)

5. If you refresh the page, you will see that workflow provisioning has started. You can click on workflow to see the progress live and logs.  If you navigate in the workflow execution, you will the following stages.
	1. Provision-infrastructure: This stage provisions the required resource groups and other Azure services as per architecture  and prepares them for app.
	2. You can see each stage and what it does in below screenshot 
	 
	![img19](images/workflow5.png)

	3. Deploy the carts & product API: This stage provisions pushing of carts api and products api to azure container registry.
	
	![img22](images/workflow7.png)
	![img20](images/workflow3.png)

	5. Deploy the UI: This stage configure the endpoints of the cart api and products api.
	 
	![img21](images/workflow4.png)
	
Please note that the workflow provisions all resources through bicep templates, scripts etc. We’ve observed that in many cases, Azure subscription resource cache does not get updated fast enough before the next dependent step starts executing.
If you feel workflow failure error due to missing Azure resources (Key vault, CDN, container apps etc, please re-run the failed jobs. 


<h3>Validate & test the deployment</h3>

Contoso Traders application is now ready in your subscription. Let us review and validate the deployment to ensure application is functioning as expected.

**Review Provisioned Azure Resources**

1.	Navigate to Azure
2.	Contoso-traders-rg
	* Contoso-traders-product App Service
	* Azure Redis Cache
	* Cosmos DB (2)
	* Load Testing Resource
	* Cognitive Services
	* Azure Container App
	* Azure Container Registry. 
	* Front Door and CDN Profiles
	* Key Vault
	* Azure Kubernetes Service
	* Log Analytics Workspace
	* SQL Databases 
	* Storage Accounts
3.	Along with contoso-traders-rg, you will also see another RG named contoso-traders-aks-nodes-rg, which includes Kubernetes node resources. 
If you want to understand how these components are used, please refer to the architecture here link)

**Test Application**

1.	Navigate to Azure and look for CDN endpoints by searching for Content Delivery Network in search menu.
2.	Select the CDN profile starting with name contoso-traders-cdn$ENVIRONMENTNAME 
3.	Review the Endpoints and make a note of the URL for endpoint containing “UI2” website. It should look like https://contoso-traders-ui2$ENVNAME.azureedge.net
4.	Launch the application. 
5.	Test basic operations. 
If you would like to add a custom domain, like contosotraders.com, you can purchase the domain and add to CDN profile. Please see documentation here - https://learn.microsoft.com/en-us/azure/cdn/cdn-map-content-to-custom-domain?tabs=azure-dns%2Cazure-portal%2Cazure-portal-cleanup 

**Deploy Inventory Management PowerApps**

If you are interested, you can follow these steps to deploy the inventory management application used by internal users for managing product pricing, stock etc. 
It will be hosted using Power Apps and will use Power Automate & MS Teams to enable a full inventory management and approval workflow.
Please follow the instructions here:

https://github.com/microsoft/ContosoTraders/blob/main/docs/Setup%20instructions%20for%20PowerApp.md
			


**Try Out Demo Scripts**
			

As further learning, you can try running through some of the demo scripts listed below which’d help in understanding the Azure Cloud Native Technologies. 

| Technologies  | Link                                                                                                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| For Auto scaling CLoud native Apps          | https://github.com/microsoft/ContosoTraders/tree/main/demo-scripts/autoscaling-cloud-native-apps-azure         |
| Cloud native app architecture    	      | https://github.com/microsoft/ContosoTraders/tree/main/demo-scripts/cloud-native-app-architecture               |
| Devsecops                                   | https://github.com/microsoft/ContosoTraders/tree/main/demo-scripts/devsecops                                   |
| Intelligent App with AI services	      | https://github.com/microsoft/ContosoTraders/tree/main/demo-scripts/intelligent-apps-with-azure-ai-services     |
| Low COde Deevlopment                        | https://github.com/microsoft/ContosoTraders/tree/main/demo-scripts/low-code-development                        |
			


**Common Errors & Troubleshooting**
	
This includes some of the common problems you may during deployment and approach to resolve them. 

1.	AI Terms and services
2.	Lack of permissions
3.	Environment name having not allowed characters
4.	Subscription quota
5.	Incorrect secrets format

**Known Issues**
	
When you run the workflow, it shows following warnings.
	
Error: WARNING: /home/runner/work/ContosoTraders/ContosoTraders/iac/createResources.bicep(191,50) : Warning no-hardcoded-env-urls: Environment URLs should not be hardcoded. Use the environment() function to ensure compatibility across clouds. Found this disallowed host: "database.windows.net" [https://aka.ms/bicep/linter/no-hardcoded-env-urls]

Warning: WARNING: /home/runner/work/ContosoTraders/ContosoTraders/iac/createResources.bicep(191,50) : Warning no-hardcoded-env-urls: Environment URLs should not be hardcoded. Use the environment() function to ensure compatibility across clouds. Found this disallowed host: "database.windows.net" [https://aka.ms/bicep/linter/no-hardcoded-env-urls]


This does not block the deployment and workflow will run successfully. It does not have any other impact. It is being tracked here <Link to Issue>



**Questions & Support**
This project is community supported. Please raise issue via GitHub incase of issues/questions. 

**Cleanup**

Once you are done deploying, testing, exploring, you can delete the provisioned RGs to prevent incurring additional cost. 
Delete the following resource groups.
1.	contoso-traders-rg
2.	contoso-traders-aks-nodes-rg
