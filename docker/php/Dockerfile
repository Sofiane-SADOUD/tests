FROM php:7.1.2-fpm

#Adding PDO / mysqli
RUN docker-php-ext-install pdo_mysql mysqli mbstring

#Xdebug -- Not in prod... ofc
RUN yes | pecl install xdebug \
    && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_autostart=off" >> /usr/local/etc/php/conf.d/xdebug.ini

#Installing zip extension
RUN apt-get update && apt-get install -y zlib1g-dev \
    && docker-php-ext-install zip

# composer
RUN apt-get update && apt-get install -y git
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --install-dir=/usr/bin --filename=composer \
    && php -r "unlink('composer-setup.php');"