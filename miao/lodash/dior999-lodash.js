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

}


