FROM node:20.9.0-slim

# Set the working directory in the container
WORKDIR /app


# Create app group and user for running the application
RUN groupadd -r app && useradd -m -r -g app app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Create the uploads directory and set permissions
RUN mkdir /app/uploads 

# Change ownership of the entire /app directory recursively to the app user and group
RUN chown -R app:app /app

# Switch to the non-root user
USER app

# Copy the rest of your application source code
COPY . .

 
USER app

# Start the application
CMD ["npm", "start"]
