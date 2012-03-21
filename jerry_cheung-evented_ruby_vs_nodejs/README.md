# Evented Ruby vs Node.js

While Node.js is the hot new kid on the block, evented libraries like
EventMachine for Ruby and Twisted for Python have existed for a long time.
When does it make sense to use one over the other? What are the advantages and
disadvantages to using node over ruby? In this talk, you will learn how to get
the same power of concurrency enjoyed by Node.js while continuing to write in
the language you know and love. Topics covered will include pubsub with redis
or faye, building evented rack applications, and running evented applications
alongside existing Rails apps.

**Notes:**

The talk assumes some basic knowledge of evented libraries, but will cover the
basic concepts in the intro. The talk is targeted at ruby developers who would
like to gain the performance benefits of node.js, but still continue to write
ruby. I'll show popular node.js examples and how to accomplish the same tasks
in ruby.

Some of the technologies I'd like to showcase:

* Rack::FiberPool - making any rack app fiber aware
* Redis pubsub
* Faye pubsub - rackable pubsub library with ruby and javascript clients
* Sinatra::Synchrony - async sinatra
* Faraday - http client with async adapter, with an example of how to write async rack middleware
* Grape - ruby API framework that can deliver json responses to popular JS frameworks like Backbone and Ember.js


## Jerry Cheung

Jerry Cheung splits his time as a co-founder of Opperator and a developer at
Intridea. He is a co-author of the upcoming MacRuby in Action book, and likes
contributing to open source. He's currently dabbling in evented Ruby and Grape
driven webapps. When he's not coding, he stalks awesome cars in Southern
California and writes about them in [RockyRoadBlog](http://rockyroadblog.com).

![Profile picture](https://en.gravatar.com/userimage/4432830/648e730c3838a1b7c7839205932abeea.jpg?size=200)

- [My website](http://whatcodecraves.com)
- [My twitter](https://twitter.com/#!/whatcodecraves)
- [Past talk slides](http://speakerdeck.com/u/jch)
