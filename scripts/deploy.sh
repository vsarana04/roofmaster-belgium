#!/bin/bash

# 🚀 Скрипт для швидкого деплою на GitHub Pages

echo "🚀 Деплой RoofMaster Belgium на GitHub Pages..."

# Перевірка чи є зміни
if [ -z "$(git status --porcelain)" ]; then
    echo "❌ Немає змін для коміту"
    exit 1
fi

# Додавання всіх змін
echo "📁 Додавання файлів..."
git add .

# Запит на повідомлення коміту
echo "💬 Введіть повідомлення коміту (або натисніть Enter для стандартного):"
read -r commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Створення коміту
echo "💾 Створення коміту: $commit_message"
git commit -m "$commit_message"

# Відправка на GitHub
echo "🌐 Відправка на GitHub..."
git push origin main

echo "✅ Деплой завершено!"
echo "🔗 Сайт буде доступний за 2-5 хвилин на:"
echo "   https://YOUR_USERNAME.github.io/roofmaster-belgium"
echo ""
echo "📱 Для тестування відкрийте посилання на мобільному пристрої"
