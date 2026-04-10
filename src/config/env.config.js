// src/config/env.config.js

const envConfig = {
    api: {
      baseURL: process.env.REACT_APP_API_URL || 'https://gdr-uat.vercel.app/api/v1',
    },
    
    endpoints: {
      // Sections
      sections: {
        header: '/website-fronted/section/header',
        footer: '/website-fronted/section/footer',
      },
      
      // Legal
      legal: {
        getAll: '/website-fronted/legal',
        getById: (id) => `/website-fronted/legal/${id}`,
      },
      
      // News
      news: {
        getAll: '/website-fronted/news',
        getById: (id) => `/website-fronted/news/${id}`,
      },
      
      // Events
      events: {
        roleAndResponsibility: '/website-fronted/event/role-and-responsility',
        message: '/website-fronted/event/message',
      },
    },
  };
  
  export default envConfig;