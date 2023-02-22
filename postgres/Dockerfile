FROM postgres:15.2
COPY . .
ENTRYPOINT docker-entrypoint.sh -c 'shared_buffers=256MB' -c 'max_connections=200'