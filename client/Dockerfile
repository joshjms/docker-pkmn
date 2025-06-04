FROM node:24-alpine3.21

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

ENV API_URL="http://localhost:5000/pkmn"

EXPOSE 3000
CMD ["npm", "run", "start"]
