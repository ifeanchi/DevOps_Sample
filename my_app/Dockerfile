
#Stage 1
FROM node:alpine3.16

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

COPY . .

EXPOSE 5000

CMD ["npm", "start"]