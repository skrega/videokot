// module.exports = {
//     async afterCreate(event) {    // Connected to "Save" button in admin panel
//       const { result } = event;
  
//       try{
//         await strapi.plugins['email'].services.email.send({
//           to: ['regina.andrievich@yandex.ru'],
//           from: 'regina.andrievich@yandex.ru',
//           replyTo: 'regina.andrievich@yandex.ru',
//           subject: result.subject,
//           html: `<p>Запрос с сайта</p> <p>Имя: ${result.name}</p> 
//           <p>Телефон: ${result.phone}</p>
//           <p>Почта: ${result.email}</p>
//           <p>Комментарий: ${result.comment}</p>
//            <p>Адрес страницы: ${result.url}</p>`
//         })
//       } catch(err) {
//         console.log(err);
//       }
//     }
//   }
  
module.exports = {
  async afterCreate(event) {    // Connected to "Save" button in admin panel
    const { result } = event;

    try{
      let content = ` 
        <p>Имя: ${result.name}</p> 
        <p>Телефон: ${result.phone}</p> `;
      
      if(result.email){
        content += `<p>Почта: ${result.email}</p>`;
      }
      if(result.comment){
        content += `<p>Комментарий: ${result.comment}</p>`;
      }

      content += `<p>Адрес страницы: ${result.url}</p>`;
      
      await strapi.plugins['email'].services.email.send({
        to: 'regina.andrievich@yandex.ru',
        from: 'regina.andrievich@yandex.ru',
        replyTo: 'regina.andrievich@yandex.ru',
        subject: result.subject,
        html: content
      })
    } catch(err) {
      console.log(err);
    }
  }
}