/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    var res = 0;
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        res ^= nums[i];
      }
      return res;
  };


  /*

  - Initialize a result variable to 0.
  - Loop through the array and XOR (exclusive or) of every number with the result variable.
  

  */