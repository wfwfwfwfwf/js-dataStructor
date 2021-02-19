
//单链表的封装
function DBLinkList() {
  //默认空 head指向第一个节点(为null)
  this.head = null
  //链表的长度
  this.length = 0
  //tail 指向最后一个节点  为null
  this.tail = null;

  //内部节点类  data:数据   next:下一个节点
  function DBNode(data) {
    this.data = data
    //默认next为空  next:本身是个引用(指针)
    this.next = null
    //前驱指针
    this.prev = null
  }

  //append 添加至结尾
  DBLinkList.prototype.append = function (data) {
    // 1、创建双向链表节点
    const newDBNode = new DBNode(data);

    // 2、追加元素
    if (this.head === null) {
      this.head = newDBNode;
      this.tail = newDBNode;
    } else {
      // ！！跟单向链表不同，不用通过循环找到最后一个节点
      // 巧妙之处  this.tail代表尾节点(指针)
      this.tail.next = newDBNode;
      newDBNode.prev = this.tail;
      this.tail = newDBNode;
    }

    this.length += 1;
  }


  //指定位置插入节点  position可以为0
  DBLinkList.prototype.insert = function (position, data) {

    // 1、position 越界判断
    if (position < 0 || position > this.length) return false;
    // 2、创建新的双向链表节点
    const newNode = new DBNode(data);
    // 3、判断多种插入情况
    if (position === 0) { // 在第 0 个位置插入
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        //== 巧妙之处：相处腾出 this.head 空间，留个 newNode 来赋值 ==//
        this.head.perv = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }

    } else if (position === this.length) { // 在最后一个位置插入
      //this.tail尾节点
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
      else { // 在 0 ~ this.length 位置中间插入
          let targetIndex = 0;
          let currentNode = this.head;
          //遍历指针
          let previousNode = null;

      // 找到要插入位置的节点
      while (targetIndex++ < position) {
          previousNode = currentNode;
          currentNode = currentNode.next;
      }
          // 如何连接前后节点
          previousNode.next = newNode;
          newNode.prev = previousNode;

          newNode.next = currentNode;
          currentNode.prev = newNode;
    }

    this.length++;

    return true;
  }

  //获取指定位置(指定索引包括0)的  元素
  DBLinkList.prototype.get = function (position) {
    // 1、position 越界判断
    if (position < 0 || position >= this.length) return null;

    // 2、获取指定 position 节点的 data
    let currentNode = this.head;
    let index = 0;

    while (index++ < position) {
      currentNode = currentNode.next;
    }

    // 3、返回 节点的data
    return currentNode.data;
  }

  //indexOf(data) 返回指定 data 的 index(索引)，如果没有，返回 -1。
  DBLinkList.prototype.indexOf = function (data) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      if (currentNode.data === data) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    return -1;
  }






  // removeAt(position) 删除指定(位置)的节点，并返回删除的那个节点
  DBLinkList.prototype.removeAt = function (position) {
    // 1、position 越界判断
    if (position < 0 || position > this.length - 1) return null;

    // 2、根据不同情况删除元素
    let currentNode = this.head;//头遍历指针
    if (position === 0) { // 删除第一个节点的情况

      if (this.length === 1) { // 链表内只有一个节点的情况
        this.head = null;
        this.tail = null;
      } else {
        // 链表内有多个节点的情况   ???
        // this.head.next = null;
        //没指针指向它就会被自动回收(它指向别的节点也不行)
        this.head.next.prev = null;
        this.head = this.head.next;
      }

    } else if (position === this.length - 1) { // 删除最后一个节点的情况
      //尾遍历指针
      // currentNode = this.tail;
      ////没指针指向最后一个节点就会被自动回收
      this.tail.prev.next = null;
      this.tail = this.tail.prev;

    } else { // 删除 0 ~ this.length - 1 里面节点的情况

      let targetIndex = 0;
      let previousNode = null;
      while (targetIndex++ < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
      currentNode.next.perv = previousNode;

    /*  currentNode.prev.next = currentNode.next
      currentNode.next.prev = currentNode.prev*/
    }

    this.length--;
    return currentNode.data;

  }

  // remove(data) 删除指定 (data) 的节点，并返回删除的那个节点
  DBLinkList.prototype.remove = function (data) {

    return this.removeAt(this.indexOf(data));

  }





  //修改指定位节点的data
  DBLinkList.prototype.upDate = function (position, newData) {
    // 思路: 删除 position 位置的节点，再在 position 位置插入元素
   /* const result = this.removeAt(position);
    this.insert(position, newData);
    return result;*/

    if (position<0 || position >= this.length){
      return false
    }
    var currentNode = this.head
    var index = 0
    while(index++ < position){
      currentNode = currentNode.next
    }
    currentNode.data = newData

    return true
  }

  //是否为空
  DBLinkList.prototype.isEmpty = function () {
    return this.length === 0;
  }

  //链表长度
  DBLinkList.prototype.size = function () {
    return this.length;
  }

  //怎么展示数据(向后遍历  正向展示数据)
  DBLinkList.prototype.backwardString= function () {

    let currentNode = this.head;
    let result = '';
    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode) {
      result += currentNode.data + ',';
      currentNode = currentNode.next;
    }
    return result;
  }
  //怎么展示数据(向前遍历 逆向展示数据)
  DBLinkList.prototype.forwardString = function () {

    let currentNode = this.tail;
    let result = '';

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode) {
      result += currentNode.data + ',';
      currentNode = currentNode.prev;
    }

    return result;
  }

  //toString方法
  DBLinkList.prototype.toString = function () {

      return this.backwardString()

  }
  //首元素
  DBLinkList.prototype.getHead = function () {

    return this.head.data
  }
  //尾元素
  DBLinkList.prototype.getTail = function () {

    return this.tail.data

  }

}

