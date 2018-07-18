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
      if (array[i] != false && array[i]!=NaN && array[i] != "" && array[i] != undefined && array[i]!= 0 &&array[i]!=null && array[i]!="null"){
        ary.push(array[i])
      }
    }
    array = ary
    return array
  }


}


