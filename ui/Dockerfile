# build environment
FROM node:12.2.0-alpine
WORKDIR '/app'

#TODO maybe remove?
# ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json ./
RUN npm install --silent

#TODO maybe remove?
# RUN npm install react-scripts@3.3.0 -g --silent
COPY . .
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine

EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html

#TODO maybe remove?
# CMD ["nginx", "-g", "daemon off;"]