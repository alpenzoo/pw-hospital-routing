export class BaseControl<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  disabled: boolean;
  pattern: string;
  order: number;
  controlType: string;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      disabled?: boolean,
      pattern?: string,
      order?: number,
      controlType?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.disabled = !!options.disabled;
    this.pattern = options.pattern || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}