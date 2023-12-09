FROM node:20.9.0-slim

# Set working directory
WORKDIR /app 

# Argument for environment (with a default value)
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Install dependencies
COPY package*.json ./
RUN if [ "$NODE_ENV" = "development" ]; then \
        npm install; \
    else \
        npm install --only=production; \
    fi

# Change permissions for the .cache directory
RUN chmod -R 777 node_modules/.cache/


# Copy app source
COPY . .

# Build app for production
RUN if [ "$NODE_ENV" = "production" ]; then \
        npm run build; \
    fi

# Install Express server for serving the build in production
RUN if [ "$NODE_ENV" = "production" ]; then \
        npm install express; \
    fi

# Copy express server script
COPY server.js ./

# Start command
CMD if [ "$NODE_ENV" = "production" ]; then \
        node server.js; \
    else \
        npm start; \
    fi
