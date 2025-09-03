# ⚡ Швидкий старт

## 🚀 Запуск сайту

### Локально
```bash
python3 -m http.server 8000
```
Відкрийте: http://localhost:8000

### На сервері
1. Завантажте всі файли на хостинг
2. Відкрийте ваш домен

## ⚙️ Основні налаштування

### 1. Контактна інформація
Відкрийте `src/config/config.js`:
```javascript
contact: {
    phone: '+32 12 345 67 89',     // Ваш телефон
    email: 'info@roofmaster.be',   // Ваш email
    address: 'Brussels, Belgium'   // Ваша адреса
}
```

### 2. Переклади
Відкрийте `src/translations/translations.js` та змініть тексти.

### 3. Кольори
Відкрийте `assets/css/styles.css` та змініть:
```css
:root {
    --primary-color: #ff6b35;    /* Основний колір */
    --secondary-color: #f7931e;  /* Додатковий колір */
}
```

## 📁 Структура файлів

```
web_roof/
├── index.html              # Головна сторінка
├── assets/
│   ├── css/styles.css     # Стилі
│   └── js/script-main.js  # JavaScript
├── src/
│   ├── config/config.js   # Налаштування
│   ├── translations/      # Переклади
│   └── utils/            # Допоміжні функції
└── docs/                 # Документація
```

## 🌐 Деплой

### Netlify (найпростіший)
1. Перейдіть на netlify.com
2. Перетягніть папку на сторінку
3. Готово!

### Інші варіанти
Дивіться [DEPLOYMENT.md](DEPLOYMENT.md)

## 📞 Підтримка

- 📖 [Повна документація](docs/README.md)
- 🚀 [Інструкції деплою](DEPLOYMENT.md)
- 👨‍💻 [Для розробників](DEVELOPMENT.md)

---

**Готово до використання!** ✅
