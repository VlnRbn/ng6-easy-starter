import { AgmDemoModule } from './agm-demo.module';

describe('AgmDemoModule', () => {
  let agmDemoModule: AgmDemoModule;

  beforeEach(() => {
    agmDemoModule = new AgmDemoModule();
  });

  it('should create an instance', () => {
    expect(agmDemoModule).toBeTruthy();
  });
});
