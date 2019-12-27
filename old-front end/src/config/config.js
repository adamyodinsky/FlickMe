const config = {
    // ---------LOCAL_APP----------------------------
    appName: "MoChooe-FrontEnd",
    yearMax: Number(process.env.REACT_APP_YEAR_MAX) || 2019,
    yearMin: Number(process.env.REACT_APP_YEAR_MIN) || 1920,
    //---------BACK-END------------------------------
    backEndHost: process.env.REACT_APP_BACKEND_HOST || "localhost",
    backEndPort: Number(process.env.REACT_APP_BACKEND_PORT) || 3000,
    backEndApi: process.env.REACT_APP_BACKEND_API || 'v1',
    envTest: process.env.REACT_APP_ENV_TEST || 'env test failed'
};

export default config;