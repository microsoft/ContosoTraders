# Intelligent Apps with Azure AI Services - Overview

## Overview of the Contoso Traders application

Contoso Traders is a fictitious company that sells a wide range of products. The company has a website that allows customers to browse products and add them to their shopping cart. 

## Key Takeaways

* Azure AI Services is a suite of tools and services offered by Microsoft Azure that allows developers to incorporate intelligent features into their applications. With Azure AI Services, developers can easily add these intelligent features to their applications without the need for specialized knowledge or expertise in the field of artificial intelligence

* Cognitive Services image search is a feature of Azure AI Services that allows developers to incorporate image recognition capabilities into their applications. This service uses machine learning algorithms to analyze and understand the content of images, making it possible for applications to search for and retrieve images based on their visual characteristics

## Launch the Contoso Traders application

* Open a browser and navigate to the Contoso Traders website: [https://www.contosotraders.com](https://www.contosotraders.com)

  ![Contoso Traders website](./media/landing-page.png)

  On the webpage, you will be able to see the e-commerce store with clusters of electronic products such as laptops, game controllers, desktops, mobile phones, and monitors of different brands.

## Search for a product through an image

* Select the `Search Image` icon in the right of the search bar and click on `Drag an image or upload a file`.

   ![image](./media/drag-an-image.png)

* Upload an image ([example](./media/laptop-example.jpg)) and click `Open`. This will take you to the `Suggested Products List` page as per the image provided to search and you can select the product you wish to buy from here.

   ![image](./media/suggested-products.png)

## Overview of Azure AI services used

The Contoso Traders application uses the `Azure Cognitive Services` (Computer Vision API) to analyze images and return a list of suggested products. The `Computer Vision API` is a cloud-based service that provides developers with access to advanced algorithms for processing images and returning information. The API can be used to recognize objects, items and faces in an image. It can also be used to analyze the text in an image. In our case, the API is used to analyze an image and return a list of products that are similar to the image.

For more technical details, please see our [technical walkthrough document](./technical-walkthrough.md).

## Reference Links

* [Cognitive Services Overview](https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview)
* [Computer Vision](https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview)
