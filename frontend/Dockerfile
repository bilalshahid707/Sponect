FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* 
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile
COPY . .

CMD ["npm", "start"]

