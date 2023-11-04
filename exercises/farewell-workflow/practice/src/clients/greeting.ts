import { Client } from '@temporalio/client';
import { randomUUID } from 'node:crypto';
// import { greeting } from '../workflows';

async function run() {
  const client = new Client();
  // const result = await client.workflow.execute('greeting', {
  //   args: ['Tina'],
  //   taskQueue: 'translation-tasks',
  //   workflowId: 'workflow-' + randomUUID(),
  // });

  const result1 = await client.workflow.execute('echo', {
    args: ['Kannan'],
    taskQueue: 'translation-tasks',
    workflowId: 'workflow-' + randomUUID(),
  });

  // console.log(`The greeting Workflow returned: ${result}`);
  console.log(`The echo Workflow returned: ${result1}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});