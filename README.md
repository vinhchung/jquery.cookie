Lightweight jQuery plugin for manipulating cookie
=====================================================
This plugin will make retrieving cookie value easier with the support of multi values cookie set by ASP.NET. 
Multi values are store in the following format

`key1=value1&key2=value2&key3=value3`

How to install?
---------------
Reference jquery.cookie.js after jQuery. 

How to use?
-----------

### Reading cookie

Get a cookie value

`$.cookieHelper.get('myCookie').value;`

Get a cookie value from a multi values cookie 

`$.cookieHelper.get('myCookie').attr('key1');`

### Writing cookie

Create a session cookie

`$.cookieHelper.set('myCookie', 'myValue', [options]);`

Create a cookie expires in 2 days 

`$.cookieHelper.set('myCookie', 'myValue', {expires: 2, path:'/', domain: 'mydomain.com', secure: 'false'});`

Defaults options
----------------

`{expires: -1, path:'', domain:''}`

