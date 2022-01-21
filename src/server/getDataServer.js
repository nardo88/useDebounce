const getDataServer = async (filter) => {
    // у нас есть массив данных
    const data = [
      {_id: 1, name: 'Максим', phone: '88998874'},
      {_id: 2, name: 'Ольга', phone: '5551145'},
      {_id: 3, name: 'Полина', phone: '454574845'},
      {_id: 4, name: 'Ярослав', phone: '4547546'},
      {_id: 5, name: 'Лиза', phone: '545454145'},
      {_id: 6, name: 'Алиса', phone: '5465484654'},
      {_id: 7, name: 'Мария', phone: '4554656'},
      {_id: 8, name: 'Наталья', phone: '465468654'},
      {_id: 9, name: 'Александр', phone: '56468654'},
      {_id: 10, name: 'Ирина', phone: '5421232456'},
      {_id: 11, name: 'Дмитрий', phone: '566546465'},
      {_id: 12, name: 'Юрий', phone: '5466546765'},
    ]
    // функция вернет промис в которой через 100 миличекунд 
    // зарезолвится отфильтрованный массив
    const promise = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())))
      }, 100)
    })
    return promise
  }

  export default getDataServer

  