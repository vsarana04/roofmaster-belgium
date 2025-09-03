#!/bin/bash

# 🚀 Автоматичне налаштування GitHub Pages

echo "🚀 Налаштування GitHub Pages для RoofMaster Belgium"
echo "=================================================="

# Перевірка чи є git репозиторій
if [ ! -d ".git" ]; then
    echo "❌ Git репозиторій не знайдено. Запустіть 'git init' спочатку."
    exit 1
fi

# Запит GitHub username
echo ""
echo "📝 Введіть ваш GitHub username:"
read -r github_username

if [ -z "$github_username" ]; then
    echo "❌ Username не може бути порожнім"
    exit 1
fi

# Запит назви репозиторію
echo ""
echo "📝 Введіть назву репозиторію (або натисніть Enter для 'roofmaster-belgium'):"
read -r repo_name

if [ -z "$repo_name" ]; then
    repo_name="roofmaster-belgium"
fi

# Формування URL
github_url="https://github.com/$github_username/$repo_name"
pages_url="https://$github_username.github.io/$repo_name"

echo ""
echo "🔗 GitHub репозиторій: $github_url"
echo "🌐 GitHub Pages URL: $pages_url"
echo ""

# Підтвердження
echo "❓ Продовжити налаштування? (y/n)"
read -r confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ Скасовано"
    exit 1
fi

# Видалення існуючого remote (якщо є)
echo "🔄 Видалення існуючого remote..."
git remote remove origin 2>/dev/null || true

# Додавання нового remote
echo "➕ Додавання GitHub remote..."
git remote add origin "$github_url"

# Перейменування гілки
echo "🔄 Перейменування гілки на main..."
git branch -M main

# Відправка на GitHub
echo "📤 Відправка коду на GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Код успішно завантажено на GitHub!"
    echo ""
    echo "📋 Наступні кроки:"
    echo "1. Перейдіть на: $github_url"
    echo "2. Натисніть 'Settings' (вкладка)"
    echo "3. Прокрутіть до 'Pages' (ліва панель)"
    echo "4. В 'Source' виберіть 'Deploy from a branch'"
    echo "5. В 'Branch' виберіть 'main'"
    echo "6. В 'Folder' виберіть '/ (root)'"
    echo "7. Натисніть 'Save'"
    echo ""
    echo "⏳ Зачекайте 2-10 хвилин для створення сайту"
    echo ""
    echo "🌐 Ваш сайт буде доступний за адресою:"
    echo "   $pages_url"
    echo ""
    echo "📱 Відкрийте посилання на мобільному пристрої для тестування"
    echo ""
    echo "🎉 Готово! Тепер ви можете надіслати посилання замовнику!"
else
    echo ""
    echo "❌ Помилка при завантаженні на GitHub"
    echo "💡 Перевірте:"
    echo "   - Чи створений репозиторій на GitHub"
    echo "   - Чи правильний username"
    echo "   - Чи є доступ до інтернету"
    echo ""
    echo "🔗 Створіть репозиторій вручну: $github_url"
fi
