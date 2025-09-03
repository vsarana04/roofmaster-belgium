# 👨‍💻 Інструкції для розробників

## 🏗️ Структура проекту

```
web_roof/
├── index.html                    # Головна сторінка
├── assets/                       # Статичні ресурси
│   ├── css/
│   │   └── styles.css           # Основні стилі
│   ├── js/
│   │   ├── script-main.js       # Основний JavaScript
│   │   └── script-old.js        # Старий файл (архів)
│   ├── images/                  # Зображення (додайте сюди)
│   └── fonts/                   # Шрифти (додайте сюди)
├── src/                         # Вихідний код
│   ├── config/
│   │   └── config.js           # Конфігурація сайту
│   ├── translations/
│   │   └── translations.js     # Переклади
│   └── utils/
│       └── utils.js            # Допоміжні функції
├── docs/                        # Документація
│   └── README.md               # Детальна документація
├── README.md                   # Основний README
├── DEPLOYMENT.md               # Інструкції по деплою
├── DEVELOPMENT.md              # Цей файл
├── package.json                # Метадані проекту
└── .gitignore                  # Git ignore файл
```

## 🚀 Локальна розробка

### Запуск проекту

```bash
# Клонуйте репозиторій
git clone https://github.com/your-username/roofmaster-belgium.git
cd roofmaster-belgium

# Запустіть локальний сервер
python3 -m http.server 8000

# Або використайте Node.js
npx http-server

# Або PHP
php -S localhost:8000
```

### Відкрийте в браузері
```
http://localhost:8000
```

## 📝 Робота з кодом

### Додавання нової секції

1. **HTML** - додайте в `index.html`:
```html
<section class="new-section" id="new-section">
    <div class="container">
        <h2 data-translate="new_section.title">New Section</h2>
        <p data-translate="new_section.description">Description</p>
    </div>
</section>
```

2. **CSS** - додайте стилі в `assets/css/styles.css`:
```css
.new-section {
    padding: var(--spacing-xl) 0;
    background-color: var(--light-bg);
}
```

3. **Переклади** - додайте в `src/translations/translations.js`:
```javascript
const translations = {
    en: {
        new_section: {
            title: 'New Section',
            description: 'Description text'
        }
    },
    nl: {
        new_section: {
            title: 'Nieuwe Sectie',
            description: 'Beschrijving tekst'
        }
    },
    fr: {
        new_section: {
            title: 'Nouvelle Section',
            description: 'Texte de description'
        }
    }
};
```

### Зміна кольорів

Відкрийте `assets/css/styles.css` та змініть CSS змінні:

```css
:root {
    --primary-color: #ff6b35;      /* Основний колір */
    --secondary-color: #f7931e;    /* Додатковий колір */
    --dark-color: #2c3e50;         /* Темний колір */
    --light-bg: #f8f9fa;           /* Світлий фон */
    --white-color: #ffffff;        /* Білий колір */
    --text-color: #6c757d;         /* Колір тексту */
}
```

### Додавання нової мови

1. Додайте мову в `src/config/config.js`:
```javascript
const CONFIG = {
    language: {
        supported: ['en', 'nl', 'fr', 'de'], // Додайте 'de'
        fallback: 'en'
    }
};
```

2. Додайте переклади в `src/translations/translations.js`:
```javascript
const translations = {
    // ... існуючі мови
    de: {
        nav: {
            home: 'Startseite',
            about: 'Über uns',
            // ... інші переклади
        }
    }
};
```

3. Додайте опцію в HTML:
```html
<div class="language-option" data-lang="de">
    <span class="flag">🇩🇪</span>
    <span>DE</span>
</div>
```

## 🛠️ Інструменти розробки

### Рекомендовані розширення VS Code

- **Live Server** - автоматичне оновлення
- **Prettier** - форматування коду
- **ESLint** - перевірка JavaScript
- **Auto Rename Tag** - автоматичне перейменування тегів
- **Bracket Pair Colorizer** - кольорові дужки

### Налаштування VS Code

Створіть `.vscode/settings.json`:

```json
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    }
}
```

## 🧪 Тестування

### Перевірка в різних браузерах

- ✅ Chrome (остання версія)
- ✅ Firefox (остання версія)
- ✅ Safari (остання версія)
- ✅ Edge (остання версія)

### Мобільне тестування

- ✅ iPhone (Safari)
- ✅ Android (Chrome)
- ✅ iPad (Safari)
- ✅ Android Tablet (Chrome)

### Інструменти тестування

```bash
# Перевірка швидкості
npx lighthouse http://localhost:8000

# Перевірка доступності
npx axe-cli http://localhost:8000
```

## 📦 Збірка для продакшену

### Мініфікація CSS

```bash
# Встановіть clean-css
npm install -g clean-css-cli

# Мініфікуйте CSS
cleancss -o assets/css/styles.min.css assets/css/styles.css
```

### Мініфікація JavaScript

```bash
# Встановіть uglify-js
npm install -g uglify-js

# Мініфікуйте JS
uglifyjs assets/js/script-main.js -o assets/js/script-main.min.js
```

### Оптимізація зображень

```bash
# Встановіть imagemin
npm install -g imagemin-cli

# Оптимізуйте зображення
imagemin assets/images/* --out-dir=assets/images/optimized
```

## 🔧 Налаштування Git

### Початкове налаштування

```bash
# Ініціалізуйте репозиторій
git init

# Додайте файли
git add .

# Перший коміт
git commit -m "Initial commit"

# Додайте remote
git remote add origin https://github.com/your-username/roofmaster-belgium.git

# Запуште
git push -u origin main
```

### Workflow

```bash
# Створіть нову гілку
git checkout -b feature/new-feature

# Зробіть зміни
# ... редагування файлів ...

# Додайте зміни
git add .

# Зробіть коміт
git commit -m "Add new feature"

# Запуште гілку
git push origin feature/new-feature

# Створіть Pull Request на GitHub
```

## 🐛 Налагодження

### Консоль браузера

Відкрийте Developer Tools (F12) та перевірте:

- **Console** - помилки JavaScript
- **Network** - проблеми з завантаженням файлів
- **Elements** - структура HTML
- **Sources** - налагодження коду

### Типові проблеми

1. **Файли не завантажуються**
   - Перевірте шляхи в HTML
   - Переконайтеся, що файли існують

2. **Переклади не працюють**
   - Перевірте `data-translate` атрибути
   - Переконайтеся, що ключі існують в translations.js

3. **Стилі не застосовуються**
   - Перевірте CSS селектори
   - Переконайтеся, що файл підключений

## 📚 Корисні ресурси

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Can I Use](https://caniuse.com/) - сумісність браузерів

## 🤝 Внесок у проект

1. Форкніть репозиторій
2. Створіть feature гілку
3. Зробіть зміни
4. Створіть Pull Request

## 📞 Підтримка

Якщо у вас виникли питання:

- Створіть Issue на GitHub
- Напишіть email
- Зверніться до команди розробки

---

**Удачі в розробці!** 🚀
