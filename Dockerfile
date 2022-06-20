FROM node:14.15.0-alpine3.11 as build
WORKDIR /app
COPY package.json /app
RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build


FROM nginx as runtime
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/case-study /usr/share/nginx/html

EXPOSE 8081
