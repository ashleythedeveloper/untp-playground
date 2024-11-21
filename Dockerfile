FROM node:20.12.2-alpine

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the application
COPY . .

EXPOSE 3000

# Start development server
CMD ["yarn", "dev"] 