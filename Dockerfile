FROM node:14

WORKDIR /app
COPY src/ /qpp
CMD npm install