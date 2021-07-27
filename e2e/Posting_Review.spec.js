Feature('Posting a Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Posting a review on a restaurant', async ({ I }) => {
  I.seeElement('resto-list resto-item');

  I.click(locate('resto-item .resto__snippet_wrap a').first());

  I.seeElement('form');
  I.fillField('Name', 'Puppet');
  I.fillField('Review', 'End2End Test');
  I.click('.btn--form');

  I.see('End2End Test', '.detail__reviews_comment');
});
