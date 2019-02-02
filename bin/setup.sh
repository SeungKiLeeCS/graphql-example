#!/bin/sh

. bin/console.sh

info "Building services"
docker-compose up --no-start
info "Starting postgres"
docker-compose start postgres
sleep 3
info "Installing npm packages"
yarn install
info "Running migrations"
docker-compose run server yarn knex migrate:latest
info "Running seeds"
docker-compose run server yarn knex seed:run
