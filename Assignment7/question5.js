// Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit
class TaskQueue {
  constructor(maxConcurrency) {
    this.maxConcurrency = maxConcurrency; //number of tasks allowed
    this.taskQueue = []; //array to hold tasks
    this.runningTasks = 0; //counter for track of currently running task
  }

  async addTask(task) {
    this.taskQueue.push(task); // adding task in queue
    await this.processTasks();
  }

  async processTasks() {
    while (
      this.runningTasks < this.maxConcurrency &&
      this.taskQueue.length > 0
    ) {
      //run until condition terminated
      const task = this.taskQueue.shift();
      this.runningTasks++;
      await task(); //it always call myTask(i)
      this.runningTasks--;
    }
  }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //for making delay

const myTask = async (number) => {
  console.log(`Task ${number} started`);
  await delay(Math.random() * 2000); //async work
  console.log(`Task ${number} completed`);
};

const main = async () => {
  const maxConcurrency = 3;
  const taskQueue = new TaskQueue(maxConcurrency);

  for (let i = 1; i <= 10; i++) {
    taskQueue.addTask(() => myTask(i));
  }
};

main();
