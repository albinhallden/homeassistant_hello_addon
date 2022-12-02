FROM node:18-alpine

COPY --chown=node:node \
  index.js \
  ./
USER node

CMD [ "node", "./index.js" ]