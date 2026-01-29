export const fetchUsers = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          fullname: 'Иванов Иван Иванович',
          tel: '88005553535',
          email: 'aaaa@mail.ru',
          address: 'г Москва ул Московская',
          position: 'Frontend-разработчик',
          salary: 200000,
        },
        {
          id: 2,
          fullname: 'Иванов Иван Иванович',
          tel: '88005553535',
          email: 'aaaa@mail.ru',
          address: 'г Москва ул Московская',
          position: 'Frontend-разработчик',
          salary: 200000,
        },
        {
          id: 3,
          fullname: 'Эндрю Тейт Иванович',
          tel: '88005553535',
          email: 'aaaa@mail.ru',
          address: 'г Москва ул Московская',
          position: 'Frontend-разработчик',
          salary: 200000,
        },
      ])
    }, 1000)
  })
}
