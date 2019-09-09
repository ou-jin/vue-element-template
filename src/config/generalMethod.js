/* 
工具类

鉴空
首字母转成大写
判断是否是url
获取url内某个参数
获取url内所有参数
将二进制转换成base64
将字符串黏贴到黏贴版
在数组指定位置插入数组
获取当前日期时间
element 删除前确认
深拷贝

*/
let obj = {
    //鉴空
    checkNull: function (str) {
        if (str !== null && str !== '' && str !== undefined) {
            return true
        } else {
            return false
        }
    },

    //首字母转成大写
    convertToCamelCase(flag, str) {
        if (flag === '') return str
        return flag + str[0].toUpperCase() + str.substring(1)
    },

    //判断是否是url
    isURL(s) {
        return /^http[s]?:\/\/.*/.test(s)
    },

    // 获取url内某个参数
    getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    },

    // 获取url内所有参数
    parseQueryString(url) {
        var obj = {};
        var keyvalue = [];
        var key = "",
            value = "";
        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        for (var i in paraString) {
            keyvalue = paraString[i].split("=");
            key = keyvalue[0];
            value = keyvalue[1];
            if (value.includes('[')) {
                value = value.replace("[", "").replace("]", "").split(",")
            }
            obj[key] = value;
        }
        return obj;
    },

    //将二进制转换成base64
    arrayBufferToBase64(raw) {
        var base64 = '';
        var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        var bytes = new Uint8Array(raw);
        var byteLength = bytes.byteLength;
        var byteRemainder = byteLength % 3;
        var mainLength = byteLength - byteRemainder;
        var a, b, c, d;
        var chunk;
        // Main loop deals with bytes in chunks of 3
        for (var i = 0; i < mainLength; i = i + 3) {
            // Combine the three bytes into a single integer
            chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
            // Use bitmasks to extract 6-bit segments from the triplet
            a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
            b = (chunk & 258048) >> 12; // 258048 = (2^6 - 1) << 12
            c = (chunk & 4032) >> 6; // 4032 = (2^6 - 1) << 6
            d = chunk & 63; // 63 = 2^6 - 1
            // Convert the raw binary segments to the appropriate ASCII encoding
            base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
        }
        // Deal with the remaining bytes and padding
        if (byteRemainder == 1) {
            chunk = bytes[mainLength];
            a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2;
            // Set the 4 least significant bits to zero
            b = (chunk & 3) << 4 // 3 = 2^2 - 1;
            base64 += encodings[a] + encodings[b] + '==';
        }
        else if (byteRemainder == 2) {
            chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
            a = (chunk & 16128) >> 8 // 16128 = (2^6 - 1) << 8;
            b = (chunk & 1008) >> 4 // 1008 = (2^6 - 1) << 4;
            // Set the 2 least significant bits to zero
            c = (chunk & 15) << 2 // 15 = 2^4 - 1;
            base64 += encodings[a] + encodings[b] + encodings[c] + '=';
        }
        return "data:image/jpeg;base64," + base64;
    },

    // 将字符串黏贴到黏贴版
    copyToClipboard(str) {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selected =
            document.getSelection().rangeCount > 0
                ? document.getSelection().getRangeAt(0)
                : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    },

    //在数组指定位置插入数组
    insertArray(index, arr1, arr2) {
        arr1.splice(index + 1, 0, ...arr2)
        return arr1
    },

    /* 
    获取当前日期时间
    tip:修改方法内fmt参数可获取不同格式的日期时间
    */
    getNowTime() {
        let fmt = 'yyyy-MM-dd hh:mm:ss'
        let date = new Date();
        // var timestamp = (new Date()).getTime();
        const o = {
            'M+': date.getMonth() + 1, // 月份
            'd+': date.getDate(), // 日
            'h+': date.getHours(), // 小时
            'm+': date.getMinutes(), // 分
            's+': date.getSeconds(), // 秒
            'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
            'S': date.getMilliseconds(), // 毫秒
        };

        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }
        return fmt;
    },

    /* 
    element 删除前确认
    tip:此方法调用需改变方法内的执行上下文
    ex:this.fcn.deleteConfim.call(this,方法名，参数)
    */
    deleteConfim(fcn, row) {
        console.log(fcn)
        this.$confirm("此操作将永久删除该选项, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
        })
            .then(() => {
                fcn(row)
            })
            .catch(() => { });
    },

    // 深拷贝
    deepClone(obj) {
        let clone = Object.assign({}, obj);
        Object.keys(clone).forEach(
            key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
        );
        return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
    }

}
export default obj