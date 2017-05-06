# ISN rythm fighter

## Install

### Requierment

* php 7.0 (or newer)(and php7.0-xml)
* composer
* mySQL
* apache server (only on prod)

### How to

be sure to have ".env" config with your Database line 7 to 12

## Linux

When cloning the project don't forget to create the vendors (they are not versioned) do
`composer install` in the project folder

`php artisan key:generate` to create the app key

`php artisan migrate:install` to migrate the database (be sure to have the database, he won't create it)

`php artisan migrate`

In order to use laravel-mix, use `npm install` (`npm install --no-bin-links` for windows systems !) to install laravel Mix (for assets and scripts.)
more: ( https://laravel.com/docs/5.4/mix#running-mix )

Then, if you want to compile your assets, use `npm run production` (or `npm run dev` for a uncompressed version of assets files. or `npm run watch` to prevent doing it after every change you do)

you should be ready to go ^^ host it and try it

use `php artisan serve` to start it

## Windows

On Windows you should use [Laragon](https://laragon.org/) it contains composer and permit to host the site

To edit the .env.exemple you need to rename it but Windows might don't want to rename a file without a name, so you have to use the cmd `rename .env.exemple .env` in the folder

### Used

This project use [Laravel](https://laravel.com/) and [Phaser.js](http://phaser.io/)

###Issue
If npm dosnt want to do npm install you might check your node version with `node -v`
if you are'nt in 7.x.x you have to update node
I recommend you to use [nvm](https://github.com/creationix/nvm) (node version manager) [nvm-windows](https://github.com/coreybutler/nvm-windows)
install it and `nvm use 7` , now retry npm install and npm run dev
If it dosnt work check your composer.json

### Dev notes
## Mapping
The player one use QSD (ASD for qwerty keyboard)
The player two use LEFT DOWN RIGHT

p1_action is the current action of the player filled with 1,2,3
1 is for Q(A) / LEFT
2 is for S    / DOWN
3 is for D    / RIGHT
