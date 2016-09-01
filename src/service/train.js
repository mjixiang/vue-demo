
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

module.exports = {
    //---------- 培训总览 -------------


    //---------- 分类管理 -------------
    getCategoryList:basePromiseConfig('get','/exams/examcat/index'),
    addCategory:basePromiseConfig('post','/exams/examcat/add'),
    forbidCategory:basePromiseConfig('post','/exams/examcat/forbid'),

    //---------- 题库管理 -------------
    getQuestionList:basePromiseConfig('get','/exams/exambank/index'),

    //---------- 考试管理 -------------
    
    getExamList:basePromiseConfig('get','/exams/createiteminfo/index'),
    addExam:basePromiseConfig('post','/exams/createiteminfo/add'),
    getExamDetailList:basePromiseConfig('get','/exams/createiteminfo/index'),

    //---------- 学习资料管理 -------------


    //---------- 知识库管理 -------------


    //---------- 培训课程管理 -------------



    //---------- 讲师管理 -------------


    
}