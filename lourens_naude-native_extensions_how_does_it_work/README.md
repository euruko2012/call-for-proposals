# Native extensions. How does it work ?

Ever seen those nasty configure / make backtraces on gem install or runtime segfaults ? Most of your critical product dependencies are native extensions, yet very few Rubyists understand how they work. With the Ruby VM ecosystem constantly growing, discrepancies between development and production environments and wrapped libraries not always evolving with stable interfaces, things can and will go wrong. I am the author of several bindings that run seamless on different Ruby implementations, cursed a lot to get there and in this talk I would like to touch on :

* The MRI C api VS foreign function interface (FFI)
* Basic structure and how extensions are loaded at runtime
* Plugging into the Ruby objects ecosystem and Garbage Collection
* Playing well with Threads
* When things go wrong

## Lourens Naudé

Lourens is an independent consultant currently based in sunny Madeira Island, but originally from South Africa. He specializes in backend / platform / domain solutions and is well versed full stack, from VM to high level protocols and known for his offbeat Ruby patches and extensions. Current interests include disruptive communication technology like ZeroMQ / libxs - all modern software is social software and none of that should be hard.

He spends weekdays in the Operations team @ http://www.wildfireapp.com

See http://github.com/methodmissing for Open Source contributions.

![Profile picture](https://github.com/methodmissing/call-for-proposals/raw/master/example/profile_picture.jpg)

- [My website](http://www.methodmissing.com)
- [My twitter](https://twitter.com/#!/methodmissing)
- [Slides - SAPO Codebits 2011](http://www.slideshare.net/methodmissing/sapo-codebits-2011)
- [Slides - Lone Star Ruby Conf 2011](http://www.slideshare.net/methodmissing/in-the-loop-lone-star-ruby-conference)
- [Slides - Euruko 2011](http://www.slideshare.net/methodmissing/euruko-2011-in-the-loop)
- [Slides - SAPO Codebits 2010](http://www.slideshare.net/methodmissing/event-driven-architecture)

