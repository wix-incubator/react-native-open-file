# react-native-open-file

## Why

We want an easy to way to open documents on disk (and possibly remote files as well) using default native behavior on both
android and ios without dealing with the details of the two platforms. 

## How 

On iOS, use `DocumentInteractionController` to present a preview. On android...TBD

## Status

Very early stage WIP. Only iOS is supported, and only in the most basic way.

## Usage

```
npm install react-native-open-file --save
```

And the usual iOS linking business for `DocumentInteractionController.xcodeproj`. 

