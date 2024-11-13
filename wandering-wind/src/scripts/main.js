document.addEventListener("DOMContentLoaded", function() {
    const addProjectButton = document.getElementById("add-project-button");
    const modal = document.querySelector(".modal.js-modal");
    const modalBg = document.querySelector(".modal__bg");
    const modalOkButton = document.getElementById("modal-ok-button");
    const modalCloseButton = document.querySelector(".modal__close");
    const projectTitleInput = document.getElementById("project-title");
    const projectDescriptionInput = document.getElementById("project-description");
    const projectsContent = document.querySelector(".projects-section__content");

    if (addProjectButton && modal && modalBg && modalOkButton && modalCloseButton && projectTitleInput && projectDescriptionInput && projectsContent) {
        // Открытие модального окна
        addProjectButton.addEventListener("click", function() {
            modal.classList.add("open");
        });

        // Закрытие модального окна при клике на кнопку "Отмена"
        modalCloseButton.addEventListener("click", function() {
            modal.classList.remove("open");
        });

        // Закрытие модального окна при клике на фон
        modalBg.addEventListener("click", function() {
            modal.classList.remove("open");
        });

        // Добавление нового проекта
        modalOkButton.addEventListener("click", function() {
            const title = projectTitleInput.value.trim();
            const description = projectDescriptionInput.value.trim();

            if (title && description) {
                // Определяем класс для нового проекта (чередование project--normal и project--reversed)
                let newClass = "project--normal";
                const lastProject = projectsContent.querySelector(".project:last-child");

                if (lastProject && lastProject.classList.contains("project--normal")) {
                    newClass = "project--reversed";
                }

                // Создаём новый элемент проекта
                const newProject = document.createElement("div");
                newProject.classList.add("project", newClass);
                newProject.innerHTML = `
                    <img src="default.jpg" alt="${title}" class="project__image">
                    <div class="project__info">
                        <h3 class="project__title">${title}</h3>
                        <p class="project__description">${description}</p>
                    </div>
                `;

                // Добавляем новый проект в список
                projectsContent.appendChild(newProject);

                // Очищаем поля ввода
                projectTitleInput.value = "";
                projectDescriptionInput.value = "";

                // Закрываем модальное окно
                modal.classList.remove("open");
            } else {
                alert("Пожалуйста, заполните все поля!");
            }
        });
    } else {
        console.error("Ошибка: Один или несколько элементов не найдены!");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const quotesList = document.querySelector(".quotes__list");
    const authorsDropdown = document.querySelector("#authors-dropdown");
    const randomQuotesButton = document.querySelector("#random-quotes-button");
    let authorsSet = new Set();
    let cachedQuotes = []; // Массив для сохранения загруженных цитат

    // Функция для загрузки 10 цитат одним запросом
    async function fetchBulkQuotes() {
        try {
            const response = await fetch("https://programming-quotesapi.vercel.app/api/bulk");
            if (!response.ok) {
                throw new Error("Ошибка при загрузке цитат");
            }
            const quotes = await response.json();
            return quotes;
        } catch (error) {
            console.error("Ошибка при загрузке цитат:", error);
            return [];
        }
    }

    // Функция для загрузки и отображения 10 случайных цитат
    async function loadRandomQuotes() {
        quotesList.innerHTML = ""; // Очищаем список цитат
        authorsSet.clear();
        authorsDropdown.innerHTML = ""; // Очищаем список авторов
        cachedQuotes = []; // Сбрасываем кэшированные цитаты

        const quotes = await fetchBulkQuotes();
        cachedQuotes = quotes; // Сохраняем цитаты в кэш

        quotes.forEach(quote => {
            const listItem = document.createElement("li");
            listItem.classList.add("quotes__list-item");
            listItem.textContent = `"${quote.quote}" — ${quote.author}`;
            quotesList.appendChild(listItem);

            // Сохраняем автора
            authorsSet.add(quote.author);
        });

        // Обновляем выпадающий список авторов
        authorsSet.forEach(author => {
            const option = document.createElement("option");
            option.value = author;
            option.textContent = author;
            authorsDropdown.appendChild(option);
        });
    }

    // Функция для загрузки и отображения цитат определённого автора
    function loadQuotesByAuthor(author) {
        quotesList.innerHTML = ""; // Очищаем список цитат
        let authorQuotes = cachedQuotes.filter(quote => quote.author === author);

        if (authorQuotes.length === 0) {
            console.warn("Нет цитат для выбранного автора в кэше.");
            return;
        }

        authorQuotes.forEach(quote => {
            const listItem = document.createElement("li");
            listItem.classList.add("quotes__list-item");
            listItem.textContent = `"${quote.quote}" — ${quote.author}`;
            quotesList.appendChild(listItem);
        });
    }

    // Обработчик выбора автора из выпадающего списка
    authorsDropdown.addEventListener("change", function() {
        const selectedAuthor = authorsDropdown.value;
        if (selectedAuthor) {
            loadQuotesByAuthor(selectedAuthor);
        }
    });

    // Обработчик кнопки случайные цитаты
    randomQuotesButton.addEventListener("click", loadRandomQuotes);

    // Загрузка случайных цитат при загрузке страницы
    loadRandomQuotes();
});