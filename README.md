## Play around with Cypress end-to-end testing
### Run test

**Run e2e**

```
# Go to test path, for example: e2e-google-testing
$ cd path-to/e2e-google-testing
# with gui
$ yarn cypress open
# headless
$ yarn cypress run -b chrome --spec [path-to/spec-file.js]
```

**Run with headless browser on docker environment**
```
$ cd path-to/e2e-google-testing
$ /bin/bash ./cy-run.sh
```
