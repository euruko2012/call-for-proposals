# Code Insight: Rubinius 2.0 and Nikita

The upcoming Rubinius 2.0 release brings a number of excellent features to
Ruby. For example, the global interpreter lock has been removed, so native
threads run Ruby code in parallel on multi-core or multi-CPU hardware. There
is also a generational garbage collector that is much more efficient than
MRI's. Additionally, the just-in-time (JIT) compiler uses the LLVM compiler
framework to generate native machine code, which can significantly speed up
the execution of Ruby code.

These features are fairly easy to explain, even though they are quite
technical. A much harder thing to explain is why Rubinius is built the way it
is. Rubinius attempts to build a _consistent system_ for running Ruby.

In this talk, we will examine characteristics of Rubinius that define what I
mean by a _consistent system_. Then we will look at how those characteristics
support writing tools that can help with insight about code. Two of the most
important questions about code are:

* What does this code do?
* How does it do it?

Typically, we have tests and documentation to help answer these questions. But
we usually have to rely heavily on our own "mental execution" of code to help
us understand it. This can be difficult in a dynamically typed language like
Ruby. Consequently, some people see dynamic typing as a weakness of Ruby.
Nothing could be further from the truth! Dynamic typing is flexible and
powerful. What we need are better tools.

We will look at Nikita and how it can be used for code analysis, augmented
documentation, profiling, and feature tours. For example, imagine you have
just inherited a complex Rails application. How do you find out where certain
features live in the code and how they are related? What if you could just run
the feature, for example, user authentication, and then have a tool that tours
you through the code that just ran, complete with the actual types seen
wherever messages were sent to objects. Ruby code would suddenly become a lot
more fun, right?


## Brian Ford

Brian has been working on Rubinius since December 2006 and with Engine Yard
since January 2008. He created the RubySpec project to improve the standards
for high quality, consistent, and compliant Ruby implementations. He hopes to
improve Ruby and thereby make the lives of developers even better. He enjoys
whisk(e)y but will accept good wine in a pinch.


![Profile picture](http://brixen.io/assets/brian_ford_headshot.png)

- [My website](http://brixen.io)
- [My twitter](https://twitter.com/#!/brixen)

## Previous Talk Slides

- [Speaker Deck](http://speakerdeck.com/u/brixen)
- [Slideshare](http://www.slideshare.net/brixen/presentations)

## Previous Talk Videos

- [Poisoning Rubinius: The \_why and how](http://confreaks.com/videos/454-rubyconf2010-poisoning-rubinius-the-_why-and-how)
- [The Rubinius Virtual Machine at Galois, Inc](http://corp.galois.com/blog/2010/12/2/galois-video-the-rubinius-virtual-machine.html)
- [Nikita: The Ruby Secret Agent](http://confreaks.com/videos/691-rubyconf2011-nikita-the-ruby-secret-agent)
