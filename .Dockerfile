from node:jod-bullseye

workdir /data

copy . .

ENTRYPOINT ["npm", "run", "dev", "--", "--port", "8888", "--host"]