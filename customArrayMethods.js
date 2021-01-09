const nums = [1, 2, 3, 4, 5, 6]

nums.addAll = function () {
  return this.reduce((acc, curr) => acc + curr)
}
console.log(nums.addAll())

