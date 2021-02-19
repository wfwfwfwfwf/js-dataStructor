
    function Stack(){
        //栈的初始元素个数 0
        this.items = []
    }
    //压栈
    Stack.prototype.push = function (element) {
        this.items.push(element);
    }
    //出栈操作
    Stack.prototype.pops = function () {
        return this.items.pop();
    }
    //查看栈顶元素
    Stack.prototype.peak = function () {
        return this.items[this.items.length - 1];
    }

    //判断栈是否为空
    Stack.prototype.isEmpty= function () {
        return this.items.length === 0;
    }
    //栈中元素个数
    Stack.prototype.size = function () {
        return this.items.length;
    }
    //栈的清空操作
    Stack.prototype.clear = function(){
        this.items.splice(0, this.items.length)
    }
    // toString()  返回以字符串形式的栈内元素数据 (该方法原本是将数字转成字符串)
    Stack.prototype.toString = function () {
        let result = '';
        for (let item of this.items) {
            // result += item + '---';
            result += item + ' ';
        }
        return result;
    }