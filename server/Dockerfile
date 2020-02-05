FROM node:13.7.0

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# install and cache app dependencies
COPY package.json /app
RUN npm install

# copy app source code
COPY . /app

#Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]