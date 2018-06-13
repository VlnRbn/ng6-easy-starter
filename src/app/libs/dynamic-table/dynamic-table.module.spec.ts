import { DynamicTableModule } from './dynamic-table.module';

describe('DynamicTableModule', () => {
  let dynamicTableModule: DynamicTableModule;

  beforeEach(() => {
    dynamicTableModule = new DynamicTableModule();
  });

  it('should create an instance', () => {
    expect(dynamicTableModule).toBeTruthy();
  });
});
