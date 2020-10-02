
exports.min = function min (array) {    
    if (typeof array != "undefined" && array != null && array.length > 0){
        let min_value=array[0];
        for(var i = 0 ; i<array.length; i++){
            if(min_value > array[i]) {min_value=array[i]}
        }
        return min_value;
    }
    else {
        return 0;
    }
}

exports.max = function max (array) {
    if (typeof array != "undefined" && array != null && array.length > 0){
        let max_value=array[0];
        for(var i = 0 ; i<array.length; i++){
            if(max_value < array[i]) {max_value=array[i]}
        }
        return max_value;
      }
      else {
        return 0;
      }
}

exports.avg = function avg (array) {
    if (typeof array != "undefined" && array != null && array.length > 0){
        let avg_value=0;
        let sum_value=0;
        for(var i = 0 ; i<array.length; i++){
            sum_value=sum_value+array[i];            
        }
        size_array=array.length;
        avg_value=sum_value/size_array;
        return avg_value;
      }
      else {
        return 0;
      }
}
