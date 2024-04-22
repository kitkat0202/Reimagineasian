### How to run
`npm i`
`npm start`


### How to deploy
 - after you have pushed all your changes to main branch run:
`npm run gh-deploy`
 - once all deployment is complete go to the repo -> settings -> pages -> custom domain and paste:
`reimagineasian.com`
 - usually deeploymeent happens every 10 minutes



### How wo set up the DNS
(if on square space remove the default domanins)
- add the A records and thee CNAME to domain provider, like:
![domain](./domain.png)




### Check propogation of DNS through internet
- https://www.whatsmydns.net/#CNAME/www.reimaginefoodfest.com