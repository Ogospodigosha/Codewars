

const filter_list = (array) => {
  return  array.filter(el => typeof el === 'number')
}
console.log(filter_list([1,2,'a','b']))