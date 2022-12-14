import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('It should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'ezample dksdsd',
    });

    expect(notification).toBeTruthy();
  });
});
