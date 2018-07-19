var dior999 = {
  chunk: function (array, size){
    var myCars = []
    for (var i = 0; i < array.length; i = i + size){
      myCars.push(array.slice(i,i+size))
    }
    return myCars
  },
  compact: function (array) {
    var ary = []
    for (var i = 0; i < array.length; i++){
      if (array[i] != false && array[i]!=NaN && array[i] != "" && array[i] != undefined && array[i]!= 0){
        if(array[i] != null){
          ary.push(array[i])
        }
        
      }
    }
    array = ary
    return array
  },
  difference: function(array, ...values){
    var r = []
    for (var i = 0; i < values.length; i++){
      r = r.concat(values[i])
    }
    for (var j = 0; j <array.length; j++){
      for (var k = 0; k < r.length; k ++){
        if (array[j]==r[k]){
          array[j]=null
        }
      }
    }
    var y = []
    for (var l = 0; l < array.length;l++){
      if (array[l]!=null){
        y.push(array[l])
      }
    }
    return y
  },
  drop: function (array, n=1){
    var x = array.length
    if (n>=x){
      return []
    }
    if (n==0){
      return array
    } else if (n==1){
      array.shift()
      return array
    }

    for (var i =0; i < n;i++){
      array.shift()
    }
    return array

  },
  dropRight: function(array, n=1){
    var x = array.length
    if (n>=x){
      return []
    }
    if (n==0){
      return array
    } else if (n==1){
      array.pop()
      return array
    }

    for (var i =0; i < n;i++){
      array.pop()
    }
    return array
  },
  fill: function(array, value, start=0, end=array.length){
    if (start==0&&end==array.length){
      return array.map(function(){
        return value
      })
    }
    for (var i =start; i < end; i++){
      array[i]=value
    }
    return array
  },
  flatten: function(array){
    var r = []
    for (var i = 0; i < array.length; i++){
      if (!Array.isArray(array[i])){
        r.push(array[i])
      } else {
        for (var j = 0; j < array[i].length; j++){
          r.push(array[i][j])
        }
      }
    }
    return r
  },
  flattenDeep: function(array){
    return this.flattenDepth(array,Infinity)
  },
  flattenDepth:function (array, depth = 1) {
    if (depth === 0) {
      return array.slice()
    }
    var result = []
    for(var i = 0; i<array.length; i++) {
      if (Array.isArray(array[i])) {
        var tmp = this.flattenDepth(array[i], depth - 1)
        result = [...result, ...tmp]
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  fromPairs: function(pairs){
    var obj = {}
    for (var i = 0; i < pairs.length; i++){
      obj[pairs[i][0]] = pairs[i][1]
    }
    return obj
  },
  head: function (array){
    return array[0]
  },
  indexOf: function(array, value, fromIndex=0){
    for (var i = fromIndex; i < array.length; i++){
      if (array[i]==value){
        return i
      }
    }
    return -1
  },
  initial: function(array){
    array.pop()
    return array
  },
  join: function(array, separator=','){
    var str = ""
    var x = array.length
    for (var i = 0; i < array.length-1; i++){
      str = str + array[i] + separator
    }
    str = str + array[x-1]
    return str
  },
  last:function (array){
    var x = array.length
    return array[x-1]
  },
  keyBy:function(ary,key){
    var obj = {}
    for (var people of ary){
      obj[people[key]] = people
    }
    return obj
  },
  flip: function (func){
    return function(...args){
      return func(...args.reverse())
    }
  },
  negate: function(func){
    return function(...args){
      return !func(...args)
    }
  },
  spread: function(func,start=0){
    return function(ary){
      return func.apply(null,ary)
    }
  },
}


