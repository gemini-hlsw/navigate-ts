#!/usr/bin/env bash

set -e

# Check if Heroku CLI is installed
if ! command -v heroku &> /dev/null; then
    echo "Heroku CLI is not installed. Please install it first."
    exit 1
fi
# Check if HEROKU_API_KEY is set
if [ -z "$HEROKU_API_KEY" ]; then 
    echo "HEROKU_API_KEY is not set. Please set it in your environment."
    exit 1
fi
# Check if HEROKU_APP_NAME is set
if [ -z "$HEROKU_APP_NAME" ]; then
    echo "HEROKU_APP_NAME is not set. Please set it in your environment."
    exit 1
fi
# Check if REGISTRY_IMAGE is set
if [ -z "$REGISTRY_IMAGE" ]; then
    echo "REGISTRY_IMAGE is not set. Please set it in your environment."
    exit 1
fi

# Login to Heroku Container Registry
echo "Logging in to Heroku Container Registry..."
heroku container:login

echo "Pulling the Docker image from the registry..."
docker pull $REGISTRY_IMAGE

echo "Pushing the Docker image to Heroku..."
docker tag $REGISTRY_IMAGE registry.heroku.com/$HEROKU_APP_NAME/web
docker push registry.heroku.com/$HEROKU_APP_NAME/web

echo "Releasing the Docker image on Heroku..."
heroku container:release web -a $HEROKU_APP_NAME -v
