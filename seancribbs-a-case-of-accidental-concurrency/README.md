# A Case of Accidental Concurrency

Concurrency is all the rage these days, and people can't seem to agree
whether Threads, Fibers, event loops, or actors are the best
solution. But did you ever consider that your *sequential* Ruby
program might be concurrent, with nary a Thread, Fiber, or callback in
sight?  Well, it happened to me.

This is the story of how accidental concurrency (also known as
re-entrancy) broke my brain multiple times over the course of two
years, spawned flamewars on Twitter, long blog posts, and the various
solutions I took to solve the problem. Along the way we'll illuminate
some subtleties of concurrent programming in Ruby, differences between
several Ruby implementations, and how we can all write code that is
friendlier when accidental concurrency strikes.

## Sean Cribbs

Sean is a Software Engineer for Basho Technologies, where he hacks in
Ruby, Erlang, and JavaScript (and occasionally Python) on the client
interfaces to Riak, Basho's distributed, fault-tolerant database. A
prolific open-source author and contributor, he maintains
Webmachine(-Ruby) and Ripple, and previously maintained Radiant CMS.

- [Website](http://seancribbs.com/)
- [Twitter](http://twitter.com/seancribbs)
- [Github](https://github.com/seancribbs)
- "Resources, For Real This Time", given at RubyConf '11, RubyConf
  Uruguay '11, NYC.rb:
  [(video)](http://confreaks.com/videos/699-rubyconf2011-resources-for-real-this-time-with-webmachine)
  [(slides)](http://rubyconf-webmachine.heroku.com/)
  [(slide source and code)](https://github.com/seancribbs/rubyconf-webmachine)
- "Embrace Eventual Consistency and NoSQL with Ripple", given at
  RubyConf Argentina '11:
  [(slides)](http://www.slideshare.net/seancribbs/embrace-nosql-and-eventual-consistency-with-ripple)
- "Wrap your SQL Head around Riak MapReduce", given at
  [Berlin Buzzwords '11](https://vimeo.com/25627365),
  [StrangeLoop '11](http://www.infoq.com/presentations/Wrap-Your-SQL-Head-Around-Riak-MapReduce):
  [(slides)](http://strangeloop-riak-mapred.heroku.com/)
  [(slide source)](https://github.com/seancribbs/strangeloop-riak-mapred)
