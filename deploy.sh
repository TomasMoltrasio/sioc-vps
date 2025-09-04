#!/bin/bash
# deploy.sh

echo "Actualizando código..."
git pull

echo "Reconstruyendo contenedores..."
docker compose down
docker compose build --no-cache
docker compose up -d

echo "Deploy completado!"