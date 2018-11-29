FROM amazonlinux:2

RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash -
RUN yum install -y nodejs

WORKDIR /opt/juno
COPY . .
RUN npm install
RUN npm run compile-mac