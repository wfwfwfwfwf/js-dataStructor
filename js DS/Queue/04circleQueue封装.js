
//了解...k是自定义几个元素循环   (最好画图)
function  MyCircularQueue(len){
  // 生成同来保存数据长度为K的数据结构(数组)
  this.list = Array(len)
  // 队首指针
  this.front = 0
  // 队尾指针
  this.rear = 0
  // 队列的长度
  this.len = len
}

MyCircularQueue.prototype.enQueue = function(value) {
  // 首先判断是否队列为满的状态
  if(this.isFull()){
    return false
  } else {
    this.list[this.rear] = value
    // 尾指针循环
    this.rear = (this.rear + 1) % this.len
    return true
  }
};


MyCircularQueue.prototype.deQueue = function() {
  if (!this.isEmpty()){
    this.list[this.front] = ''
    this.front = (this.front + 1) % this.len
    return true
  }
  return false


};


MyCircularQueue.prototype.Front = function() {
  if(this.isEmpty()){
    return -1
  }
  return this.list[this.front]
};


MyCircularQueue.prototype.Rear = function() {
  if(this.isEmpty()){
    return -1
  }
  let rear = this.rear - 1
  return this.list[rear < 0 ? this.len - 1 : rear]
};


MyCircularQueue.prototype.isEmpty = function() {
  return this.front === this.rear && !this.list[this.front]
};

MyCircularQueue.prototype.isFull = function() {
  return this.front === this.rear && !!this.list[this.front]
};


  var obj = new MyCircularQueue(5)
  obj.enQueue(10)
  obj.enQueue(100)
  obj.enQueue(1000)
  console.log(obj)
  console.log(obj.isEmpty())
  console.log(obj.isFull())
  console.log(obj.Rear())
  console.log(obj.Front())
  console.log(obj.deQueue())
  console.log(obj)



