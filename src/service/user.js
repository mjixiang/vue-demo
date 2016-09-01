
//常用基础处理
const basePromiseConfig = (method,url) => {
    return query => Xa[method](url,query).then(rs => {
        return new Promise((resolve,reject) => {
            if(rs.status == 200){
                resolve(rs.data);
            }else{
                reject(rs.message)
            }
        });
    });
}

module.exports =  {
    login:basePromiseConfig('post','/exams/public/login'),
    logout:basePromiseConfig('get','/exams/public/loginOut')
}