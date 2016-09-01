import httpCode from '../config/http_code.config.js'

var httpCallback = (promise,name) => {
    return promise.then(({data})=>{
        data = name ? data[name] : data;
        var prev = httpCode[data.status];
        if(!prev) return data;
        prev.do && prev.do(data);
        if(prev.next !== false) return data;
        return {status:-2,message:''};
    },({data})=>{
        console.log('接口请求失败，可能超时、断网、服务器问题各种原因');
        return {status:-1,message:'服务器内部错误',data:null}
    });
}

export default {
    post(url,data = {}) {
        if(!Vue.config.debug) return httpCallback(Vue.http.post(url,data))
        let last = url.lastIndexOf('/');
        return httpCallback(Vue.http.get('./api'+url.substring(0,last)+'.json',data),url.substring(last+1))
    },
    get(url,data = {}) {
        if(!Vue.config.debug) return httpCallback(Vue.http.get(url,data))
        let last = url.lastIndexOf('/');
        return httpCallback(Vue.http.get('./api'+url.substring(0,last)+'.json',data),url.substring(last+1))
    },
    localStorage:{
        setItem(url,key,val){
            var storage = Xa.localStorage.getItem(url) || {};
            storage[key] = val;
            window.localStorage.setItem(url,JSON.stringify(storage));
        },
        getItem(url,key){
            var storage = JSON.parse(window.localStorage.getItem(url));
            if(!storage) return '';
            return key ? storage[key] : storage;
        },
        removeItem(url,key){
            var storage = Xa.localStorage.getItem(url);
            if(storage && key){
                if(storage[key]) delete storage[key];
                window.localStorage.setItem(url,JSON.stringify(storage));

            }else {
                window.localStorage.removeItem(url);
            }

        },
        clear(url){
            window.localStorage.clear();
        }
    },
    drag(box,moveBox){
        moveBox = moveBox || box;
        box.onmousedown = e => {
            var disX=e.clientX-moveBox.offsetLeft;
            var disY=e.clientY-moveBox.offsetTop;
            document.onmousemove = (e) =>{
                e.preventDefault();
                var l=e.clientX-disX;
                var t=e.clientY-disY;
                if(l<0){
                    l=0;
                }else if(l>document.documentElement.clientWidth-moveBox.offsetWidth){
                    l = document.documentElement.clientWidth-moveBox.offsetWidth;
                }
                if(t<0){
                    t=0;
                }else if(t>document.documentElement.clientHeight-moveBox.offsetHeight){
                    t = document.documentElement.clientHeight-moveBox.offsetHeight;
                }
                moveBox.style.margin = "0";
                moveBox.style.left=l+'px';
                moveBox.style.top=t+'px';
                return false;
            }
            document.onmouseup = () => {
                document.onmousemove = null;    
                document.onmouseup = null;
                return false;
            }
            return false;
        }
    }
}