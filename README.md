# localDate.js #

An efficient and configurable timezone- and DST-aware JavaScript time/date formatter with realtime updating (e.g. clock) functionality

---

## Documentation ##

localDate.js can be used on any text-enabled element, e.g. `<p> <div> <span> <td>` with `class="localDate"` (by default) or the class name passed into the `localDate.init()` function.

### Example: ###
`<span class="localDate" data-source="render" data-format="$h:$M:$S$A $n-$d-$Y" data-locale="local">
	Oops! Normally, you would see your local time here, but you've got JavaScript disabled!
</span>`

The above `<span>` will display something akin to `4:02:42PM 7-8-2014`, unless JavaScript is disabled, in which case the user will see the text contained within the `<span>`. The values you see here for `data-locale`, `data-source`, and `data-format` are the defaults, so if you leave any of these out, the values I used in this example are what you'll get.

### Demo: ###
[http://bronstrup.com/demos/localDate.js/index.html] http://bronstrup.com/demos/localDate.js/index.html "localDate.js Demo"

### Compatibility: ###
Tested and appears to be working in reasonably-recent versions of Safari, Chrome, and Firefox, as well as IE5 and newer (with fixes for IE5-8) and iOS and Android browsers

### data-source reference: ###
+ **render** - Render the time once, on `init()`
+ **current** - Render the time on `init()` and update once per second
+ **realtime** - Render the time on `init()` and update 30 times per second
+ **UNIX timestamp** - A specific UNIX timestamp you wish to base the displayed time from; supports milliseconds as a decimal part and renders once on `init()`

### data-format reference: ###
All format tokens are escaped with a `$`. If you need to use a `$` in your format string, it must also be escaped (e.g. `$$`). Any $-escaped tokens that do not appear in the list below will remain unmodified (e.g. `$4` will remain `$4`)
#### Hour: ####
+ **$h** - 12-hour format (e.g. `4`)
+ **$H** - 12-hour format with leading zero (e.g. `04`)
+ **$t** - 24-hour format (e.g. `4` or `16`)
+ **$T** - 24-hour format with leading zero (e.g. `04` or `16`)
#### Minute: ####
+ **$m** - Minute without leading zero (e.g. `2`)
+ **$M** - Minute with leading zero (e.g. `02` or `12`)
#### Second: ####
+ **$s** - Second without leading zero (e.g. `2`)
+ **$S** - Second with leading zero (e.g. `02` or `12`)
+ **$z** - Milliseconds without leading zeroes (e.g. `2` or `46`)
+ **$Z** - Milliseconds with leading zeroes (e.g. `002` or `046` or `802`)
#### AM/PM: ####
+ **$a** - Lowercase `am` or `pm`
+ **$A** - Uppercase `AM` or `PM`
#### Day: ####
+ **$d** - Day of month (e.g. `8`)
+ **$D** - Day of month with leading zero (e.g. `08` or `18`)
+ **$w** - Shorthand day of week (e.g. `Mon` or `Tue`)
+ **$W** - Longhand day of week (e.g. `Monday` or `Tuesday`)
#### Month: ####
+ **$c** - Shorthand month name (e.g. `Jan` or `Feb`)
+ **$C** - Longhand month name (e.g. `January` or `February`)
+ **$n** - Month number (e.g. `4`)
+ **$C** - Month number with leading zero (e.g. `04` or `10`)
#### Year: ####
+ **$y** - 2-digit year (e.g. `14`)
+ **$Y** - 4-digit year (e.g. `2014`)

### data-locale reference: ###
+ **local** - The user's local time, regardless of locale
or, one of the following timezones: (invalid timezones will default to `UTC`)
+ **Etc/GMT-12**
+ **Etc/GMT-11**
+ **Pacific/Midway**
+ **America/Adak**
+ **America/Hawaii**
+ **America/Anchorage**
+ **Pacific/Gambier**
+ **America/Dawson_Creek**
+ **America/Ensenada**
+ **America/Los_Angeles**
+ **America/Chihuahua**
+ **America/Denver**
+ **America/Arizona**
+ **America/Belize**
+ **America/Cancun**
+ **America/Chicago**
+ **America/Saskatchewan**
+ **Chile/EasterIsland**
+ **America/Bogota**
+ **America/Havana**
+ **America/New_York**
+ **America/Caracas**
+ **America/Campo_Grande**
+ **America/Glace_Bay**
+ **America/Goose_Bay**
+ **America/Santiago**
+ **America/La_Paz**
+ **America/Argentina/Buenos_Aires**
+ **America/Montevideo**
+ **America/Araguaina**
+ **America/Godthab**
+ **America/Miquelon**
+ **America/Sao_Paulo**
+ **America/St_Johns**
+ **America/Noronha**
+ **America/Cape_Verde**
+ **Europe/Belfast**
+ **Africa/Abidjan**
+ **Europe/Dublin**
+ **Europe/Lisbon**
+ **Eorupe/London**
+ **UTC**
+ **Africa/Algiers**
+ **Africa/Windhoek**
+ **Atlantic/Azores**
+ **Atlantic/Stanley**
+ **Europe/Amsterdam**
+ **Europe/Belgrade**
+ **Europe/Brussels**
+ **Africa/Cairo**
+ **Africa/Blantyre**
+ **Asia/Beirut**
+ **Asia/Damascus**
+ **Asia/Gaza**
+ **Asia/Jerusalem**
+ **Africa/Addis_Ababa**
+ **Africa/Nairobi**
+ **Asia/Riyadh89**
+ **Europe/Minsk**
+ **Asia/Tehran**
+ **Asia/Dubai**
+ **Asia/Yerevan**
+ **Europe/Moscow**
+ **Asia/Kabul**
+ **Asia/Tashkent**
+ **Asia/Kolkata**
+ **Asia/Katmandu**
+ **Asia/Dhaka**
+ **Asia/Yekaterinburg**
+ **Asia/Rangoon**
+ **Asia/Bangkok**
+ **Asia/Novosibirsk**
+ **Etc/GMT+8**
+ **Asia/Hong_Kong**
+ **Asia/Krasnoyarsk**
+ **Australia/Perth**
+ **Australia/Eucla**
+ **Asia/Irkutsk**
+ **Asia/Seoul**
+ **Asia/Tokyo**
+ **Australia/Adelaide**
+ **Australia/Darwin**
+ **Pacific/Marquesas**
+ **Etc/GMT+10**
+ **Australia/Brisbane**
+ **Australia/Hobart**
+ **Asia/Yakutsk**
+ **Australia/Lord_Howe**
+ **Asia/Vladivostok**
+ **Pacific/Norfolk**
+ **Etc/GMT+12**
+ **Asia/Anadyr**
+ **Asia/Magadan**
+ **Pacific/Auckland**
+ **Pacific/Chatham**
+ **Pacific/Tongatapu**
+ **Pacific/Kiritimati**
