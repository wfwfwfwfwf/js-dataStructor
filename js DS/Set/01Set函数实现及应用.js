
    // 集合: 无须 元素不能重复
    function Set() {
        //不使用数组
        this.items = {}
    }
    // has(value) 判断集合中是否存在 value 值，存在返回 true，否则返回 false
    Set.prototype.has = function (value) {
      //hasOwnProperty判断自身对象属性是否存在  而不是实例属性！！！
      return this.items.hasOwnProperty(value);
    }

    //add(value) 往集合中添加 value
    Set.prototype.add = function (value) {
      if (this.has(value)) return false;
      this.items[value] = value;
      return true;
    }

    // remove(value) 删除集合中指定的 value
    Set.prototype.remove = function (value) {
    // 如果集合不存在该 value，返回 false
      if (!this.has(value)) return false;
      //delete?操作符用于删除对象的某个属性
      delete this.items[value];
    }

    Set.prototype.clear = function () {
      this.items = {};
    }

    Set.prototype.size = function () {
      //Object.keys(this.items) 是个数组
      return Object.keys(this.items).length;
    }

    //获取集合中所有的 value
    Set.prototype.values = function () {
    //枚举自身  属性放在数组里 , 不是属性值
      return Object.keys(this.items);
    }


    /*set的应用*/
    //并集  思想 拆自己进新set 拆它 再进set 最后返回
    Set.prototype.union = function (otherSet) {
      // 1、创建一个新集合
      let unionSet = new Set();
      // 2、将当前集合（this）的所有 value，添加到新集合（unionSet）中
      for (let value of this.values()) {
        //add自带判重
        unionSet.add(value);
      }
      // 3、将 otherSet 集合的所有 value，添加到新集合（unionSet）中
      for (let value of otherSet.values()) {
        unionSet.add(value); // add() 已经有重复判断
      }
      return unionSet;
    }

    //交集
    Set.prototype.intersection = function (otherSet) {
      // 1、创建一个新集合
      let intersectionSet = new Set();

      // 2、从当前集合中取出每一个 value，判断是否在 otherSet 集合中存在
      for (let value of this.values()) {
        if (otherSet.has(value)) {
          intersectionSet.add(value);
        }
      }

      return intersectionSet;
    }
    //差集(差集是存在主语之分的)
    Set.prototype.difference = function (otherSet) {
      // 1、创建一个新集合
      let differenceSet = new Set();
      // 2、从当前集合中取出每一个 value，判断是否在 otherSet 集合中存在，不存在的即为差集
      // 123789  012345  eg:set1.diff(set2)  =>789
      for (let value of this.values()) {
        if (!otherSet.has(value)) {
          differenceSet.add(value);
        }
      }
      return differenceSet;
    }
    //子集
    Set.prototype.subset = function (otherSet) {
      // 从当前集合中取出每一个 value，判断是否在 otherSet 集合中存在，有不存在的返回 false
      // 遍历完所有的，返回 true
      for (let value of this.values()) {
        //如果存在某个value  otherSet集合里面没有则返回false
        if (!otherSet.has(value)) {
          return false;
        }
      }
      return true;
    }

