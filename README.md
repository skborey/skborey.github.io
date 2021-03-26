Web Foundamental [documents](https://developers.google.com/web)

Vector resource for UI/Dev [collections](https://dev.to/lukekyl/designers-take-free-vector-resources-for-devs-5fgp)

Design resource for UI/UX/Dev [collections](https://github.com/bradtraversy/design-resources-for-developers)

Tools for Designer [collections](https://digitalsynopsis.com/design/useful-tools-for-designers/)

<details><summary>Service Worker</summary>
<p>
  
</p>
>> Interest
</details>

<details><summary>SSL configuration</summary>
[Mozilla](https://ssl-config.mozilla.org/#server=nginx&version=1.17.7&config=intermediate&openssl=1.1.1d&guideline=5.6)
Example for nginx 1.17.7
<code>
  # generated 2020-10-29, Mozilla Guideline v5.6, nginx 1.17.7, OpenSSL 1.1.1d, intermediate configuration
# https://ssl-config.mozilla.org/#server=nginx&version=1.17.7&config=intermediate&openssl=1.1.1d&guideline=5.6
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    ssl_certificate /path/to/signed_cert_plus_intermediates;
    ssl_certificate_key /path/to/private_key;
    ssl_session_timeout 1d;
    ssl_session_cache shared:MozSSL:10m;  # about 40000 sessions
    ssl_session_tickets off;

    # curl https://ssl-config.mozilla.org/ffdhe2048.txt > /path/to/dhparam
    ssl_dhparam /path/to/dhparam;

    # intermediate configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # HSTS (ngx_http_headers_module is required) (63072000 seconds)
    add_header Strict-Transport-Security "max-age=63072000" always;

    # OCSP stapling
    ssl_stapling on;
    ssl_stapling_verify on;

    # verify chain of trust of OCSP response using Root CA and Intermediate certs
    ssl_trusted_certificate /path/to/root_CA_cert_plus_intermediates;

    # replace with the IP address of your resolver
    resolver 127.0.0.1;
}
</code>
</details>

<details><summary>Scripts</summary>
  <strong>Android-Studio Linux</strong>
    <ul>
    <li> sudo apt install openjdk-11-jdk</li>
    <li> sudo snap install android-studio --classic</li>
    </ul>
</details>

[The 10 most stared github 2020](https://hackernoon.com/the-ten-most-starred-github-repositories-mo19343d)

### Reminder

```
- signing JWT will be base on payload, if payload the same jwt will be the same, mostly iat is used to ensure it will produce different jwt
```

### vscode

- remvoe unused import js setting.json, [reference](https://www.linkedin.com/pulse/how-remove-unused-imports-vscode-kaleem-elahi?articleId=6655380918318002176)
```
 "editor.codeActionsOnSave": {
        "source.organizeImports": true
    }
 ```
