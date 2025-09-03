# 🚀 Налаштування GitHub Pages для демонстрації

## 📋 Крок за кроком

### 1. **Створіть репозиторій на GitHub**

1. Перейдіть на [GitHub.com](https://github.com)
2. Натисніть **"New repository"**
3. Назва: `roofmaster-belgium` (або будь-яка інша)
4. Опис: `Professional roofing website for Belgium market`
5. Виберіть **Public** (обов'язково для безкоштовного GitHub Pages)
6. **НЕ** додавайте README, .gitignore або ліцензію (вони вже є)
7. Натисніть **"Create repository"**

### 2. **Підключіть локальний репозиторій**

```bash
# Додайте віддалений репозиторій (замініть YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/roofmaster-belgium.git

# Перейменуйте гілку на main (сучасний стандарт)
git branch -M main

# Відправте код на GitHub
git push -u origin main
```

### 3. **Увімкніть GitHub Pages**

1. Перейдіть до вашого репозиторію на GitHub
2. Натисніть **"Settings"** (вкладка)
3. Прокрутіть до секції **"Pages"** (ліва панель)
4. В **"Source"** виберіть **"Deploy from a branch"**
5. В **"Branch"** виберіть **"main"**
6. В **"Folder"** виберіть **"/ (root)"**
7. Натисніть **"Save"**

### 4. **Очікуйте деплой**

- GitHub автоматично створить сайт
- Займає 2-10 хвилин
- URL буде: `https://YOUR_USERNAME.github.io/roofmaster-belgium`

## 🔗 **Альтернативні варіанти**

### **Netlify Drop (Найшвидший)**

1. Перейдіть на [netlify.com](https://netlify.com)
2. Перетягніть папку проекту в **"Deploy manually"**
3. Отримайте миттєвий URL

### **Vercel (Для розробників)**

1. Перейдіть на [vercel.com](https://vercel.com)
2. Підключіть GitHub репозиторій
3. Автоматичний деплой

### **Surge.sh (Командний рядок)**

```bash
# Встановіть surge
npm install -g surge

# Деплой
surge . your-project-name.surge.sh
```

## 📱 **Тестування на мобільних**

### **ngrok (Туннель до локального сервера)**

```bash
# Встановіть ngrok
brew install ngrok

# Запустіть туннель
ngrok http 8000
```

Отримаєте URL типу: `https://abc123.ngrok.io`

## 🎯 **Рекомендації для демонстрації**

### **Підготовка до показу:**

1. **Перевірте всі функції:**
   - ✅ Заставка завантаження
   - ✅ Перемикач мов
   - ✅ Форми
   - ✅ Навігація
   - ✅ Мобільна версія

2. **Підготуйте демо-сценарій:**
   - Покажіть заставку завантаження
   - Переключіть мови
   - Заповніть форму
   - Покажіть мобільну версію

3. **Підготуйте питання:**
   - "Як вам заставка завантаження?"
   - "Чи подобається дизайн?"
   - "Чи зручна навігація?"
   - "Чи потрібні зміни в кольорах?"

## 🔄 **Оновлення сайту**

Після змін в коді:

```bash
# Додайте зміни
git add .

# Зробіть коміт
git commit -m "Update: опис змін"

# Відправте на GitHub
git push origin main
```

GitHub Pages автоматично оновить сайт за 2-5 хвилин.

## 🎨 **Кастомізація для демо**

### **Тимчасові зміни для показу:**

1. **Змініть тривалість заставки:**
```javascript
// В src/config/config.js
loading: {
    duration: 5000,  // 5 секунд для демо
}
```

2. **Додайте тестові дані:**
```javascript
// В src/config/config.js
contact: {
    phone: "+32 123 456 789",
    email: "demo@roofmaster.be"
}
```

## 📊 **Аналітика демо**

### **Відстеження переглядів:**

Додайте в `index.html` перед `</head>`:

```html
<!-- Google Analytics для демо -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚨 **Важливі моменти**

### **Безпека:**
- ✅ Не додавайте реальні паролі
- ✅ Використовуйте тестові дані
- ✅ Перевірте, що немає конфіденційної інформації

### **Продуктивність:**
- ✅ Оптимізуйте зображення
- ✅ Перевірте швидкість завантаження
- ✅ Тестуйте на різних пристроях

---

**Готово для демонстрації замовнику!** 🎉

**URL буде:** `https://YOUR_USERNAME.github.io/roofmaster-belgium`
