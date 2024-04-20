FROM node:18-alpine

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

WORKDIR /srv/client

RUN npm config set fetch-retry-mintimeout 20000

RUN npm config set fetch-retry-maxtimeout 120000

RUN npm install --global pm2

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install --force && npm cache clean --force

COPY ./ ./

RUN npm run build

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]