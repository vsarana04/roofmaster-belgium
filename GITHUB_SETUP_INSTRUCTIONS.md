# 🚀 Налаштування GitHub Pages - Покрокові інструкції

## 📋 **Крок 1: Створення репозиторію на GitHub**

1. **Перейдіть на GitHub:**
   - Відкрийте [github.com](https://github.com) у браузері
   - Увійдіть в свій акаунт (або створіть новий)

2. **Створіть новий репозиторій:**
   - Натисніть зелену кнопку **"New"** або **"+"** → **"New repository"**
   - **Repository name:** `roofmaster-belgium` (або будь-яка назва)
   - **Description:** `Professional roofing website for Belgium market`
   - **Public** ✅ (обов'язково для безкоштовного GitHub Pages)
   - **НЕ** додавайте README, .gitignore, ліцензію (вони вже є)
   - Натисніть **"Create repository"**

## 📋 **Крок 2: Підключення локального репозиторію**

**Скопіюйте та виконайте ці команди в терміналі:**

```bash
# Додайте віддалений репозиторій (замініть YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/roofmaster-belgium.git

# Перейменуйте гілку на main (сучасний стандарт)
git branch -M main

# Відправте код на GitHub
git push -u origin main
```

**Приклад:**
```bash
git remote add origin https://github.com/johnsmith/roofmaster-belgium.git
git branch -M main
git push -u origin main
```

## 📋 **Крок 3: Увімкнення GitHub Pages**

1. **Перейдіть до налаштувань репозиторію:**
   - Відкрийте ваш репозиторій на GitHub
   - Натисніть вкладку **"Settings"** (найправіша вкладка)

2. **Налаштуйте Pages:**
   - Прокрутіть до секції **"Pages"** (ліва панель меню)
   - В **"Source"** виберіть **"Deploy from a branch"**
   - В **"Branch"** виберіть **"main"**
   - В **"Folder"** виберіть **"/ (root)"**
   - Натисніть **"Save"**

## 📋 **Крок 4: Очікування деплою**

- GitHub автоматично створить сайт
- Займає **2-10 хвилин**
- Ви побачите повідомлення: *"Your site is published at..."*

## 🔗 **Крок 5: Отримання посилання**

**Ваш сайт буде доступний за адресою:**
```
https://YOUR_USERNAME.github.io/roofmaster-belgium
```

**Приклад:**
```
https://johnsmith.github.io/roofmaster-belgium
```

## ✅ **Перевірка роботи**

1. **Відкрийте посилання в браузері**
2. **Перевірте:**
   - ✅ Заставка завантаження працює
   - ✅ Перемикач мов функціональний
   - ✅ Форми працюють
   - ✅ Мобільна версія адаптивна

## 🔄 **Оновлення сайту**

**Після змін в коді:**

```bash
# Додайте зміни
git add .

# Зробіть коміт
git commit -m "Update: опис змін"

# Відправте на GitHub
git push origin main
```

GitHub Pages автоматично оновить сайт за **2-5 хвилин**.

## 🎯 **Готові команди для копіювання**

**Замініть `YOUR_USERNAME` на ваш GitHub username:**

```bash
# 1. Додати віддалений репозиторій
git remote add origin https://github.com/YOUR_USERNAME/roofmaster-belgium.git

# 2. Перейменувати гілку
git branch -M main

# 3. Відправити код
git push -u origin main
```

## 🆘 **Якщо щось пішло не так**

### **Помилка "remote origin already exists":**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/roofmaster-belgium.git
```

### **Помилка авторизації:**
- Використовуйте Personal Access Token замість пароля
- Або налаштуйте SSH ключі

### **Сайт не завантажується:**
- Перевірте, що репозиторій **Public**
- Перевірте налаштування Pages в Settings
- Зачекайте 10-15 хвилин

## 📱 **Тестування на мобільних**

**Після створення посилання:**
1. Відкрийте посилання на телефоні
2. Перевірте адаптивність
3. Протестуйте всі функції

---

**Готово! Тепер ви можете надіслати посилання замовнику!** 🎉

**URL буде:** `https://YOUR_USERNAME.github.io/roofmaster-belgium`
