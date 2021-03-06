// Generated by CoffeeScript 1.11.1
(function() {
  var Java, Promise, ResultSet, ResultSetMetaData;

  Java = require('java');

  Promise = require('bluebird');

  ResultSetMetaData = require('./rsmd');

  module.exports = ResultSet = (function() {
    function ResultSet(resultSet) {
      this.resultSet = Promise.promisifyAll(resultSet);
    }

    ResultSet.prototype.next = function() {
      return this.resultSet.nextSync();
    };

    ResultSet.prototype.getString = function(column) {
      return this.resultSet.getStringSync(column);
    };

    ResultSet.prototype.getInt = function(column) {
      return this.resultSet.getIntSync(column);
    };

    ResultSet.prototype.getTimestamp = function(column) {
      var ref;
      return (ref = this.resultSet.getTimestampSync(column)) != null ? ref.toString() : void 0;
    };

    ResultSet.prototype.getBlob = function(column) {
      return this.resultSet.getBlobSync(column);
    };

    ResultSet.prototype.getBlobAsString = function(column) {
      var blob, javaLong;
      javaLong = Java.newInstanceSync("java.lang.Long", 1);
      blob = this.resultSet.getBlobSync(column);
      return new String(blob.getBytesSync(javaLong, parseInt(blob.lengthSync())));
    };

    ResultSet.prototype.getMetaData = function() {
      return new ResultSetMetaData(this.resultSet.getMetaDataSync());
    };

    return ResultSet;

  })();

}).call(this);
