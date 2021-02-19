
//单链表的封装
function LinkList() {
  //默认空 head指向第一个节点(为null)
  this.head = null
  //链表的长度
  this.length = 0
    //内部节点类  data:数据   next:下一个节点
    function Node(data) {
        this.data = data
        //默认next为空  next:本身是个引用(指针)
        this.next = null
    }
    // const Phead = new Node()
    //这种添加方法也是可以的 但是占内存this.方法名 = function () {}


  //append 添加至结尾
  LinkList.prototype.append = function (data) {
        //创建新节点
      /*  const HeadNode = new Node()
        this.head = HeadNode*/
      const newNode = new Node(data)

      // 2、追加新节点
      if (this.length === 0) {
        // 链表长度为 0 时，即只有 head 的时候
        this.head = newNode;
        // newNode.next = null
      } else {
        // 链表长度大于 0 时，在最后面添加新节点
        //this.head可以理解为第一个引用★★★★★ currentNode即为遍历指针
        let currentNode = this.head;

        // 当 currentNode.next 不为空时，
        // 循序依次找最后一个节点，即节点的 next 为 null 时
        while (currentNode.next !== null) {
          // currentNode 指向 currentNode.next  就是指针(引用)的赋值★★★★★★
          currentNode = currentNode.next;
        }

        // 最后一个节点的 next指针 指向新节点  简单理解: next在左边理解为指针,右边理解为节点★★★★★
        currentNode.next = newNode;
    }
        // 3、追加完新节点后，链表长度 + 1
        this.length++;
  }




  //指定位置插入节点  position可以为0
  LinkList.prototype.insert = function (position, data) {
    // position 新插入节点的位置
    // position = 0 表示新插入后是第一个节点
    // position = 1 表示新插入后是第二个节点，以此类推

    // 1、对 position 进行越界判断，不能小于 0 或大于链表长度
    if (position < 0 || position > this.length) return false;

    // 2、创建新节点
    const newNode = new Node(data);

    // 3、插入节点
    if (position === 0) {
      // position = 0 的情况
      // 让新节点的 next 指向 原来的第一个节点，即 head
      newNode.next = this.head;

      // head 赋值为 newNode
      this.head = newNode;
    } else {
      // 0 < position <= length 的情况

      // 初始化一些变量
      let currentNode = this.head; // 当前节点初始化为 head
      let previousNode = null; // head 的 上一节点(前驱指针)为 null
      let index = 0; // head 的 index 为 0

      // 在 0 ~ position 之间遍历，不断地更新 currentNode 和 previousNode
      // 直到找到要插入的位置
      while (index < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        index+=1
      }

      // 在当前节点和当前节点的上一节点之间插入新节点，即它们的改变指向
      newNode.next = currentNode;
      previousNode.next = newNode;
    }

    // 更新链表长度
    this.length++;
    return newNode;
  }

  //获取指定位置(指定索引包括0)的  元素
  LinkList.prototype.get= function (position) {
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
  LinkList.prototype.indexOf = function (data) {
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

  //修改指定位节点的data
  LinkList.prototype.upData = function (position, newData) {
    // 涉及到 position 都要进行越界判断
    // 1、position 越界判断
    if (position < 0 || position >= this.length) return false;

    // 2、痛过循环遍历，找到指定 position 的节点
    let currentNode = this.head;
    let index = 0;
    while (index++ < position) {
      currentNode = currentNode.next;
    }

    // 3、修改节点 data
    currentNode.data = newData;

    return true
  }

  // removeAt(position) 删除指定(位置)的节点，并返回删除的那个节点
  LinkList.prototype.removeAt = function (position) {
    // 1、position 越界判断
    if (position < 0 || position >= this.length) return null;

    // 2、删除指定 position 节点
    let currentNode = this.head; //定义在外面不然不好找到★★★★
    if (position === 0) {
      // position = 0 的情况
      this.head = this.head.next;
      // currentNode = currentNode.next;
    } else {
      // position > 0 的情况
      // 通过循环遍历，找到指定 position 的节点，赋值到 currentNode

      let previousNode = null;
      let index = 0;

      while (index++ < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // 巧妙之处，让上一节点的 next 指向到当前的节点的 next，相当于删除了当前节点。
      previousNode.next = currentNode.next;
    }

    // 3、更新链表长度 -1
    this.length--;

    return currentNode;
  }

  // remove(data) 删除指定 (data) 的节点，并返回删除的那个节点
     LinkList.prototype.remove = function (data) {
      //简单版 一句话
      // return this.removeAt(this.indexOf(data));

       let currentNode = this.head
       let previousNode = null

       while (currentNode.data !== data){
            previousNode = currentNode
            currentNode = currentNode.next

       }
       previousNode.next = currentNode.next
        this.length--;
        return currentNode

  }

  //是否为空
  LinkList.prototype.isEmpty = function () {
    return this.length === 0;
  }

  //链表长度
  LinkList.prototype.size = function () {
    return this.length;
  }

 //怎么展示数据
  LinkList.prototype.toString = function () {
    let currentNode = this.head;
    let result = '';

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode!==null) {
      result += currentNode.data + ' ';
      currentNode = currentNode.next;
    }

    return result;
  }

}

