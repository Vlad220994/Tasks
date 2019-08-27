function func1() {
  return Promise.resolve('1'); //возвращаем успешный промис с результатом 1
}

function func2() {
  return Promise.resolve('2'); //возвращаем успешный промис с результатом 2
}

function func3(res) {
  return console.log(res); //возвращаем результат
}

// 7.1: 2
func1()
  .then(function() {
    return func2();
  })
  .then(func3)
// 7.2: undefined
func1()
  .then(function() {
    func2();
  })
  .then(func3)
// 7.3: 1 - тут непонятно, почему 1
func1()
  .then(func2())
  .then(func3)
//7.4: 2
func1()
  .then(func2)
  .then(func3)
