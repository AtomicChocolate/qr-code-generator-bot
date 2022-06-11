FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build app
COPY tsconfig.json ./
ADD src ./src
RUN npm run build

# Cache app source
COPY . .

# Start app
CMD [ "npm", "start" ]