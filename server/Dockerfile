FROM node:20-alpine

WORKDIR /app

# Копируем package файлы
COPY package*.json ./
RUN npm ci --only=production

# Копируем исходный код
COPY . .

# Создаем директорию для миграций
RUN mkdir -p /app/db/migrations

# Копируем и делаем исполняемым entrypoint скрипт
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 5001

# Запускаем через entrypoint скрипт (автоматически выполнит миграции)
ENTRYPOINT ["/app/entrypoint.sh"]


