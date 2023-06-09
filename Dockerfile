# syntax=docker/dockerfile:1
   
FROM node:20-alpine
WORKDIR /dockerapp
COPY . .
CMD ["node", "kitchen.js"]
EXPOSE 4100