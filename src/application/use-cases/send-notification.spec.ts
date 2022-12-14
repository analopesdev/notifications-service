import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('shoud be able to send notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
