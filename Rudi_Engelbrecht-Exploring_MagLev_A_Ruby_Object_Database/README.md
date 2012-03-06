# Exploring MagLev - A Ruby Object Database

In this talk I will introduce the architecture behind MagLev, followed by examples of what makes MagLev different and powerful for Ruby environments.

Through the examples you will learn the following:

* how **any** graph of Ruby objects can be transparently persisted
* how MagLev offers a consistent, global object space for Ruby
* how any Ruby object can magically move between VM's in a safe, transactional manner, including Proc's
* how MagLev handles concurrency conflicts
* how object locks can be used for optimistic / pessimistic transactions
* how Continuations can be created and resumed in different VM's

The MagLev architecture consists of the following:

* a Ruby interpreter built on top of the mature and enterprise level VMware GemStone/S VM.
* a VM architecture which allows it to persist and share both code and data between multiple runtimes.
* transparent persistence of entire object graphs with any impedance mismatches.
* distributed Ruby objects through it's shared memory, persistent cache architecture.
* full ACID properties through transactions.
* garbage collection.


## Rudi Engelbrecht

I have been implementing scalable, highly transactional, financial systems using Object Technology since 1994. My favorite languages include Smalltalk, Ruby, Java, Python and Lisp. I am co-founder of Lautus Solutions. We have developed a product, named Tau, a Financial Platform for trading of complex financial products and instruments, using object technology. Our clients include large financial companies in South Africa.

![Profile picture](https://github.com/rle/call-for-proposals/raw/master/Rudi_Engelbrecht-Exploring_MagLev_A_Ruby_Object_Database/profile_picture.jpg)

- [My website](http://www.rudiengelbrecht.com)
- [My twitter](https://twitter.com/#!/rudiengelbrecht)
- [Past talk slides](http://www.slideshare.net/rengelbrecht/maglev-rubyfuza-cape-town-2012)


