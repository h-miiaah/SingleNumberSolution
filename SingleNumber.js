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
  - At the end, the result variable contains the XOR (exclusive or) of all the numbers in the array.
  - The number that appears only once will have its bits set in the result variable.
  - Finally return the result variable.  

  */
 