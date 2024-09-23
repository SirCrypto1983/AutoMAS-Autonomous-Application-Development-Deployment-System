
# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to start the application
CMD ["node", "app.js"]
