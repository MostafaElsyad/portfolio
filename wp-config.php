<?php
define( 'WP_CACHE', true ); // Added by WP Rocket

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'my portfolio' );

/** Database username */
define( 'DB_USER', 'Mostafa Ahmed' );

/** Database password */
define( 'DB_PASSWORD', '[f@8Ywd*(6U4U4d' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5QWg 7w&)aIom,@p6R O89-_6feSo;;7FVn3`A:X=H$8Qx9=FB(hPet3`pn`Up2Z' );
define( 'SECURE_AUTH_KEY',  ';kMXbT#eRT&L4R`$?^Ie~*|xd`&GMlD&pV/-~_?9PUu^ta)l.=L>j!$mqBe,OH?8' );
define( 'LOGGED_IN_KEY',    ',<jE#Iu J/q^q$H`%AdGoHK%3[h/XW<a!QKfi`aQ#:`4-h$)P;H&CD`_T`?$W%,J' );
define( 'NONCE_KEY',        '7PHK+{HBfjIC74R90cJ8N42Kf8Opc8#p$4b==B8d(hzTxki$5?h2Ro)q)}}Symvq' );
define( 'AUTH_SALT',        'Ui,#P06?g:eX02$Y0goba<tUdyeq]8JUyL</e;rH2od;pJEt#TBE &xakl|m:qc<' );
define( 'SECURE_AUTH_SALT', '6p GU}aun18eXDL{D^c+5N~4,]F@eaZ%|EF5QD[9$*@smx%7#$gX38V3rm07=n,Q' );
define( 'LOGGED_IN_SALT',   'gMPF6[E[h=,EqC32MIv_Ft}}lp8!Q}eWNc`c2G,C}#|3$4$CmpY:jN?`K8GFvCE%' );
define( 'NONCE_SALT',       '8AE6/d8Z|edllq@T:Uq!Tb;xw2qopoWXQMs&ekF5XMgj6#x(+ek+H;d]|)8|t$U!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
