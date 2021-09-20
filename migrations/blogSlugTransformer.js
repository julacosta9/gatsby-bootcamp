module.exports = function (migration) {
  migration.transformEntries({
    contentType: 'blogPost',
    from: ['slug', 'publishedDate'],
    to: ['slug'],
    transformEntryForLocale: function (fromFields, currentLocale) {
      if (currentLocale === 'de-DE') {
        return;
      }

      // instantiate a Date object using the publishedDate
      const date = new Date(fromFields.publishedDate[currentLocale]);
      
      const year = date.getFullYear();
      const day = date.getDate();
      
      // Chose this method to get the month becuase I specifically wanted the abbreviated month name
      const month = new Intl.DateTimeFormat('en-US', {month: "short"}).format(date).toLowerCase();

      const slugWithPublishDate = `${day}/${month}/${year}/${fromFields.slug[currentLocale]}`;

      return { slug: slugWithPublishDate };
    }
  });
};