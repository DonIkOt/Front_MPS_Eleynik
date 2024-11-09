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