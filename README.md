# Contoso Traders

![Logo](./docs/logo-1280x640.png)

## Application Links

| Application  | Link                                                                                                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UI           | [PROD](https://www.contosotraders.com/) \| [TEST](https://test.contosotraders.com/) \| [LEGACY](https://contoso-traders-uitest.azureedge.net)                                                                   |
| Carts API    | [PROD](https://contoso-traders-cartsprod.delightfuldune-ced90d47.eastus.azurecontainerapps.io/swagger) \| [TEST](https://contoso-traders-cartstest.orangeflower-95b09b9d.eastus.azurecontainerapps.io/swagger/) |
| Products API | [PROD](https://contoso-traders-productsprod.azurewebsites.net/swagger/) \| [TEST](https://contoso-traders-productstest.azurewebsites.net/swagger/)                                                              |

## Pipelines

* [![contoso-traders-load-testing](https://github.com/microsoft/ContosoTraders/actions/workflows/contoso-traders-load-testing.yml/badge.svg)](https://github.com/microsoft/ContosoTraders/actions/workflows/contoso-traders-load-testing.yml)
* [![contoso-traders-provisioning-deployment](https://github.com/microsoft/ContosoTraders/actions/workflows/contoso-traders-provisioning-deployment.yml/badge.svg)](https://github.com/microsoft/ContosoTraders/actions/workflows/contoso-traders-provisioning-deployment.yml)

## Documentation

* [Setup Instructions](./docs/setup-instructions.md)
  * [Setup Instructions for PowerApp](./docs/Setup%20instructions%20for%20PowerApp.md)
* [Contributing](./docs/contributing.md)

## Demo Scripts

  | Scenario                                  | Level                                                                                                                                                                                       |
  | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Cloud Native App Architecture Walkthrough | [Overview](./demo-scripts/Cloud-Native-App-Architecture/Overview.md) \| [Technical Walkthrough](./demo-scripts/Cloud-Native-App-Architecture/Technical-Walkthrough.md)                      |
  | Autoscaling Cloud Native Apps in Azure    | Overview \| Technical Walkthrough                                                                                                                                                           |
  | DevSecOps Journey with GitHub + Azure     | [Overview](./demo-scripts/DevSecOps/overview.md) \| [Technical Walkthrough](./demo-scripts/DevSecOps/Technical-Walkthrough.md)                                                              |
  | Low Code App Development Power Platform   | [Overview](./demo-scripts/LOW%20CODE%20DEVELOPMENT/HIGH%20LEVEL%20SCENARIO%20WALKTHROUGH.md) \| [Technical Walkthrough](./demo-scripts/LOW%20CODE%20DEVELOPMENT/TECHNICAL%20WALKTHROUGH.md) |
  | Intelligent Apps with Azure AI Services   | [Overview](./demo-scripts/Intelligent-Apps-with-Azure-AI-Services/L100.md) \| [Technical Walkthrough](./demo-scripts/Intelligent-Apps-with-Azure-AI-Services/L300.md)                       |

## Resources

* [Github Workflows](./.github/workflows/) ([Run](https://github.com/microsoft/ContosoTraders/actions)) 
* [Github Issues](https://github.com/microsoft/ContosoTraders/issues)
* [Bicep Templates](./iac/)
* [Load Tests](./tests/loadtests/)

## Proposed Architecture

![Architecture](./docs/architecture/contoso-traders-enhancements.drawio.png)
