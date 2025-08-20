require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJKYFFuwPIyUTQQAAHEHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3ltawS5W9VVC4iIqI3XVrf2IZCAEQyYBBWn*O9b9GVmHnZne3kKSeqc73yXfAe0JByHuAH976Bi5AIFbpeiqTDoA6dOU8xAByAoIOgDf6gd98Ohk92GZ4i6mR0yGq7MTYFivC4Cjc8bko2iFPneM3h0QFXHBUl+VxD7U5hZCZrUaRBVCEmmXUu3qbuKuTdGbOV7ZcpLr*Kmz+DRVoSEEZp51QGfMINFiJsIEvY1+Di6pnyW7peRUV42Q2z5m61rFonpTOBgt5rGkxK5UZ7fT9evwcdqvbD8YfeE*KVhOVBHuQwd2zCkUXQInOBGesHTSBMjOX+Hz0lGMQoQpoKI5su8S*69Xu*X5mKyt+7uPXTd*VHi6bWYhuJuTa7pWue5e0TKev014N3CutajInPc8aTwL3N215+IXvRqW*CIqavDCyx8E4aLIvsVeMQ+vZL*H95f*OV6dm380d3Z3+Q5jjgtkrhWU2MwPRzGKhy6UVJIq0Pvi7ZZVJETK6vkfLaY0rjLXppf7rSyzlsd+1uV0sDRpc1uTQfeT*hQ1Ox3KIfEquUmO1nprTrDrlkZyna*OCJLMac3lSaDZqB0d2QlGZyi*dgLgnXmDVlMTamyamU3jjOvK9vT+N5z0BW583l+cObPbxPluAkQ6MuPDmA4I1wwKEhJ2z3T6ACILkucMCze2AWZZU93pWmMouCcPo0OWKrl8WYXJ1EdSrEvByvLcsrS4an3DDqgYmWCOcdoRLgoWTPFnMMMc9D*868OoPgm3nVruylyB6SEcbGmdVWUEH2K+nkIk6SsqVg2NHHbBWagL*3cxkIQmvGWxppClhzIBbsHKDjop7Dg+MeAmGEE+oLV+Edo3RK1vGvyyjPGzgR0wOlND4JAH*Q03dAVWZPUntXvaX*wb9e2LKyqbxQL0AHFxzXJ0jStpyuaISlSe7M9ePxA2BZEWEBScNAH7vgpPBb2*DIhu9t8t7OJbYe23bL2OdGnM96pvzrnxXh5NfQpNZA6W7NjkYeuYjpDN9hdd1B7jV3Wux+35PpPRVobhZu5rexfR7OVkiNZD4e3WXJCAl4021ZfJtI2IFR7WdWhP7mYmruruskmdmdr32xOjn0UvToZFLemkUyN78vUSdTFwH5uuyF8IQn+tZm81zLpeCbj4FVSL0ZpTYyzrtLNNh3SCXWUAzOSjFNVzpXS24r4Xm52p9dQ3lSz6nqfDqXVYCFNprPtfXDJE*f1JYuiQfbu2bfMFB9vFXmzU6tV+5sS*BZ9ClsF*1u7d+CtxaRH55caH4*JvwTSSWyYL9f85ek4flLwYBOq2t7NRNdezIk*9f16c7qeLa7KKgePx18dUBVQpCU7gT6AFLGSINABrKxbzwY0LX*TzLWlwPuYvIBc2D9zsCInzAU8VaAvG5pmyLpu9N5vRaysRpAfWhJ81T7Vrakbu6qWAorPWAG7*dzFHjz+BlBLAQIUAxQAAAgIAJKYFFuwPIyUTQQAAHEHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHUEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Man221n1',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 'lynryan12',
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
