* "Manifest" for JS: [`assets/scripts/app.js`](assets/scripts/app.js)
* Developers should set `apiUrls.production` and `apiUrls.development` in
[`assets/scripts/config.js`](assets/scripts/config.js).
* Developers should store styles in [`assets/styles`](assets/styles) and load them from [`assets/styles/index.scss`](assets/styles/index.scss).
* Developers should use [getFormFields](get-form-fields.md) to retrieve form data to send to an API.
* Deploy using grunt deploy
* Images go in 'public directory'; use a CDN for fonts OR save in 'public' directory too

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them
- `grunt deploy`: builds and deploys master branch

## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)
