# Contoso Traders - Cloud Testing Demos

![Logo](./docs/images/logo-1280x640.png)

## Application Links

| Application  | Link                                                                                                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UI           | [PROD](https://www.contosotraders.com/) \| [TEST](https://test.contosotraders.com/)                                                                                                                             |
| Carts API    | [PROD](https://contoso-traders-cartsprod.delightfuldune-ced90d47.eastus.azurecontainerapps.io/swagger) \| [TEST](https://contoso-traders-cartstest.orangeflower-95b09b9d.eastus.azurecontainerapps.io/swagger/) |
| Products API | [PROD](https://contoso-traders-productsprod.azurewebsites.net/swagger/) \| [TEST](https://contoso-traders-productstest.azurewebsites.net/swagger/)                                                              |

## Documentation and Resources

* [Deployment Guide](./docs/App-Deployment-Guide.md)
* [Contributing](./docs/contributing.md)
* [Bicep Templates](./iac/)
* [Load Tests](./tests/loadtests/)
* [Github Workflows](./.github/workflows/)
  * [![contoso-traders-provisioning-deployment](https://github.com/microsoft/ContosoTraders/actions/workflows/contoso-traders-provisioning-deployment.yml/badge.svg)](https://github.com/microsoft/ContosoTraders/actions/workflows/contoso-traders-provisioning-deployment.yml)
  * [![contoso-traders-load-testing](https://github.com/microsoft/ContosoTraders/actions/workflows/contoso-traders-load-testing.yml/badge.svg)](https://github.com/microsoft/ContosoTraders/actions/workflows/contoso-traders-load-testing.yml)


## Demo Scripts

  | Scenario                                  | Documentation                                                                                                                                                                                       |
  | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Azure Load Testing    | [Overview](./demo-scripts/autoscaling-cloud-native-apps-azure/overview.md) \| [Technical Walkthrough](./demo-scripts/autoscaling-cloud-native-apps-azure/technical-walkthrough.md)          |
  | DevOps Journey with GitHub + Azure     | [Overview](./demo-scripts/devsecops/overview.md) \| [Technical Walkthrough](./demo-scripts/devsecops/technical-walkthrough.md)                                                              |
  | Azure Chaos Studio   | [Overview](./demo-scripts/low-code-development/overview.md) \| [Technical Walkthrough](./demo-scripts/low-code-development/technical-walkthrough.md) |
  | Testing with Playwright   | [Overview]([./demo-scripts/intelligent-apps-with-azure-ai-services/overview.md](https://github.com/microsoft/ContosoTraders/blob/cloud-testing/demo-scripts/playwright-documentation/playwright.md)) \| [Technical Walkthrough](https://github.com/microsoft/ContosoTraders/blob/cloud-testing/demo-scripts/playwright-documentation/playwright.md)  |

##  Architecture 

![Architecture](./docs/architecture/contoso-traders-enhancements.drawio.png)


## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.

