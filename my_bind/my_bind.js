Function.prototype.my_bind = function(target){
    var target = target || window;
    var self = this;       // 保存原函数 
    var args = [].slice.call(arguments,1);   // 剩余的参数转为数组
    var temp = function(){};
    var F = function(){       // 返回一个新函数
       var _args = [].slice.call(arguments,0);
       return self.apply(this instanceof temp ? this : target , args.concat(_args));
    }
    temp.prototype = this.prototype;
    F.prototype = new temp;
    return F;
 }


function list() {
    return Array.prototype.slice.call(arguments);
  }
  var list1 = list(1, 2, 3); // [1, 2, 3]
  // 预定义参数37
  var leadingThirtysevenList = list.my_bind(undefined, 37);
  var list2 = leadingThirtysevenList(); // [37]
  var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
alert(list3);