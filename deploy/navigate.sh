#!/bin/bash

# Check if an argument was received
if [ "$#" -ne 1 ]; then
    echo "ERROR: You must provide one of the following arguments: start, stop, update or help."
    exit 1
fi

bold=$(tput bold)
normal=$(tput sgr0)

# Get the argument
option="$1"

case "$option" in
    start)
        echo "Starting Navigate"
        docker compose -f ~/navigate/docker-compose.yml --env-file .env up -d
        ;;
    stop)
        echo "Stoping Navigate"
        docker compose -f ~/navigate/docker-compose.yml --env-file .env down
        ;;
    update)
        echo "Updating Navigate"
        docker compose -f ~/navigate/docker-compose.yml --env-file .env down
        docker rmi noirlab/gpp-nav-configs:latest noirlab/gpp-nav:latest
        docker compose -f ~/navigate/docker-compose.yml --env-file .env up -d
        ;;
    help)
        echo "To run Navigate you should provide a valid agument"
        echo "Possible argument options are 'start', 'stop', 'update' and 'help'"
        echo -e "  ${bold}start${normal}: Will start Navigate containers"
        echo -e "  ${bold}stop${normal}: Will stop Navigate containers"
        echo -e "  ${bold}update${normal}: Will stop and remove navigate containers, pull the latest version for each docker image and recreate the containers"
        echo -e "  ${bold}help${normal}: Will show this message"
        ;;
    *)
        echo "Error: Invalid argument, use 'help' command for instructions."
        exit 1
        ;;
esac