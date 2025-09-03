# 🚀 Інструкції по деплою

## Варіанти деплою

### 1. Netlify (Рекомендовано) ⭐

**Безкоштовно, найпростіший спосіб**

1. Перейдіть на [netlify.com](https://netlify.com)
2. Зареєструйтеся або увійдіть
3. Перетягніть папку `web_roof` на сторінку
4. Сайт буде доступний за 2 хвилини
5. Налаштуйте домен в налаштуваннях

**Переваги:**
- ✅ Безкоштовно
- ✅ Автоматичний HTTPS
- ✅ CDN по всьому світу
- ✅ Простий інтерфейс

### 2. Vercel

**Безкоштовно, для розробників**

1. Перейдіть на [vercel.com](https://vercel.com)
2. Зареєструйтеся через GitHub
3. Імпортуйте проект
4. Автоматичний деплой

### 3. GitHub Pages

**Безкоштовно, для розробників**

1. Створіть репозиторій на GitHub
2. Завантажте код
3. Увімкніть Pages в Settings → Pages
4. Виберіть source: Deploy from a branch
5. Виберіть main branch

### 4. Shared Hosting (cPanel)

**Платно, для бізнесу**

1. Купіть хостинг з cPanel
2. Відкрийте File Manager
3. Завантажте всі файли в папку `public_html`
4. Налаштуйте домен

### 5. VPS/Cloud Server

**Для досвідчених користувачів**

1. Налаштуйте сервер (Ubuntu/CentOS)
2. Встановіть веб-сервер (Apache/Nginx)
3. Завантажте файли через SFTP
4. Налаштуйте домен

## 📋 Чек-лист перед деплоєм

- [ ] Перевірити всі посилання в `index.html`
- [ ] Оновити контактну інформацію в `src/config/config.js`
- [ ] Перевірити переклади в `src/translations/translations.js`
- [ ] Протестувати на мобільних пристроях
- [ ] Перевірити швидкість завантаження
- [ ] Налаштувати Google Analytics (якщо потрібно)

## 🔧 Налаштування після деплою

### 1. Домен

```javascript
// В src/config/config.js
const CONFIG = {
    site: {
        url: 'https://your-domain.com'  // Замініть на ваш домен
    }
};
```

### 2. Google Analytics

```javascript
// В src/config/config.js
const CONFIG = {
    analytics: {
        googleAnalytics: 'GA-XXXXXXXXX',  // Ваш GA4 ID
        enabled: true
    }
};
```

### 3. Facebook Pixel

```javascript
// В src/config/config.js
const CONFIG = {
    analytics: {
        facebookPixel: 'XXXXXXXXXXXXX',  // Ваш Pixel ID
        enabled: true
    }
};
```

### 4. SEO

```html
<!-- В index.html -->
<meta name="description" content="Ваш опис сайту">
<meta name="keywords" content="ваші, ключові, слова">
```

## 🛠️ Модифікація після деплою

### Через FTP/SFTP

1. Підключіться до сервера
2. Відкрийте папку з сайтом
3. Відредагуйте потрібні файли
4. Оновіть сторінку в браузері

### Через веб-інтерфейс

1. Увійдіть в панель управління хостингу
2. Відкрийте File Manager
3. Відредагуйте файли
4. Збережіть зміни

### Через Git (для розробників)

```bash
# Змінити файли локально
git add .
git commit -m "Update content"
git push origin main

# Автоматичний деплой (якщо налаштовано)
```

## 📊 Моніторинг

### Google Analytics

1. Створіть акаунт на [analytics.google.com](https://analytics.google.com)
2. Додайте tracking code в `src/config/config.js`
3. Моніторьте відвідувачів

### Google Search Console

1. Додайте сайт в [search.google.com/search-console](https://search.google.com/search-console)
2. Підтвердіть власність
3. Моніторьте позиції в пошуку

## 🔒 Безпека

### HTTPS

- ✅ Netlify/Vercel: автоматично
- ✅ Shared hosting: увімкніть SSL сертифікат
- ✅ VPS: налаштуйте Let's Encrypt

### Backup

- Регулярно створюйте резервні копії
- Зберігайте копії локально
- Використовуйте автоматичні backup

## 📞 Підтримка

Якщо виникли проблеми:

1. Перевірте консоль браузера
2. Переконайтеся, що всі файли завантажені
3. Перевірте налаштування домену
4. Зверніться до підтримки хостингу

---

**Успішного деплою!** 🎉
