FROM node:24-alpine

WORKDIR /app

# Dependências
COPY package*.json ./
RUN npm install

# Cópia da aplicação
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]