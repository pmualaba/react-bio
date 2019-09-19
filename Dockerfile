############################################################
# Dockerfile
# Nodejs 11.x with pm2 Based on Alpine
#
# cd .
# docker build -t pluss/nodejs-grpc:11.9.0 .
# docker login -u pluss -p ...
# docker push pluss/nodejs-grpc:11.9.0
############################################################


FROM keymetrics/pm2:latest-alpine
MAINTAINER Pluss

RUN apk add --update python
RUN apk add --update libc6-compat
RUN apk add --no-cache make gcc g++ python

RUN apk add --update wget git \
 && apk add --no-cache openssl \
 && wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-alpine-linux-amd64-v0.6.1.tar.gz \
 && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-v0.6.1.tar.gz \
 && rm dockerize-alpine-linux-amd64-v0.6.1.tar.gz \
 && apk del wget \
 && rm /var/cache/apk/* \
 && npm install grpc \
 && npm rebuild grpc --target=11.9.0 --target_arch=x64 --target_platform=linux --target_libc=musl --build-from-source \
 && npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && npm config set "//npm.fontawesome.com/:_authToken" C178B488-6CED-410E-A81E-13A95E51B45E
