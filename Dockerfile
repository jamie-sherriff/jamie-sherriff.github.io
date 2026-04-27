# Stage 1: Build environment
FROM node:20 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Export artifacts
FROM scratch AS export
COPY --from=builder /usr/src/app/index.html /
COPY --from=builder /usr/src/app/favicon.ico /
COPY --from=builder /usr/src/app/js/ /js/
COPY --from=builder /usr/src/app/css/ /css/
COPY --from=builder /usr/src/app/images/ /images/
COPY --from=builder /usr/src/app/libs/ /libs/
COPY --from=builder /usr/src/app/static/ /static/


