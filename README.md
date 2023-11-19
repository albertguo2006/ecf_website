# ecf_website

WIP website redesign: https://albertguo2006.github.io/ecf_website/
Uses [Parcel](https://parceljs.org/)

### WHY WE SHOULD NOT MERGE THE PARCEL BRANCH

Parcel over tools like Vite/Rollup because it was seen as relatively easy to adapt to our workflow, with the following benefits:

1. Tree shaking
2. NPM package support (once we have a bundler, we can use NPM packages)

This served as a fun experiment, but here's why the Parcel branch SHOULD NOT be preferred over the current vanilla version:

1. The Parcel version is actually bigger in terms of file size. Font awesome not being as optimized using automated tree shaking vs manually importing the icons we need.
2. Added complexity. The Parcel version requires dealing with yarn, external dependencies, and a more complex file structure.
    1. While it is true that we could have benefited from NPM packages (e.g. prettier, eslint), the effort it takes to set up Parcel and maintain is not worth it.

May this serve as a reminder that until we have a good way to decrease the size of font awesome programmatically,
and this project grows to a large enough extent that we need bundlers and NPM packages, we should stick to the vanilla version.
~ Cloudate9
