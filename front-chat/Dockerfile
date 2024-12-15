# Stage

FROM node:18 as build 
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


#Stage : erver react app

FROM amd64/nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]