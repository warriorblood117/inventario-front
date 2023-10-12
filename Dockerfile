# Use an official Node runtime as a parent image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Build the Angular app
RUN ng build --prod

# Use Nginx as a web server
FROM nginx:1.21

# Copy the built Angular app from the previous stage
COPY --from=build /usr/src/app/dist/* /usr/share/nginx/html/

