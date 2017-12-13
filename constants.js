module.exports.constants = () => ({
  AMI_AWS_REGION: 'us-east-1',

  // Days
  AMI_RETENTION_PERIOD: 7,

  // CloudWatch Events expressions
  // http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html
  AMI_INVOCATION_SCHEDULE: 'cron(0 0 * * ? *)',
});
