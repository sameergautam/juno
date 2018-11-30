FROM electronuserland/builder:wine

WORKDIR /opt/juno
COPY . .
RUN npm install
RUN npm run compile-win