var MapReduceFramework = {
  /* 
  The following functions are defined for each individual analysis (e.g. map/reduce routine):

  map: function() {
    // your map function, which collects the relevant data from your log entries
    // and emits them for processing in reduce
    // in a way, it answers the question "what data points can help me answer my question?"
  },

  reduce: function(key, values) {
    // your reduce function, which processes those multiple data
    // and for each interesting object (a user, a calendar day, etc.) produces analyzed ouput
    // in a way, it answers the question "what do all those data points tell me?"
    // (of course, presentation of those answers is pretty critical, but that's a separate issue)
  },

  // any attributes you want to run the same analysis against
  // e.g. per user_id, per object_id
  attributes: [],

  identifier: function(target_attribute) {
    // a unique identifier, the name of the output collection
  },
  
  // the collection you want to map/reduce against
  mapreduceCollection: "",
  */

  // these functions are provided by the framework
  lastExecution: function(target_attribute) {
    // when the map/reduce was last run
    // by tracking this and only processing newer data points,
    // you can very quickly incorporate new information
    // keeping your analysis up to date
  },

  updateExecution: function(target_attribute, time) {
    // update the timestamp to state when we started the map/reduce
  },

  mapReduceTarget: function() {
    // run the map reduce for real, or against the test framework?
    // test framework code also to be provided!
    // (map/reduce can be tricky to debug in Mongo)
  },

  executeAll: function(replace) {
    // do an incremental map reduce keyed on each target attribute we're interested in
    // using the time from lastExecution to add to any previous values already captured
    // and the collection name from identifier to store the output permanently
  },

  implementation: function(properties) {
    // create a new MapReduceFramework object inheriting all the properties
    // which allows you to focus on writing the map and reduce functions
    // that answer the actual question you want to answer
    // ActivityCounter = MapReduceFramework.implementation({ map: ..., reduce: ..., etc: ...});
  }
}