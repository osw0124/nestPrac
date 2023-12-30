/** Wait */
export enum WaitStatus {
  WAIT = 'wait',
  WORK = 'work',
  DONE = 'done',
}
export interface Token {
  id: string;
  status: WaitStatus;
  createAt: Date;
  expireAt: Date;
}
