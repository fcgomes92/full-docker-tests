FROM node:10-alpine
EXPOSE 3000 9229

WORKDIR /home/app

ENV NODE_VALUE=production

COPY package.json yarn.lock ./
COPY . .

RUN yarn  --frozen-lockfile --no-cache ---force --production
RUN yarn build --production

CMD ["yarn", "run", "start:prod"]