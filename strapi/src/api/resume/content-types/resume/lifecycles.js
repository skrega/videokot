module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
      const { result } = event;

      try{
        let subject = `Резюме: ${result.subject}`
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

        const file = await strapi.plugins.upload.services.upload.fetch({ id: result.file.id });
        const fileUrl = file.data.attributes.url;

        // const file = await strapi.plugins.upload.models.file.where({ id: result.file.id });
        // const fileUrl = strapi.config.get('server.url') + file[0].url;
  
        
        await strapi.plugins['email'].services.email.send({
          to: 'regina.andrievich@yandex.ru',
          from: 'regina.andrievich@yandex.ru',
          replyTo: 'regina.andrievich@yandex.ru',
          subject: subject,
          html: content
          // attachments: [
          //   {   
          //       filename: 'File',
          //       path: fileUrl
          //   }
          // ]  
        })
      } catch(err) {
        console.log(err);
      }
    }
  }


// module.exports = {
//   async afterCreate(event) {    // Connected to "Save" button in admin panel
//     const { result } = event;

//     try {
//       let subject = `Резюме: ${result.subject}`
//       let content = `
//         <p>Имя: ${result.name}</p> 
//         <p>Телефон: ${result.phone}</p> `;

//       if (result.email) {
//         content += `<p>Почта: ${result.email}</p>`;
//       }
//       if (result.comment) {
//         content += `<p>Комментарий: ${result.comment}</p>`;
//       }

//       content += `<p>Адрес страницы: ${result.url}</p>`;

//       // Определение вложения - сохраненный файл резюме
//       const attachment = {
//         filename: result.file.name, // Название файла
//         content: Buffer.from(result.file.data, 'base64'), // Данные файла в формате base64
//         encoding: 'base64' // Кодировка данных файла
//       };

//       await strapi.plugins['email'].services.email.send({
//         to: 'regina.andrievich@yandex.ru',
//         from: 'regina.andrievich@yandex.ru',
//         replyTo: 'regina.andrievich@yandex.ru',
//         subject: subject,
//         html: content,
//         attachments: [attachment] // Добавление вложенного файла к письму
//       })
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

