# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Install serve to serve the application
RUN npm install -g serve

# Set the command to serve the application
CMD ["serve", "-s", "dist", "-l", "3000"]

# Expose the port the app runs on
EXPOSE 3000
