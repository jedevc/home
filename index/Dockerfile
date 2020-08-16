FROM debian:buster

RUN apt-get update && \
    apt-get install -y curl wget

RUN curl -s https://api.github.com/repos/gohugoio/hugo/releases/latest \
    | grep browser_download_url \
    | grep Linux-64bit.deb \
    | grep extended \
    | cut -d '"' -f 4 \
    | wget -i - && \
    dpkg -i *.deb && \
    rm *.deb

WORKDIR /usr/src/site/
COPY . .
RUN hugo

FROM nginx

COPY --from=0 /usr/src/site/public/ /usr/share/nginx/html/
