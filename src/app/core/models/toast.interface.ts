export enum EventTypes {
  Success = 'text-bg-success',
  Info = 'text-bg-primary',
  Warning = 'text-bg-warning',
  Error = 'text-bg-danger',
}

export interface ToastEvent {
  type: EventTypes;
  message: string;
}
