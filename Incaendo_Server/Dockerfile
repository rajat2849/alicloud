FROM  node:12.22.9 as Incaendo_Server
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json . 
RUN npm install 
COPY . . 
# RUN npm run build

CMD ["sh", "-c", "npm start"]

# To build the image
# docker build -t workshop:latest .

# To create the container
# docker run -it -p 8080:80 workshop:latest