
      //队列的封装

      function Queue(){

        this.items = []

      }
      //进队
      Queue.prototype.enqueue = function (item) {
        this.items.push(item);
      }

        //shift():移除队首(数组的第一个)元素
      Queue.prototype.dequeue = function () {
        return this.items.shift();
      }

      //查看队头元素
      Queue.prototype.front = function () {
        return this.items[0];
      }

      //判空
      Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
      }
      //元素个数
      Queue.prototype.size = function () {
        return this.items.length
      }
      //清空队列
      Queue.prototype.clear = function () {
        return this.item = []
      }
      //toString() 返回一个字符串，表示指定的数组及其元素。
      Queue.prototype.toString = function () {
        let result = '';
        for (let item of this.items) {
          result += item + ' ';
        }
        return result;
      }
