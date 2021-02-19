
  //Dictionary 字典封装   就是js的map
  function Dictionary() {
    this.items = {};
  }

  Dictionary.prototype.has=function(key) {
    return this.items.hasOwnProperty(key);
  }

  // set(key, value) 在字典中添加键值对
  Dictionary.prototype.set = function (key,value) {
    this.items[key] = value;
  }

  Dictionary.prototype.remove = function (key) {
    // 如果集合不存在该 key，返回 false
    if (!this.has(key)) return false;
    delete this.items[key];
  }
  //给键名获取对应键值★★★
  Dictionary.prototype.get = function (key) {
    return this.has(key) ? key+":"+this.items[key]: undefined;
  }

  // 获取所有的 key 键名 (存放在数组中下标0123...)  ★★★
  Dictionary.prototype.keys = function () {
    //返回属性名的数组
    return Object.keys(this.items);
  }

  // 获取所有的 键值 values  (存放在数组中下标0123...) ★★★
  Dictionary.prototype.values = function () {
  //返回属性值的数组
    return Object.values(this.items);
  }
  //长度
  Dictionary.prototype.size = function () {
    return this.keys.length
    //  return Object.keys(this.items).length;
  }

  Dictionary.prototype.clear = function () {
    return this.items = {}
  }