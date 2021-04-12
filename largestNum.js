const largestNumber = (nums) => {
  nums.sort((x, y) => {
    let sx = 10;
    let sy = 10;

    while (sx <= x) {
      sx *= 10;
    }

    while (sy <= y) {
      sy *= 10;
    }

    return '' + (sx * y + x) - ('' + (sy * x + y));
  });

  if (nums[0] === 0) {
    return '0'
  }

  return nums.join('');
};

const nums1 = [10, 2];
const nums2 = [3, 30, 34, 5, 9];
const nums3 = [1];
const nums4 = [10];

console.log(largestNumber(nums1));
console.log(largestNumber(nums2));
console.log(largestNumber(nums3));
console.log(largestNumber(nums4));