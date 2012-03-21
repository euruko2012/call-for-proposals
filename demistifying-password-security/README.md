# Demistifying password security

Not every developer has to deal with cryptography in their every day job. Some
are outright scared by it. With crypto, you soon become the nerd among nerds.

Still, one aspect that most of us will encounter in their work eventually is 
password security. And while being one of the most important aspects of application
security it is surprising how unclear the picture gets when you are looking for
concrete answers. I mean, how hard can it be, right? Unfortunately, pretty hard.
There are few areas in applied cryptography where you will find as much FUD as when
it comes to password security. Many contradicting opinions, a lot of cargo cult,
idolism, but no fricking answers!

So sure, we could finish this talk in a minute, I tell you "use bcrypt" and we're done.

But I'd like to share some of the insight I gained while investigating this over the last
year. We could talk about the foundations of password security, about all the
little things that can go awry when a password makes its journey from client to
server and from server to database.

We could discuss hash functions, collision resistance, salts, rainbow tables, unicorns,
no subject will be too dry for me not to touch it.

## Martin Boßlet

Martin is a crypto nerd, performance junkie and a language geek. One thing lead to another
and he became a Ruby core committer in 2011 and soon after, one of the maintainers of the OpenSSL 
extension. He recently received a Ruby Association grant to kickstart his work on krypt, which
he hopes will one day become the successor of the OpenSSL extension. At day, he is a security
consultant and works on digital signature software or web apps.
  

![Profile picture](https://github.com/emboss/call-for-proposals/raw/master/demistifying-password-security/profile_picture.png)

- [My website](https://github.com/emboss)
- [My twitter](https://twitter.com/#!/_emboss_)
- [Past talk slides](https://github.com/emboss/rubyconf11)
- [Past talk video](http://confreaks.com/videos/683-rubyconf2011-ruby-openssl-present-future-and-why-it-matters)
