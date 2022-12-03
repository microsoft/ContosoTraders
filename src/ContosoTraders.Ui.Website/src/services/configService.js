import axios from "axios";

require("dotenv").config();
const settingsUrl = "/api/settings";

// const APIUrl = process.env.REACT_APP_DEV_API_URL;
// const APIUrlShoppingCart = process.env.REACT_APP_API_URL_SHOPPINGCART;
// @TODO: Replace 'test' in the next two lines with whatever your ENVIRONMENT github secret value is
const APIUrl = 'https://contoso-traders-productstest.azurewebsites.net/v1';
const APIUrlShoppingCart = 'https://contoso-traders-cartstest.orangeflower-95b09b9d.eastus.azurecontainerapps.io/v1';//'https://contoso-traders-cartsprod.delightfuldune-ced90d47.eastus.azurecontainerapps.io/v1';
const UseB2C = '';//process.env.REACT_APP_USEB2C;
const B2cAuthority = "https://login.microsoftonline.com/common";//process.env.REACT_APP_B2CAUTHORITY;
const B2cClientId =  "9db8d08a-d9b6-4e4c-8b46-a3898f985735";//process.env.REACT_APP_B2CCLIENTID;
const B2cScopes = ["User.Read"];//process.env.REACT_APP_B2CSCOPES;
const userEmail = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).userName : null;

const _HeadersConfig = (token, devspaces = undefined) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  if(userEmail){
    headers['x-tt-email'] = userEmail
  }
  if (devspaces) {
    headers["azds-route-as"] = devspaces;
  }

  return { headers: headers };
};

const ConfigService = {
  _needLoadSettings: !APIUrl || !APIUrlShoppingCart,
  _apiUrl: APIUrl,
  _apiUrlShoppingCart: APIUrlShoppingCart,
  _UseB2C: UseB2C,
  _B2cAuthority: B2cAuthority,
  _B2cClientId: B2cClientId,
  _B2cScopes: B2cScopes,
  _applicationInsightsIntrumentationKey: "",
  _debugInformation: {},
  _acsConnectionString: "",
  _acsResource: "",
  _logicAppUrl: "",
  _email: "",
  _customerSupportEnabled: false,

  async loadSettings() {
    if (this._needLoadSettings) {
      const settingsResponse = await axios.get(settingsUrl);
      // const settingsResponse = {
      //   data: {
      //     auth: null,
      //     apiUrl: "https://f6b8ea119d5d435c846c.westus2.aksapp.io/webbff/v1",
      //     apiUrlShoppingCart: "https://backend.contosotraders.com/cart-api",
      //     useB2C: false,
      //     b2CAuth: { clientId: "", authority: "", scopes: "" },
      //     cart: null,
      //     applicationInsights: { instrumentationKey: null },
      //     debugInformation: {
      //       sqlServerName: null,
      //       mongoServerName: null,
      //       customText: "",
      //       showDebug: false,
      //     },
      //     byPassShoppingCartApi: false,
      //     devspacesName: "",
      //     productImagesUrl: null,
      //     personalizer: { apiKey: "", endpoint: "" },
      //   },
      // };
      this._needLoadSettings = false;
      this._apiUrl = settingsResponse.data.apiUrl;
      this._apiUrlShoppingCart = settingsResponse.data.apiUrlShoppingCart;
      this._UseB2C = settingsResponse.data.useB2C;

      if (this._UseB2C) {
        this._B2cAuthority = settingsResponse.data.b2CAuth.authority;
        this._B2cClientId = settingsResponse.data.b2CAuth.clientId;
        this._B2cScopes = settingsResponse.data.b2CAuth.scopes;
      }

      this._devspacesName = settingsResponse.data.devspacesName;
      this._applicationInsightsIntrumentationKey =
        settingsResponse.data.applicationInsights.instrumentationKey;
      this._debugInformation = settingsResponse.data.debugInformation;
      this._acsConnectionString = settingsResponse.data.acs.connectionString;
      this._acsResource = settingsResponse.data.acs.resource;
      this._logicAppUrl = settingsResponse.data.logicAppUrl;
      this._email = settingsResponse.data.email;
      this._customerSupportEnabled = 
            settingsResponse.data.email
            && settingsResponse.data.acs.resource
            && settingsResponse.data.acs.connectionString
            && settingsResponse.data.logicAppUrl;
    }
  },

  HeadersConfig(token = undefined) {
    return _HeadersConfig(token, this._devspacesName);
  },
};

export default ConfigService;
