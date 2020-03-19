// vue.config.js
const getPublicPath = ()=>{
   if(process.env.VUE_APP_SUB_MODE === 'staging'){
       return '/'
   }
   if(process.env.VUE_APP_SUB_MODE === 'production'){
    return '/'
    }
    if(process.env.VUE_APP_SUB_MODE === 'development'){
        return '/'
    }
};
module.exports = {
    publicPath: getPublicPath()
}
  