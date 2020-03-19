FROM node:lts-alpine

RUN npm config set unsafe-perm true

RUN ls -l

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory

WORKDIR /app
RUN ls -l
# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./
# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . ./
RUN ls -l
# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
