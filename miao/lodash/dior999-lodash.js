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
  }
}


