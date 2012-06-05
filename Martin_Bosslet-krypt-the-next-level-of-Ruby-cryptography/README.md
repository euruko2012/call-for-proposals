# krypt - the next level of Ruby cryptography

### krypt - What is it?

- Why do we need this? What's so bad about OpenSSL?

### The headaches of being bound to OpenSSL

- OS X Lion deprecates it, Fedora moves away from it, Windows never had it
- JRuby devs have to bend their knees in order to emulate it
- Second-class crypto citizens everywhere

### The dark corners of OpenSSL

- Certificate validation
- Validation of certificates
- Checking whether a certificate is valid
- Others

### Enter krypt

- Runs on all Rubies
- Equally fast 
- Sometimes faster than native code
- Create custom ASN.1 data types on the fly
- May be powered by arbitrary native crypto libraries
- Fully documented
- Exhaustive specs & test vectors 
- Idiomatic Ruby API
  

## Martin Boßlet

Martin is a crypto nerd, performance junkie and a language geek. One thing lead to another
and he became a Ruby core committer in 2011 and soon after, one of the maintainers of the OpenSSL 
extension. He recently received a Ruby Association grant to kickstart his work on krypt, and
he would like to share the experience with you in this talk.
  

![Profile picture](https://en.gravatar.com/userimage/31410070/5917ab18325761bb28b73f8b72ae3c80.png?size=200)

- [My website](https://github.com/emboss)
- [My twitter](https://twitter.com/#!/_emboss_)
- [Past talk slides](https://github.com/emboss/rubyconf11)
- [Past talk video](http://confreaks.com/videos/683-rubyconf2011-ruby-openssl-present-future-and-why-it-matters)

