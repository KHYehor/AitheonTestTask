FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install
# Some troubles with this module
# Not time to find out reason
RUN rm -rf node_modules/bcrypt
RUN npm install bcrypt
RUN npm run build
ENV HOST '127.0.0.1'
ENV PORT 3000
ENV SALT 10
ENV MONGODBURI 'mongodb+srv://TestUser:TestPasswords@cluster0.kwzab.mongodb.net/TestDB?retryWrites=true&w=majority'
EXPOSE 3000
# Start project via script
ENTRYPOINT ["node", "out/"]
