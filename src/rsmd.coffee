Promise = require 'bluebird'

# Contains the metadata information about the resultset.
# Metadata information can be the properties of the columns such as type,name
# or the number of columns returned from this resultset etc..
module.exports =
class ResultSetMetaData

    # Constructor method
    #
    # @param [Object] resultSetMetaData
    constructor: ( resultSetMetaData ) ->
        @resultSetMetaData = Promise.promisifyAll resultSetMetaData


    # Returns number of columns in the result set
    #
    # @return [int]
    getColumnCount: ->
        @resultSetMetaData.getColumnCountSync()


    # Returns the given columns name
    #
    # @param [int] index of the column in the result set. Index starts from 1.
    #
    # @return [String] name of the column
    getColumnName: (column) ->
        @resultSetMetaData.getColumnNameSync(column)


    # Returns the given columns label.
    #
    # @param [int] index of the column in the result set. Index starts from 1.
    #
    # @return [String] label of the column as given in the sql; otherwise returns same as getColumnName()
    getColumnLabel: (column) ->
        @resultSetMetaData.getColumnLabelSync(column)


    # Returns the designated column's database-specific type name.
    #
    # @param [int] index of the column in the result set. Index starts from 1.
    #
    # @return [String] type name used by the database
    getColumnTypeName: (column) ->
        @resultSetMetaData.getColumnTypeNameSync(column)