function sendMail() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
      showNotification('لطفا اسم, ایمیل و پیام خود را بنویسید!');
      return;
  }

  var params = {
      name: name,
      email: email,
      message: message,
  };

  const serviceID = "service_9z3cie9";
  const templateID = "template_ofpohj1";

  emailjs.send(serviceID, templateID, params)
      .then((res) => {
          // Очистка полей формы
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";

          // Печать результата в консоль
          console.log(res);

          // Показывать уведомление
          showNotification('پیام شما ارسال شد!');
      })
      .catch((err) => {
          console.error('Ошибка при отправке сообщения:', err);
          showNotification('Произошла ошибка при отправке сообщения.');
      });
}

function showNotification(message) {
  var notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add('show');

  // Убираем уведомление через 3 секунды
  setTimeout(function() {
      notification.classList.remove('show');
  }, 3000);
}
