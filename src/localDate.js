/**
 * localDate.js
 * An efficient and configurable timezone- and DST-aware JavaScript time/date formatter with realtime updating (e.g. clock) functionality
 *
 * Created by Keith Bronstrup on 7/8/14.
 *
 * Release 1.0.1
 * Release date 7/8/14
 *
 * For documentation, see included README.md
 */
var localDate = {
	/**
	 * Initialize internal variables for valid sources, day/month names, and timezone data
	 *
	 * Timezone data sourced from https://support.sumologic.com/entries/23097313-JSON-timeZone-Values-and-Associated-GMT-Offsets
	 * DST data sourced from http://support.microsoft.com/kb/982987
	 */
	"sources": ["render", "current", "realtime"],
	"daysFull": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	"daysAbbr": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	"monthsFull": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	"monthsAbbr": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	"tz": {
		"Etc/GMT-12": {
			"offset": -12,
			"DST": false
		},
		"Etc/GMT-11": {
			"offset": -11,
			"DST": false
		},
		"Pacific/Midway": {
			"offset": -11,
			"DST": true
		},
		"America/Adak": {
			"offset": -10,
			"DST": true
		},
		"America/Hawaii": {
			"offset": -10,
			"DST": false
		},
		"America/Anchorage": {
			"offset": -9,
			"DST": true
		},
		"Pacific/Gambier": {
			"offset": -9,
			"DST": true
		},
		"America/Dawson_Creek": {
			"offset": -8,
			"DST": true
		},
		"America/Ensenada": {
			"offset": -8,
			"DST": true
		},
		"America/Los_Angeles": {
			"offset": -8,
			"DST": true
		},
		"America/Chihuahua": {
			"offset": -7,
			"DST": true
		},
		"America/Denver": {
			"offset": -7,
			"DST": true
		},
		"America/Arizona": {
			"offset": -7,
			"DST": false
		},
		"America/Belize": {
			"offset": -6,
			"DST": true
		},
		"America/Cancun": {
			"offset": -6,
			"DST": true
		},
		"America/Chicago": {
			"offset": -6,
			"DST": true
		},
		"America/Saskatchewan": {
			"offset": -6,
			"DST": false
		},
		"Chile/EasterIsland": {
			"offset": -6,
			"DST": false
		},
		"America/Bogota": {
			"offset": -5,
			"DST": false
		},
		"America/Havana": {
			"offset": -5,
			"DST": true
		},
		"America/New_York": {
			"offset": -5,
			"DST": true
		},
		"America/Caracas": {
			"offset": -4.5,
			"DST": false
		},
		"America/Campo_Grande": {
			"offset": -4,
			"DST": true
		},
		"America/Glace_Bay": {
			"offset": -4,
			"DST": true
		},
		"America/Goose_Bay": {
			"offset": -4,
			"DST": true
		},
		"America/Santiago": {
			"offset": -4,
			"DST": true
		},
		"America/La_Paz": {
			"offset": -4,
			"DST": false
		},
		"America/Argentina/Buenos_Aires": {
			"offset": -3,
			"DST": false
		},
		"America/Montevideo": {
			"offset": -3,
			"DST": true
		},
		"America/Araguaina": {
			"offset": -3,
			"DST": true
		},
		"America/Godthab": {
			"offset": -3,
			"DST": true
		},
		"America/Miquelon": {
			"offset": -3,
			"DST": true
		},
		"America/Sao_Paulo": {
			"offset": -3,
			"DST": true
		},
		"America/St_Johns": {
			"offset": -3.5,
			"DST": true
		},
		"America/Noronha": {
			"offset": -2,
			"DST": true
		},
		"Atlantic/Cape_Verde": {
			"offset": -1,
			"DST": false
		},
		"Europe/Belfast": {
			"offset": 0,
			"DST": true
		},
		"Africa/Abidjan": {
			"offset": 0,
			"DST": true
		},
		"Europe/Dublin": {
			"offset": 0,
			"DST": true
		},
		"Europe/Lisbon": {
			"offset": 0,
			"DST": true
		},
		"Europe/London": {
			"offset": 0,
			"DST": true
		},
		"UTC": {
			"offset": 0,
			"DST": false
		},
		"Africa/Algiers": {
			"offset": 1,
			"DST": true
		},
		"Africa/Windhoek": {
			"offset": 1,
			"DST": false
		},
		"Atlantic/Azores": {
			"offset": 1,
			"DST": true
		},
		"Atlantic/Stanley": {
			"offset": 1,
			"DST": true
		},
		"Europe/Amsterdam": {
			"offset": 1,
			"DST": true
		},
		"Europe/Belgrade": {
			"offset": 1,
			"DST": true
		},
		"Europe/Brussels": {
			"offset": 1,
			"DST": true
		},
		"Africa/Cairo": {
			"offset": 2,
			"DST": true
		},
		"Africa/Blantyre": {
			"offset": 2,
			"DST": true
		},
		"Asia/Beirut": {
			"offset": 2,
			"DST": true
		},
		"Asia/Damascus": {
			"offset": 2,
			"DST": true
		},
		"Asia/Gaza": {
			"offset": 2,
			"DST": true
		},
		"Asia/Jerusalem": {
			"offset": 2,
			"DST": true
		},
		"Africa/Addis_Ababa": {
			"offset": 3,
			"DST": true
		},
		"Africa/Nairobi": {
			"offset": 3,
			"DST": false
		},
		"Asia/Riyadh89": {
			"offset": 3,
			"DST": true
		},
		"Europe/Minsk": {
			"offset": 3,
			"DST": true
		},
		"Asia/Tehran": {
			"offset": 3.5,
			"DST": true
		},
		"Asia/Dubai": {
			"offset": 4,
			"DST": true
		},
		"Asia/Yerevan": {
			"offset": 4,
			"DST": true
		},
		"Europe/Moscow": {
			"offset": 4,
			"DST": true
		},
		"Asia/Kabul": {
			"offset": 4.5,
			"DST": false
		},
		"Asia/Tashkent": {
			"offset": 5,
			"DST": false
		},
		"Asia/Kolkata": {
			"offset": 5.5,
			"DST": false
		},
		"Asia/Katmandu": {
			"offset": 5.75,
			"DST": true
		},
		"Asia/Dhaka": {
			"offset": 6,
			"DST": false
		},
		"Asia/Yekaterinburg": {
			"offset": 6,
			"DST": true
		},
		"Asia/Rangoon": {
			"offset": 6.5,
			"DST": false
		},
		"Asia/Bangkok": {
			"offset": 7,
			"DST": false
		},
		"Asia/Novosibirsk": {
			"offset": 7,
			"DST": true
		},
		"Etc/GMT+8": {
			"offset": 8,
			"DST": false
		},
		"Asia/Hong_Kong": {
			"offset": 8,
			"DST": false
		},
		"Asia/Krasnoyarsk": {
			"offset": 8,
			"DST": true
		},
		"Australia/Perth": {
			"offset": 8,
			"DST": false
		},
		"Australia/Eucla": {
			"offset": 8.75,
			"DST": true
		},
		"Asia/Irkutsk": {
			"offset": 9,
			"DST": true
		},
		"Asia/Seoul": {
			"offset": 9,
			"DST": false
		},
		"Asia/Tokyo": {
			"offset": 9,
			"DST": false
		},
		"Australia/Adelaide": {
			"offset": 9.5,
			"DST": true
		},
		"Australia/Darwin": {
			"offset": 9.5,
			"DST": false
		},
		"Pacific/Marquesas": {
			"offset": 9.5,
			"DST": true
		},
		"Etc/GMT+10": {
			"offset": 10,
			"DST": false
		},
		"Australia/Brisbane": {
			"offset": 10,
			"DST": false
		},
		"Australia/Hobart": {
			"offset": 10,
			"DST": true
		},
		"Asia/Yakutsk": {
			"offset": 10,
			"DST": true
		},
		"Australia/Lord_Howe": {
			"offset": 10.5,
			"DST": true
		},
		"Asia/Vladivostok": {
			"offset": 11,
			"DST": true
		},
		"Pacific/Norfolk": {
			"offset": 11.5,
			"DST": true
		},
		"Etc/GMT+12": {
			"offset": 12,
			"DST": false
		},
		"Asia/Anadyr": {
			"offset": 12,
			"DST": true
		},
		"Asia/Magadan": {
			"offset": 12,
			"DST": true
		},
		"Pacific/Auckland": {
			"offset": 12,
			"DST": true
		},
		"Pacific/Chatham": {
			"offset": 12.75,
			"DST": true
		},
		"Pacific/Tongatapu": {
			"offset": 13,
			"DST": true
		},
		"Pacific/Kiritimati": {
			"offset": 14,
			"DST": true
		}
	},

	/**
	 * Initializes a group of localDate elements based on CSS class selector
	 *
	 * @param selector {string} The CSS selector to look for
	 */
	"init": function(selector) {
		selector = selector ? selector : ".localDate";

		// Test fixes for broken browsers
		if (typeof([].indexOf) == "undefined") this.indexOfFix();
		if (typeof(document.querySelectorAll) == "undefined") this.querySelectorAllFix();

		var i, el;
		var els = document.querySelectorAll(selector);

		if (!els.length) return;

		// Loop through nodes
		for (i in els) {
			el = els[i];

			// Ensure we're actually looking at a DOM node (thanks, IE)
			if (typeof(el)           == "object"
			 && typeof(el.tagName)   != "undefined"
			 && typeof(el.nodeName)  != "undefined"
			 && typeof(el.className) != "undefined") {
				this.initSingle(el);
			}
		}
	},

	/**
	 * Initializes a single localDate element
	 *
	 * @param el {DOMNode} The DOM node or element to initialize
	 */
	"initSingle": function(el) {
		el = el ? el : false;

		// Ensure we're actually looking at a DOM node
		if (typeof(el)           != "object"
		 || typeof(el.tagName)   == "undefined"
		 || typeof(el.nodeName)  == "undefined"
		 || typeof(el.className) == "undefined") return;

		// Validate and fill in missing defaults
		if (isNaN(el.getAttribute("data-source"))
		 && !(this.sources.indexOf(el.getAttribute("data-source")) + 1)) {
			el.setAttribute("data-source", "render");
		}
		if (!el.getAttribute("data-format")) {
			el.setAttribute("data-format", "$h:$M:$S$A $n-$d-$Y");
		}
		if (el.getAttribute("data-locale") != "local"
		 && !this.tz.hasOwnProperty(el.getAttribute("data-locale"))) {
			if (el.getAttribute("data-locale") === null) {
				el.setAttribute("data-locale", "local");
			} else {
				el.setAttribute("data-locale", "UTC");
			}
		}

		// Set refresh timeout
		var refresh = 0;
		switch (el.getAttribute("data-source")) {
			case "current":
				refresh = 1000;
				break;
			case "realtime":
				refresh = 33;
				break;
		}

		// Start timer or perform single render
		this.render(el, refresh);
	},

	/**
	 * Renders the element's HTML output
	 *
	 * @param el {DOMNode} The DOM node or element to initialize
	 * @param refresh (int) How often (in ms) to refresh this element; 0 for never
	 */
	"render": function(el, refresh) {
		el      = el      ? el      : false;
		refresh = refresh ? refresh : 0;

		if (!el) return;

		// Ensure we're actually looking at a DOM node
		if (typeof(el)           != "object"
		 || typeof(el.tagName)   == "undefined"
		 || typeof(el.nodeName)  == "undefined"
		 || typeof(el.className) == "undefined") return;

		var localTime;
		var time = el.getAttribute("data-source"); // Get time from element

		// If not set or not a number, temporarily set time to null, otherwise, convert to seconds
		if (typeof(time) == "undefined"
		 || isNaN(time)) {
			time = null;
		} else {
			time = Math.round(time * 1000);
		}

		// If a refresh time is specified, start that timer now
		if (refresh) setTimeout(function(){localDate.render(el, refresh);}, refresh);

		// If time is null, use current time, otherwise, use specified time
		if (time === null) {
			localTime = new Date();
		} else {
			localTime = new Date(time);
		}

		// If local, fetch local time; else, fetch UTC and adjust for TZ (use UTC for invalid TZ) and DST
		if (el.getAttribute("data-locale") == "local") {
			time = localTime.getTime() - (localTime.getTimezoneOffset() * 60000);
		} else {
			if (!this.tz.hasOwnProperty(el.getAttribute("data-locale"))) el.setAttribute("data-locale", "UTC");
			time = localTime.getTime() + (this.tz[el.getAttribute("data-locale")].offset * 3600000);

			// If TZ observes DST, determine whether DST is in effect
			// BUG: Assumes local TZ observes DST and does so on the same dates as the selected TZ; fix below
			// TODO: Find a good source for DST start/end dates per-TZ, update TZ table, and rewrite this block to honor those dates
			if (this.tz[el.getAttribute("data-locale")].DST) {
				var nowOffset = localTime.getTimezoneOffset();
				localTime.setDate(0);
				if (nowOffset == localTime.getTimezoneOffset()) time += 3600000;
			}
		}

		// Format time/date string
		el.innerHTML = el.getAttribute("data-format").replace(/\$./g, function(arg){return localDate.format(arg, time);});
	},

	/**
	 * Format's a given argument against a JavaScript timestamp
	 *
	 * @param arg {string} The $-escaped argument to evaluate
	 * @param time {int} The JavaScript timestamp to format against
	 * @returns {string}
	 */
	"format": function(arg, time) {
		var date = time ? new Date(time) : new Date();
		var hour, min, sec, ms, day, month, year;

		switch (arg) {
			// Hour:
			case "$h": // 12-hour format (e.g. 4)
			case "$H": // 12-hour format with leading zero (e.g. 04)
			case "$t": // 24-hour format (e.g. 4 or 16)
			case "$T": // 24-hour format with leading zero (e.g. 04 or 16)
				hour = date.getUTCHours();
				if (arg === "$h" || arg === "$H") {
					hour =  hour % 12;
					if (!hour) hour = 12;
				}
				if (hour < 10 && (arg === "$T" || arg === "$H")) {
					hour = "0"+hour;
				}
				return ""+hour;

			// Minute:
			case "$m": // Minute without leading zero (e.g. 2)
			case "$M": // Minute with leading zero (e.g. 02 or 12)
				min = date.getUTCMinutes();
				if (min < 10 && arg === "$M") {
					min = "0"+min;
				}
				return ""+min;

			// Second:
			case "$s": // Second without leading zero (e.g. 2)
			case "$S": // Second with leading zero (e.g. 02 or 12)
				sec = date.getUTCSeconds();
				if (sec < 10 && arg === "$S") {
					sec = "0"+sec;
				}
				return ""+sec;
			case "$z": // Milliseconds without leading zeroes (e.g. 2 or 46)
			case "$Z": // Milliseconds with leading zeroes (e.g. 002 or 046 or 802)
				ms = date.getUTCMilliseconds();
				if (arg === "$Z") {
					if (ms == 0) {
						ms = "000";
					} else if (ms < 10) {
						ms = "00"+ms;
					} else if (ms < 100) {
						ms = "0"+ms;
					}
				}
				return ""+ms;
			// AM/PM:
			case "$a": // Lowercase am or pm
				hour = date.getUTCHours();
				if (hour < 12) {
					return "am";
				}
				return "pm";
			case "$A": // Uppercase AM or PM
				hour = date.getUTCHours();
				if (hour < 12) {
					return "AM";
				}
				return "PM";

			// Day:
			case "$d": // Day of month (e.g. 8)
			case "$D": // Day of month with leading zero (e.g. 08 or 18)
				day = date.getUTCDate();
				if (day < 10 && arg === "$D") {
					day = "0"+day;
				}
				return ""+day;
			case "$w": // Shorthand day of week (e.g. Mon or Tue)
				return ""+this.daysAbbr[date.getUTCDay()];
			case "$W": // Longhand day of week (e.g. Monday or Tuesday)
				return ""+this.daysFull[date.getUTCDay()];

			// Month:
			case "$c": // Shorthand month name (e.g. Jan or Feb)
			case "$C": // Longhand month name (e.g. January or February)
			case "$n": // Month number (e.g. 4)
			case "$N": // Month number with leading zero (e.g. 04 or 10)
				month = date.getUTCMonth();
				if (arg === "$c") {
					month = this.monthsAbbr[month];
				} else if (arg === "$C") {
					month = this.monthsFull[month];
				} else {
					month++;
					if (month < 10 && arg === "$N") {
						month = "0"+month;
					}
				}
				return ""+month;

			// Year:
			case "$y": // 2-digit year (e.g. 14)
			case "$Y": // 4-digit year (e.g. 2014)
				year = date.getUTCFullYear();
				if (arg === "$y") {
					// Use floor and round here to avoid floating point rounding errors
					year = Math.round(((year / 100) - Math.floor(year / 100)).toFixed(2) * 100);
				}
				return ""+year;

			// Misc:
			case "$$": // Escaped Dollar sign
				return "$";
			default: // Unrecognized or unsupported argument
				return ""+arg;
		}
	},

	/**
	 * Fix missing Array.indexOf() in some cheap browsers
	 * Adapted from: http://stackoverflow.com/questions/1744310/how-to-fix-array-indexof-in-javascript-for-internet-explorer-browsers
	 */
	"indexOfFix": function() {
		Array.prototype.indexOf = function(obj, start) {
			for (var i = (start || 0), j = this.length; i < j; i++) {
				if (this[i] === obj) { return i; }
			}
			return -1;
		}
	},

	/**
	 * Fix missing document.querySelectorAll() in some cheap browsers
	 * Adapted from: http://www.codecouch.com/2012/05/adding-document-queryselectorall-support-to-ie-7/
	 */
	"querySelectorAllFix": function() {
		var d=document;
		var s=d.createStyleSheet();

		d.querySelectorAll = function(r, c, i, j, a) {
			a=d.all, c=[], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
			for (i=r.length; i--;) {
				s.addRule(r[i], 'k:v');
				for (j=a.length; j--;) a[j].currentStyle.k && c.push(a[j]);
				s.removeRule(0);
			}
			return c;
		}
	}
};