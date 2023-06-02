[![Build Status](https://builds.gbif.org/job/hp-nhc-template/badge/icon)](https://builds.gbif.org/job/hp-nhc-template/lastBuild/console)

# Natural history Museum template demo site

in progress

# install and start
See https://jekyllrb.com/ for details on using Jekyll

```
gem install bundler jekyll
```

For development start with
```
bundle exec jekyll serve
# OR if you have docker
docker run --rm --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" --env JEKYLL_ENV=development -p 4000:4000 jekyll/jekyll:4.1.0 jekyll serve
```

To build
```
bundle exec jekyll build
```
