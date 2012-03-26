# The Forgotten Test Double

In the recent months our community has adopted a more object-oriented style of writing Rails applications, which has naturally lead us to start using mocks and stubs again.

In these enlightened days we decouple everything and unit test it in isolation, while a small number of end-to-end tests gives us some confidence that the things we test in isolation can actually be combined together and not blow up.

Unfortunately, this approach can not stand the test of time.
Your end-to-end tests will eventually be too slow to run, and you will be left by yourself with a test suite that isolates things so much, that you don't even know if the method you are calling actually exists.

Have you ever encountered a situation where the end-to-end tests fail but all the unit tests pass, or when the end-to-end tests fail to catch all the integration problems?
Have you ever wondered if it is possible to have tests that are both isolated and fast and at the same time give you all confidence that you need to refactor and change your code?

If you have, this talk is for you.
I'm going to show you how to create a fast, reliable test suite, which puts the statically typed languages to shame, using Fakes and Contract Tests.

## Adam Pohorecki

Adam Pohorecki is a test-driven-freak-of-nature (TDFON for short).
He's an aspiring Software Craftsman, a leader of the Software Craftsmanship in Kraków group and a facilitator of Code Retreats and Open Spaces meetings.
He also led and organized NoSQL Summer in Kraków.

![Profile picture](https://github.com/psyho/call-for-proposals/raw/the-forgotten-test-double/adam-pohorecki-the-forgotten-test-double/profile_picture.png)

- [My website](http://adam.pohorecki.pl)
- [My twitter](https://twitter.com/#!/apohorecki)
- [My github](https://github.com/psyho)
