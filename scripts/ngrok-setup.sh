#!/bin/bash

# 🌐 Скрипт для створення публічного туннелю через ngrok

echo "🌐 Налаштування публічного доступу через ngrok..."

# Перевірка чи встановлений ngrok
if ! command -v ngrok &> /dev/null; then
    echo "❌ ngrok не встановлений"
    echo "📥 Встановлення ngrok..."
    
    # Для macOS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install ngrok
    else
        echo "❌ Встановіть ngrok вручну з https://ngrok.com/download"
        exit 1
    fi
fi

# Перевірка чи запущений локальний сервер
if ! curl -s http://localhost:8000 > /dev/null; then
    echo "🚀 Запуск локального сервера..."
    python3 -m http.server 8000 &
    SERVER_PID=$!
    sleep 2
fi

# Запуск ngrok
echo "🌐 Запуск ngrok туннелю..."
echo "📱 Ваш сайт буде доступний за публічним URL"
echo "⏳ Зачекайте 5 секунд..."

ngrok http 8000 --log=stdout
