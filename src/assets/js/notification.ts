import Vue from 'vue';

type notificationType = 'success' | 'warn' | 'error';

const notify = (
  title: string,
  text: string,
  type: notificationType = 'success',
  duration = 5000,
): void => Vue.notify({
  group: 'notification-group',
  title,
  text,
  type,
  duration,
});

export default notify;
