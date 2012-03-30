# Corporate Invaders

![Profile picture](https://github.com/myabc/call-for-proposals/raw/myabc-corporate_invaders/myabc-corporate_invaders/logo.png)

## Building a “Operating System” for the Enterprise with Ruby

_Joint talk by Pedro Visintin ([@pvisintin]) and Alex Coles ([@myabc])_


**No. Not Corporate Raiders. [Gordon Gekko](http://en.wikipedia.org/wiki/Gordon_Gekko) stays at the door.**

Is this you?

- You need to develop a system that automates large parts of your business. Be it selling airline tickets or books.
- You want a system that lets you manage (and evolve) your business processes as easily as UNIX processes, but don't want to write a check to [Big Blue](http://en.wikipedia.org/wiki/IBM).
- You hate the words Corporate and Enterprise, but love working on big, ambitious and technically demanding projects.
- You want to use Ruby.


Based on our personal experiences building a platform for prepaid credit cards, we'll be taking a tour of the components you need to build the perfect “Corporate OS”.

### The Workflow Engine

The foundations of the “Corporate OS” is a workflow engine. We will explore the concepts of async and what we've termed, **offline processing**. We'll explain why you might want to look beyond the State Machine, and start looking at the Workflow Engine.

### Ruote, a Workflow Engine for Ruby

Specificly we'll look into [Ruote], the Ruby Workflow Engine. Ruote bills itself as an 'operating system for business processes'. This is the Kernel on which we build.

### A place in a Service Oriented Architecture

Your system might have backend nodes with various responsibilities, along with many front-ends and clients – with different rules for each. We'll talk about the different ways to keep rules flexible.

### Keeping your backends dumb

We'll also suggest you why you want to keep your backend nodes as simple and dumb as possible.

### Messaging vs. REST APIs in a Service Oriented Architecture

We use (and love) REST. But what happens when one of your backend processing nodes goes down? There are times you're better off with messaging. We'll discuss why.

### Visualizing your business with real-time data

If your business processes are noe real-time, your user interface shouldn't be a limiting factor. We'll show how to use combine [Faye] and Websockets to see what's running, in real-time.


## Pedro Visintin

Pedro Visintin ([@pvisintin]) is the CTO of Payango GmbH and the community manager of the Dice Ruby on Rails Talent Community. He started as a developer working with mostly mainstream technologies for Web development, and was a lead developer and designer of one of the most advanced home banking platforms at Banco Galicia. After working as a software architect, he started learning Ruby and Ruby on Rails. He is also a punk rock musician. Originally from Buenos Aires, he now lives in Berlin.

![Profile picture - Pedro](https://github.com/myabc/call-for-proposals/raw/myabc-corporate_invaders/myabc-corporate_invaders/profile_picture_pedro.jpg)

- [Blog articles](http://news.dice.com/author/peteronrails/)
- [My twitter](https://twitter.com/#!/pvisintin)

## Alex Coles

Alex Coles ([@myabc]) is the Lead Developer of Payango GmbH. He’s active in the open-source community, and has been involved with the DataMapper project since shortly after its inception.
He’s also contributed extensively to many other projects including RefineryCMS, Friendly ID and RakeCompiler.
When not writing code, Alex has also been involved with the community in other ways – last year he organised eurucamp, an unconference for those who were unable to get tickets to EuRuKo in Berlin.

![Profile picture - Alex](https://github.com/myabc/call-for-proposals/raw/myabc-corporate_invaders/myabc-corporate_invaders/profile_picture_alex.jpg)

- [My website](http://alexbcoles.com/)
- [My twitter](https://twitter.com/#!/myabc)
- Past talk slides
  - [wroclove.rb 2012 Lightning Talk](http://wrocloverb.alexbcoles.com/)
  - [Ruby Conf Argentina 2011](http://rubyconfar2011.alexbcoles.com/)


[@pvisintin]:https://twitter.com/#!/pvisintin
[@myabc]:https://twitter.com/#!/myabc
[Ruote]:http://ruote.rubyforge.org/
[Faye]:http://faye.jcoglan.com/
