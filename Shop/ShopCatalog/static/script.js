// Очікування завантаження документа
$(document).ready(function () {
  // Коли користувач клікає на чекбокс
  $(".checkbox").click(function () {
    // Надсилаємо запит на сервер за допомогою AJAX
    $.ajax({
      // URL, на який надсилаємо запит, беремо з поля введення з класом 'url_get'
      url: $(".url_get").val(),
      // Тип запиту - GET
      type: "get",
      // Передаємо дані в запиті, де 'category' - це ключ, а $(this).val() - значення, яке дорівнює значенню вибраного чекбокса
      data: { category: $(this).val() },
      // Якщо запит успішний
      success: function (response) {
        // Очищуємо контейнер з результатами пошуку
        $(".container").empty();
        // Проходимося по кожному транспортному засобі
        for (const index in response.filtered_transport) {
          // Формуємо рядок з HTML-кодом для нового транспорту
          let newTransport = `<div>
                    <p>${response.filtered_transport[index].name}</p>
                    <p>${response.filtered_transport[index].price}$</p>
                    <img src="media/${response.filtered_transport[index].image}" style="max-height: 400px">
                    </div>
                    <hr>
                    <br><br>`;
          // Додаємо HTML-код нового транспорту до контейнера
          $(".container").append(newTransport);
        }
      },
    });
  });
});
