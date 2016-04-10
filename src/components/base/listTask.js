require("./listTask.css");
var listTaskComponent = Vue.extend({
    template:require("./listTask.html"),
    data:function(){
    	return {
    	}
    },
    props:{
		queryData:{
    		type: Array,
    		default: function () {
    			return [];
    		},
    		twoWay: true //可能用于删除
    	}
    }
});

module.exports = listTaskComponent;
