# javatypetest

[![Build Status](https://travis-ci.org/matthew/javatypetest.svg?branch=master)](https://travis-ci.org/matthew/javatypetest)
[![Slack Status](https://join.atomist.com/badge.svg)](https://join.atomist.com)

[rug]: http://docs.atomist.com/

This [Rug][rug] project contains Show bugs with JavaType

## Rugs

### AddImport

Add an import to a JavaType

#### Prerequisites

Put your editor prerequisites here.

#### Parameters

This Rug takes following parameters.

Name | Required | Default | Description
-----|----------|---------|------------
`inputParameter` | Yes | | Example input parameter

#### Running

Run this Rug as follows:

```
$ rug edit -C ../project/directory -l AddImport inputParameter='some value'
```

Explain what your editor does here.

### AddAnnotation

Add an annotation to a JavaType

#### Prerequisites

Put your editor prerequisites here.

#### Parameters

This Rug takes following parameters.

Name | Required | Default | Description
-----|----------|---------|------------
`inputParameter` | Yes | | Example input parameter

#### Running

Run this Rug as follows:

```
$ rug edit -C ../project/directory -l AddAnnotation inputParameter='some value'
```

Explain what your editor does here.

## Support

General support questions should be discussed in the `#support`
channel on our community Slack team
at [atomist-community.slack.com][slack].

If you find a problem, please create an [issue][].

[issue]: https://github.com/matthew/javatypetest/issues

## Contributing

If you are interested in contributing to the Atomist open source
projects, please see our [contributing guidelines][contrib] and
our [code of conduct][code].

[contrib]: https://github.com/matthew/welcome/blob/master/CONTRIBUTING.md
[code]: https://github.com/matthew/welcome/blob/master/CODE_OF_CONDUCT.md

## Development

You can build, test, and install the project locally with
the [Rug CLI][cli].

[cli]: https://github.com/atomist/rug-cli

```
$ rug test
$ rug install
```

To clean up cached files and update TypeScript dependencies, run this
command.

```
$ ( cd .atomist && find editors generators handlers tests -name '*.js' -print0 | xargs -0 rm; rm -rf node_modules; yarn && rug clean )
```

To create a new release of the project, simply push a tag of the form
`M.N.P` where `M`, `N`, and `P` are integers that form the next
appropriate [semantic version][semver] for release.  For example:

[semver]: http://semver.org

```
$ git tag -a 1.2.3
```

The Travis CI build (see badge at the top of this page) will
automatically create a GitHub release using the tag name for the
release and the comment provided on the annotated tag as the contents
of the release notes.  It will also automatically upload the needed
artifacts.

---
Created by [Atomist][atomist].
Need Help?  [Join our Slack team][slack].

[atomist]: https://www.atomist.com/
[slack]: https://join.atomist.com/
