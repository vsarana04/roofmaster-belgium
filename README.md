# 🏠 RoofMaster Belgium Website

Професійний веб-сайт для компанії з монтажу та ремонту дахів у Бельгії.

## 📁 Структура проекту

```
web_roof/
├── index.html                    # Головна сторінка
├── assets/                       # Статичні ресурси
│   ├── css/
│   │   └── styles.css           # Основні стилі
│   ├── js/
│   │   ├── script-main.js       # Основний JavaScript
│   │   └── script-old.js        # Старий файл (архів)
│   ├── images/                  # Зображення
│   └── fonts/                   # Шрифти
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
├── DEVELOPMENT.md              # Для розробників
├── QUICK_START.md              # Швидкий старт
├── LOADING_SCREEN.md           # Налаштування заставки
└── README.md                   # Цей файл
```

## 🚀 Швидкий старт

### Локальний запуск

```bash
# Запустіть локальний сервер
python3 -m http.server 8000

# Відкрийте в браузері
open http://localhost:8000
```

### Деплой на сервер

1. **Netlify** (рекомендовано):
   - Перетягніть папку на [netlify.com](https://netlify.com)
   - Сайт буде доступний за 2 хвилини

2. **Vercel**:
   - Завантажте на [vercel.com](https://vercel.com)
   - Автоматичний деплой

3. **GitHub Pages**:
   - Завантажте код на GitHub
   - Увімкніть Pages в налаштуваннях

## ⚙️ Налаштування

### Основні налаштування
Відкрийте `src/config/config.js`:

```javascript
const CONFIG = {
    site: {
        name: 'RoofMaster Belgium',
        url: 'https://your-domain.com',    // Ваш домен
        email: 'your-email@domain.com',    // Ваш email
        phone: '+32 12 345 67 89',         // Ваш телефон
        address: 'Your Address'            // Ваша адреса
    }
};
```

### Переклади
Відкрийте `src/translations/translations.js` та змініть тексти.

### Стилі
Відкрийте `assets/css/styles.css` та змініть кольори та дизайн.

## 🌍 Мови

- 🇬🇧 English (EN)
- 🇳🇱 Nederlands (NL) 
- 🇫🇷 Français (FR)

## 📱 Адаптивність

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (до 767px)

## 🛠️ Технології

- **HTML5** - семантична розмітка
- **CSS3** - сучасні стилі та анімації
- **JavaScript ES6+** - інтерактивність
- **Font Awesome** - іконки
- **Responsive Design** - адаптивний дизайн

## 📞 Підтримка

Якщо у вас виникли питання:

1. Перевірте консоль браузера на помилки
2. Переконайтеся, що всі файли завантажені
3. Перевірте налаштування в `src/config/config.js`

## 📄 Ліцензія

© 2024 RoofMaster Belgium. Всі права захищені.

---

**Детальна документація**: [docs/README.md](docs/README.md)