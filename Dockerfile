# Use an official Node runtime as a parent image
FROM node:18

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

# Expose the port the app runs on
EXPOSE 4200

# Serve the app
CMD ["ng", "serve", "--host", "0.0.0.0"]
