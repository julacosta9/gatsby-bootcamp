module.exports = function (migration) {
  // Create a new category field in the blog post content type.
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