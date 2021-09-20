module.exports = function (migration) {
  const blogPost = migration.editContentType('blogPost');
  blogPost.createField('minutesToRead', {
    name: 'Minutes to Read',
    type: 'Number',
    validations: [
      {
        range: { max: 999, min: 1 }
      }
    ]
  })
}