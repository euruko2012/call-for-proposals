# Rack Middleware as a General Purpose Abstraction

We've all seen monolithic Rails models, pages and pages of methods all dumped into one class. Inevitably, someone starts moving things around just to feel about the line count, but doesn't make any real difference to the overall structure of the code. How can we reify actions on an object and simplify our classes?

In this talk I'll speak about using the concept of "middleware" (in the way Rack uses "middleware") as a general purpose abstraction for improving the organization, testability, and maintainability of complex pieces of code. I'll talk about my first hand experience of using middleware to power Vagrant (http://vagrantup.com), and we'll use these ideas to simplify an existing application.

## Mitchell Hashimoto

Mitchell Hashimoto is an operations engineer passionate about all things open source. For four years he was a web developer for a Ruby on Rails studio, and for the past year has been an operations engineer for a start-up company in San Francisco, CA. Mitchell is one of the creators and current maintainer of Vagrant, the tool for creating and distributing virtualized development environments. Vagrant is used by thousands of developers worldwide and many large companies including Tumblr, GitHub, LivingSocial, and more.

Mitchell has spoken at many conferences in the past year, including FOSDEM, RubyConf 2011, DevOpsDays in Sweden, and more.

![Profile picture](http://www.gravatar.com/avatar/54079122b67de9677c1f93933ce8b63a)

- [My website](https://github.com/mitchellh)
- [My twitter](https://twitter.com/#!/mitchellh)
- [Past talk slides](http://speakerdeck.com/u/mitchellh/p/the-wide-range-of-devops)
- [Past talk video](http://vimeo.com/31367609)

