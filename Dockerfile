FROM ruby:alpine3.6

RUN apk update \
    && apk add postgresql-dev alpine-sdk

RUN mkdir -p /usr/src/app/
COPY ./Gemfile /usr/src/app/
COPY ./secrets.yml /usr/src/app/
WORKDIR /usr/src/app

RUN cd /usr/src/app \
  && bundle install --without development test

VOLUME /usr/src/app
VOLUME ./api.rb
ENV PORT="4567" HOST="0.0.0.0" ENV="development"

CMD cd /usr/src/app \
  && bundle update \
  && ruby api.rb -p $PORT -o $HOST -e $ENV
