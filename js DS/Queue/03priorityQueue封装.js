
  // 优先级队列的封装
  function PriorityQueue(){
    //定义插入元素的对象(当一个类用到另一个类的时候定义要写在内部)
    //平行写两个类其实也可以
    function QueueElement(element,priority) {
        this.element = element;
        this.priority = priority
    }
    this.items = []
    //所有原型上的方法要写在里面
    PriorityQueue.prototype.enqueue = function(element,priority){
      //创建元素对象 (变量名不要跟构造函数同名)
      var QE = new QueueElement(element,priority)

      // console.log(QE)
      if (this.items.length == 0){
        this.items.push(QE)
      }
      else{
        //是否要插入
        var add = false
        //找找看有没有优先级比它大的,若有就插在它的前面
        for (var i = 0;i<this.items.length;i++){
          if (QE.priority<this.items[i].priority){
            this.items.splice(i,0,QE)
            add = true
            break
          }
        }
        //添加至最后(没找到优先级比它大的,就将之扔到最后)
        if (!add){
          this.items.push(QE)
        }
      }
    }

    PriorityQueue.prototype.dequeue = function () {
      //删除首个元素
      return this.items.shift();
    }

    PriorityQueue.prototype.front= function () {
      return this.items[0];
    }

    PriorityQueue.prototype.size = function () {
      return this.items.length;
    }

    PriorityQueue.prototype.isEmpty = function () {
      return this.items.length === 0;
    }

    PriorityQueue.prototype.toString = function () {
      let result = '';
      for (let item of this.items) {
        result += item.element + '-' + item.priority + ' ';
      }
      return result;
    }

  }

