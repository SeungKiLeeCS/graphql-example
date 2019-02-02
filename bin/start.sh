#!/bin/sh

. bin/console.sh

info "Starting postgres"
docker-compose start postgres
info "Starting server"
docker-compose start server
docker-compose logs --follow server
