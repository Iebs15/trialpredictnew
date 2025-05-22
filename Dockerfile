FROM node:18-alpine as builder

WORKDIR /app

COPY package.json yarn.lock turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN yarn install --frozen-lockfile
RUN yarn build:platform

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/apps/platform/bundle-platform ./bundle-platform

RUN yarn global add serve

EXPOSE 4000

CMD ["serve", "-s", "bundle-platform", "-l", "4000"]
