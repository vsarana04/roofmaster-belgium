#!/bin/bash

# 🔍 Перевірка та виправлення GitHub Pages

echo "🔍 Перевірка GitHub Pages для RoofMaster Belgium"
echo "================================================"

# Перевірка поточного статусу
echo "📋 Поточний статус:"
echo "   Repository: https://github.com/vsarana04/roofmaster-belgium"
echo "   Expected URL: https://vsarana04.github.io/roofmaster-belgium"
echo ""

# Перевірка чи є index.html
if [ -f "index.html" ]; then
    echo "✅ index.html знайдено"
else
    echo "❌ index.html не знайдено"
    exit 1
fi

# Перевірка чи є папка assets
if [ -d "assets" ]; then
    echo "✅ Папка assets знайдена"
else
    echo "❌ Папка assets не знайдена"
    exit 1
fi

# Перевірка git статусу
echo ""
echo "📊 Git статус:"
git status --porcelain

if [ -z "$(git status --porcelain)" ]; then
    echo "✅ Робоча директорія чиста"
else
    echo "⚠️  Є незбережені зміни"
fi

echo ""
echo "🔗 Віддалений репозиторій:"
git remote -v

echo ""
echo "📋 Останні коміти:"
git log --oneline -3

echo ""
echo "🚀 Рекомендації для виправлення 404:"
echo ""
echo "1. Перейдіть на: https://github.com/vsarana04/roofmaster-belgium/settings/pages"
echo "2. Налаштуйте:"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main"
echo "   - Folder: / (root)"
echo "3. Натисніть Save"
echo "4. Зачекайте 5-10 хвилин"
echo ""
echo "🌐 Після налаштування сайт буде доступний за адресою:"
echo "   https://vsarana04.github.io/roofmaster-belgium"
echo ""
echo "📱 Для тестування відкрийте посилання на мобільному пристрої"
echo ""
echo "🔄 Якщо потрібно перезавантажити код:"
echo "   git add ."
echo "   git commit -m 'Update: ensure all files are uploaded'"
echo "   git push origin main"
