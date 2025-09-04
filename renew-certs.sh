#!/bin/bash

# Script para renovar certificados SSL automáticamente
# Ejecutar una vez por mes

# Directorio del proyecto
cd /home/sioc-vps

# Renovar certificados
echo "$(date): Iniciando renovación de certificados SSL..."

# Intentar renovar todos los certificados
docker compose run --rm certbot renew --quiet

# Verificar si hubo cambios y recargar nginx
if [ $? -eq 0 ]; then
    echo "$(date): Renovación exitosa. Recargando nginx..."
    docker compose exec nginx nginx -s reload
    echo "$(date): Certificados renovados y nginx recargado correctamente."
else
    echo "$(date): Error en la renovación de certificados."
    exit 1
fi

# Log de finalización
echo "$(date): Script de renovación completado."