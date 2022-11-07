FROM node:12.22.9 as Incaendo_Client
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json . 
RUN npm install 
COPY . . 
RUN npm run build


FROM nginx:alpine
COPY --from=Incaendo_Client /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# To build the image
# docker build -t workshop:latest .

# To create the container
# docker run -it -p 8080:80 workshop:latest