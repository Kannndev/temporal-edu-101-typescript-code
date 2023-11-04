import { Worker } from '@temporalio/worker';
import * as activities from './outsideactivities';

async function run() {
  const worker = await Worker.create({
    activities,
    taskQueue: 'outside-activity-queue',
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});